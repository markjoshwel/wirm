/*
 * Author: Reza, Wai Lam, Mark
 * Date: 3/2/25
 * Description: To keep track of tasks, which level the player is at, and game mechanics
 */

using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    /// <summary>
    ///     Define instance field for accessing the singleton elsewhere
    /// </summary>
    public static GameManager Instance;

    // Defines UI references
    [Header("UI References")] public GameObject storyPanelUI;
    public TMP_Text storyText;

    // Queue for managing messages
    private readonly Queue<string> _messageQueue = new();
    private bool _bedroomCleaned;
    private bool _floorSwept;

    // Tracks GoToSchool task status
    private bool _goToSchool;

    private bool _hasIncrementedToday;
    private bool _isMessageActive;

    private string _lastSceneName;
    private bool _teethBrushed;

    // current day, publicly readable, privately settable

    // for public access, setting is a no-op
    public int CurrentDay { get; private set; } = 1;

    /// <summary>
    ///     Enforces singleton behavior; sets doesn't destroy on load and checks for multiple instances
    /// </summary>
    private void Awake()
    {
        // check if instance hasn't been set yet
        if (Instance == null)
        {
            Debug.Log(
                $"game manager ({GetInstanceID()}) is awake as singleton instance, setting self as the forever-alive instance");
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        // check if instance is already set and it's not this instance
        else if (Instance != null && Instance != this)
        {
            Debug.Log($"game manager ({GetInstanceID()}) is awake as non-singleton instance, destroying self");
            Destroy(gameObject);
            return;
        }

        Debug.Log($"game manager ({GetInstanceID()}) is initialising itself!");
        CurrentDay = 1;

        // Try to find UI elements if not set
        if (storyPanelUI == null) storyPanelUI = GameObject.Find("StoryPanelUI");

        if (storyText == null) storyText = GameObject.Find("StoryText").GetComponent<TMP_Text>();

        SceneManager.sceneLoaded += OnSceneLoaded;
    }

    // Update is called once per frame
    private void Update()
    {
        // Continuously check and display queued messages
        if (!_isMessageActive && _messageQueue.Count > 0)
        {
            var nextMessage = _messageQueue.Dequeue();
            StartCoroutine(DisplayMessage(nextMessage));
        }
    }

    /// <summary>
    ///     Checks if tasks are completed
    /// </summary>
    public bool IsBedroomCleaned()
    {
        return _bedroomCleaned;
    }

    public bool IsTeethBrushed()
    {
        return _teethBrushed;
    }

    public bool IsFloorSwept()
    {
        return _floorSwept;
    }

    public bool IsGoToSchool()
    {
        return _goToSchool;
    }

    /// <summary>
    ///     Queues a message to be displayed
    /// </summary>
    // ReSharper disable once MemberCanBePrivate.Global
    public void QueueMessage(string message)
    {
        _messageQueue.Enqueue(message);
    }

    /// <summary>
    ///     Displays a message and waits for it to disappear
    /// </summary>
    private IEnumerator DisplayMessage(string message)
    {
        _isMessageActive = true;
        storyPanelUI.SetActive(true);
        storyText.text = message;
        yield return new WaitForSeconds(7f); // Wait for 7 seconds before hiding
        storyPanelUI.SetActive(false);
        _isMessageActive = false;
    }

    // log the players choices before leaving the house (for future Firebase tracking)
    public void LogPlayerChoices()
    {
        Debug.Log("Player is trying to leave the house. Task Completion Status:");
        Debug.Log("Bedroom Cleaned: " + _bedroomCleaned);
        Debug.Log("Teeth Brushed: " + _teethBrushed);
        Debug.Log("Floor Swept: " + _floorSwept);
        Debug.Log("Go To School: " + _goToSchool);
    }

    // Checks if all tasks are done before player can go to school
    // ReSharper disable once MemberCanBePrivate.Global
    public void AreTasksDone()
    {
        if (_bedroomCleaned && _teethBrushed && _floorSwept)
            QueueMessage("I think I did everything... I think I can leave for school now");
    }

    // for mark (backend): u can track whether they want to do their tasks, some people may be unmotivated to 
    // do the tasks in game, then we can ask them irl why they didn't do the task

    // Tracks if the bedroom is cleaned or not
    public void BedroomTaskComplete()
    {
        _bedroomCleaned = true;
        AreTasksDone();
    }

    // Tracks if teeth are brushed or not
    public void BrushTeethTaskComplete()
    {
        _teethBrushed = true;
        AreTasksDone();
    }

    // Tracks if the floor has been swept or not
    public void FloorSweptTaskComplete()
    {
        _floorSwept = true;
        AreTasksDone();
    }

    public void GoToSchoolTaskComplete()
    {
        _goToSchool = true;
    }

    // Increments the current day by 1
    public void IncrementDay()
    {
        if (_hasIncrementedToday) return; // Prevents multiple increments
        _hasIncrementedToday = true;

        CurrentDay++;
        Debug.Log("Day incremented to: " + CurrentDay);
        if (CurrentDay > 3) LoadCallingScene();
    }

    private void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        _hasIncrementedToday = false; // Allows the day to be incremented again in the next transition
    }

    // Loads the callingChoice scene when Day 3 is completed
    private void LoadCallingScene()
    {
        Debug.Log("Loading Calling Scene: callingChoice");
        // Debug.LogError("not ready yet");
        // FIXME: SceneManager.LoadScene("CallingChoice");
        SceneManager.LoadScene("EndingChoice");
    }
}