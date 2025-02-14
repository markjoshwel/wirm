/*
Author: Reza, Wai Lam, Mark
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
        // FIXED: possibly refer to purely GameManager.Instance instead of any
        // early-bound reference to GameManager because the game manager might
        // not have died fast enough for other scripts to refer to the new
        // GameManager instance
        
        // keeping this here for future ref
        // --mark
        
        Debug.Log("Current Day in ShowConfirmationButtons: " + GameManager.Instance.currentDay);
        confirmationPanel.SetActive(true);
        warningPanel.SetActive(true);  
        Debug.Log("Current Day is: " + GameManager.Instance.currentDay);
        if (GameManager.Instance.currentDay == 1)
        {
            Debug.Log("Setting text for Day 1");
            warningText.text = "Should I leave the house? I might not have completed everything...";
        }

        else if (GameManager.Instance.currentDay == 2)
        {
            Debug.Log("Setting text for Day 2");
            warningText.text = "Do I even want to go to school...";
          
        }
        StartCoroutine(HideWarningPanelAfterDelay(7f)); // can change how long you want the text to show for
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
        if (GameManager.Instance.currentDay == 2)
        {
            GameManager.Instance.IncrementDay();
            SceneManager.LoadScene(Day3);
        }
        confirmationPanel.SetActive(false);
        warningPanel.SetActive(true);
    }
}