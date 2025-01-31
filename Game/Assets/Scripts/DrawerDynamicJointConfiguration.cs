using System;
using UnityEngine;

public class DrawerDynamicJointConfiguration : MonoBehaviour
{
    [Header("mark's dynamic drawer component")]
    [Space(10)]
    [HelpBox("make sure every child inside both prefabs are under the" +
             "'Interactable Environment' layer.\n\n" +
             "whatever object geometry under the " +
             "interactable prefab should have a convex mesh collider!\n\n" +
             "any physics silliness may be fixable by adjusting the XR Grab Interactable " +
             "> Track Position > Velocity Scale\n\n" +
             "ANY immediate children objects must have their transforms reset to 0 0 0 " +
             "so that the ConfigurableJoint would be positioned correctly",
        HelpBoxMessageType.Error)]
    [Space(10)]
    [SerializeField]
    private MovementAxis movementAxis = MovementAxis.Z;

    [SerializeField] private float maxMovementDistance = 0.5f;

    private void Awake()
    {
        // get configurable joint component
        var cJoint = GetComponent<ConfigurableJoint>();
        if (cJoint == null)
            throw new Exception("Drawer (Dynamic): ConfigurableJoint component not found");

        // lock all motions (linear + angular) except for the desired (linear) axis
        cJoint.xMotion = movementAxis == MovementAxis.X ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
        cJoint.yMotion = movementAxis == MovementAxis.Y ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
        cJoint.zMotion = movementAxis == MovementAxis.Z ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
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

        // guess the handle collider lol
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

        // prevent the joint from moving the connected body to the joint's anchor
        // cj.autoConfigureConnectedAnchor = false;
        
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