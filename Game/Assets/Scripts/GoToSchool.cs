/*
Author: Wai Lam
Date: 12/2/25
Description: Go to school
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
public class GoToSchool : MonoBehaviour
{
    private GameManager gameManager;
    
    
    public CanvasGroup fadeCanvasGroup; // Assign in Inspector
    public float fadeDuration = 1f;     // Duration for fade in/out
    public float displayDuration = 5f;  // Time the UI stays fully visible
    public string nextSceneName;        // Name of the scene to load
    public AudioSource[] audioSources;

    private bool hasTriggered = false;  // Prevent multiple triggers
    
    public AudioLoop audioLoop;
    // Defines UI references
    [Header("UI References")]

    public GameObject storyPanelUI;
    public TMP_Text storyText;
    

    void Start()
    {
        if (storyPanelUI == null)
            storyPanelUI = GameObject.Find("Story Panel"); // Use the exact name

        if (storyText == null)
            storyText = FindObjectOfType<TMP_Text>(); // Finds the first TMP_Text in the scene
        
        if (storyPanelUI != null)
            storyPanelUI.SetActive(true);

        if (storyText != null)
        {
            storyText.text = "I guess I should head to school now...";
            StartCoroutine(ClearMessageAfterSeconds(7f));
        }
        
        if (audioLoop != null)
        {
            audioLoop.StartAudioLoop();
        }
        

    }
    private IEnumerator ClearMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyText.text = "";
    }
    private void OnTriggerEnter(Collider other)
    {
        // Check if the player entered the trigger
        if (!hasTriggered && other.CompareTag("Player"))
        {
            hasTriggered = true;
            StartCoroutine(FadeInAndLoadScene());
            GameManager.Instance.GoToSchoolTaskComplete();
            
        }
        if (GameManager.Instance != null)
        {
            GameManager.Instance.IncrementDay();
        }
    }

    IEnumerator FadeInAndLoadScene()
    {
        // Fade In
        yield return StartCoroutine(Fade(0f, 1f, fadeDuration));

        // Display UI for 5 seconds
        yield return new WaitForSeconds(displayDuration);

        // Load the next scene
        SceneManager.LoadScene(nextSceneName);
    }

    IEnumerator Fade(float startAlpha, float endAlpha, float duration)
    {
        float elapsed = 0f;
        fadeCanvasGroup.alpha = startAlpha;

        float[] startVolumes = new float[audioSources.Length];
        for (int i = 0; i < audioSources.Length; i++)
        {
            startVolumes[i] = audioSources[i] != null ? audioSources[i].volume : 1f;
        }

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            fadeCanvasGroup.alpha = Mathf.Lerp(startAlpha, endAlpha, t);

            for (int i = 0; i < audioSources.Length; i++)
            {
                if (audioSources[i] != null)
                {
                    audioSources[i].volume = Mathf.Lerp(startVolumes[i], 0f, t);
                }
            }

            yield return null;
        }

        fadeCanvasGroup.alpha = endAlpha;

        for (int i = 0; i < audioSources.Length; i++)
        {
            if (audioSources[i] != null)
            {
                audioSources[i].volume = 0f;
            }
        }
    }
}
