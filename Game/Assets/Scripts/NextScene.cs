/*
Author: Reza
Date: 13/2/25
Description: Day 3 script that goes to the last scene after a certain amount of time
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Day3 : MonoBehaviour
{
    // Time in seconds to wait before transitioning to the next scene
    public float timeToWait = 60f; // Change this to the desired wait time
    private float timer;
    public string NextScene;

    void Start()
    {
        // Initialize timer
        timer = 0f;
    }

    void Update()
    {
        // Increment timer
        timer += Time.deltaTime;

        // Check if the time has passed
        if (timer >= timeToWait)
        {
            // Call method to change the scene
           GameManager.Instance.IncrementDay();
        }
    }
}