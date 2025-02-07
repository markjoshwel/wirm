using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Followplayercam : MonoBehaviour
{
    // public Transform playerCamera;
    // public float distanceFromPlayer = 2.0f;
    // public float heightOffset = 0.0f;
    // public float positionSmoothTime = 0.3f;    // Controls delay for position
    // public float rotationSmoothTime = 0.15f;   // Controls delay for rotation
    //
    // private Vector3 smoothedPosition;
    // private Vector3 velocity = Vector3.zero;
    //
    // void Start()
    // {
    //     if (playerCamera == null)
    //     {
    //         Debug.LogError("Player Camera is not assigned!");
    //         return;
    //     }
    //
    //     smoothedPosition = GetTargetPosition();
    //     transform.position = smoothedPosition;
    //     transform.rotation = GetTargetRotation();
    // }
    //
    // void LateUpdate()
    // {
    //     if (playerCamera != null)
    //     {
    //         Vector3 targetPosition = GetTargetPosition();
    //
    //         // Apply smooth damping for slight delay
    //         smoothedPosition = Vector3.SmoothDamp(
    //             smoothedPosition,
    //             targetPosition,
    //             ref velocity,
    //             positionSmoothTime
    //         );
    //         transform.position = smoothedPosition;
    //
    //         // Apply smooth rotation with slight delay
    //         transform.rotation = Quaternion.Slerp(
    //             transform.rotation,
    //             GetTargetRotation(),
    //             Time.deltaTime / rotationSmoothTime
    //         );
    //     }
    // }
    //
    // private Vector3 GetTargetPosition()
    // {
    //     return playerCamera.position + playerCamera.forward * distanceFromPlayer + Vector3.up * heightOffset;
    // }
    //
    // private Quaternion GetTargetRotation()
    // {
    //     Vector3 lookAtPoint = new Vector3(playerCamera.position.x, transform.position.y, playerCamera.position.z);
    //     return Quaternion.LookRotation(lookAtPoint - transform.position);
    // }
    [Header("Target to Follow")]
    public Transform target; // Usually the Main Camera (XR Rig's Head)

    [Header("Follow Settings")]
    public float followSpeed = 5f;     // How quickly it follows the target
    public Vector3 offset = new Vector3(0, -0.2f, 1.5f); // Position offset
    public bool followRotation = true; // Toggle for rotating with the head

    private void LateUpdate()
    {
        if (target == null) return;

        // Smooth Position Follow
        Vector3 desiredPosition = target.position + target.TransformDirection(offset);
        transform.position = Vector3.Lerp(transform.position, desiredPosition, Time.deltaTime * followSpeed);

        // Smooth Rotation Follow
        if (followRotation)
        {
            Quaternion desiredRotation = Quaternion.Euler(0, target.eulerAngles.y, 0);
            transform.rotation = Quaternion.Slerp(transform.rotation, desiredRotation, Time.deltaTime * followSpeed);
        }
    }
}
