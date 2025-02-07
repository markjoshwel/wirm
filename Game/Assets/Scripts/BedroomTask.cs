/*
Author: Reza
Date: 3/2/25
Description: To track if cleaning/exploring bedroom task is done before allowing player to open door
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.ProBuilder.Shapes;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit;

public class BedroomTask : MonoBehaviour
{
    // To track how much trash has been collected so far
    public int trashCollected = 0;
    
    // Defines how much trash is needed to collect in order to unlock the door
    public int trashRequired = 10;
    
    // Defines the door 
    public GameObject door; 
    private XRGrabInteractable grabInteractable;
    
    // Defines door handle
    private Collider doorCollider;
    
    // Defines door's rigidbody to lock it
    private Rigidbody doorRigidbody;
    
    // Defines UI references
    public GameObject lockedDoorUI;
    public GameObject unlockedDoorUI;

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
            // Call unlocking door function
            UnlockDoor();
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
            doorRigidbody.constraints = RigidbodyConstraints.None; // Removes restrictions
        }

        // Ensure collider is not null
        if (doorCollider != null)
        {
            // Allows player to grab the door handle
            doorCollider.enabled = true; 
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
    
    // Function to hide the UI after a delay
    private IEnumerator HideMessageAfterSeconds(GameObject uiElement, float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        uiElement.SetActive(false);
    }
}