/*
Author: Reza
Date: 3/2/25
Description: To track if cleaning/exploring bedroom task is done before allowing player to open door
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit.Interactables;

public class BedroomTask : MonoBehaviour
{
    public GameObject door;
    public XRGrabInteractable doorInteractable;

    private bool taskCompleted = false;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
