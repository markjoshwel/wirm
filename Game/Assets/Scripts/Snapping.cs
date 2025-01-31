/*
 * Author: mark
 * Date: 8/12/2024
 * Description: interaction for snapping objects to a target, and vice versa
 */

using System;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit.Interactables;

// WARN: this is an incredibly delicate bit of bodge code, here lies dragons

/// <summary>
///     class for snapping objects to a target, and vice versa
/// </summary>
public class Snapping : MonoBehaviour
{
    /// <summary>
    ///     enum to determine what type of snapping behaviour the object should have
    /// </summary>
    public enum Type
    {
        Target,
        NonTarget
    }

    /// <summary>
    ///     enum to determine the snapping behaviour of the object
    /// </summary>
    [SerializeField] public Type snappingBehaviourType = Type.NonTarget;

    /// <summary>
    ///     optional tag to match if we are a target
    /// </summary>
    [SerializeField] private string optionalMatchIfTag;

    /// <summary>
    ///     bool to keep the object permanently snapped to the target
    /// </summary>
    [SerializeField] private bool keepObjectSnapped;

    /// <summary>
    ///     public bool for other scripts to check if an object has snapped to this object, if it is a target
    /// </summary>
    public bool hasObjectSnapped;

    /// <summary>
    ///     flag to wait until the next frame to prevent multiple OnTriggerEnter calls
    /// </summary>
    private bool _blockOnTriggerEnter;

    /// <summary>
    ///     flag to wait until the next frame to prevent multiple OnTriggerExit calls
    /// </summary>
    private bool _blockOnTriggerExit;

    /// <summary>
    ///     interactable to re-enable after we have snapped
    /// </summary>
    private Transform _incomingSnappedTransform;

    /// <summary>
    ///     interactable to keep track of if they leave the snapping trigger
    /// </summary>
    private Transform _outgoingSnappedTransform;

    /// <summary>
    ///     first-ran function to check if the snapping prefab or this component is set up correctly
    /// </summary>
    /// <exception cref="Exception"></exception>
    private void Awake()
    {
        // check if we have a trigger collider as a target
        if (snappingBehaviourType != Type.Target) return;
        var triggerCollider = GetComponent<Collider>();
        if (triggerCollider == null)
            throw new Exception("this snapping object is a target, yet does not have a trigger collider. "
                                + "this should not happen, as triggers are used by targets to detect when a non-target is colliding with it!");
    }

    /// <summary>
    ///     update state of any variables
    /// </summary>
    private void Start()
    {
        if (snappingBehaviourType == Type.NonTarget) return;

        // if we are a target...
        foreach (Transform child in transform)
        {
            // hide any children objects
            var possibleMeshRenderer = child.GetComponent<MeshRenderer>();
            if (possibleMeshRenderer != null) possibleMeshRenderer.enabled = false;

            // and also any children colliders
            var possibleCollider = child.GetComponent<Collider>();
            if (possibleCollider != null) possibleCollider.enabled = false;
        }
    }

    /// <summary>
    ///     check if we need to re-enable any grabbable objects
    /// </summary>
    private void Update()
    {
        // do not for the love of god remove or even move this line within the function
        if (_blockOnTriggerEnter) _outgoingSnappedTransform = null;

        _blockOnTriggerEnter = false;
        _blockOnTriggerExit = false;

        // if we have a grabbed object, snap it and re-enable it (because we must've just snapped to it)
        // ReSharper disable once InvertIf
        if (_incomingSnappedTransform != null)
        {
            Snap(_incomingSnappedTransform);

            // one more time, just to be sure
            _incomingSnappedTransform.position = transform.position;
            _incomingSnappedTransform.rotation = transform.rotation;

            // then reenable if needed
            if (!keepObjectSnapped) _incomingSnappedTransform.GetComponent<XRGrabInteractable>().enabled = true;

            // ...and go about our merry way
            _incomingSnappedTransform = null;
        }

        if (hasObjectSnapped) Debug.Log("we are snapped!");
    }

    /// <summary>
    ///     snap/teleport non-targets to target objects
    /// </summary>
    /// <param name="other">the object entering the trigger</param>
    private void OnTriggerEnter(Collider other)
    {
        if (_blockOnTriggerEnter) return;
        Debug.Log("snapping trigger hit");

        // if we are a non-target, we should not have a trigger collider
        if (snappingBehaviourType != Type.Target)
            throw new Exception("this snapping object is a non-target, yet has a trigger. "
                                + "this should not happen, as triggers are used by targets to detect when a non-target is colliding with it!");

        // check if we are just accidentally reregistering a previously snapped object
        if ((_outgoingSnappedTransform != null) & (_outgoingSnappedTransform == other.transform))
        {
            Debug.Log("...already snapped this one");

            _incomingSnappedTransform = null;
            _outgoingSnappedTransform = null;

            // god, I do not know why these need to be here but they *just* need to be here
            // _blockOnTriggerEnter = true;
            _blockOnTriggerExit = true;
            return;
        }

        // are we colliding with another object that has a 'Snapping' component?
        var possibleSnappingComponent = other.transform.GetComponentsInParent<Snapping>();
        if (possibleSnappingComponent == null)
        {
            Debug.Log("not snapping this one... "
                      + "(not in a Snapping prefab or parent game object with the Snapping component)");
            return;
        }

        // if an optional tag string is set, check if the object or parent prefab/game object has that tag
        if (!string.IsNullOrEmpty(optionalMatchIfTag))
        {
            var possibleTag = other.transform.tag ?? "";
            var possibleParentTag = other.transform.parent?.tag ?? "";
            if (possibleTag != optionalMatchIfTag && possibleParentTag != optionalMatchIfTag)
            {
                Debug.Log("not snapping this one... "
                          + "(does not have the optional tag string)");
                return;
            }
        }

        _incomingSnappedTransform = other.transform;
        _blockOnTriggerEnter = true;
        Stop(other.transform);
    }

    /// <summary>
    ///     reset the snapped interactable object
    /// </summary>
    /// <param name="other">the other object exiting the trigger</param>
    private void OnTriggerExit(Collider other)
    {
        if (_blockOnTriggerExit) return;
        Debug.Log("snapping trigger exit~");

        Stop(other.transform);
        _outgoingSnappedTransform = other.transform;

        _blockOnTriggerEnter = true;
        hasObjectSnapped = false;
    }

    /// <summary>
    ///     function to stop the object from moving
    /// </summary>
    /// <param name="otherTransform">Transform passed in from OnTrigger physics calls</param>
    private void Stop(Transform otherTransform)
    {
        var possibleRigidbody = otherTransform.GetComponent<Rigidbody>();
        if (possibleRigidbody == null) return;
        possibleRigidbody.velocity = Vector3.zero;
        possibleRigidbody.angularVelocity = Vector3.zero;
    }

    /// <summary>
    ///     function to snap it so that it happens in update land and not in OnTrigger___ land
    /// </summary>
    /// <param name="otherTransform">Transform passed in from OnTrigger physics calls</param>
    private void Snap(Transform otherTransform)
    {
        // NOTE: literally do NOT move/inline this function anywhere
        // call order and "race conditions" have caused me hours of great pain

        // make the user drop it
        var possibleInteractable = otherTransform.GetComponent<XRGrabInteractable>();
        if (possibleInteractable != null && possibleInteractable.isSelected)
            possibleInteractable.enabled = false;

        // then snap it
        // Stop(otherTransform);
        otherTransform.position = transform.position;
        otherTransform.rotation = transform.rotation;

        _blockOnTriggerExit = true;
        hasObjectSnapped = true;
        Debug.Log("snapped");
    }
}