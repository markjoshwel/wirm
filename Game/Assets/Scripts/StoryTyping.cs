/*
 * Author: Reza and Wai Lam
 * Date: 14/2/25
 * Description: For texts to appear themselves for storytelling
 */

using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class StoryTyping : MonoBehaviour
{
    [Header("Message Settings")]
    // Custom message for this trigger
    [TextArea(3, 5)]
    public string[] storyLines;

    public TMP_Text storyText;

    // Speed at which text appears
    public float typingSpeed = 0.05f;

    public string nextSceneName = "NextScene";

    public CanvasGroup fadeCanvasGroup; // Assign in Inspector
    public float fadeDuration = 1f; // Duration for fade in/out
    public float displayDuration = 5f;

    private int _currentLine;

    private void Start()
    {
        // Start typing the first line if there are any lines
        if (storyLines.Length > 0) StartCoroutine(TypeText());
    }

    private IEnumerator TypeText()
    {
        // Loop through each line of text
        while (_currentLine < storyLines.Length)
        {
            var fullText = storyLines[_currentLine];
            var currentText = "";

            // Type out the current line character by character
            foreach (var t in fullText)
            {
                currentText += t;
                storyText.text = currentText;
                yield return new WaitForSeconds(typingSpeed);
            }

            _currentLine++; // Move to the next line
            yield return new WaitForSeconds(displayDuration); // Wait briefly before displaying the next line
        }

        // After all lines are typed, trigger fade and load the next scene
        StartCoroutine(FadeToBlack());
    }

    private IEnumerator FadeToBlack()
    {
        // Fade to black
        yield return StartCoroutine(Fade(0f, 1f, fadeDuration));

        // Load the next scene after fade
        SceneManager.LoadScene(nextSceneName);
    }

    private IEnumerator Fade(float startAlpha, float endAlpha, float duration)
    {
        var elapsed = 0f;
        fadeCanvasGroup.alpha = startAlpha;

        // Fade over the specified duration
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            var t = elapsed / duration;

            fadeCanvasGroup.alpha = Mathf.Lerp(startAlpha, endAlpha, t);
            yield return null;
        }

        fadeCanvasGroup.alpha = endAlpha;
    }
}