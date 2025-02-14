/*
 * Author: Wai Lam and Reza
 * Date: 12/2/25
 * Description: Go to school
 */

using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GoToSchool : MonoBehaviour
{
    // ReSharper disable once GrammarMistakeInComment
    // public PostProcessingManager PostProcessingManager;

    public CanvasGroup fadeCanvasGroup; // Assign in Inspector
    public float fadeDuration = 1f; // Duration for fade in/out
    public float displayDuration = 5f; // Time the UI stays fully visible
    public AudioSource[] audioSources;

    public AudioLoop audioLoop;

    public ParticleSystem[] particleEffects;

    // Defines UI references
    [Header("UI References")] public GameObject storyPanelUI;

    public TMP_Text storyText;

    [Header("Triggers")] public Collider parkPondTrigger; // Assign in Inspector

    public Collider schoolTrigger; // Assign in Inspector

    public MemoriseInitialPosition xrRig;

    private bool _atPond;
    private GameManager _gameManager;
    private bool _hasTriggered; // Prevent multiple triggers

    private void Awake()
    {
        Debug.Log("IM AWAKE");
        _gameManager = GameManager.Instance; // Reference to GameManager instance
        Debug.Log("current day: " + _gameManager.CurrentDay);

        if (storyPanelUI == null)
            storyPanelUI = GameObject.Find("Story Panel"); // Use the exact name

        if (storyText == null)
            storyText = FindObjectOfType<TMP_Text>(); // Finds the first TMP_Text in the scene

        if (storyPanelUI != null)
            storyPanelUI.SetActive(true);

        switch (_gameManager.CurrentDay)
        {
            case 1:
            {
                if (storyText != null)
                {
                    storyText.text = "I guess I should head to school now...";
                    StartCoroutine(ClearMessageAfterSeconds(7f));
                }

                if (audioLoop != null) audioLoop.StartAudioLoop();
                break;
            }
            case 2:
            {
                if (storyText != null)
                {
                    storyText.text = "I need to calm down first... maybe going to the park pond would help...";
                    StartCoroutine(ClearMessageAfterSeconds(7f));
                }

                foreach (var effect in particleEffects)
                {
                    effect.gameObject.SetActive(true); // Ensure the GameObject is active
                    effect.Play(); // Play each particle system
                }

                // PostProcessingManager.Instance.TriggerEffect("Panic");
                break;
            }
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("Triggered by: " + other.gameObject.name);
        switch (_gameManager.CurrentDay)
        {
            // Player arrives at the pond first
            // if (!atPond && other == parkPondTrigger)
            case 2 when !_atPond && other == parkPondTrigger:
                _atPond = true;
                StartCoroutine(StayAtPond());
                break;
            // if (atPond && other == schoolTrigger)
            // Normal case for Day 1
            case 2 when _atPond && other == schoolTrigger:
            case 1:
            {
                _hasTriggered = true;
                StartCoroutine(FadeInAndLoadScene());
                _gameManager.GoToSchoolTaskComplete();
                _gameManager.IncrementDay();
                break;
            }
        }
    }

    private IEnumerator ClearMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyText.text = "";
    }

    private IEnumerator StayAtPond()
    {
        storyText.text = "The sound of the water is soothing...";
        yield return new WaitForSeconds(7f);
        // PostProcessingManager.Instance.StopEffect();
        storyText.text = "I feel a little better now. I should head to school now.";
        StartCoroutine(ClearMessageAfterSeconds(7f));
    }

    private IEnumerator FadeInAndLoadScene()
    {
        yield return StartCoroutine(Fade(0f, 1f, fadeDuration));
        yield return new WaitForSeconds(displayDuration);

        var currentDay = _gameManager.CurrentDay;
        var nextScene = currentDay switch
        {
            2 => "Day2",
            3 => "Day3",
            _ => "Start"
        };

        SceneManager.LoadScene(nextScene);

        yield return new WaitForSeconds(1f); // Small delay to ensure scene transition

        xrRig.ResetPosition();
    }

    private IEnumerator Fade(float startAlpha, float endAlpha, float duration)
    {
        var elapsed = 0f;
        fadeCanvasGroup.alpha = startAlpha;

        var startVolumes = new float[audioSources.Length];
        for (var i = 0; i < audioSources.Length; i++)
            startVolumes[i] = audioSources[i] ? audioSources[i].volume : 1f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            var t = elapsed / duration;

            fadeCanvasGroup.alpha = Mathf.Lerp(startAlpha, endAlpha, t);

            for (var i = 0; i < audioSources.Length; i++)
                if (audioSources[i])
                    audioSources[i].volume = Mathf.Lerp(startVolumes[i], 0f, t);

            yield return null;
        }

        fadeCanvasGroup.alpha = endAlpha;
        foreach (var t in audioSources)
            if (t)
                t.volume = 0f;
    }
}