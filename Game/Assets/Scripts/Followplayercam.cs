/*
Author: Wai Lam
Date: 6/2/25
Description: UI to follow camera with a slight delay
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Followplayercam : MonoBehaviour
{

    public Transform target; // Usually the Main Camera (XR Rig's Head)


    public float followSpeed = 5f; // How quickly it follows the target
    public Vector3 offset = new Vector3(0, -0.2f, 1.5f); // Position offset
    public bool followRotation = true; // Toggle for rotating with the head

    public float maxPitchAngle = 30f; // Limits how much the panel tilts up/down

    private void LateUpdate()
    {
        if (target == null) return;

        // Smooth Position Follow
        Vector3 desiredPosition = target.position + target.TransformDirection(offset);
        transform.position = Vector3.Lerp(transform.position, desiredPosition, Time.deltaTime * followSpeed);

        // Smooth Rotation Follow (Yaw + Pitch)
        if (followRotation)
        {
            // Capture target's full rotation
            Vector3 targetEulerAngles = target.eulerAngles;

            // Handle Pitch (X-axis) - Clamp to avoid extreme tilting
            float pitch = targetEulerAngles.x;
            if (pitch > 180) pitch -= 360; // Convert to -180 to 180 range
            pitch = Mathf.Clamp(pitch, -maxPitchAngle, maxPitchAngle);

            // Apply Yaw (Y-axis) and Pitch (X-axis), keep Roll (Z-axis) at 0
            Quaternion desiredRotation = Quaternion.Euler(pitch, targetEulerAngles.y, 0);
            transform.rotation = Quaternion.Slerp(transform.rotation, desiredRotation, Time.deltaTime * followSpeed);
        }
    }
} 