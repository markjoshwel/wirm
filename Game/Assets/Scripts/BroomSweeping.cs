/*
Author: Reza
Date: 7/2/25
Description: Detects dirt and sweeps them up 
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class BroomSweeping : MonoBehaviour
{
    private GameManager gameManager;
    private PostProcessingManager postProcessingManager;
    private StorylineManager storylineManager;
    
    // To track how much trash has been collected so far
    public int dirtSweeped = 0;
    
    // Defines how much trash is needed to collect in order to unlock the door
    public int dirtRequired = 10;
    
    private bool taskCompleted = false;
    
    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;
    
    // Defines Audio References
    [Header("Audio References")]
    public AudioSource audioSource;
    public AudioClip sweepingSound;
    
    // Update is called once per frame
    void Update()
    {
        if (dirtSweeped >= dirtRequired && !taskCompleted)
        {
            taskCompleted = true; 
            GameManager.Instance.FloorSweepedTaskComplete();
            
            storyPanelUI.SetActive(true);
            storylineManager.EnqueueMessage("I hope the house is clean enough now so I don't get scolded later...", 7f)
        }
    }
    
    private void OnTriggerEnter(Collider other)
    {
        // Now correctly checks for "Dirt" before triggering
        if (other.CompareTag("Dirt"))  
        {
            dirtSweeped++;

            // Destroy it to prevent extra counting
            Destroy(other.gameObject);

            // Play sound only if no other sound is currently playing
            if (!audioSource.isPlaying)
            {
                audioSource.PlayOneShot(sweepingSound);
            }
        }
    }
    
    private IEnumerator ClearMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyText.text = "";
    }
}