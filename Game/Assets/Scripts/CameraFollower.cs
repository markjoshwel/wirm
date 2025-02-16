/*
 * Author: Mark
 * Date: 16/2/25
 * Description: follows the XR Camera's position
 */

using System;
using UnityEngine;

public class XRColliderFollow : MonoBehaviour
{
    [SerializeField] private Transform xrCamera;

    private void Awake()
    {
        if (xrCamera != null) return;
        throw new Exception("Please assign the XR Camera to the XRColliderFollow script!");
    }

    private void Update()
    {
        transform.position = xrCamera.position;
    }
}