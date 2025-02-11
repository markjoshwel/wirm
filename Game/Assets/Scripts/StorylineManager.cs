using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class StorylineManager : MonoBehaviour
{
    public TMP_Text storyText;  // Reference to the story text UI
    private Queue<string> messageQueue = new Queue<string>();  // Queue to store messages
    private bool isDisplayingMessage = false;  // Track whether a message is currently being displayed

    public void EnqueueMessage(string message, float delay = 7f)
    {
        messageQueue.Enqueue(message);
        if (!isDisplayingMessage)
        {
            StartCoroutine(DisplayMessages(delay));
        }
    }

    private IEnumerator DisplayMessages(float delay)
    {
        isDisplayingMessage = true;

        while (messageQueue.Count > 0)
        {
            string currentMessage = messageQueue.Dequeue();
            storyText.text = currentMessage;

            // Wait before clearing the message
            yield return new WaitForSeconds(delay);

            storyText.text = ""; // Clear the message
        }

        isDisplayingMessage = false;
    }
}