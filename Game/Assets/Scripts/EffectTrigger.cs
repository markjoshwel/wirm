/*
 * Author: Reza
 * Date: 13/2/2025
 * Description: Car obstacle
 */

using UnityEngine;

public class EffectTrigger : MonoBehaviour
{
    // The effect name to trigger when the player enters this area
    public string effectName;

    // Optionally stop the effect when the player exits the trigger zone
    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Player") && PostProcessingManager.Instance.IsEffectActive())
            PostProcessingManager.Instance.StopEffect();
    }

    // Check if the player enters the trigger zone
    private void OnTriggerStay(Collider other)
    {
        // Check if the player is in the trigger zone
        if (!other.CompareTag("Player")) return;

        // Trigger the effect based on the specified effectName
        if (!PostProcessingManager.Instance.IsEffectActive())
            PostProcessingManager.Instance.TriggerEffect(effectName);
    }
}