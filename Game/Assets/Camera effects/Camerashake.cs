using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Camerashake : MonoBehaviour
{
    [SerializeField] private float shakeMagnitude = 0.05f;
    [SerializeField] private bool isShaking = false; // Toggle shaking on/off

    private Transform cameraOffsetTransform;
    private Vector3 originalLocalPos;

    private void Start()
    {
        cameraOffsetTransform = transform; // Attach this script to Camera Offset
        originalLocalPos = cameraOffsetTransform.localPosition;
    }

    private void Update()
    {
        if (isShaking)
        {
            cameraOffsetTransform.localPosition = originalLocalPos + (Vector3)Random.insideUnitSphere * shakeMagnitude;
        }
        else
        {
            cameraOffsetTransform.localPosition = originalLocalPos; // Reset when not shaking
        }
    }

    // Public methods to enable/disable shaking dynamically
    public void StartShaking(float magnitude = -1)
    {
        if (magnitude > 0) shakeMagnitude = magnitude;
        isShaking = true;
    }

    public void StopShaking()
    {
        isShaking = false;
        cameraOffsetTransform.localPosition = originalLocalPos; // Ensure reset
    }
}
