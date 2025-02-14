/*
 Author: Wai Lam
 Date: 10/2/2025
 Description: Loop the school bell and interval
 */

using System.Collections;
using UnityEngine;

public class AudioLoop : MonoBehaviour
{
    public AudioSource audioSource; // Attach your AudioSource in the Inspector

    private void Start()
    {
        if (audioSource == null) audioSource = GetComponent<AudioSource>();
        StartCoroutine(PlayPauseLoop());
    }

    public void StartAudioLoop()
    {
        StartCoroutine(PlayPauseLoop());
    }

    private IEnumerator PlayPauseLoop()
    {
        while (true)
        {
            audioSource.Stop();
            audioSource.Play(); // Play the audio
            yield return new WaitForSeconds(10f); // Play for 10 seconds

            audioSource.Stop(); // Pause the audio
            yield return new WaitForSeconds(15f); // Pause for 15 seconds
        }

        // NOTE: are we really just going to let this stay alive forever
        // ReSharper disable once IteratorNeverReturns
    }
}