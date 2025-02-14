/*
 * Author: Wai Lam
 * Date: 10/2/2025
 * Description: Car obstacle
 */

using UnityEngine;

public class Car : MonoBehaviour
{
    public Transform playerRig; // Assign your XR Rig here
    public Transform startPoint; // Assign the starting point here

    public Transform[] waypoints; // List of waypoints
    public float speed = 3.0f; // Speed of movement
    public float rotationSpeed = 5.0f; // Smooth turning speed
    public Vector3 rotationOffset = Vector3.zero;

    private int _currentWaypointIndex; // Starting at the first waypoint


    private void Update()
    {
        if (waypoints.Length == 0) return;

        MoveTowardsWaypoint();
        RotateTowardsWaypoint();
    }

    private void OnTriggerEnter(Collider other)
    {
        // Check if the collider belongs to the player
        if (!other.CompareTag("Player")) return;
        
        Debug.Log("Teleporting Player...");
        TeleportPlayer();
    }

    private void TeleportPlayer()
    {
        if (Camera.main == null)
        {
            Debug.LogError("not teleporting player, no main camera found!");
            return;
        }

        var offset = playerRig.position - Camera.main.transform.position;
        playerRig.position = startPoint.position + offset;
        playerRig.rotation = startPoint.rotation;
    }

    private void MoveTowardsWaypoint()
    {
        var target = waypoints[_currentWaypointIndex];
        transform.position = Vector3.MoveTowards(transform.position, target.position, speed * Time.deltaTime);

        // Check if the object has reached the waypoint
        if (Vector3.Distance(transform.position, target.position) < 0.1f)
            // Move to the next waypoint in a loop
            _currentWaypointIndex = (_currentWaypointIndex + 1) % waypoints.Length;
    }

    private void RotateTowardsWaypoint()
    {
        var target = waypoints[_currentWaypointIndex];
        var direction = (target.position - transform.position).normalized;

        if (direction != Vector3.zero)
        {
            // Apply rotation offset
            var lookRotation = Quaternion.LookRotation(direction) * Quaternion.Euler(rotationOffset);
            transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, rotationSpeed * Time.deltaTime);
        }
    }
}