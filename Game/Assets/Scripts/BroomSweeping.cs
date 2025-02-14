/*
 * Author: Reza
 * Date: 7/2/25
 * Description: Detects dirt and sweeps them up
 */

using System.Collections;
using TMPro;
using UnityEngine;

public class BroomSweeping : MonoBehaviour
{
    // To track how much trash has been collected so far
    public int dirtSweepCount;

    // Defines how much trash is needed to collect to unlock the door
    public int dirtRequired = 10;

    // Defines UI references
    [Header("UI References")] public GameObject storyPanelUI;

    public TMP_Text storyText;

    // Defines Audio References
    [Header("Audio References")] public AudioSource audioSource;

    public AudioClip sweepingSound;
    private GameManager _gameManager;
    private PostProcessingManager _postProcessingManager;

    private bool _taskCompleted;

    // Update is called once per frame
    private void Update()
    {
        if (dirtSweepCount < dirtRequired || _taskCompleted) return;
        
        _taskCompleted = true;
        GameManager.Instance.FloorSweepedTaskComplete();

        storyPanelUI.SetActive(true);
        storyText.text = "I hope the house is clean enough now so I don't get scolded later...";

        StartCoroutine(ClearMessageAfterSeconds(7f));
    }

    private void OnTriggerEnter(Collider other)
    {
        // Now correctly checks for "Dirt" before triggering
        if (!other.CompareTag("Dirt")) return;
        
        dirtSweepCount++;

        // Destroy it to prevent extra counting
        Destroy(other.gameObject);

        // Play sound only if no other sound is currently playing
        if (!audioSource.isPlaying) audioSource.PlayOneShot(sweepingSound);
    }

    private IEnumerator ClearMessageAfterSeconds(float delay)
    {
        // Waits for delay to end and hides the UI
        yield return new WaitForSeconds(delay);
        storyText.text = "";
    }
}