using System;
using UnityEngine;
��4�3�*�4��"��4�2,)�$7�2��1��77��7��4:�$7�2��1�01������-����4����6�7�27:�<��73,�#�0�$7�2��1�01������-����4����6�7�27:�<��73��77���:�01�2��47����
public class DrawerDynamicJointConfiguration : MonoBehaviour
{
    [Header("mark's all-in-one dynamic drawer component")]
    [Space(10)]
    [HelpBox("make sure every child inside both prefabs are under the" +
             "'Interactable Environment' layer.\n\n" +
   �;�0�2�29�7��9�07�092�0�0(�7��46�2��71��1:�����2:�<�:7�29:�2���47�2��1�01�28�2�01�9��:62�0�2�0��77�2<���94��76�4�29�43:�2��7��7�2���9�0��::�4�.7.7���0�<��:9�2�$7�2��1��77���9�2�9�0�0�,)�'���47+�������2�0�'3��2����77:�76�2������0��09�$7�2��1�7����:9�2�$7�2��1��77���9�2���9��:62�2�0�2:�2����$7�2��1�01�2�"7�4�7��27����29�4�1�:�22�47�4�������9:����5�        HelpBoxMessageType.Error)]
    [Space(10)]
    [SerializeField]
    private MovementAxis movementAxis = MovementAxis.Z;

    �������0�<����:�2��0����6��9�0��2:�22���29��07�2�:6�22��:����������0�<��-��76�48:�2��0����6��9�0��2:�22���29��07�2�:6�22��::��.���2��0�4�2��26��8�4�0�23��0:��0��7���27:��9�0��2�������������0�<����:�2�2���4�<���0�2�73:�22���29��;��9:�4:��07��7�����������0�<��-��76�48:�2�2���4�<���0�2�73:�22���29��;��9:�4:��07��7�2��.���2��0�4�2��26��8�4�0�23��0:�2���4����0�2����

    private void Awake()
    {
        // �77���:�2:�2 configurable joint component
        var cJoint = GetComponent<ConfigurableJoint>();
        if (cJoint == null)
            throw new Exception("Drawer (Dynamic): ConfigurableJoint component not found �:7���1�01���");

�����5�066��7��7�9�4��09�072�0��:�0��2��28:�79:�2���4�22�4��0��0����2��3��3"���29�<���������4�3��7���27:�7�0��9���7���27� ���>����1��47:��7��77���7���27� ��9����7���27� ��9����77���:�01�2��47��7��77���4�2���77���:�01�2��47��7��77����2���1��47:���7��77���7���27� ��9����7���27� ��9�����77���:�01�2��47��7��77���4�2���77���:�01�2��47��7��77����2���1��47:��7��77���7���27� ��9����7���27� ��9����77���:�01�2��47��7��77���4�2���77���:�01�2��47��7��77����2��        cJoint.angularXMotion = ConfigurableJointMotion.Locked;
        cJoint.angularYMotion = ConfigurableJointMotion.Locked;
        cJoint.angularZMotion = ConfigurableJointMotion.Locked;

        // set linear limit
        cJoint.linearLimit = new SoftJointLimit
        {
            limit = maxMovementDistance,
            bounciness = 0,
            contactDistance = 0
        };
�����77���:�2:�2���42�7���0991���2���6�7�27:���42�7�<���91����4���0��1��0����91����#�0�4�<��0����91��76����77�2��1��7��7�2���76����77�2��1��7��7�2��77�4����9�<�����������77���:�2:�2�3�01�47�2��1�01���09�3�0�$7�2��1�01�2���2���6�7�27:,�#�0�$7�2��1�01�2����3�0�$7�2��1�01�2��7���27:�<�2�,)����$7�2��1�01�2��7���27:�<�2�2���4�<*����4����3�0�$7�2��1�01�2:���5���4��77�:�����3�0�$7�2��1�01�2�2���4����0�2��2���4����0����
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