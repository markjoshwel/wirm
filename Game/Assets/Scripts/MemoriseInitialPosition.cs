/*
 * Author: Wai Lam
 * Date: 13/2/25
 * Description: Memorise the initial position of a game object and reset it when needed
 */

using UnityEngine;

public class MemoriseInitialPosition : MonoBehaviour
{
    private Vector3 _initialPosition;
    private Quaternion _initialRotation;

    private void Start()
    {
        // Store initial position and rotation at the start
        _initialPosition = transform.position;
        _initialRotation = transform.rotation;
    }

    public void ResetPosition()
    {
        // Reset the XR Rig to the stored position and rotation
        transform.position = _initialPosition;
        transform.rotation = _initialRotation;
    }
}