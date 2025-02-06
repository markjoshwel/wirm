using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit.Interactors;

public class Brushteeth : MonoBehaviour
{
    // public Slider progressBar; // Reference to the Slider (progress bar)
    // public float progressTime = 5f; // Time for the progress bar to complete
    // private UnityEngine.XR.Interaction.Toolkit.Interactables.XRGrabInteractable grabInteractable;
    // private float timer = 0f;
    // private bool isGrabbing = false;
    //
    // void Start()
    // {
    //     grabInteractable = GetComponent<UnityEngine.XR.Interaction.Toolkit.Interactables.XRGrabInteractable>();
    //
    //     if (grabInteractable == null)
    //     {
    //         Debug.LogError("XRGrabInteractable component not found on the object!");
    //         return;
    //     }
    //
    //     // Ensure the progress bar is hidden initially
    //     progressBar.gameObject.SetActive(false);
    //
    //     // Subscribe to grab and release events
    //     grabInteractable.selectEntered.AddListener(OnGrab);
    //     grabInteractable.selectExited.AddListener(OnRelease);
    // }
    //
    // void Update()
    // {
    //     if (isGrabbing)
    //     {
    //         timer += Time.deltaTime;
    //         progressBar.value = timer / progressTime;
    //
    //         if (timer >= progressTime)
    //         {
    //             CompleteProgress();
    //         }
    //     }
    // }
    //
    // private void OnGrab(SelectEnterEventArgs args)
    // {
    //     // Show and reset the progress bar
    //     progressBar.gameObject.SetActive(true);
    //     progressBar.value = 0f;
    //     timer = 0f;
    //     isGrabbing = true;
    // }
    //
    // private void OnRelease(SelectExitEventArgs args)
    // {
    //     // Hide the progress bar and stop the timer
    //     progressBar.gameObject.SetActive(false);
    //     isGrabbing = false;
    //     timer = 0f;
    // }
    //
    // private void CompleteProgress()
    // {
    //     // Hide the progress bar and perform any additional actions when complete
    //     progressBar.gameObject.SetActive(false);
    //     isGrabbing = false;
    //
    //     Debug.Log("Progress completed!");
    // }
    //
    // private void OnDestroy()
    // {
    //     // Unsubscribe from events to avoid memory leaks
    //     if (grabInteractable != null)
    //     {
    //         grabInteractable.selectEntered.RemoveListener(OnGrab);
    //         grabInteractable.selectExited.RemoveListener(OnRelease);
    //     }
    // }
   public Slider progressBar; // Reference to the Slider (progress bar)
    public float progressTime = 5f; // Time for the progress bar to complete
    private XRGrabInteractable grabInteractable;
    private float timer = 0f;
    private bool isGrabbing = false;

    void Start()
    {
        grabInteractable = GetComponent<XRGrabInteractable>();

        if (grabInteractable == null)
        {
            Debug.LogError("XRGrabInteractable component not found on the object!");
            return;
        }

        // Ensure the progress bar is hidden initially
        progressBar.gameObject.SetActive(false);

        // Subscribe to grab and release events
        grabInteractable.selectEntered.AddListener(OnGrab);
        grabInteractable.selectExited.AddListener(OnRelease);
    }

    void Update()
    {
        if (isGrabbing)
        {
            timer += Time.deltaTime;
            progressBar.value = timer / progressTime;

            if (timer >= progressTime)
            {
                CompleteProgress();
            }
        }
    }

    private void OnGrab(SelectEnterEventArgs args)
    {
        // Ignore if grabbed by a socket interactor
        if (args.interactorObject.transform.GetComponent<XRSocketInteractor>() != null)
        {
            return; // Do nothing if grabbed by a socket
        }

        // Only show progress bar if NOT grabbed by a socket
        progressBar.gameObject.SetActive(true);
        progressBar.value = 0f;
        timer = 0f;
        isGrabbing = true;
    }

    private void OnRelease(SelectExitEventArgs args)
    {
        // Stop progress when released, regardless of interactor type
        progressBar.gameObject.SetActive(false);
        isGrabbing = false;
        timer = 0f;
    }

    private void CompleteProgress()
    {
        progressBar.gameObject.SetActive(false);
        isGrabbing = false;

        Debug.Log("Progress completed!");
    }

    private void OnDestroy()
    {
        if (grabInteractable != null)
        {
            grabInteractable.selectEntered.RemoveListener(OnGrab);
            grabInteractable.selectExited.RemoveListener(OnRelease);
        }
    }
}
