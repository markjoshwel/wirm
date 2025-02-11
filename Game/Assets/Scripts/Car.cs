/*
 Author : Wai Lam
 Date : 10/2/2025
 Description : Car obstacle
 */
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car : MonoBehaviour
{
    public Transform playerRig;       // Assign your XR Rig here
    public Transform startPoint;      // Assign the starting point here
    
    public Transform[] waypoints;        // List of waypoints
    public float speed = 3.0f;           // Speed of movement
    public float rotationSpeed = 5.0f;   // Smooth turning speed

    private int currentWaypointIndex = 0; // Starting at the first waypoint
    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("Triggered by: " + other.name);
        // Check if the collider belongs to the player
        if (other.CompareTag("Player"))
        {
            Debug.Log("Teleporting Player...");
            TeleportPlayer();
        }
    }

    private void TeleportPlayer()
    {
        Vector3 offset = playerRig.position - Camera.main.transform.position;
        playerRig.position = startPoint.position + offset;
        playerRig.rotation = startPoint.rotation;
    }
    

    void Update()
    {
        if (waypoints.Length == 0) return;

        MoveTowardsWaypoint();
        RotateTowardsWaypoint();
    }

    void MoveTowardsWaypoint()
    {
        Transform target = waypoints[currentWaypointIndex];
        transform.position = Vector3.MoveTowards(transform.position, target.position, speed * Time.deltaTime);

        // Check if the object has reached the waypoint
        if (Vector3.Distance(transform.position, target.position) < 0.1f)
        {
            // Move to the next waypoint in a loop
            currentWaypointIndex = (currentWaypointIndex + 1) % waypoints.Length;
        }
    }

    void RotateTowardsWaypoint()
    {
        Transform target = waypoints[currentWaypointIndex];
        Vector3 direction = (target.position - transform.position).normalized;

        if (direction != Vector3.zero)
        {
            Quaternion lookRotation = Quaternion.LookRotation(direction);
            transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, rotationSpeed * Time.deltaTime);
        }
    }
}
