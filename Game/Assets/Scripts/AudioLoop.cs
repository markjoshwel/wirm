/*
 Author : Wai Lam
 Date : 10/2/2025
 Description : Loop the school bell and interval
 */
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioLoop : MonoBehaviour
{
    public AudioSource audioSource; // Attach your AudioSource in the Inspector

    private void Start()
    {
        if (audioSource == null)
        {
            audioSource = GetComponent<AudioSource>();
        }
        StartCoroutine(PlayPauseLoop());
    }

    private IEnumerator PlayPauseLoop()
    {
        while (true)
        {
            audioSource.Stop();  
            audioSource.Play();              // Play the audio
            yield return new WaitForSeconds(10f); // Play for 10 seconds

            audioSource.Stop();             // Pause the audio
            yield return new WaitForSeconds(15f); // Pause for 15 seconds
        }
    }
}
