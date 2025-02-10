/*
 Author : Wai Lam
 Date : 10/2/2025
 Description : Car obstacle
 */
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car : MonoBehaviour
{
    public Transform playerRig;       // Assign your XR Rig here
    public Transform startPoint;      // Assign the starting point here
    
    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("Triggered by: " + other.name);
        // Check if the collider belongs to the player
        if (other.CompareTag("Player"))
        {
            Debug.Log("Teleporting Player...");
            TeleportPlayer();
        }
    }

    private void TeleportPlayer()
    {
        Vector3 offset = playerRig.position - Camera.main.transform.position;
        playerRig.position = startPoint.position + offset;
        playerRig.rotation = startPoint.rotation;
    }
}
