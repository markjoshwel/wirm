using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit.Interactors;

public class SocketInteraction : MonoBehaviour
{
    private XRSocketInteractor socket;

    private void Start()
    {
        socket = GetComponent<XRSocketInteractor>();
        socket.selectEntered.AddListener(OnObjectPlaced);
    }

    private void OnObjectPlaced(SelectEnterEventArgs args)
    {
        XRBaseInteractable interactable = (XRBaseInteractable)args.interactableObject;
        if (interactable != null)
        {
            Debug.Log($"Object {interactable.gameObject.name} placed in socket!");

            // Example: Add haptic feedback to controllers
            if (args.interactorObject is XRBaseInputInteractor controller)
            {
                controller.SendHapticImpulse(0.5f, 0.2f);
            }
        }
    }

    private void OnDestroy()
    {
        socket.selectEntered.RemoveListener(OnObjectPlaced);
    }
}

