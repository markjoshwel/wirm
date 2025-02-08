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
    public float gazeTimeRequired = 1.5f;

    // Defines how long the information UI will remain on screen
    public float displayTime = 7f;

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
    
    // Defines Audio References
    public AudioSource audioSource;
    public AudioClip scribbleSound;
    
    // Store objects that have already been collected
    private HashSet<GameObject> collectedObjects = new HashSet<GameObject>();

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
                GameObject targetObject = hit.collider.gameObject;

                // **Fix: Stop gaze timer if object has been collected**
                if (collectedObjects.Contains(targetObject))
                {
                    return;  // Exit without increasing gaze time
                }

                // If the player is still looking at the same object, increase gaze time
                if (currentObject == targetObject)
                {
                    gazeTimer += Time.deltaTime;

                    // If gaze time reaches required time and info is not displayed yet
                    if (gazeTimer >= gazeTimeRequired && !isDisplaying)
                    {
                        CollectInfo(targetObject);
                    }
                }
                else
                {
                    // Reset timer when looking at a new object
                    currentObject = targetObject;
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

        // **Fix: Mark object as collected**
        collectedObjects.Add(obj);

        // Displays information
        infoText.text = "<size=15>Info Collected:</size>\n\n" + 
                        "<size=20>" + obj.name + "</size>\n" + 
                        "<size=16>" + GetObjectInfo(obj) + "</size>";
        Debug.Log("Collected information from: " + obj.name);
        
        // Play sound only if no other sound is currently playing
        if (!audioSource.isPlaying)
        {
            audioSource.PlayOneShot(scribbleSound);
        }

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
        if (obj.name == "Needles")
            // Returns predefined information
            return "A used needle. If my parents finds out they would murder me.";
        
        if (obj.name == "Bottles")
            // Returns predefined information
            return "An empty bottle. It numbs the pain... but not for long enough";
        
        // Default information if there is no specific case
        return "An unknown object with mysterious origins.";
    }
}