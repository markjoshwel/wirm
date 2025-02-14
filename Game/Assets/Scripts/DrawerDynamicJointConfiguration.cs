/*
 * Author: Mark
 * Date: 31/1/2025
 * Description: Dynamic configuration script for a drawer interactable
 */

using System;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit.Interactables;

[RequireComponent(typeof(XRGrabInteractable))]
[RequireComponent(typeof(ConfigurableJoint))]
public class DrawerDynamicJointConfiguration : MonoBehaviour
{
    [Header("mark's all-in-one dynamic drawer component")]
    [Space(10)]
    #if UNITY_EDITOR
        [HelpBox("make sure every child inside both prefabs are under the" +
                 "'Interactable Environment' layer.\n\n" +
                 "whatever non-standard (a la ProBuilder) object geometry under the " +
                 "interactable prefab should have a convex mesh collider if the console nags about it!\n\n" +
                 "any Curve Interaction Casters (a la 'XR Origin (VR)' > 'Camera Offset' > '... Controller' " +
                 "> 'Near-Far Interactor' > 'Curve Interaction Caster') should be have the " +
                 "'Interactable Environment' layer included in its' Raycast Mask.",
            HelpBoxMessageType.Error)]
    #endif
    [Space(10)]
    [SerializeField]
    private MovementAxis movementAxis = MovementAxis.Z;

    /// <summary>
    ///     the maximum distance the drawer can be pulled out
    /// </summary>
    [Tooltip("the maximum distance the drawer can be pulled out")] [SerializeField]
    private float maxMovementDistance = 0.5f;

    /// <summary>
    ///     the velocity scale of the drawer, how fast it can move
    /// </summary>
    [Tooltip("the velocity scale of the drawer, how fast it can move")] [SerializeField]
    private float velocityScale = 0.5f;

    private void Awake()
    {
        // configure the configurable joint component
        var cJoint = GetComponent<ConfigurableJoint>();
        if (cJoint == null)
            throw new Exception("Drawer (Dynamic): ConfigurableJoint component not found (unreachable?)");

        // lock all motions (linear and angular) except for the desired (linear) axis
        Debug.Log($"Drawer (Dynamic): locking movement to axis {movementAxis}");
        cJoint.xMotion = movementAxis == MovementAxis.X
            ? ConfigurableJointMotion.Limited
            : ConfigurableJointMotion.Locked;
        cJoint.yMotion = movementAxis == MovementAxis.Y
            ? ConfigurableJointMotion.Limited
            : ConfigurableJointMotion.Locked;
        cJoint.zMotion = movementAxis == MovementAxis.Z
            ? ConfigurableJointMotion.Limited
            : ConfigurableJointMotion.Locked;
        cJoint.angularXMotion = ConfigurableJointMotion.Locked;
        cJoint.angularYMotion = ConfigurableJointMotion.Locked;
        cJoint.angularZMotion = ConfigurableJointMotion.Locked;

        // set linear limit
        cJoint.linearLimit = new SoftJointLimit
        {
            limit = maxMovementDistance,
            bounciness = 0,
            contactDistance = 0
        };

        // configure the rigidbody
        var rb = GetComponent<Rigidbody>();
        rb.isKinematic = false;
        rb.useGravity = false;
        rb.collisionDetectionMode = CollisionDetectionMode.ContinuousDynamic;

        // configure the grab interactable
        var grabInteractable = GetComponent<XRGrabInteractable>();
        grabInteractable.movementType = XRBaseInteractable.MovementType.VelocityTracking;
        grabInteractable.trackPosition = true;
        grabInteractable.velocityScale = velocityScale;

        // guess the handle collider, lol
        Collider drawerDoorHandleCollider = GetComponentInChildren<BoxCollider>();
        if (drawerDoorHandleCollider == null)
        {
            drawerDoorHandleCollider = GetComponentInChildren<SphereCollider>();
            if (drawerDoorHandleCollider == null)
            {
                drawerDoorHandleCollider = GetComponentInChildren<CapsuleCollider>();
                if (drawerDoorHandleCollider == null)
                {
                    drawerDoorHandleCollider = GetComponentInChildren<MeshCollider>();
                    if (drawerDoorHandleCollider == null)
                        throw new Exception("Drawer (Dynamic): Drawer door handle collider not found");

                    Debug.Log("Drawer (Dynamic): MeshCollider collider found");
                }
                else
                {
                    Debug.Log("Drawer (Dynamic): CapsuleCollider found");
                }
            }
            else
            {
                Debug.Log("Drawer (Dynamic): SphereCollider found");
            }
        }
        else
        {
            Debug.Log("Drawer (Dynamic): BoxCollider found");
        }

        // set the joint's anchor to the handle's world position
        var handleWorldPosition =
            drawerDoorHandleCollider.transform.TransformPoint(drawerDoorHandleCollider.bounds.center);
        var jointAnchor = cJoint.transform.InverseTransformPoint(handleWorldPosition);
        switch (movementAxis)
        {
            case MovementAxis.X:
                jointAnchor.y = 0;
                jointAnchor.z = 0;
                break;
            case MovementAxis.Y:
                jointAnchor.x = 0;
                jointAnchor.z = 0;
                break;
            case MovementAxis.Z:
                jointAnchor.x = 0;
                jointAnchor.y = 0;
                break;
            default:
                jointAnchor = Vector3.zero;
                break;
        }

        cJoint.anchor = jointAnchor;
        Debug.Log($"Drawer (Dynamic): set to {jointAnchor}");
    }

    private enum MovementAxis
    {
        X,
        Y,
        Z
    }
}