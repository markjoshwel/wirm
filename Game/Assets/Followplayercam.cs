using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Followplayercam : MonoBehaviour
{
    public Transform playerCamera;
    public float distanceFromPlayer = 2.0f;
    public float heightOffset = 0.0f;
    public float positionSmoothFactor = 0.2f; // Adjust for responsiveness
    public float rotationSmoothFactor = 0.2f;

    private Vector3 smoothedPosition;
    private Vector3 velocity = Vector3.zero;

    void Start()
    {
        if (playerCamera == null)
        {
            Debug.LogError("Player Camera is not assigned!");
            return;
        }

        smoothedPosition = GetTargetPosition();
        transform.position = smoothedPosition;
        transform.rotation = GetTargetRotation();
    }

    void LateUpdate()
    {
        if (playerCamera != null)
        {
            Vector3 targetPosition = GetTargetPosition();

            // SmoothDamp for a natural feel
            smoothedPosition = Vector3.SmoothDamp(smoothedPosition, targetPosition, ref velocity, positionSmoothFactor);
            transform.position = smoothedPosition;

            // Exponential smoothing for rotation
            transform.rotation = Quaternion.Slerp(transform.rotation, GetTargetRotation(), 1 - Mathf.Exp(-rotationSmoothFactor * Time.deltaTime * 10));
        }
    }

    private Vector3 GetTargetPosition()
    {
        return playerCamera.position + playerCamera.forward * distanceFromPlayer + Vector3.up * heightOffset;
    }

    private Quaternion GetTargetRotation()
    {
        Vector3 lookAtPoint = new Vector3(playerCamera.position.x, transform.position.y, playerCamera.position.z);
        return Quaternion.LookRotation(lookAtPoint - transform.position);
    }
}
