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
    [Header("Audio References")] public AudioSource audioSource;
    public AudioClip heartbeatSound;
    public AudioClip whisperSound;
    public AudioClip distortedWhisperSound;


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
    public void StartEffect(string effectName)
    {
        // The effect is active
        isEffectActive = true;

        // Calls coroutine to apply the effect
        StartCoroutine(ApplyEffect(effectName));
    }

    // Function to stop the effect
    public void StopEffect(string effectName)
    {
        // The effect is not active
        isEffectActive = false;

        // Reset effects to default
        if (vignette != null) vignette.intensity.Override(0f);
        if (chromaticAberration != null) chromaticAberration.intensity.Override(0f);
        if (motionBlur != null) motionBlur.intensity.Override(0f);
        if (lensDistortion != null) lensDistortion.intensity.Override(0f);
        if (colorAdjustments != null) colorAdjustments.postExposure.Override(0f);

        // Stop audio
        if (audioSource != null)
        {
            audioSource.Stop();
        }
    }

    // Applies effects over time based on the type
    private IEnumerator ApplyEffect(string effectName)
    {
        // Handle the audio for the effect
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

        // Stop audio when the effect ends
        if (audioSource != null && audioSource.isPlaying)
        {
            audioSource.Stop();
        }
    }
}
