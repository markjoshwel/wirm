using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ResetPosition : MonoBehaviour
{
    public Transform xrRig; // Reference to the XR Rig's Transform
    private Vector3 initialPosition; // Store the initial position
    private Quaternion initialRotation; // Store the initial rotation

    // Store the scene names for which you want to reset the XR Rig position
    public string[] sceneNames; 

    private void Start()
    {
        // Capture the initial position and rotation at the start of the scene
        initialPosition = xrRig.position;
        initialRotation = xrRig.rotation;

        // Listen for scene changes and reset XR Rig's position on scene load
        SceneManager.sceneLoaded += OnSceneLoaded;
    }

    private void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        // Check if the scene we are loading matches any of the target scenes
        foreach (string sceneName in sceneNames)
        {
            if (scene.name == sceneName)
            {
                // Reset XR Rig position and rotation to the original values
                xrRig.position = initialPosition;
                xrRig.rotation = initialRotation;
                break;
            }
        }
    }

    private void OnDestroy()
    {
        // Remove the sceneLoaded listener when this object is destroyed
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }
}
