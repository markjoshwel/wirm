using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Followplayercam : MonoBehaviour
{
    // public Transform playerCamera; // Assign the Main Camera (VR/XR Camera)
    // public float positionSmoothTime = 0.3f; // Adjust to control the delay
    // public float rotationSmoothTime = 0.3f; // Adjust to control the rotation delay
    //
    // private Vector3 velocity = Vector3.zero;
    //
    // void Update()
    // {
    //     if (playerCamera != null)
    //     {
    //         // Calculate the target position (a bit away from the player camera)
    //         Vector3 targetPosition = playerCamera.position + playerCamera.forward * 2f; // Adjust distance as needed
    //
    //         // Smoothly interpolate the position to create a delay
    //         transform.position = Vector3.SmoothDamp(transform.position, targetPosition, ref velocity, positionSmoothTime);
    //
    //         // Calculate the target rotation (look at the camera)
    //         Quaternion targetRotation = Quaternion.LookRotation(playerCamera.position - transform.position);
    //
    //         // Smoothly interpolate the rotation to create a delay
    //         transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime / rotationSmoothTime);
    //     }
    // }
    public Transform playerCamera; // Assign the XR Camera (Main Camera in XR Rig)
    public float distanceFromPlayer = 2.0f; // Distance in front of player
    public float heightOffset = 0.0f; // Adjust if needed
    public float followSpeed = 3.0f; // Speed of movement
    public float rotationSpeed = 5.0f; // Speed of rotation

    private Vector3 targetPosition;

    void Start()
    {
        if (playerCamera == null)
        {
            Debug.LogError("Player Camera is not assigned!");
            return;
        }

        // Set the initial position correctly
        targetPosition = GetTargetPosition();
        transform.position = targetPosition;
        transform.rotation = GetTargetRotation();
    }

    void Update()
    {
        if (playerCamera != null)
        {
            // Get the target position in world space
            targetPosition = GetTargetPosition();

            // Move UI smoothly to the target position
            transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * followSpeed);

            // Rotate UI smoothly to face the player
            transform.rotation = Quaternion.Slerp(transform.rotation, GetTargetRotation(), Time.deltaTime * rotationSpeed);
        }
    }

    // Calculates world-space position (in front of player but stable)
    private Vector3 GetTargetPosition()
    {
        Vector3 forwardFlat = new Vector3(playerCamera.forward.x, 0, playerCamera.forward.z).normalized; // Keep level
        return playerCamera.position + forwardFlat * distanceFromPlayer + Vector3.up * heightOffset;
    }

    // Calculates rotation so UI faces the player
    private Quaternion GetTargetRotation()
    {
        Vector3 lookAtPoint = new Vector3(playerCamera.position.x, transform.position.y, playerCamera.position.z);
        return Quaternion.LookRotation(transform.position - lookAtPoint);
    }
}
