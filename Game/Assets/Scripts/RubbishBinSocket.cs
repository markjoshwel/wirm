/*
 * Author: Isaac
 * Date: 7/2/25
 * Description: Script to handle the interaction between the rubbish bin and the trash objects
 */

using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit.Interactors;

public class RubbishBinSocket : MonoBehaviour
{
    private XRSocketInteractor _socket;

    private void Start()
    {
        _socket = GetComponent<XRSocketInteractor>();

        if (_socket == null)
        {
            Debug.LogError("XRSocketInteractor component is missing from the rubbish bin!");
            return;
        }

        _socket.selectEntered.AddListener(OnTrashPlaced);
    }

    private void OnDestroy()
    {
        if (_socket != null) _socket.selectEntered.RemoveListener(OnTrashPlaced);
    }

    private void OnTrashPlaced(SelectEnterEventArgs args)
    {
        var trash = (XRBaseInteractable)args.interactableObject;

        if (trash == null) return;
        Debug.Log($"{trash.gameObject.name} was placed in the rubbish bin and destroyed.");
        Destroy(trash.gameObject);

        // Add haptic feedback if using a VR controller
        if (args.interactorObject is XRBaseInputInteractor controller) controller.SendHapticImpulse(0.7f, 0.2f);
    }
}