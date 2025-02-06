using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class RubbishBin : MonoBehaviour
{
    private UnityEngine.XR.Interaction.Toolkit.Interactors.XRSocketInteractor socket;

    private void Start()
    {
        socket = GetComponent<UnityEngine.XR.Interaction.Toolkit.Interactors.XRSocketInteractor>();

        if (socket == null)
        {
            Debug.LogError("XRSocketInteractor component is missing from the rubbish bin!");
            return;
        }

        socket.selectEntered.AddListener(OnTrashPlaced);
    }

    private void OnTrashPlaced(SelectEnterEventArgs args)
    {
        UnityEngine.XR.Interaction.Toolkit.Interactables.XRBaseInteractable trash = (UnityEngine.XR.Interaction.Toolkit.Interactables.XRBaseInteractable)args.interactableObject;

        if (trash != null)
        {
            Debug.Log($"{trash.gameObject.name} was placed in the rubbish bin and destroyed.");
            Destroy(trash.gameObject);

            // Add haptic feedback if using a VR controller
            if (args.interactorObject is UnityEngine.XR.Interaction.Toolkit.Interactors.XRBaseInputInteractor controller)
            {
                controller.SendHapticImpulse(0.7f, 0.2f);
            }
        }
    }

    private void OnDestroy()
    {
        if (socket != null)
        {
            socket.selectEntered.RemoveListener(OnTrashPlaced);
        }
    }
}

