# The 'Echoes Behind Closed Doors' Website (and Game Backend Documentation)

for the Developing Dyamic Applications module as part of the Year 2.2
Integrated Project for Ngee Ann Polytechnic's Diploma in Immersive Media

## Game, Stack, and Data Model

### Gameplay

the game is a vr experience not too dissimilar to storytelling-heavy
experiences like visual novels but with a few gameplay mechanics, making it
similar to games like Firewatch

current storyline/gameplay description:

> A teen is experiencing a spiral of mental health challenges exacerbated by
> domestic violence. Players navigate their world through simple, interactive
> daily tasks, which slowly reveal the layers of the teen’s struggles. The
> narrative emphasizes realism, empathy, and awareness.

### Stack and Usage

##### Stack

- **Firebase Auth:** for authentication
- **Firebase Realtime Database:** for player data
- **Firebase Hosting:** for hosting the website
- **Supabase Storage:** for storing the recorded messages

##### Usage Flow

because we also are presenting this via a booth-based viva voce demonstration,
we are pretending as if we are the partner Ngee Ann companies that will
presumably be at the booth, and as such this website is more for the booth
runners than the players themselves

TODO

1. **Booth Laptop:** show a registration qr code (firebase hosting)
2. **Players Personal Device:** make an account (firebase auth)
3. **Players Personal Device:** post-sign up, they are innocently asked to
   "record a message for someone with mental health struggles"
   (stored via supabase storage)
4. **Booth Laptop:** booth runner via a dashboard sets the user as the
   "currently playing user" (firebase realtime database)
5. **Meta Quest:** player plays the game, the game using the UID of the
   "currently playing user" to record the players choices
   (firebase realtime database)
6. **Meta Quest:** at the crux of the game, the call from the player's 'friend' is
   actually the recorded message from the booth laptop
   1. fetch url from firebase realtime database
   2. download from supabase storage
   3. play in-game via unity
7. **Meta Quest:** finish game, ending is recorded in firebase realtime database
8. **Booth Laptop/Players Personal Device:** can see the player's choices and ending via their profile page
   - players can send their profile page to their friends to show if they want to,
     i'll probably this via url parameters (e.g. `profile.html?uid=...`) like the
     last group project i was in because we're not using any fancy frontend
     frameworks (firebase hosting)
9. **Booth Laptop:** via the same dashboard is able to see:
   - the current players' real-time progress
   - all past players
     - their emails
     - and profile pages
   - maybe some global statistics if there's time

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

## Development Setup

### Local Development Setup

~~[bun](https://bun.sh/) is used as the package manager and bundler for this project,
but npm can be used as well for tailwindcss~~

~~**note:** firebase-tools does not work well with bun,
so you will need to use npm for that~~

use a live server, firebase emulator, or something similar

everything is in the `public/` folder, and works as-is

### Cloud Development Setup

- Firebase Project
  - Authentication
    - Email/Password Provider
      - Email/Password: enabled
      - Email link (passwordless sign-in): enabled
  - Realtime Database
    - Security Rules: (TODO; if i have time to define them before submission)
  - Hosting \
    (not strictly necessary)

- Supabase Project
  - Storage
    - Bucket
      - named it `telephonies` but like i don't think it matters
      - Enable connection via S3 protocol: enabled (TODO; might not even use this way of uploading)
    - Policies: (TODO; if i have time to define them before submission)
