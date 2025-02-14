/*
 * Author: Wai Lam
 * Date: 13/2/2025
 * Description: Counting days
 */

using System;
using System.Collections;
using TMPro;
using UnityEngine;

public class CanvasFade : MonoBehaviour
{
    public CanvasGroup dayPanel; // Assign the UI Panel
    public TextMeshProUGUI dayText; // Assign the TextMeshPro UI

    private void Start()
    {
        if (GameManager.Instance != null)
        {
            var dayNumber = GameManager.Instance.currentDay;
            dayText.text = "Day " + dayNumber;
        }

        StartCoroutine(FadeOutPanel());
    }

    public static event Action OnDayPanelHidden;

    private IEnumerator FadeOutPanel()
    {
        dayPanel.alpha = 1f;
        dayPanel.gameObject.SetActive(true);

        yield return new WaitForSeconds(3f); // Display for 3 seconds

        const float fadeDuration = 1.5f;
        var elapsedTime = 0f;

        while (elapsedTime < fadeDuration)
        {
            elapsedTime += Time.deltaTime;
            dayPanel.alpha = Mathf.Lerp(1f, 0f, elapsedTime / fadeDuration);
            yield return null;
        }

        dayPanel.gameObject.SetActive(false);

        OnDayPanelHidden?.Invoke();
    }
}