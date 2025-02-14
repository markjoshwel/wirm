using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DayIncrementPlaygroundScript : MonoBehaviour
{
    [SerializeField] public bool isBeforeScene = false;

    private bool _testHasRun = false;

    private void Update()
    {
        if (_testHasRun) return;
        
        // fire off Main to run in the background
        StartCoroutine(Main());
        
        _testHasRun = true;
    }

    IEnumerator Main()
    {
        if (isBeforeScene)
        {
            // wait for 3 seconds
            Debug.Log("initialisation wait...");
            yield return new WaitForSeconds(3);

            Debug.Log($"hello vro, day is {GameManager.Instance.currentDay}");
            
            // get game manager and then increment the day
            GameManager.Instance.IncrementDay();
            Debug.Log($"post-increment day is {GameManager.Instance.currentDay}");
            
            // change to the next scene
            SceneManager.LoadScene("Scenes/Testing Scenes/Day Increment Playground After");

        }
        else
        {
            // wait for 3 seconds
            Debug.Log("initialisation wait...");
            yield return new WaitForSeconds(3);
            
            Debug.Log($"hello vro, day is {GameManager.Instance.currentDay}");
        }
        
        yield return 0;
    }
}
