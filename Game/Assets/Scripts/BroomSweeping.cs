/*
Author: Reza
Date: 7/2/25
Description: Detects dirt and sweeps them up 
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BroomSweeping : MonoBehaviour
{
    // To track how much trash has been collected so far
    public int dirtSweeped = 0;
    
    // Defines how much trash is needed to collect in order to unlock the door
    public int dirtRequired = 10;
    
    // Defines Audio References
    public AudioSource audioSource;
    public AudioClip sweepingSound;
    
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
}