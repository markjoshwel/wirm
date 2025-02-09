/*
Author: Reza
Date: 3/2/25
Description: To keep track of tasks, which level the player is at, and game mechanics
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    /* Game Story Flow:
     - Player cleans room while waiting for parents to leave
     - The door unlocks after room is cleaned and explored and player either sweeps floor or brushes teeth
     - 
    */
    
    /// <summary>
    ///     singleton pattern: define instance field for accessing the singleton elsewhere
    /// </summary>
    public static GameManager Instance;
    
    /// <summary>
    ///     enforces singleton behaviour; sets doesn't destroy on load and checks for multiple instances
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

    /// <summary>
    ///     trackable game tasks (Reza)
    /// </summary>
    private bool bedroomCleaned = false;
    private bool teethBrushed = false;
    private bool floorSweeped = false;

    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void BedroomTaskComplete()
    {
        bedroomCleaned = true;
    }

    public void BrushTeethTaskComplete()
    {
        teethBrushed = true;
    }
}
