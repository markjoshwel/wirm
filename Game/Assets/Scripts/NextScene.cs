/*
 * Author: Reza
 * Date: 13/2/25
 * Description: Day 3 script that goes to the last scene after a certain amount of time
 */

using UnityEngine;

public class Day3 : MonoBehaviour
{
    // Time in seconds to wait before transitioning to the next scene
    public float timeToWait = 60f; // Change this to the desired wait time
    public string nextScene;
    private float _timer;

    private void Start()
    {
        // Initialize timer
        _timer = 0f;
    }

    private void Update()
    {
        // Increment timer
        _timer += Time.deltaTime;

        // Check if the time has passed
        if (_timer >= timeToWait)
            // Call method to change the scene
            GameManager.Instance.IncrementDay();
    }
}