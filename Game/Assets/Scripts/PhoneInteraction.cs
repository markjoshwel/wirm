using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.SceneManagement;

public class PhoneInteraction : MonoBehaviour
{
    public AudioClip phoneCallAudio; // Assign in Inspector
    public GameObject choiceUI; // Assign your UI Panel in Inspector
    public Transform attachTransform; // Drag XR Controller's Attach Transform here

    private AudioSource audioSource;
    private bool phonePickedUp = false;
    private bool choiceMade = false;

    void Start()
    {
        // Ensure AudioSource is available
        if (!TryGetComponent(out audioSource))
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }

        if (phoneCallAudio != null)
        {
            audioSource.clip = phoneCallAudio;
        }

        choiceUI.SetActive(false); // Hide UI initially
    }

    // Public method to be used in XR Grab Interactable's On Select Entered event
    public void PickUpPhone()
    {
        if (!phonePickedUp)
        {
            phonePickedUp = true;
            Debug.Log("Phone Picked Up! Showing UI.");
            choiceUI.SetActive(true); // Show UI panel

            // Ensure phone attaches properly
            if (attachTransform != null)
            {
                transform.position = attachTransform.position;
                transform.rotation = attachTransform.rotation;
            }
        }
    }

    private void Update()
    {
        if (phonePickedUp && !choiceMade)
        {
            if (Input.GetKeyDown(KeyCode.A))
            {
                AnswerCall();
            }
            else if (Input.GetKeyDown(KeyCode.B))
            {
                DeclineCall();
            }
        }
    }

    private void AnswerCall()
    {
        choiceMade = true;
        Debug.Log("Phone Answered! Loading GoodEnding...");
        choiceUI.SetActive(false);
        SceneManager.LoadScene("GoodEnding");
    }

    private void DeclineCall()
    {
        choiceMade = true;
        Debug.Log("Call Declined! Loading BadEnding...");
        choiceUI.SetActive(false);
        SceneManager.LoadScene("BadEnding");
    }
}

