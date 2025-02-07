/*
Author: Reza
Date: 7/2/25
Description: Living room task of sweeping the dirt on the floor
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Sweeping : MonoBehaviour
{
    public Transform broomParent; // Assign the parent object of the broom
    public float sweepSpeed = 2f; // Speed of automatic sweeping
    public float sweepRange = 0.5f; // How far the broom sweeps left and right
    public float cleaningTime = 3f; // Time required to clean dirt
    public Slider progressBarPrefab; // Prefab for progress bar UI

    private Vector3 startPosition;
    private bool isCleaning = false;
    private GameObject currentDirt;
    private float cleaningProgress = 0f;
    private Slider progressBar;

    void Start()
    {
        if (broomParent == null)
        {
            Debug.LogError("Broom parent not assigned in AutoBroom script!");
            return;
        }

        startPosition = broomParent.position; // Store initial position of the broom
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Dirt") || isCleaning) return;

        // Start auto-sweeping and cleaning
        isCleaning = true;
        currentDirt = other.gameObject;
        StartCoroutine(SweepAndClean());
    }

    IEnumerator SweepAndClean()
    {
        float direction = 1f; // Start moving right

        // Create and attach progress bar **only when sweeping starts**
        progressBar = Instantiate(progressBarPrefab, currentDirt.transform.position + Vector3.up * 1f, Quaternion.identity, currentDirt.transform);
        progressBar.gameObject.SetActive(true);
        progressBar.value = 0f;

        while (cleaningProgress < cleaningTime)
        {
            // Move broom's entire parent left and right
            float moveAmount = direction * sweepSpeed * Time.deltaTime;
            broomParent.position += new Vector3(moveAmount, 0, 0);

            // Reverse direction when reaching sweep range
            if (Mathf.Abs(broomParent.position.x - startPosition.x) > sweepRange)
            {
                direction *= -1f; // Reverse sweep direction
            }

            // Increase cleaning progress
            cleaningProgress += Time.deltaTime;
            progressBar.value = cleaningProgress / cleaningTime;

            yield return null;
        }

        CompleteCleaning();
    }

    void CompleteCleaning()
    {
        if (progressBar != null)
        {
            Destroy(progressBar.gameObject); // Remove progress bar
        }
        Destroy(currentDirt); // Remove dirt
        isCleaning = false; // Allow new cleaning to start
        broomParent.position = startPosition; // Reset broom position
        cleaningProgress = 0f; // Reset progress
    }
}