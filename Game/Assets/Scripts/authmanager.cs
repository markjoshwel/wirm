using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Firebase;
using Firebase.Auth;
using Firebase.Database;
using TMPro;
using System.Threading.Tasks;

public class AuthManager : MonoBehaviour
{
    // Firebase variables
    [Header("Firebase")]
    public DependencyStatus dependencyStatus;
    public FirebaseAuth auth;
    public FirebaseUser User;
    public DatabaseReference dbReference;

    // Login variables
    [Header("Login")]
    public TMP_InputField emailLoginField;
    public TMP_InputField passwordLoginField;
    public TMP_Text warningLoginText;
    public TMP_Text confirmLoginText;

    // Register variables
    [Header("Register")]
    public TMP_InputField usernameRegisterField;
    public TMP_InputField emailRegisterField;
    public TMP_InputField passwordRegisterField;
    public TMP_InputField passwordRegisterVerifyField;
    public TMP_Text warningRegisterText;


    void Awake()
    {
        if (FindObjectOfType<AuthManager>() != this)
        {
            Destroy(gameObject); // Ensure only one instance exists
            return;
        }

        DontDestroyOnLoad(gameObject); // Make this object persistent

        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWith(task =>
        {
            dependencyStatus = task.Result;
            if (dependencyStatus == DependencyStatus.Available)
            {
                InitializeFirebase();

                // Remove the automatic login check
                // Do not log in automatically even if the user is authenticated
                // Just log the current user status for debugging or later use
                if (auth.CurrentUser != null)
                {
                    Debug.Log("User is already authenticated: " + auth.CurrentUser.Email);
                }
                else
                {
                    Debug.Log("No user is currently logged in.");
                }
            }
            else
            {
                Debug.LogError("Could not resolve all Firebase dependencies: " + dependencyStatus);
            }
        });
    }


    private void InitializeFirebase()
    {
        Debug.Log("Setting up Firebase Auth and Database");
        auth = FirebaseAuth.DefaultInstance;
        dbReference = FirebaseDatabase.DefaultInstance.RootReference;
    }

    public void LoginButton()
    {
        StartCoroutine(Login(emailLoginField.text, passwordLoginField.text));
    }

    public void RegisterButton()
    {
        StartCoroutine(Register(emailRegisterField.text, passwordRegisterField.text, usernameRegisterField.text));
    }

    private IEnumerator Login(string _email, string _password)
    {
        Task<AuthResult> LoginTask = auth.SignInWithEmailAndPasswordAsync(_email, _password);
        yield return new WaitUntil(() => LoginTask.IsCompleted);

        if (LoginTask.Exception != null)
        {
            Debug.LogWarning($"Failed to login task with {LoginTask.Exception}");
            FirebaseException firebaseEx = LoginTask.Exception.GetBaseException() as FirebaseException;
            AuthError errorCode = (AuthError)firebaseEx.ErrorCode;

            string message = "Login Failed!";
            switch (errorCode)
            {
                case AuthError.MissingEmail: message = "Missing Email"; break;
                case AuthError.MissingPassword: message = "Missing Password"; break;
                case AuthError.WrongPassword: message = "Wrong Password"; break;
                case AuthError.InvalidEmail: message = "Invalid Email"; break;
                case AuthError.UserNotFound: message = "Account does not exist"; break;
            }
            warningLoginText.text = message;
        }
        else
        {
            User = LoginTask.Result.User;
            Debug.LogFormat("User signed in successfully: {0} ({1})", User.DisplayName, User.Email);
            warningLoginText.text = "";
            confirmLoginText.text = "Logged In";

            // ✅ Load the main game scene
            UnityEngine.SceneManagement.SceneManager.LoadScene("2"); // Change "GameScene" to your target scene
        }
    }


    private IEnumerator Register(string _email, string _password, string _username)
    {
        if (_username == "")
        {
            warningRegisterText.text = "Missing Username";
        }
        else if (passwordRegisterField.text != passwordRegisterVerifyField.text)
        {
            warningRegisterText.text = "Password Does Not Match!";
        }
        else
        {
            Task<AuthResult> RegisterTask = auth.CreateUserWithEmailAndPasswordAsync(_email, _password);
            yield return new WaitUntil(() => RegisterTask.IsCompleted);

            if (RegisterTask.Exception != null)
            {
                Debug.LogWarning($"Failed to register task with {RegisterTask.Exception}");
                FirebaseException firebaseEx = RegisterTask.Exception.GetBaseException() as FirebaseException;
                AuthError errorCode = (AuthError)firebaseEx.ErrorCode;

                string message = "Register Failed!";
                switch (errorCode)
                {
                    case AuthError.MissingEmail: message = "Missing Email"; break;
                    case AuthError.MissingPassword: message = "Missing Password"; break;
                    case AuthError.WeakPassword: message = "Weak Password"; break;
                    case AuthError.EmailAlreadyInUse: message = "Email Already In Use"; break;
                }
                warningRegisterText.text = message;
            }
            else
            {
                User = RegisterTask.Result.User;

                if (User != null)
                {
                    UserProfile profile = new UserProfile { DisplayName = _username };
                    Task ProfileTask = User.UpdateUserProfileAsync(profile);
                    yield return new WaitUntil(() => ProfileTask.IsCompleted);

                    if (ProfileTask.Exception != null)
                    {
                        Debug.LogWarning($"Failed to register task with {ProfileTask.Exception}");
                        warningRegisterText.text = "Username Set Failed!";
                    }
                    else
                    {
                        // ✅ Save user data to Firebase after username is successfully set
                        StartCoroutine(SaveUserData(_username, User.UserId, _password));

                        warningRegisterText.text = "";
                        //UIManager.instance.LoginScreen(); // Uncomment if you have a UI transition
                    }
                }
            }
        }
    }


    // Use userId (authManager.User.UserId) to store data
    // Use userId (authManager.User.UserId) to store data
    private IEnumerator SaveUserData(string username, string uid, string password)
    {
        var playerData = new Dictionary<string, object>
    {
        { "player_info", new Dictionary<string, object>
            {
                { "username", username },
                { "uid", uid },
                { "time_created", ServerValue.Timestamp }
            }
        },
        { "UserID", new Dictionary<string, object>
            {
                { "Day1", new Dictionary<string, object>
                    {
                        { "tasks", new List<Dictionary<string, object>>
                            {
                                new Dictionary<string, object> { { "task", "clean room" }, { "completed", false } },
                                new Dictionary<string, object> { { "task", "Brush teeth" }, { "completed", false } },
                                new Dictionary<string, object> { { "task", "Sweep floor" }, { "completed", false } }
                            }
                        }
                    }
                },
                { "Day2", new Dictionary<string, object>
                    {
                        { "tasks", new List<Dictionary<string, object>>
                            {
                                new Dictionary<string, object> { { "task", "go to school" }, { "completed", false } }
                            }
                        }
                    }
                },
                { "Day3", new Dictionary<string, object>
                    {
                        { "tasks", new List<Dictionary<string, object>>
                            {
                                new Dictionary<string, object> { { "task", "picks up call" }, { "pickupcall", false } }
                            }
                        }
                    }
                }
            }
        }
    };

        // Save player data to Firebase using userId (uid) as the key
        var saveTask = dbReference.Child("Players").Child(uid).SetValueAsync(playerData);
        yield return new WaitUntil(() => saveTask.IsCompleted);

        if (saveTask.Exception != null)
        {
            Debug.LogWarning($"Failed to save player data: {saveTask.Exception}");
        }
        else
        {
            Debug.Log("Player data saved successfully.");
        }
    }
    public void UpdateTaskStatus(string day, string taskName, bool isCompleted)
    {
        if (auth.CurrentUser != null)
        {
            string uid = auth.CurrentUser.UserId;  // Get the current user's UID

            // Reference the correct day and task in Firebase
            var taskUpdate = new Dictionary<string, object>
        {
            { "completed", isCompleted }
        };

            dbReference.Child("Players").Child(uid).Child(day).Child("tasks")
                .Child(taskName).UpdateChildrenAsync(taskUpdate).ContinueWith(task =>
                {
                    if (task.Exception != null)
                    {
                        Debug.LogWarning($"Failed to update task status: {task.Exception}");
                    }
                    else
                    {
                        Debug.Log($"Task {taskName} on {day} updated to completed.");
                    }
                });
        }

    }

    // The UpdatePickupCallStatus method should be placed outside the other methods in your AuthManager class

    public void UpdatePickupCallStatus(bool pickupCallStatus)
    {
        if (auth.CurrentUser != null)
        {
            string uid = auth.CurrentUser.UserId;  // Get the current user's UID

            // Reference the correct day and task in Firebase
            var pickupCallUpdate = new Dictionary<string, object>
        {
            { "pickupcall", pickupCallStatus }
        };

            // Update the pickupcall status for Day 3
            dbReference.Child("Players").Child(uid).Child("Day3").Child("tasks")
                .Child("picks up call").UpdateChildrenAsync(pickupCallUpdate).ContinueWith(task =>
                {
                    if (task.Exception != null)
                    {
                        Debug.LogWarning($"Failed to update pickupcall status: {task.Exception}");
                    }
                    else
                    {
                        Debug.Log($"pickupcall status updated to {pickupCallStatus}.");
                    }
                });
        }
        else
        {
            Debug.LogWarning("No user is currently authenticated.");
        }
    }


}