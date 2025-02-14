/*
Author: Wai Lam & Reza
Date: 27/1/25
Description: Bathroom interaction
*/

using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.XR.Interaction.Toolkit.Interactables;
using UnityEngine.XR.Interaction.Toolkit.Interactors;

public class BrushTeeth : MonoBehaviour
{
    public Slider progressBar; // Reference to the Slider (progress bar)
    public float progressTime = 5f; // Time for the progress bar to complete

    // Defines UI references
    [Header("UI References")] public GameObject storyPanelUI;

    public TMP_Text storyText;

    // Defines Audio References
    [Header("Audio References")] public AudioSource audioSource;

    public AudioClip brushingSound;
    private GameManager _gameManager;
    private XRGrabInteractable _grabInteractable;
    private bool _isGrabbing;

    private bool _taskCompleted;
    private float _timer;

    private void Start()
    {
        _grabInteractable = GetComponent<XRGrabInteractable>();

        if (_grabInteractable == null)
        {
            Debug.LogError("XRGrabInteractable component not found on the object!");
            return;
        }

        // Ensure the progress bar is hidden initially
        progressBar.gameObject.SetActive(false);

        // Subscribe to grab and release events
        _grabInteractable.selectEntered.AddListener(OnGrab);
        _grabInteractable.selectExited.AddListener(OnRelease);
    }

    private void Update()
    {
        if (!_isGrabbing || _taskCompleted) return;
        
        _timer += Time.deltaTime;
        progressBar.value = _timer / progressTime;

        if (_timer >= progressTime) CompleteProgress();
    }

    private void OnDestroy()
    {
        if (_grabInteractable == null) return;
        
        _grabInteractable.selectEntered.RemoveListener(OnGrab);
        _grabInteractable.selectExited.RemoveListener(OnRelease);
    }

    private void OnGrab(SelectEnterEventArgs args)
    {
        // Ignore if grabbed by a socket interactor
        if (args.interactorObject.transform.GetComponent<XRSocketInteractor>() !=
            null) return; // Do nothing if grabbed by a socket

        // Only show progress bar if NOT grabbed by a socket
        progressBar.gameObject.SetActive(true);
        progressBar.value = 0f;
        _timer = 0f;
        _isGrabbing = true;

        // Play brushing sound while toothbrush is grabbed, plays only if it isn't playing already
        if (audioSource.isPlaying) return;
        
        audioSource.clip = brushingSound;

        // Loops the sound for as long as the toothbrush is held; allows editable progress time
        audioSource.loop = true;

        audioSource.Play();
    }

    private void OnRelease(SelectExitEventArgs args)
    {
        // Stop progress when released, regardless of interactor type
        progressBar.gameObject.SetActive(false);
        _isGrabbing = false;
        _timer = 0f;

        // Stop the brushing sound when the toothbrush is released
        if (audioSource.isPlaying) audioSource.Stop();
    }

    private void CompleteProgress()
    {
        if (_taskCompleted) return;

        _taskCompleted = true;
        progressBar.gameObject.SetActive(false);
        _isGrabbing = false;

        // Stop the brushing sound when the task is completed
        if (audioSource.isPlaying) audioSource.Stop();

        GameManager.Instance.BrushTeethTaskComplete();

        storyPanelUI.SetActive(true);
        storyText.text = "I should be fresh enough to go to school now...";

        // Clear the text after a delay
        StartCoroutine(ClearMessageAfterSeconds(7f));

        Debug.Log("Progress completed!");
    }

    private IEnumerator ClearMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyText.text = "";
    }
}