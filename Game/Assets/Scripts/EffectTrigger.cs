using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EffectTrigger : MonoBehaviour
{
    // The effect name to trigger when the player enters this area
    public string effectName;

    // Check if the player enters the trigger zone
    private void OnTriggerStay(Collider other)
    {
        // Check if the player is in the trigger zone
        if (other.CompareTag("Player"))
        {
            // Trigger the effect based on the specified effectName
            if (!PostProcessingManager.Instance.IsEffectActive())
            {
                PostProcessingManager.Instance.TriggerEffect(effectName);
            }
        }
    }

    // Optionally stop the effect when the player exits the trigger zone
    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Player") && PostProcessingManager.Instance.IsEffectActive())
        {
            PostProcessingManager.Instance.StopEffect();
        }
    }
}