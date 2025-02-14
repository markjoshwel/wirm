using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

// NOTE: / FIXME: no asset usages, and school is not a tag; is this script dead?

public class SceneTransition : MonoBehaviour
{
    public Image fadeImage; // Assign the black image here
    public float fadeDuration = 2f;

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("School")) StartCoroutine(FadeOutAndLoadScene());
    }

    private IEnumerator FadeOutAndLoadScene()
    {
        var elapsed = 0f;

        while (elapsed < fadeDuration)
        {
            elapsed += Time.deltaTime;
            var alpha = Mathf.Clamp01(elapsed / fadeDuration);
            fadeImage.color = new Color(0, 0, 0, alpha);
            yield return null;
        }

        SceneManager.LoadScene("NextScene");
    }
}