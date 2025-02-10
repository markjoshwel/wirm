/*
Author: Reza
Date: 3/2/25
Description: To track if cleaning/exploring bedroom task is done before allowing player to open door
*/

using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.ProBuilder.Shapes;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit;

public class BedroomTask : MonoBehaviour
{
    private GameManager gameManager;
    private PostProcessingManager postProcessingManager;
    
    [Header("Task Requirement Values")]
    // To track how much trash has been collected so far
    public int trashCollected = 0;
    
    // Defines how much trash is needed to collect in order to unlock the door
    public int trashRequired = 10;
    
    // Defines the door 
    [Header("Door to Unlock")]
    public GameObject door; 
    
    // Defines the grab interactable to know when the door is grabbed
    private XRGrabInteractable grabInteractable;
    
    // Defines door handle
    private Collider doorCollider;
    
    // Defines door's rigidbody to lock it
    private Rigidbody doorRigidbody;
    
    // Defines UI references
    [Header("UI References")]
    public GameObject lockedDoorUI;
    public GameObject unlockedDoorUI;
    public GameObject storyPanelUI;
    public TMP_Text storyText;
    
    // Defines Audio References
    [Header("Audio References")]
    public AudioSource audioSource;
    public AudioClip lockedSound;
    public AudioClip unlockedSound;
    public AudioClip footstepsSound;
    public AudioClip doorSlamSound;

    void Start()
    {
        // Hide all UI prompts on start
        lockedDoorUI.SetActive(false);
        unlockedDoorUI.SetActive(false);
        
        // Ensure door is not null
        if (door != null)
        {
            // Get the components of the door
            grabInteractable = door.GetComponent<XRGrabInteractable>();
            doorCollider = door.GetComponent<Collider>(); 
            doorRigidbody = door.GetComponent<Rigidbody>(); 

            // Ensure grab interactable is not null
            if (grabInteractable != null)
            {
                // Detect when the door is grabbed
                grabInteractable.selectEntered.AddListener(OnDoorGrabAttempt);
            }

            // Ensure rigidbody is not null
            if (doorRigidbody != null)
            {
                // Lock the door on start
                LockDoor(); 
            }
        }
        
        if (storyPanelUI != null && storyText != null)
        {
            storyPanelUI.SetActive(true);
            storyText.text = "My parents are still home... I should clean up first.";
            StartCoroutine(HideMessageAfterSeconds(storyPanelUI, 10f));
        }

    }

    // Functions when trash is collected/thrown
    public void CollectTrash()
    {
        // Add to trash count
        trashCollected++;
        Debug.Log($"Trash collected: {trashCollected}/{trashRequired}");

        // If player has collected/thrown required amount of trash
        if (trashCollected >= trashRequired)
        {
            if (GameManager.Instance == null)
            {
                Debug.LogError("GameManager instance is null!");
            }
            else
            {
                GameManager.Instance.BedroomTaskComplete();
            }
            
            // Call unlocking door function/sequence
            StartCoroutine(PlaySoundSequence());
        }
    }

    // Functions when door is locked
    private void LockDoor()
    {
        // Ensure rigidbody is not null
        if (doorRigidbody != null)
        {
            // Stops door movement
            doorRigidbody.isKinematic = true; 
            
            // Freezes the door to ensure door doesn't open
            doorRigidbody.constraints = RigidbodyConstraints.FreezeAll;
        }

        // Ensure collider is not null
        if (doorCollider != null)
        {
            // Prevents player from grabbing door handle
            doorCollider.enabled = false; 
        }
    }

    // Functions when door is unlocked
    private void UnlockDoor()
    {
        // Ensure rigidbody is not null
        if (doorRigidbody != null)
        {
            // Allows door movement
            doorRigidbody.isKinematic = false; 
            
            // Unfreezes door to let it open
            doorRigidbody.constraints = RigidbodyConstraints.None; 
        }

        // Ensure collider is not null
        if (doorCollider != null)
        {
            // Allows player to grab the door handle
            doorCollider.enabled = true; 
        }
        
        // Play sound only if no other sound is currently playing
        if (!audioSource.isPlaying)
        {
            audioSource.PlayOneShot(unlockedSound);
        }
        
        // Show the unlocked door UI
        unlockedDoorUI.SetActive(true);
        
        // Call the function to hide the UI after delay
        StartCoroutine(HideMessageAfterSeconds(unlockedDoorUI, 5f));
        Debug.Log("Room is clean! The door is now unlocked.");
    }

    // Function when player tries to grab the door 
    private void OnDoorGrabAttempt(SelectEnterEventArgs args)
    {
        // If the amount of trash collected is lesser than the required amount
        if (trashCollected < trashRequired)
        {
            // Show the locked door UI
            lockedDoorUI.SetActive(true);
            
            // Play sound only if no other sound is currently playing
            if (!audioSource.isPlaying)
            {
                audioSource.PlayOneShot(lockedSound);
            }
            
            // Call the function to hide the UI after delay
            StartCoroutine(HideMessageAfterSeconds(lockedDoorUI, 5f));
            Debug.Log("The door is locked! Clean the room first.");
        }
    }

    // Function when the task is completed
    public bool IsTaskCompleted()
    {
        // Trash collected is more or equal to trash required to collect
        return trashCollected >= trashRequired;
    }
    
    private IEnumerator PlaySoundSequence()
    {
        storyText.text = "!!!";
        storyPanelUI.SetActive(true); 
        
        PostProcessingManager.Instance.StartEffect("Panic");
        
        // Play footsteps of parents walking away
        audioSource.PlayOneShot(footstepsSound);
        yield return new WaitForSeconds(footstepsSound.length);

        // Play a door slam after the footsteps clip ends
        audioSource.PlayOneShot(doorSlamSound);
        yield return new WaitForSeconds(doorSlamSound.length);
        
        
        PostProcessingManager.Instance.StopEffect();
        
        // Clear the "!!!"
        storyText.text = "";

        // Unlocks the door after the clips and update the story
        UnlockDoor();
        
        // Add a small delay before updating the text to ensure everything shows properly
        yield return new WaitForSeconds(0.5f);
        
        storyText.text = "They finally left... just as soon as I finished cleaning. I can leave the room now.";
        StartCoroutine(HideMessageAfterSeconds(storyPanelUI, 10f));
    }
    
    // Function to hide the UI after a delay
    private IEnumerator HideMessageAfterSeconds(GameObject uiElement, float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        uiElement.SetActive(false);
    }
    
    public void ApplyHeadacheEffect()
    {
        PostProcessingManager.Instance?.TriggerEffect("Headache");
    }

    public void ApplyDizzinessEffect()
    {
        PostProcessingManager.Instance?.TriggerEffect("Dizziness");
    }
}
