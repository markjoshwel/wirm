using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Followplayercam : MonoBehaviour
{
    public Transform playerCamera; // Assign the Main Camera (VR/XR Camera)

    void Update()
    {
        if (playerCamera != null)
        {
            // Make the canvas face the player's camera
            transform.position = playerCamera.position + playerCamera.forward * 2f; // Adjust distance as needed
            transform.LookAt(playerCamera);
            transform.rotation = Quaternion.LookRotation(transform.position - playerCamera.position);
        }
    }
}
