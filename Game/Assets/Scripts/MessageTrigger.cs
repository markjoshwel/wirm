/*
Author: Reza
Date: 7/2/25
Description: General script for any message triggering areas
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class MessageTrigger : MonoBehaviour
{
    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;
    
    [Header("Message Settings")]
    // Custom message for this trigger
    [TextArea(3, 5)] public string message;
    
    // How long the message stays on screen
    public float displayDuration = 5f; 
    
    // Has message been triggered already or not
    private bool messageTriggered = false;
    
    private void OnTriggerEnter(Collider other)
    {
        // Shows up only if message has not been triggered and ensures only player triggers it
        if (!messageTriggered && other.CompareTag("Player"))
        {
            storyPanelUI.SetActive(true);
            storyText.text = message;
            StartCoroutine(HideMessageAfterSeconds(displayDuration));
            
            // Prevents message triggering again
            messageTriggered = true;
        }
    }
    
    private IEnumerator HideMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyPanelUI.SetActive(false);
    }
}
