/*
Author: Reza
Date: 10/2/25
Description: Verifies whether tasks in the house are completed before going to the next scene
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 
using TMPro;

public class LeaveHouseTrigger : MonoBehaviour
{
    public GameManager gameManager; 
    
    // Name of the next scene
    public string nextSceneName;
    public GameObject confirmationPanel; 
    public TMP_Text warningText;
    
    // Start is called before the first frame update
    void Start()
    {
     confirmationPanel.SetActive(false);
     warningText.text = "";
    }
    
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            ShowConfirmationButtons();
        }
    }

    void ShowConfirmationButtons()
    {
        confirmationPanel.SetActive(true);
        warningText.text = "Am I sure I want to leave the house? I might not have completed everything...";
    }

    public void ConfirmLeave()
    {
        GameManager.Instance.LogPlayerChoices(); 
        SceneManager.LoadScene(nextSceneName);
    }

    public void CancelLeave()
    {
        confirmationPanel.SetActive(false);
    }

}