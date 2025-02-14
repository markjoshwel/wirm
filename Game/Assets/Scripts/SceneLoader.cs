/*
 * Author: Wai Lam
 * Date: 7/2/25
 * Description: Loading scene from start to game
 */

using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
    public string sceneName; // Name of the scene to load

    public void LoadScene()
    {
        if (!string.IsNullOrEmpty(sceneName))
            SceneManager.LoadScene(sceneName);
        else
            Debug.LogWarning("Scene name is not assigned!");
    }
}