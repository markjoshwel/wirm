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
    public static int trashCollected = 0;

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("TrashBin"))
        {
            trashCollected++;
            Debug.Log("Trash thrown in the bin! Count: " + trashCollected);
            Destroy(gameObject);
        }
    }
}
