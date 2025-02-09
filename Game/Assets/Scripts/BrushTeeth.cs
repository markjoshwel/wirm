/*
Author: Wai Lam & Reza 
Date: 27/1/25
Description: Bathroom interaction
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit.Interactors;

public class BrushTeeth : MonoBehaviour
{
    private GameManager gameManager;
    
    public Slider progressBar; // Reference to the Slider (progress bar)
    public float progressTime = 5f; // Time for the progress bar to complete
    private XRGrabInteractable grabInteractable;
    private float timer = 0f;
    private bool isGrabbing = false;
    
    // Audio References
    public AudioSource audioSource;
    public AudioClip brushingSound;

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
        
        // Play brushing sound while toothbrush is grabbed, plays only if it isn't playing already
        if (!audioSource.isPlaying)
        {
            audioSource.clip = brushingSound;
            
            // Loops the sound for as long as the toothbrush is held; allows editable progress time
            audioSource.loop = true;  
            
            audioSource.Play();
        }
    }

    private void OnRelease(SelectExitEventArgs args)
    {
        // Stop progress when released, regardless of interactor type
        progressBar.gameObject.SetActive(false);
        isGrabbing = false;
        timer = 0f;
        
        // Stop the brushing sound when the toothbrush is released
        if (audioSource.isPlaying)
        {
            audioSource.Stop();
        }
    }

    private void CompleteProgress()
    {
        progressBar.gameObject.SetActive(false);
        isGrabbing = false;
        
        // Stop the brushing sound when the task is completed
        if (audioSource.isPlaying)
        {
            audioSource.Stop();
        }
        
        GameManager.Instance.BrushTeethTaskComplete();

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
