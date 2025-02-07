/*
Author: Reza
Date: 4/2/25
Description: To track how much trash has been thrown in the trashbin 
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Trash : MonoBehaviour
{
    private BedroomTask bedroomTask;

    private void Start()
    {
        // Find the BedroomTask script in the scene
        bedroomTask = FindObjectOfType<BedroomTask>();

        if (bedroomTask == null)
        {
            Debug.LogError("BedroomTask script not found in the scene!");
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("TrashBin"))
        {
            if (bedroomTask != null)
            {
                bedroomTask.CollectTrash();
                Debug.Log("🗑️ Trash thrown in the bin! Count: " + bedroomTask.trashCollected);
                Destroy(gameObject);
            }
            else
            {
                Debug.LogError("BedroomTask reference is missing!");
            }
        }
    }
}