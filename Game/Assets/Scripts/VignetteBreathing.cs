/*
 * Author: Reza
 * Date: 7/2/25
 * Description: Vignette breathing effect
 */

using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

public class VignetteBreathing : MonoBehaviour
{
    [SerializeField] public Volume postProcessingVolume;

    [SerializeField] public AnimationCurve intensityCurve; // Assign in Inspector

    public float cycleDuration = 3f; // Time for one full cycle

    private Vignette _vignette;

    private void Start()
    {
        if (postProcessingVolume.profile.TryGet(out _vignette)) Debug.Log("Vignette found!");
    }

    private void Update()
    {
        if (!_vignette) return;

        var t = Time.time % cycleDuration / cycleDuration; // Loop 0-1 over time
        _vignette.intensity.Override(intensityCurve.Evaluate(t));
    }
}