/*
 * Author: Reza
 * Date: 7/2/25
 * Description: Collects information when a player looks at objects long enough
 */

using System.Collections.Generic;
using TMPro;
using UnityEngine;

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

    // Defines Audio References
    public AudioSource audioSource;
    public AudioClip scribbleSound;

    // Store objects that have already been collected
    private readonly HashSet<GameObject> _collectedObjects = new();

    // Defines the object the player is currently looking at
    private GameObject _currentObject;

    // Tracks how long the player has been looking at the object
    private float _gazeTimer;

    // Defines whether UI is displaying to prevent spamming 
    private bool _isDisplaying;

    // Defines the camera
    private Camera _vrCamera;

    private void Start()
    {
        // Assigns to player's camera
        _vrCamera = Camera.main;

        // Clear UI text initially
        infoText.text = "";
    }

    private void Update()
    {
        // Detects the direction the player is looking at
        var ray = new Ray(_vrCamera.transform.position, _vrCamera.transform.forward);

        // Stores data of object hit in the detection range
        if (Physics.Raycast(ray, out var hit, detectionRange))
        {
            // Ensures that relevant info objects are detected
            if (!hit.collider.CompareTag("InfoObject")) return;

            var targetObject = hit.collider.gameObject;

            // **Fix: Stop gaze timer if an object has been collected**
            if (_collectedObjects.Contains(targetObject)) return; // Exit without increasing gaze time

            // If the player is still looking at the same object, increase gaze time
            if (_currentObject == targetObject)
            {
                _gazeTimer += Time.deltaTime;

                // If gaze time reaches the required time and info is not displayed yet
                if (_gazeTimer >= gazeTimeRequired && !_isDisplaying) CollectInfo(targetObject);
            }
            else
            {
                // Reset timer when looking at a new object
                _currentObject = targetObject;
                _gazeTimer = 0f;
            }
        }
        else
        {
            // Reset if no valid object is in view
            _currentObject = null;
            _gazeTimer = 0f;
        }
    }

    // Function to display object information
    private void CollectInfo(GameObject obj)
    {
        // Prevents spamming of display
        _isDisplaying = true;

        // **Fix: Mark object as collected**
        _collectedObjects.Add(obj);

        // Display information
        infoText.text = "<size=15>Info Collected:</size>\n\n" +
                        "<size=20>" + obj.name + "</size>\n" +
                        "<size=16>" + GetObjectInfo(obj) + "</size>";
        Debug.Log("Collected information from: " + obj.name);

        // Play sound only if no other sound is currently playing
        if (!audioSource.isPlaying) audioSource.PlayOneShot(scribbleSound);

        // Clears text after displayed time
        Invoke(nameof(ClearText), displayTime);
    }

    // Function to clear text after a delay
    private void ClearText()
    {
        // Removes text
        infoText.text = "";

        // Allows new information to be displayed
        _isDisplaying = false;
    }

    // for mark (backend): this info collecting mechanism is more of easter eggs and if the players are 
    // observant enough to look around the room / find out what the character is going through

    // can use this as statistics of what players tend to focus on 

    private static string GetObjectInfo(GameObject obj)
    {
        return obj.name switch
        {
            // Check if the object's name is the same
            // Returns predefined information
            "Needles" => "A used needle. If my parents finds out they would murder me.",
            // Returns predefined information
            "Bottles" => "Saw dad drink this... I like how it numbs the pain",
            // Returns predefined information
            "Cigarettes" => "Stole this from mom. I hope she doesn't find out.",
            // Returns predefined information
            "Penknife" => "Sometimes I use this to feel something.",
            // Returns predefined information
            "Blood" => "I don't remember if daddy or I did this.",
            // Returns predefined information
            "ParentsDoor" => "My parents room. It's locked",
            // Default information if there is no specific case
            _ => "There's nothing to look at."
        };
    }
}