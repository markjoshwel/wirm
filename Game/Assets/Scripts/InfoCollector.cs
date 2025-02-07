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
    public float detectionRange = 2f;  // Adjust for accurate VR detection
    public float gazeTimeRequired = 2f;  // Time the player must look at the object before collecting info
    public float displayTime = 5f;  // How long the info stays on screen
    public TMP_Text infoText;  // UI Text (TextMeshPro)
    
    private Camera vrCamera;
    private bool isDisplaying = false;
    private GameObject currentObject = null;
    private float gazeTimer = 0f;

    void Start()
    {
        vrCamera = Camera.main;
        infoText.text = "";  // Clear text initially
    }

    void Update()
    {
        Ray ray = new Ray(vrCamera.transform.position, vrCamera.transform.forward);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, detectionRange))
        {
            if (hit.collider.CompareTag("InfoObject"))
            {
                if (currentObject == hit.collider.gameObject)
                {
                    gazeTimer += Time.deltaTime;
                    if (gazeTimer >= gazeTimeRequired && !isDisplaying)
                    {
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

    void CollectInfo(GameObject obj)
    {
        isDisplaying = true;
        infoText.text = "Info Collected: " + obj.name + "\n" + GetObjectInfo(obj);
        Debug.Log("Collected information from: " + obj.name);

        // Hide text after displayTime
        Invoke(nameof(ClearText), displayTime);
    }

    void ClearText()
    {
        infoText.text = "";
        isDisplaying = false;
    }

    string GetObjectInfo(GameObject obj)
    {
        // Define object descriptions here
        if (obj.name == "Info")
            return "Test";

        return "An unknown object with mysterious origins.";
    }
}