# lokal

## Final Group Project  <to update>
  


## User Stories

### MVP

As a user:
  * As a tourist user I want to access the app without any authentication, get a brief intro into what the app does and enter into exploring the region I am in.
  * I want to enter in and select the Iwi from which I wan't a story in the region I'm exploring. I'd like to then select from the Iwi's available stories to explore based on a map and then explore that story I select. 
 
As a contributer:
  * As an Iwi representative I'd like to register to submit stories from my Iwi about our journey within a certain region.
  * I'd like to be able to view submitted stories, edit/update them, delete them and add new stories.

### Stretch
  * I want
  * I'd like to be able to see how many people have viewed each of the stories in my Iwi's portfolio.

  ---

## Views (Client Side) <to update>
  | name | purpose |
  | --- | --- |
  


## Reducers (Client Side)  <to update>

  | name | purpose |
  | --- | --- |
  
  
  
 ## Actions  <to update>

 ### meetings  <to update>

 | type | data | purpose |
 | --- | --- | --- |

 ### users  <to update>
 | type | data | purpose |
 | --- | --- | --- |

 ### currentMeeting  <to update>
  | type | data | purpose |
| --- | --- | --- |



## API (Client - Server)

User:

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/iwi | No | create list for selection | An array of Iwi details |

Do we Need a get location?

Contributer:

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/iwi | No | create list for selection | An array of Iwi details |
| Post | /api/iwi/story | No | submit a story | An array of contributer stories |
| Put | /api/iwi/story/:ID | No | edit a story | An array of contributer stories |
| Del | /api/iwi/story/:ID | No | delete a story | Contributer removes a story |



## DB (Server Side)
  There should be three tables for MVP

### iwi
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | iwi_name | String |
  | location | String |
  | contact_name | String |
  | email | String |
  | phone | Interger |

### story
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | IWI_ID | Interger |
  | latitude | Interger |
  | longitude | Interger |
  | title | String |
  | content | String |
  | image | Image |
  
### iwiInfo
  | Column Name | Data Type |
  | --- | --- |
  | id | Interger |
  | IWI_ID | Interger |
  | content | String |
  | image | Image |

### Attendees (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | meeting_id | Integer |

 ---


## Setup

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!



## Team Tasks

Product Owner: MATT - Maintain the readme as the agreed requirements of the project.  If these requirements change, make the change in the readme and then notify affected teams.
Git Master: DANI - Make the merges work.
Fun Master: ROBBIE - Encourage the fun happening.
Vibes Watcher: ROBBIE - Peace man.
Diary Keeper: ROBBIE - Record progress for presentation.
Architecture Team: Maintain the documentation of the readme with respect to the APIs.  Routes, payloads and behaviours.  This is the agreement on how data will flow in the app.
Backend Team: Build the APIs as per the readme and test them with Postman
Frontend Team: Build the wireframes in conjunction with the product owner and then build the interface
Timekeeper: Schedules and calls standups (can be done by the product owner)

Notes: Create pull requests for all features and have them reviewed by Engie, Kelly or Ross.


-----------------------------------------------------------
Details below here are example deets ripped from another readme...
-----------------------------------------------------------


## API docs: Request and response formats  <to update>

### POST /api/auth/register
#### Request
```sh
{
  [
    {
    "userName" : "memelord69",
    "firstName" : "Thing",
    "lastName" : "Trundell",
    "password" : "sosecret",
    "personCostPerHour" : 100
    }
  ]
}
```

### POST /api/auth/login
#### Request
```sh
{
  [
    {
    "userName" : "memelord69",
    "password" : "sosecret",
    }
  ]
}
```

### GET /api/meetings
#### Response:
<!-- An Array of Meetings -->
```sh
{
  [
    {
      "id" : 1,
      "meetingName" : "This meeting's name",
      "attendees" : [
        {
          "userId" : 1234,
        "userName" : "handle name",
        "firstName" : "Name",
        "lastName" : "Name",
          "personCostPerHour" : 100.00,
        }
      ],
      "time": timestamp
      "meetingCostPerHour" : 250.00,
      "totalMeetingTimeSeconds" : 360,
      "totalCostOfMeeting" : 6000.00
    }
  ]
}
```

### POST /api/meetings
#### Request:
<!-- Usage: Save a completed meeting -->
```sh
{
  "meetingName" : "This meeting's name",
  "attendees" : [
    {
      "userId" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
    }
  ],
  "time" : "date and time",
  "meetingCostPerHour" : 250.00,
  "totalMeetingTimeSeconds" : 360,
  "totalCostOfMeeting" : 6000.00
}
```


#### Response:
  <!-- The Meeting that has been saved in db read format -->
  <!-- where ID matches: -->
```sh
{
  "id" : 3000,
  "meetingName" : "This meeting's name",
  "attendees" : [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ],
  "time": timestamp
  "meetingCostPerHour" : 250.00,
  "totalMeetingTimeSeconds" : 360,
  "totalCostOfMeeting" : 6000.00
}
```


### GET /api/meetings/:id/users
####Response:
<!-- Get the attendees of a Meeting	 -->
<!-- An Array of User objects -->
<!-- Where meeting ID matches in join table -->
```sh
{
  [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
    {
      "id" : 5678,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ]
}
```

### GET /api/users
#### Response:
<!-- Get the users of the app -->
<!-- An Array of User Objects -->
```sh
{
  [
    {
      "id" : 1234,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
    {
      "id" : 5678,
      "userName" : "handle name",
      "firstName" : "Name",
      "lastName" : "Name",
      "personCostPerHour" : 100.00,
    },
  ]
}
```


