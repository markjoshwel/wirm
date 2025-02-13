using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ResetPosition : MonoBehaviour
{
    private Vector3 initialPosition;
    private Quaternion initialRotation;

    void Start()
    {
        // Store initial position and rotation at the start
        initialPosition = transform.position;
        initialRotation = transform.rotation;
    }

    public void ResetingPosition()
    {
        // Reset the XR Rig to the stored position and rotation
        transform.position = initialPosition;
        transform.rotation = initialRotation;
    }
}
