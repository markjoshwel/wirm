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
    public float detectionRange = 5f;  
    public TMP_Text infoText;  // Reference to a UI Text (TextMeshPro)
    private Camera vrCamera;
    private bool isDisplaying = false;

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
            if (hit.collider.CompareTag("InfoObject") && !isDisplaying)
            {
                CollectInfo(hit.collider.gameObject);
            }
        }
    }

    void CollectInfo(GameObject obj)
    {
        isDisplaying = true;
        infoText.text = "Info Collected: " + obj.name + "\n" + GetObjectInfo(obj);
        Debug.Log("Collected information from: " + obj.name);

        // Hide text after 3 seconds
        Invoke("ClearText", 3f);
    }

    void ClearText()
    {
        infoText.text = "";
        isDisplaying = false;
    }

    string GetObjectInfo(GameObject obj)
    {
        // Define object descriptions here
        if (obj.name == "AncientArtifact")
            return "This artifact was used by an old civilization...";

        if (obj.name == "HologramTerminal")
            return "A futuristic data console storing historical records.";

        return "An unknown object with mysterious origins.";
    }
}
