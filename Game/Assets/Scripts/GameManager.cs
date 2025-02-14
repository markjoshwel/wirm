  /*
Author: Reza and Wai Lam 
Date: 3/2/25
Description: To keep track of tasks, which level the player is at, and game mechanics
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    /// <summary>
    ///     Define instance field for accessing the singleton elsewhere
    /// </summary>
    public static GameManager Instance;

    // Starts from Day 1
    public int currentDay = 1;
    
    // Tracks GoToSchool task status
    private bool goToSchool = false;
    private bool bedroomCleaned = false;
    private bool teethBrushed = false;
    private bool floorSweeped = false;

    private string lastSceneName;
    
    private bool hasIncrementedToday = false; 

    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;

    // Queue for managing messages
    private Queue<string> messageQueue = new Queue<string>();
    private bool isMessageActive = false;

    /// <summary>
    ///     Checks if tasks are completed
    /// </summary>
    public bool IsBedroomCleaned() { return bedroomCleaned; }
    public bool IsTeethBrushed() { return teethBrushed; }
    public bool IsFloorSweeped() { return floorSweeped; }
    public bool IsGoToSchool() { return goToSchool; }

    /// <summary>
    ///     Enforces singleton behavior; sets doesn't destroy on load and checks for multiple instances
    /// </summary>
    private void Awake()
    {
        // check if instance hasn't been set yet
        if (Instance == null)
        {
            Debug.Log("awake as singleton instance, setting self as the forever-alive instance");
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        // check if instance is already set and it's not this instance
        else if (Instance != null && Instance != this)
        {
            Debug.Log("awake as non-singleton instance, destroying self");
            Destroy(gameObject);
        }

        // Try to find UI elements if not set
        if (storyPanelUI == null)
        {
            storyPanelUI = GameObject.Find("StoryPanelUI");
        }
        if (storyText == null)
        {
            storyText = GameObject.Find("StoryText").GetComponent<TMP_Text>();
        }
        SceneManager.sceneLoaded += OnSceneLoaded;
    }

    // Update is called once per frame
    void Update()
    {
        // Continuously check and display queued messages
        if (!isMessageActive && messageQueue.Count > 0)
        {
            string nextMessage = messageQueue.Dequeue();
            StartCoroutine(DisplayMessage(nextMessage));
        }
    }

    /// <summary>
    ///     Queues a message to be displayed
    /// </summary>
    public void QueueMessage(string message)
    {
        messageQueue.Enqueue(message);
    }

    /// <summary>
    ///     Displays a message and waits for it to disappear
    /// </summary>
    private IEnumerator DisplayMessage(string message)
    {
        isMessageActive = true;
        storyPanelUI.SetActive(true);
        storyText.text = message;
        yield return new WaitForSeconds(7f); // Wait for 7 seconds before hiding
        storyPanelUI.SetActive(false);
        isMessageActive = false;
    }

    // Logs player's choices before leaving the house (for future Firebase tracking)
    public void LogPlayerChoices()
    {
        Debug.Log("Player is trying to leave the house. Task Completion Status:");
        Debug.Log("Bedroom Cleaned: " + bedroomCleaned);
        Debug.Log("Teeth Brushed: " + teethBrushed);
        Debug.Log("Floor Sweeped: " + floorSweeped);
        Debug.Log("Go To School: " + goToSchool);
    }

    // Checks if all tasks are done before player can go to school
    public void AreTasksDone()
    {
        if (bedroomCleaned && teethBrushed && floorSweeped)
        {
            QueueMessage("I think I did everything... I think I can leave for school now");
        }
    }
    
    // mark : u can track whether they want to do their tasks, some people may be unmoticvated to 
    // do the tasks in game, then we can ask them irl why they didnt do the task

    // Tracks if bedroom is cleaned or not
    public void BedroomTaskComplete()
    {
        bedroomCleaned = true;
        AreTasksDone();
    }

    // Tracks if teeth is brushed or not
    public void BrushTeethTaskComplete()
    {
        teethBrushed = true;
        AreTasksDone();
    }

    // Tracks if floor is sweeped or not
    public void FloorSweepedTaskComplete()
    {
        floorSweeped = true;
        AreTasksDone();
    }

    public void GoToSchoolTaskComplete()
    {
        goToSchool = true;
    }

    // Increments the current day by 1
    public void IncrementDay()
    {
        if (hasIncrementedToday) return; // Prevents multiple increments
        hasIncrementedToday = true;

        currentDay++;
        Debug.Log("Day incremented to: " + currentDay);

        if (currentDay > 3)
        {
            LoadCallingScene();
        }
    }
    
    void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        hasIncrementedToday = false; // Allows the day to be incremented again in the next transition
    }

    // Loads the callingChoice scene when Day 3 is completed
    private void LoadCallingScene()
    {
        Debug.Log("Loading Calling Scene: callingChoice");
        SceneManager.LoadScene("CallingChoice");
    }
}