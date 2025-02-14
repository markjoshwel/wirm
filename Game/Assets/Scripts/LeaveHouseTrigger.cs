/*
 * Author: Reza, Wai Lam, Mark
 * Date: 10/2/25
 * Description: Verifies whether tasks in the house are completed before going to the next scene
 */

using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LeaveHouseTrigger : MonoBehaviour
{
    // Name of the next scene
    public string nextSceneName;
    public string day3;
    public GameObject confirmationPanel;
    public TMP_Text warningText;
    public GameObject warningPanel;

    // Start is called before the first frame update
    private void Start()
    {
        confirmationPanel.SetActive(false);
        warningText.text = "";
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player")) ShowConfirmationButtons();
    }

    private void ShowConfirmationButtons()
    {
        // FIXED: possibly refer to purely GameManager.Instance instead of any
        // early bound reference to GameManager because the game manager might
        // not have died fast enough for other scripts to refer to the new
        // GameManager instance

        // keeping this here for future ref
        // --mark

        Debug.Log("Current Day in ShowConfirmationButtons: " + GameManager.Instance.CurrentDay);
        confirmationPanel.SetActive(true);
        warningPanel.SetActive(true);
        Debug.Log("Current Day is: " + GameManager.Instance.CurrentDay);
        switch (GameManager.Instance.CurrentDay)
        {
            case 1:
                Debug.Log("Setting text for Day 1");
                warningText.text = "Should I leave the house? I might not have completed everything...";
                break;
            case 2:
                Debug.Log("Setting text for Day 2");
                warningText.text = "Do I even want to go to school...";
                break;
        }
        // can change how long you want the text to show for
        StartCoroutine(HideWarningPanelAfterDelay(7f));
    }

    private IEnumerator HideWarningPanelAfterDelay(float delay)
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
        if (GameManager.Instance.CurrentDay == 2)
        {
            GameManager.Instance.IncrementDay();
            SceneManager.LoadScene(day3);
        }

        confirmationPanel.SetActive(false);
        warningPanel.SetActive(true);
    }
}