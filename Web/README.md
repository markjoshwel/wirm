# The 'Echoes Behind Closed Doors' Website (and Game Backend Documentation)

for the Developing Dyamic Applications module as part of the Year 2.2
Integrated Project for Ngee Ann Polytechnic's Diploma in Immersive Media

## Game and Data Model

### Gameplay

the game is a vr experience not too dissimilar to storytelling-heavy
experiences like visual novels but with a few gameplay mechanics, making it
similar to games like Firewatch

current storyline/gameplay description:

> A teen is experiencing a spiral of mental health challenges exacerbated by
> domestic violence. Players navigate their world through simple, interactive
> daily tasks, which slowly reveal the layers of the teen’s struggles. The
> narrative emphasizes realism, empathy, and awareness.

but because we also are presenting this via a booth-based viva voce
demonstration, we are prentending as if we are the partner Ngee Ann companies
that will presumably be at the booth, and as such this website is more for the
booth runners than the players themselves

as such, the "flow" of backend interaction is as follows:

- Booth Laptop (via this website): make an account to play the game
  1. make an account (supabase auth)
  2. record a message for 'someone going through a tough time'
    - upload to supabase storage
    - store url in firebase realtime database
- Meta Quest:
  1. play the game
    - with every ingame decision, their choices are recorded in the firebase
      realtime database
  2. at the crux of the game, the call from the players 'friend' is actually
     the recorded message from the booth laptop
     - fetch from firebase realtime database
     - download from supabase storage
     - play in-game via unity
  3. finish game
    - ending is recorded in firebase realtime database

### Data Model

(for firebase realtime database)

```text
currentUser: <uid>
plays
└── <playId>
    ├── uid: <uid>
    ├── day1
    │   ├── brushTeeth: true
    │   └── ...
    ├── day2
    │   └── ...
    └── finalday
        ├── acceptCall: true
        └── ...
user
└── <userid>/
    └── callUrl: <supabase storage link>
```

## Technology Usage Overview

- Supabase Auth: for player authentication
- Firebase Auth: for booth manager authentication
- Firebase Realtime Database: for player data
  - for players who signed in via Supabase Auth to write persistent data on
    sign up, a JWT token from supabase is used to authenticate with Firebase
- Supabase Storage: for storing the recorded messages
- Firebase Hosting: for hosting the website
