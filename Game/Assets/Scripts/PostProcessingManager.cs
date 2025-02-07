/*
Author: Reza
Date: 7/2/25
Description: Has all the post processing camera effects that replicate real symptoms like dizziness, fainting, panic, etc
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

public class PostProcessingManager : MonoBehaviour
{
    // Defines the Global Volume
    public Volume volume;
    
    // All the effect overrides
    private Vignette vignette;
    private ChromaticAberration chromaticAberration;
    private MotionBlur motionBlur;
    private LensDistortion lensDistortion;
    private ColorAdjustments colorAdjustments;
    
    [Header("Effect Intensities")]
    // Editable override values in inspector
    [SerializeField]
    public AnimationCurve vignetteIntensity;
    
    [SerializeField]
    public AnimationCurve chromaticAberrationIntensity;
    
    [SerializeField]
    public AnimationCurve motionBlurIntensity;
    
    [SerializeField]
    public AnimationCurve lensDistortionIntensity;
    
    [SerializeField]
    public AnimationCurve colorAdjustmentsIntensity;
    
    // Checks if effect is active or not
    private bool isEffectActive = false;
    
    // Start is called before the first frame update
    void Start()
    {
        // Get references for effects
        volume.profile.TryGet(out vignette);
        volume.profile.TryGet(out chromaticAberration);
        volume.profile.TryGet(out motionBlur);
        volume.profile.TryGet(out lensDistortion);
        volume.profile.TryGet(out colorAdjustments);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    
    // Function to start effects if there is none currently, and stop current effects to start next ones
    public void TriggerEffect(string effectName)
    {
        // If an effect is already active
        if (isEffectActive)
        {
            // Stop the effect
            StopEffect(effectName);
        }

        // If there's no active effects 
        else
        {
            // Start the effect
            StartEffect(effectName);
        }
    }

    // Function to start the effect
    private void StartEffect(string effectName)
    {
        // The effect is active
        isEffectActive = true;
        
        // Calls coroutine to apply the effect
        StartCoroutine(ApplyEffect(effectName));
    }
    
    // Function to stop the effect
    private void StopEffect(string effectName)
    {
        // The effect is not active
        isEffectActive = false;
        
        // Reset effects to default
        vignette.intensity.Override(0f);
        chromaticAberration.intensity.Override(0f);
        motionBlur.intensity.Override(0f);
        lensDistortion.intensity.Override(0f);
        colorAdjustments.postExposure.Override(0f);
    }

    // Applies effects over time based on the type
    private IEnumerator ApplyEffect(string effectName)
    {
        float time = 0f;
        float timeToMax = 1f;

        while (time < timeToMax)
        {
            time += Time.deltaTime;
            time = Mathf.Clamp01(time);
            
            // Values for headache effect
            if (effectName == "Headache")
            {
                vignette.intensity.Override(vignetteIntensity.Evaluate(time));
                chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(time));
            }
            
            // Values for dizziness effect
            else if (effectName == "Dizziness")
            {
                motionBlur.intensity.Override(motionBlurIntensity.Evaluate(time));
                lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(time));
            }
            
            yield return null;
        }
    }
}
