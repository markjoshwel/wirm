/*
Author: Reza
Date: 7/2/25
Description: Collects information when a player looks at objects long enough
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class InfoCollector : MonoBehaviour
{
    // Defines the range to "view" the object to collect information 
    public float detectionRange = 2f;

    // Defines how long the player must look at the object for to collect information
    public float gazeTimeRequired = 2f;

    // Defines how long the information UI will remain on screen
    public float displayTime = 5f;

    // Defines the UI text to display
    public TMP_Text infoText;

    // Defines the camera
    private Camera vrCamera;

    // Defines whether UI is displaying to prevent spamming 
    private bool isDisplaying = false;

    // Defines the object the player is currently looking at
    private GameObject currentObject = null;

    // Tracks how long the player has been looking at the object
    private float gazeTimer = 0f;

    void Start()
    {
        // Assigns to player's camera
        vrCamera = Camera.main;

        // Clear UI text initially
        infoText.text = "";
    }

    void Update()
    {
        // Detects the direction the player is looking at
        Ray ray = new Ray(vrCamera.transform.position, vrCamera.transform.forward);
        RaycastHit hit;

        // Stores data of object hit in the detection range
        if (Physics.Raycast(ray, out hit, detectionRange))
        {
            // Ensures that relevant info objects are detected
            if (hit.collider.CompareTag("InfoObject"))
            {
                // If the player is still looking at the same object, the gaze time 
                if (currentObject == hit.collider.gameObject)
                {
                    // Increases gaze time
                    gazeTimer += Time.deltaTime;

                    // If gaze time reaches required time and is not displaying yet, display the information
                    if (gazeTimer >= gazeTimeRequired && !isDisplaying)
                    {
                        // Display object information
                        CollectInfo(currentObject);
                    }
                }
                else
                {
                    // Reset timer if looking at a new object
                    currentObject = hit.collider.gameObject;
                    gazeTimer = 0f;
                }
            }
        }
        else
        {
            // Reset if no valid object is in view
            currentObject = null;
            gazeTimer = 0f;
        }
    }

    // Function to display object information
    void CollectInfo(GameObject obj)
    {
        // Prevents spamming of display
        isDisplaying = true;

        // Displays information
        infoText.text = "Info Collected: " + obj.name + "\n" + GetObjectInfo(obj);
        Debug.Log("Collected information from: " + obj.name);

        // Clears text after displayed time
        Invoke(nameof(ClearText), displayTime);
    }

    // Function to clear text after a delay
    void ClearText()
    {
        // Removes text
        infoText.text = "";

        // Allows new information to be displayed
        isDisplaying = false;
    }

    string GetObjectInfo(GameObject obj)
    {
        // Check if the object's name is the same
        if (obj.CompareTag("Needles"))
            // Returns predefined information
            return "Test";
        
        // Default information if there is no specific case
        return "An unknown object with mysterious origins.";
    }
}