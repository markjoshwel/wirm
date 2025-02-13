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
    public static PostProcessingManager Instance;

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

    [SerializeField] public AnimationCurve chromaticAberrationIntensity;

    [SerializeField] public AnimationCurve motionBlurIntensity;

    [SerializeField] public AnimationCurve lensDistortionIntensity;

    [SerializeField] public AnimationCurve colorAdjustmentsIntensity;

    // Checks if effect is active or not
    private bool isEffectActive = false;

    // Defines Audio References
    [Header("Audio References")] 
    public AudioSource audioSource;
    public AudioClip heartbeatSound;
    public AudioClip whisperSound;
    public AudioClip distortedWhisperSound;

    // Holds the current effect name to manage stopping and starting dynamically
    private string currentEffectName = "";

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

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

    // Checks if an effect is currently active
    public bool IsEffectActive()
    {
        return isEffectActive;
    }

    // Function to trigger effects dynamically based on the effect name passed
    public void TriggerEffect(string effectName)
    {
        // If an effect is already active, stop the current one
        if (isEffectActive)
        {
            StopEffect(currentEffectName);
        }

        // Start the new effect
        StartEffect(effectName);
    }

    // Start a specific effect
    public void StartEffect(string effectName)
    {
        isEffectActive = true;
        currentEffectName = effectName;

        StartCoroutine(ApplyEffect(effectName));
    }

    // Stop the active effect
    public void StopEffect()
    {
        if (isEffectActive)
        {
            StopEffect(currentEffectName);
        }
    }

    // Stop a specific effect
    private void StopEffect(string effectName)
    {
        isEffectActive = false;
        currentEffectName = "";

        // Reset effects to default
        if (vignette != null) vignette.intensity.Override(0f);
        if (chromaticAberration != null) chromaticAberration.intensity.Override(0f);
        if (motionBlur != null) motionBlur.intensity.Override(0f);
        if (lensDistortion != null) lensDistortion.intensity.Override(0f);
        if (colorAdjustments != null) colorAdjustments.postExposure.Override(0f);

        // Stop the audio
        if (audioSource != null)
        {
            audioSource.Stop();
        }
    }

    // Applies effects over time based on the effect name
    private IEnumerator ApplyEffect(string effectName)
    {
        // Handle audio for the effect
        if (effectName == "Panic")
        {
            audioSource.clip = heartbeatSound;
            audioSource.loop = true;
            audioSource.Play();
        }
        else if (effectName == "Headache")
        {
            audioSource.clip = whisperSound;
            audioSource.loop = true;
            audioSource.Play();
        }
        else if (effectName == "Dizziness")
        {
            audioSource.clip = distortedWhisperSound;
            audioSource.loop = true;
            audioSource.Play();
        }

        // Apply effects while the effect is active
        while (isEffectActive)
        {
            // Visual effects for headache
            if (effectName == "Headache")
            {
                vignette.intensity.Override(vignetteIntensity.Evaluate(Time.time));
                chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(Time.time));
            }

            // Visual effects for dizziness
            if (effectName == "Dizziness")
            {
                motionBlur.intensity.Override(motionBlurIntensity.Evaluate(Time.time));
                lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(Time.time));
            }

            // Visual effects for panic
            if (effectName == "Panic")
            {
                motionBlur.intensity.Override(motionBlurIntensity.Evaluate(Time.time));
                lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(Time.time));
                chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(Time.time));
            }

            yield return null;
        }

        // Stop audio after the effect ends
        if (audioSource != null && audioSource.isPlaying)
        {
            audioSource.Stop();
        }
    }
}
