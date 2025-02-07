using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

public class VignetteBreathing : MonoBehaviour
{
    [SerializeField]
    public Volume postProcessingVolume;
    
    private Vignette vignette;

    [SerializeField]
    public AnimationCurve intensityCurve; // Assign in Inspector
    public float cycleDuration = 3f; // Time for one full cycle

    void Start()
    {
        if (postProcessingVolume.profile.TryGet(out vignette))
        {
            Debug.Log("Vignette found!");
        }
    }

    void Update()
    {
        if (vignette != null)
        {
            float t = (Time.time % cycleDuration) / cycleDuration; // Loop 0-1 over time
            vignette.intensity.Override(intensityCurve.Evaluate(t));
        }
    }
}