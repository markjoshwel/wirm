/*
 * Author: Isaac
 * Date: 11/2/25
 * Description: Post-processing camera effects emulating various conditions
 */

using UnityEngine;
using UnityEngine.SceneManagement;

public class PhoneInteraction : MonoBehaviour
{
    public AudioClip phoneCallAudio; // Assign in Inspector
    public GameObject choiceUI; // Assign your UI Panel in Inspector
    public Transform attachTransform; // Drag XR Controller's Attach Transform here

    private AudioSource _audioSource;
    private bool _choiceMade;
    private bool _phonePickedUp;

    public AuthManager authManager;

    private void Start()
    {
        // Ensure AudioSource is available
        if (!TryGetComponent(out _audioSource)) _audioSource = gameObject.AddComponent<AudioSource>();

        if (phoneCallAudio != null) _audioSource.clip = phoneCallAudio;

        choiceUI.SetActive(false); // Hide UI initially
    }

    private void Update()
    {
        if (!_phonePickedUp || _choiceMade) return;
        if (Input.GetKeyDown(KeyCode.A))
            AnswerCall();
        else if (Input.GetKeyDown(KeyCode.B)) DeclineCall();
    }

    // Public method to be used in XR Grab interactable OnSelectEntered event
    public void PickUpPhone()
    {
        if (_phonePickedUp) return;
        _phonePickedUp = true;
        Debug.Log("Phone Picked Up! Showing UI.");
        choiceUI.SetActive(true); // Show the UI panel

        // Ensure the phone attaches properly
        if (attachTransform == null) return;
        transform.position = attachTransform.position;
        transform.rotation = attachTransform.rotation;
    }

    // for mark (backend): this is whether the player chooses between seeking help/not seeking help
    // maybe because they were scared or something? 

    // we can save this to ask them why they chose this and gather info on this because
    // that time I pitched this to a teacher they were happy

    // something like the MSF wanting to know how to improve and get people to reach out???

    private void AnswerCall()
    {
        _choiceMade = true;
        Debug.Log("Phone Answered! Loading GoodEnding...");
        choiceUI.SetActive(false);
        SceneManager.LoadScene("GoodEnding");

        authManager.UpdatePickupCallStatus(true);  // Call the function to update Firebase


    }

    private void DeclineCall()
    {
        _choiceMade = true;
        Debug.Log("Call Declined! Loading BadEnding...");
        choiceUI.SetActive(false);
        SceneManager.LoadScene("BadEnding");

        authManager.UpdatePickupCallStatus(false);  // Call the function to update Firebase

    }
}