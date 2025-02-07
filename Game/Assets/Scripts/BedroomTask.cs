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
    public int trashCollected = 0;
    public int trashRequired = 10;
    public GameObject door; // The VR swingable door object
    private XRGrabInteractable grabInteractable;
    private Collider doorCollider;
    private Rigidbody doorRigidbody;
    public GameObject lockedDoorUI;
    public GameObject unlockedDoorUI;

    void Start()
    {
        lockedDoorUI.SetActive(false);
        unlockedDoorUI.SetActive(false);
        if (door != null)
        {
            grabInteractable = door.GetComponent<XRGrabInteractable>();
            doorCollider = door.GetComponent<Collider>(); 
            doorRigidbody = door.GetComponent<Rigidbody>(); 

            if (grabInteractable != null)
            {
                grabInteractable.selectEntered.AddListener(OnDoorGrabAttempt);
            }

            if (doorRigidbody != null)
            {
                LockDoor(); 
            }
        }
    }

    public void CollectTrash()
    {
        trashCollected++;
        Debug.Log($"🗑️ Trash collected: {trashCollected}/{trashRequired}");

        if (trashCollected >= trashRequired)
        {
            UnlockDoor();
        }
    }

    private void LockDoor()
    {
        if (doorRigidbody != null)
        {
            doorRigidbody.isKinematic = true; // Stops movement
            doorRigidbody.constraints = RigidbodyConstraints.FreezeAll; // Completely freezes door
        }

        if (doorCollider != null)
        {
            doorCollider.enabled = false; // Prevents grabbing
        }
    }

    private void UnlockDoor()
    {
        if (doorRigidbody != null)
        {
            doorRigidbody.isKinematic = false; // Allows movement
            doorRigidbody.constraints = RigidbodyConstraints.None; // Removes restrictions
        }

        if (doorCollider != null)
        {
            doorCollider.enabled = true; // Enables grabbing
        }

        StartCoroutine(HideMessageAfterSeconds(unlockedDoorUI, 5f));
        Debug.Log("Room is clean! The door is now unlocked.");
    }

    private void OnDoorGrabAttempt(SelectEnterEventArgs args)
    {
        if (trashCollected < trashRequired)
        {
            StartCoroutine(HideMessageAfterSeconds(lockedDoorUI, 5f));
            Debug.Log("The door is locked! Clean the room first.");
        }
    }

    public bool IsTaskCompleted()
    {
        return trashCollected >= trashRequired;
    }
    
    private IEnumerator HideMessageAfterSeconds(GameObject uiElement, float delay)
    {
        yield return new WaitForSeconds(delay);
        uiElement.SetActive(false);
    }
}