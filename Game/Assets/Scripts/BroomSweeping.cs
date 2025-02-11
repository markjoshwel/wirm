/*
Author: Reza
Date: 7/2/25
Description: Detects dirt and sweeps them up 
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class BroomSweeping : MonoBehaviour
{
    private GameManager gameManager;
    private PostProcessingManager postProcessingManager;
    
    // To track how much trash has been collected so far
    public int dirtSweeped = 0;
    
    // Defines how much trash is needed to collect in order to unlock the door
    public int dirtRequired = 10;
    
    // Defines UI references
    [Header("UI References")]
    public GameObject storyPanelUI;
    public TMP_Text storyText;
    
    // Defines Audio References
    [Header("Audio References")]
    public AudioSource audioSource;
    public AudioClip sweepingSound;
    
    // Update is called once per frame
    void Update()
    {
        if (dirtSweeped >= dirtRequired)
        {
            GameManager.Instance.FloorSweepedTaskComplete();
            
            storyText.text = "I hope the house is clean enough now so I don't get scolded later...";
            StartCoroutine(HideMessageAfterSeconds(storyPanelUI, 7f));
        }
    }
    
    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Dirt"))
        {
            // Add to dirt swept count
            dirtSweeped++;
            
            // Destroy it to prevent extra counting
            Destroy(other.gameObject);
        
            // Play sound only if no other sound is currently playing
            if (!audioSource.isPlaying)
            {
                audioSource.PlayOneShot(sweepingSound);
            }
        }
    }
    private IEnumerator HideMessageAfterSeconds(GameObject uiElement, float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        uiElement.SetActive(false);
    }
}