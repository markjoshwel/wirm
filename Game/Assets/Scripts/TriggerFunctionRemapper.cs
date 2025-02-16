/*
 * Author: Mark
 * Date: 16/2/25
 * Description: allows changing what code is executed when a trigger is entered
 */

using System;
using UnityEngine;

public class TriggerFunctionRemapper : MonoBehaviour
{
    private Action<Collider> _onTriggerEnter;

    private void OnTriggerEnter(Collider other)
    {
        _onTriggerEnter?.Invoke(other);
    }

    public void Remap(Action<Collider> func)
    {
        _onTriggerEnter = func;
    }
}