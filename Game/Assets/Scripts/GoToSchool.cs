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

    private bool hasTriggered = false;  // Prevent multiple triggers
    
    public AudioLoop audioLoop;
    
    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;

    void Awake()
    {
        gameManager = GameManager.Instance; // Reference to GameManager instance

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
            
            // Task completion is noted here
            gameManager.GoToSchoolTaskComplete();
        }
    }

    IEnumerator FadeInAndLoadScene()
    {
        // // Fade In
        // yield return StartCoroutine(Fade(0f, 1f, fadeDuration));
        //
        // // Display UI for 5 seconds
        // yield return new WaitForSeconds(displayDuration);
        //
        // // Determine the next scene based on the current day
        // int currentDay = gameManager.currentDay;
        // string nextScene;
        //
        // switch (currentDay)
        // {
        //     case 2:
        //         nextScene = "Day2";
        //         break;
        //     case 3:
        //         nextScene = "Day3"; // need another way to go to day 3 tho bcos they arent going to sch on day 3
        //         break;
        //     default:
        //         nextScene = "Start"; // Fallback in case of unexpected day value
        //         break;
        // }
        //
        // // Load the determined next scene
        // SceneManager.LoadScene(nextScene);
        //
        // // Increment the day AFTER transitioning to avoid multiple increments
        // gameManager.IncrementDay();
        
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