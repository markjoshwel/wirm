/*
Author: Reza and Wailam
Date: 14/2/25
Description: For text to appear itself for storytelling
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class StoryTyping : MonoBehaviour
{
    [Header("Message Settings")]
    // Custom message for this trigger
    [TextArea(3, 5)] public string[] storyLines;

    public TMP_Text storyText;

    // Speed at which text appears
    public float typingSpeed = 0.05f; 

    public string nextSceneName = "NextScene"; 

    private int currentLine = 0;  

    public CanvasGroup fadeCanvasGroup; // Assign in Inspector
    public float fadeDuration = 1f;     // Duration for fade in/out
    public float displayDuration = 5f; 

    private void Start()
    {
        // Start typing the first line if there are any lines
        if (storyLines.Length > 0)
        {
            StartCoroutine(TypeText());
        }
    }

    IEnumerator TypeText()
    {
        // Loop through each line of text
        while (currentLine < storyLines.Length)
        {
            string fullText = storyLines[currentLine];
            string currentText = "";

            // Type out the current line character by character
            for (int i = 0; i < fullText.Length; i++)
            {
                currentText += fullText[i];
                storyText.text = currentText;
                yield return new WaitForSeconds(typingSpeed);
            }

            currentLine++;  // Move to the next line
            yield return new WaitForSeconds(displayDuration);  // Wait briefly before displaying the next line
        }

        // After all lines are typed, trigger fade and load the next scene
        StartCoroutine(FadeToBlack());
    }

    IEnumerator FadeToBlack()
    {
        // Fade to black
        yield return StartCoroutine(Fade(0f, 1f, fadeDuration));

        // Load the next scene after fade
        SceneManager.LoadScene(nextSceneName);
    }

    IEnumerator Fade(float startAlpha, float endAlpha, float duration)
    {
        float elapsed = 0f;
        fadeCanvasGroup.alpha = startAlpha;

        // Fade over the specified duration
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;

            fadeCanvasGroup.alpha = Mathf.Lerp(startAlpha, endAlpha, t);
            yield return null;
        }

        fadeCanvasGroup.alpha = endAlpha;
    }
}