using System;
using UnityEngine;

public class DrawerDynamicJointConfiguration : MonoBehaviour
{
    public enum MovementAxis
    {
        X,
        Y,
        Z
    }
    
    [Header("mark's dynamic drawer component")]
    [Space(10)]
    [HelpBox("make sure every child inside both prefabs are under the 'Interactable Environment' layer, thx", HelpBoxMessageType.Warning)]
    [Space(10)]
    [SerializeField] private MovementAxis movementAxis = MovementAxis.Z;
    [SerializeField] private float maxDistance = 0.5f;
    
    private void Awake()
    {
        // get configurable joint component
        var cj = GetComponent<ConfigurableJoint>();
        if (cj == null)
            throw new Exception("Drawer (Dynamic): ConfigurableJoint component not found");
        
        // lock all motions (linear + angular) except for the desired (linear) axis
        cj.xMotion = movementAxis == MovementAxis.X ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
        cj.yMotion = movementAxis == MovementAxis.Y ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
        cj.zMotion = movementAxis == MovementAxis.Z ? ConfigurableJointMotion.Limited : ConfigurableJointMotion.Locked;
        cj.angularXMotion = ConfigurableJointMotion.Locked;
        cj.angularYMotion = ConfigurableJointMotion.Locked;
        cj.angularZMotion = ConfigurableJointMotion.Locked;
        
        // set linear limit
        cj.linearLimit = new SoftJointLimit
        {
            limit = maxDistance,
            bounciness = 0,
            contactDistance = 0
        };
    }
}
