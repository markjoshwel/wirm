/*
Author: Reza and Wai Lam 
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
    public string Day3;
    public GameObject confirmationPanel; 
    public TMP_Text warningText;
    public GameObject warningPanel;
    
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
        if (gameManager.currentDay == 1)
        {
            warningText.text = "Should I leave the house? I might not have completed everything...";
            StartCoroutine(HideWarningPanelAfterDelay(7f)); // can change how long you want the text to show for 
        }

        if (gameManager.currentDay == 2)
        {
            warningText.text = "Do I even want to go to school...";
            StartCoroutine(HideWarningPanelAfterDelay(7f)); // can change how long you want the text to show for
        }
    }

    IEnumerator HideWarningPanelAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);
        warningPanel.SetActive(false);
    }

    public void ConfirmLeave()
    {
        // Log player choices
        GameManager.Instance.LogPlayerChoices(); 
        
        // Load the next scene directly without needing to set the last scene
        SceneManager.LoadScene(nextSceneName);
    }

    public void CancelLeave()
    {
        confirmationPanel.SetActive(false);
        warningPanel.SetActive(true);

        if (gameManager.currentDay == 2)
        {
            gameManager.IncrementDay();
            SceneManager.LoadScene(Day3);
        }
    }
}