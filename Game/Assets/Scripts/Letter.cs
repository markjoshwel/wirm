/*
 * Author: Reza
 * Date: 3/2/25
 * Description: To show letter UI when the letter is picked up or dropped
 */

using UnityEngine;

public class Letter : MonoBehaviour
{
    public GameObject letterUI;
    public AudioClip scribble;

    private void Start()
    {
        letterUI.SetActive(false);
    }

    public void ShowLetterUI()
    {
        letterUI.SetActive(true);
        Debug.Log("Picked up letter - UI should show");
    }

    public void HideLetterUI()
    {
        letterUI.SetActive(false);
        Debug.Log("Dropped letter - UI should hide");
    }
}