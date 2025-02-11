using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.SceneManagement;
using UnityEngine.XR.Interaction.Toolkit.Interactors;


public class PhoneInteraction : MonoBehaviour
{
    public AudioClip phoneCallAudio; // Assign in Inspector
    public GameObject choiceUI; // Assign your UI Panel in Inspector

    private AudioSource audioSource;
    private bool phonePickedUp = false;
    private bool choiceMade = false;

    void Start()
    {
        audioSource = GetComponent<AudioSource>() ?? gameObject.AddComponent<AudioSource>();
        audioSource.clip = phoneCallAudio;
        choiceUI.SetActive(false); // Hide UI initially
    }

    void Update()
    {
        if (phonePickedUp && !choiceMade)
        {
            if (Input.GetKeyDown(KeyCode.G))
            {
                AnswerCall();
            }
            else if (Input.GetKeyDown(KeyCode.B))
            {
                DeclineCall();
            }
        }
    }

    public void PickUpPhone()
    {
        if (!phonePickedUp)
        {
            phonePickedUp = true;
            Debug.Log("Phone Picked Up! UI Appears.");
            choiceUI.SetActive(true); // Show UI when picked up
        }
    }

    void AnswerCall()
    {
        choiceMade = true;
        Debug.Log("Phone Answered! Playing Audio...");
        audioSource.Play();
        choiceUI.SetActive(false); // Hide UI after choice
    }

    void DeclineCall()
    {
        choiceMade = true;
        Debug.Log("Call Declined! Loading 'House' scene...");
        SceneManager.LoadScene("House");
    }
}