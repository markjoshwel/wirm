/*
 * Author: Reza
 * Date: 7/2/25
 * Description: Post-processing camera effects emulating various conditions
 */

using System.Collections;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

public class PostProcessingManager : MonoBehaviour
{
    public static PostProcessingManager Instance;

    // Defines the Global Volume
    public Volume volume;

    [Header("Effect Intensities")]
    // Editable override values in inspector
    [SerializeField]
    public AnimationCurve vignetteIntensity;

    [SerializeField] public AnimationCurve chromaticAberrationIntensity;

    [SerializeField] public AnimationCurve motionBlurIntensity;

    [SerializeField] public AnimationCurve lensDistortionIntensity;

    [SerializeField] public AnimationCurve colorAdjustmentsIntensity;

    // Defines Audio References
    [Header("Audio References")] public AudioSource audioSource;

    public AudioClip heartbeatSound;
    public AudioClip whisperSound;
    public AudioClip distortedWhisperSound;
    private ChromaticAberration _chromaticAberration;
    private ColorAdjustments _colorAdjustments;

    // Holds the current effect name to manage stopping and starting dynamically
    private string _currentEffectName = "";

    // Checks if effect is active or not
    private bool _isEffectActive;
    private LensDistortion _lensDistortion;
    private MotionBlur _motionBlur;

    // All the effect overrides
    private Vignette _vignette;

    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);
    }

    // Start is called before the first frame update
    private void Start()
    {
        // Get references for effects
        volume.profile.TryGet(out _vignette);
        volume.profile.TryGet(out _chromaticAberration);
        volume.profile.TryGet(out _motionBlur);
        volume.profile.TryGet(out _lensDistortion);
        volume.profile.TryGet(out _colorAdjustments);
    }

    // Checks if an effect is currently active
    public bool IsEffectActive()
    {
        return _isEffectActive;
    }

    // Function to trigger effects dynamically based on the effect name passed
    public void TriggerEffect(string effectName)
    {
        // If an effect is already active, stop the current one
        if (_isEffectActive) StopEffect(_currentEffectName);

        // Start the new effect
        StartEffect(effectName);
    }

    // Start a specific effect
    public void StartEffect(string effectName)
    {
        _isEffectActive = true;
        _currentEffectName = effectName;

        StartCoroutine(ApplyEffect(effectName));
    }

    // Stop the active effect
    public void StopEffect()
    {
        if (_isEffectActive) StopEffect(_currentEffectName);
    }

    // Stop a specific effect
    private void StopEffect(string effectName)
    {
        _isEffectActive = false;
        _currentEffectName = "";

        // Reset effects to default
        if (_vignette) _vignette.intensity.Override(0f);
        if (_chromaticAberration) _chromaticAberration.intensity.Override(0f);
        if (_motionBlur) _motionBlur.intensity.Override(0f);
        if (_lensDistortion) _lensDistortion.intensity.Override(0f);
        if (_colorAdjustments) _colorAdjustments.postExposure.Override(0f);

        // Stop the audio
        if (audioSource) audioSource.Stop();
    }

    // Applies effects over time based on the effect name
    private IEnumerator ApplyEffect(string effectName)
    {
        switch (effectName)
        {
            // Handle audio for the effect
            case "Panic":
                audioSource.clip = heartbeatSound;
                audioSource.loop = true;
                audioSource.Play();
                break;
            case "Headache":
                audioSource.clip = whisperSound;
                audioSource.loop = true;
                audioSource.Play();
                break;
            case "Dizziness":
                audioSource.clip = distortedWhisperSound;
                audioSource.loop = true;
                audioSource.Play();
                break;
        }

        // Apply effects while the effect is active
        while (_isEffectActive)
        {
            switch (effectName)
            {
                // Visual effects for headache
                case "Headache":
                    _vignette.intensity.Override(vignetteIntensity.Evaluate(Time.time));
                    _chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(Time.time));
                    break;
                // Visual effects for dizziness
                case "Dizziness":
                    _motionBlur.intensity.Override(motionBlurIntensity.Evaluate(Time.time));
                    _lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(Time.time));
                    break;
                // Visual effects for panic
                case "Panic":
                    _motionBlur.intensity.Override(motionBlurIntensity.Evaluate(Time.time));
                    _lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(Time.time));
                    _chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(Time.time));
                    break;
                case "Worst":
                    _vignette.intensity.Override(vignetteIntensity.Evaluate(Time.time));
                    _motionBlur.intensity.Override(motionBlurIntensity.Evaluate(Time.time));
                    _lensDistortion.intensity.Override(lensDistortionIntensity.Evaluate(Time.time));
                    _chromaticAberration.intensity.Override(chromaticAberrationIntensity.Evaluate(Time.time));
                    _colorAdjustments.postExposure.Override(colorAdjustmentsIntensity.Evaluate(Time.time * 0.8f));
                    break;
            }

            yield return 0;
        }

        // Stop audio after the effect ends
        if (audioSource && audioSource.isPlaying) audioSource.Stop();
    }
}