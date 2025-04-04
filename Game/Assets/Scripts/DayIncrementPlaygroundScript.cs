/*
 * Author: Mark
 * Date: 10/2/2025
 * Description: Playground test script for day incrementation and game manager state preservation
 */

using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DayIncrementPlaygroundScript : MonoBehaviour
{
    [SerializeField] public bool isBeforeScene;

    private bool _testHasRun;

    private void Update()
    {
        if (_testHasRun) return;

        // fire off Main to run in the background
        StartCoroutine(Main());

        _testHasRun = true;
    }

    private IEnumerator Main()
    {
        if (isBeforeScene)
        {
            // wait for 3 seconds
            Debug.Log("initialisation wait...");
            yield return new WaitForSeconds(3);

            Debug.Log($"hello vro, day is {GameManager.Instance.CurrentDay}");

            // get game manager and then increment the day
            GameManager.Instance.IncrementDay();
            Debug.Log($"post-increment day is {GameManager.Instance.CurrentDay}");

            // change to the next scene
            // ReSharper disable once Unity.LoadSceneDisabledSceneName
            SceneManager.LoadScene("Scenes/Testing Scenes/Day Increment Playground After");
        }
        else
        {
            // wait for 3 seconds
            Debug.Log("initialisation wait...");
            yield return new WaitForSeconds(3);

            Debug.Log($"hello vro, day is {GameManager.Instance.CurrentDay}");
        }

        yield return 0;
    }
}