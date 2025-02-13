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
    public AudioSource[] audioSources;

    private bool atPond = false;
    private bool hasTriggered = false;  // Prevent multiple triggers
    
    public AudioLoop audioLoop;
    
    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;
    
    [Header("Triggers")]
    public Collider parkPondTrigger; // Assign in Inspector
    public Collider schoolTrigger;   // Assign in Inspector

    void Awake()
    {
        gameManager = GameManager.Instance; // Reference to GameManager instance

        if (storyPanelUI == null)
            storyPanelUI = GameObject.Find("Story Panel"); // Use the exact name

        if (storyText == null)
            storyText = FindObjectOfType<TMP_Text>(); // Finds the first TMP_Text in the scene
        
        if (storyPanelUI != null)
            storyPanelUI.SetActive(true);

        if (gameManager.currentDay == 1)
        {
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

        if (gameManager.currentDay == 2)
        {
            if (storyText != null)
            {
                storyText.text = "I need to calm down first... maybe going to the park pond would help...";
                StartCoroutine(ClearMessageAfterSeconds(7f));
            }
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
        // // Check if the player entered the trigger
        // if (!hasTriggered && other.CompareTag("Player"))
        // {
        //     hasTriggered = true;
        //     StartCoroutine(FadeInAndLoadScene());
        //     
        //     // Task completion is noted here
        //     gameManager.GoToSchoolTaskComplete();
        // }
        
        if (gameManager.currentDay == 2)
        {
            if (!atPond && other == parkPondTrigger) // Player arrives at pond first
            {
                atPond = true;
                StartCoroutine(StayAtPond());
            }
            else if (atPond && !hasTriggered && other == schoolTrigger) // Player can go to school after pond
            {
                hasTriggered = true;
                StartCoroutine(FadeInAndLoadScene());
                gameManager.GoToSchoolTaskComplete();
            }
        }
        else if (!hasTriggered && other == schoolTrigger) // Normal case for Day 1
        {
            hasTriggered = true;
            StartCoroutine(FadeInAndLoadScene());
            gameManager.GoToSchoolTaskComplete();
        }
    }
    
    private IEnumerator StayAtPond()
    {
        storyText.text = "The sound of the water is soothing...";
        yield return new WaitForSeconds(7f);
        storyText.text = "I feel a little better now. I should head to school now.";
        StartCoroutine(ClearMessageAfterSeconds(7f));
    }

    IEnumerator FadeInAndLoadScene()
    {
        yield return StartCoroutine(Fade(0f, 1f, fadeDuration));
        yield return new WaitForSeconds(displayDuration);

        int currentDay = gameManager.currentDay;
        string nextScene = currentDay == 2 ? "Day2" : (currentDay == 3 ? "Day3" : "Start");

        SceneManager.LoadScene(nextScene);

        yield return new WaitForSeconds(1f); // Small delay to ensure scene transition

        gameManager.IncrementDay(); // Now called *after* scene fully loads
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