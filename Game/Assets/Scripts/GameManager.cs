  /*
Author: Reza
Date: 3/2/25
Description: To keep track of tasks, which level the player is at, and game mechanics
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class GameManager : MonoBehaviour
{
    
    /// <summary>
    ///     Define instance field for accessing the singleton elsewhere
    /// </summary>
    public static GameManager Instance;


    // Trackable Task Completions
    private bool bedroomCleaned = false;
    private bool teethBrushed = false;
    private bool floorSweeped = false;
    
    /// <summary>
    ///     Checks if tasks are completed
    /// </summary>
    public bool IsBedroomCleaned() { return bedroomCleaned; }
    public bool IsTeethBrushed() { return teethBrushed; }
    public bool IsFloorSweeped() { return floorSweeped; }
    
    /// <summary>
    ///     Enforces singleton behaviour; sets doesn't destroy on load and checks for multiple instances
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
    }
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    
    // Logs player's choices before leaving the house (for future Firebase tracking)
    public void LogPlayerChoices()
    {
        Debug.Log("Player is trying to leave the house. Task Completion Status:");
        Debug.Log("Bedroom Cleaned: " + bedroomCleaned);
        Debug.Log("Teeth Brushed: " + teethBrushed);
        Debug.Log("Floor Sweeped: " + floorSweeped);

        // Future-proofing for Firebase tracking
    }
    

    // Tracks if bedroom is cleaned or not
    public void BedroomTaskComplete()
    {
        bedroomCleaned = true;
    }

    // Tracks if teeth is brushed or not
    public void BrushTeethTaskComplete()
    {
        teethBrushed = true;
    }

    // Tracks if floor is sweeped or not
    public void FloorSweepedTaskComplete()
    {
        floorSweeped = true;
    }
}
