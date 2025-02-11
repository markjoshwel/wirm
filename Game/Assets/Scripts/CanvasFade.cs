/*
 Author : Wai Lam
 Date : 11/2/2025
 Description : Car obstacle
 */
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CanvasFade : MonoBehaviour
{
    public CanvasGroup fadeCanvasGroup; // Assign in Inspector
    public float fadeDuration = 1f;     // Duration for fade in/out
    public float displayDuration = 5f;  // Time the UI stays fully visible
    public string nextSceneName;        // Name of the scene to load
    public AudioSource[] audioSources;

    private bool hasTriggered = false;  // Prevent multiple triggers

    private void OnTriggerEnter(Collider other)
    {
        // Check if the player entered the trigger
        if (!hasTriggered && other.CompareTag("Player"))
        {
            hasTriggered = true;
            StartCoroutine(FadeInAndLoadScene());
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
