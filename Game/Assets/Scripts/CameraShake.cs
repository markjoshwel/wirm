/*
 * Author: Wai Lam
 * Date: 6/2/25
 * Description: Make the camera shake
 */

using UnityEngine;

public class CameraShake : MonoBehaviour
{
    [SerializeField] private float shakeMagnitude = 0.05f;
    [SerializeField] private bool isShaking; // Toggle shaking on/off

    private Transform _cameraOffsetTransform;
    private Vector3 _originalLocalPos;

    private void Start()
    {
        _cameraOffsetTransform = transform; // Attach this script to Camera Offset
        _originalLocalPos = _cameraOffsetTransform.localPosition;
    }

    private void Update()
    {
        if (isShaking)
            _cameraOffsetTransform.localPosition = _originalLocalPos + Random.insideUnitSphere * shakeMagnitude;
        else
            _cameraOffsetTransform.localPosition = _originalLocalPos; // Reset when not shaking
    }

    // Public methods to enable/disable shaking dynamically
    // ReSharper disable once UnusedMember.Global
    public void StartShaking(float magnitude = -1)
    {
        if (magnitude > 0) shakeMagnitude = magnitude;
        isShaking = true;
    }

    // ReSharper disable once UnusedMember.Global
    public void StopShaking()
    {
        isShaking = false;
        _cameraOffsetTransform.localPosition = _originalLocalPos; // Ensure reset
    }
}