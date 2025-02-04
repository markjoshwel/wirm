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

public class BedroomTask : MonoBehaviour
{
    public int trashCollected = 0;
    public int trashToUnlock = 1;
    public GameObject door;
    public XRGrabInteractable doorInteractable;
    
    // Start is called before the first frame update
    void Start()
    {
        if (door != null)
        {
            doorInteractable = door.GetComponent<XRGrabInteractable>();
            if (doorInteractable != null)
            {
                doorInteractable.enabled = false;
                Debug.Log("Room is not cleaned! Door is locked");
            }
        }
    }

    public void CollectTrash()
    {
        trashCollected++;
        Debug.Log("Trash Collected: " + trashCollected + "/" + trashToUnlock);

        if (trashCollected >= trashToUnlock)
        {
            UnlockDoor();
            Debug.Log("Cleaning task completed! Unlocking door...");
        }
    }

    private void UnlockDoor()
    {
        doorInteractable.enabled = true;
        Debug.Log("Room is cleaned! Door unlocked");
    }
}
