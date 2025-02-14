/*
 * Author: Reza
 * Date: 7/2/25
 * Description: General script for any message triggering areas
 */

using System.Collections;
using TMPro;
using UnityEngine;

public class MessageTrigger : MonoBehaviour
{
    // Defines UI references
    [Header("UI References")] public GameObject storyPanelUI;

    public TMP_Text storyText;

    [Header("Message Settings")]
    // Custom message for this trigger
    [TextArea(3, 5)]
    public string message;

    // How long the message stays on screen
    public float displayDuration = 5f;

    // Has the message been triggered already or not?
    private bool _messageTriggered;

    private void OnTriggerEnter(Collider other)
    {
        // Shows up only if the message has not been triggered and ensures only player triggers it
        if (_messageTriggered || !other.CompareTag("Player")) return;

        storyPanelUI.SetActive(true);
        storyText.text = message;
        StartCoroutine(HideMessageAfterSeconds(displayDuration));

        // Prevents a message triggering again
        _messageTriggered = true;
    }

    private IEnumerator HideMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyPanelUI.SetActive(false);
    }
}