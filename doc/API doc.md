[toc]

## User Related

### [POST] Login

**Description**:

user logs in

**URL**: `/user/login`

**Request Body**:

| Name        | Type   | Description                          | Example           |
| ----------- | ------ | ------------------------------------ | ----------------- |
| phoneNumber | String | phone number of user                 | `"+1-4379832377"` |
| code        | String | code sent to user using phone number |                   |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:
return error from database

```
{ "code": "","status": "error", "errMessage": "" }
```

### [POST] Update Profile

**Description**:

update user information on the profile page

**URL**: `/user/update-profile`

**Request Body**:

| Name        | Type   | Description                                                                          | Example |
| ----------- | ------ | ------------------------------------------------------------------------------------ | ------- |
| userId      | String | object id                                                                            | `""`    |
| nickName    | String |                                                                                      |         |
| pronoun     | String | one of the following four options: "He/His", "Her/Her", "Prefer Not to Tell", "None" |         |
| description | String |                                                                                      |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code": "","status": "error", "errMessage": "no such user" }
```

### [POST] Create user

**Description**:

collect user information for the new user

**URL**: `/user/create`

**Request Body**:

| Name        | Type   | Description    | Example           |
| ----------- | ------ | -------------- | ----------------- |
| phoneNumber | String |                | `"+1-4379982388"` |
| nickName    | String |                | `"Mike Chen"`     |
| avatar      | String | save as base64 |                   |

**Success Response**:

```
{ "code": "200", "status": "success"}
```

**Error Response**:

return errors from the database

```
{ "status": "error", "errMessage": "phone number already exists" }
```

### [GET] Load User Profile

**Description**:

load user information for the profile page

**URL**: `/user/info`

**Query Parameters**:

| Name   | Type   | Description | Example |
| ------ | ------ | ----------- | ------- |
| userId | String | object id   | `""`    |

**Success Response**:

```
{ "code": "",
"status": "success",
"name": "",
"pronoun": "",
"description": ""
}
```

**Error Response**:

```
{ "code": "","status": "error", "errMessage": "no such user" }
```

## Event related

### [GET] Load All Events

**Description**:

load all events to display on [this page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=19%3A222)

**URL**: `/event/load-all`

**Query Param**:

| Name    | Type    | Description               | Example |
| ------- | ------- | ------------------------- | ------- |
| pageNum | Integer | the page number to dislay | 2       |

**Success Response**:

```
{ "code": "200", "status": "success"}
```

**Error Response**:

return errors from the database

```
{ "code": "", "status": "error", "errMessage": "phone number already exists" }
```

### [POST] Create Event

**Description**:

add info about a new event

**URL**: `/event/create`

**Request Body**:

| Name        | Type    | Description                                                                                                                                     | Example     |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| eventName   | String  |                                                                                                                                                 | `"Frizbee"` |
| startTime   | String  | start time of the event                                                                                                                         | `""`        |
| endTime     | String  | duration of the event                                                                                                                           | `""`        |
| hostId      | String  | object id of the host in the database                                                                                                           |             |
| location    | String  | location of the event                                                                                                                           |             |
| capacity    | Integer | total number of participants (host is not included when counting capacity)                                                                      |             |
| feeDetails  | String  | this entry must be one of the following four options: "FREE", "participants must buy their own ticket","etransfer to host", "give cash to host" |             |
| description | String  | description of the event                                                                                                                        |             |
| price       | String  |                                                                                                                                                 |             |

**Success Response**:

```
{ "code": "200", "status": "success"}
```

**Error Response**:

return errors from the database

```
{ "code":"","status": "error", "errMessage": "" }
```

### [Get] Load Event by EventId

**Description**:

load event information for ["event detail" page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=27%3A118)

**URL**: `/event/id`

**Query Parameters**

| Name | Type   | Description            | Example |
| ---- | ------ | ---------------------- | ------- |
| Id   | String | object id of the event |         |

**Success Response**:

```
{ "code": "200",
  "status": "success",
  "eventName": "",
  "location": "",
  "review": ["name": "", "avatar": "", "content": ""],
  "eventTags": ["trustworthy", "nice"]
  }
```

**Error Response**:

```
{ "code": "", "status": "error", "errMessage": "event does not exist" }
```

### [POST]Register Event

**Description**:

register event for the given user

**URL**: `/event/register`

**Request Body**:

| Name    | Type   | Description            | Example |
| ------- | ------ | ---------------------- | ------- |
| eventId | String | object id of the event |         |
| userId  | String | object id of the user  |         |

**Success Response**:

```
{ "code": "200", "status": "success"}
```

**Error Response**:

```
{ "code": "", "status": "error", "errMessage": "user does not exist" }
{ "code": "", "status": "error", "errMessage": "event does not exist"}
```

### [Get] Load Participated and Participating Events by UserId

**Description**:

load info for [page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=27%3A120) and [page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=113%3A168)

**URL**: `/event/participate-event`

**Query Paramters**:

| Name    | Type    | Description                    | Example |
| ------- | ------- | ------------------------------ | ------- |
| userId  | String  | object id                      | `""`    |
| pageNum | Integer | current page number to display |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code": "", "status": "error", "errMessage": "no such user" }
```

### [GET] Load Hosted and Hosting Events by UserId

**Description**:

load events for [page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=113%3A354) and [page](https://www.figma.com/file/VwMPTLWxxXwuAr1E2twT0E/MeetIt?node-id=72%3A415)

**URL**: `/event/host-events`

**Query Paramters**:

| Name    | Type    | Description                | Example |
| ------- | ------- | -------------------------- | ------- |
| userId  | String  | object id                  | `""`    |
| pageNum | Integer | the page number to display |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code": "", "status": "error", "errMessage": "no such user" }
```

### [POST] Unenroll Event

**Description**:

unenroll event

**URL**: `/event/unenroll-event`

**Query Parameters**:

| Name    | Type   | Description | Example |
| ------- | ------ | ----------- | ------- |
| userId  | String | object id   | `""`    |
| eventId | String | object id   |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code": "","status": "error", "errMessage": "no such user" }
{ "code": "", status": "error", "errMessage": "no such event" }
```

### [POST] Edit Event Info

**Description**:

Update event information

**URL**: `/event/edit`

**Request Body**:

| Name           | Type    | Description                                                                                                                      | Example |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| eventId        | String  | object Id of the event                                                                                                           |         |
| eventName      | String  |                                                                                                                                  |         |
| location       | String  |                                                                                                                                  |         |
| description    | String  |                                                                                                                                  |         |
| time           | String  |                                                                                                                                  |         |
| capacity       | Integer |                                                                                                                                  |         |
| ways to charge | String  | one of the following "no participation fee", "give cash to host", "etransfer to host", "participants must buy their own ticket " |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code" :"", "status": "error", "errMessage": "no such event" }
```

### [GET] Desired Event

**Description**:

find desired events according to filters

**URL**: `/event/filter`

**Query Paramters**:

| Name              | Type    | Description                                                                                                                                                       | Example |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| eventName         | String  |                                                                                                                                                                   | `""`    |
| location          | String  |                                                                                                                                                                   |         |
| distance          | String  | one of the following: "less than 1km", "1~2km", "3~5km", "5~10km", "10+ km"                                                                                       |         |
| startTime         | String  |                                                                                                                                                                   |         |
| endTime           | String  |                                                                                                                                                                   |         |
| capacity          | Integer |                                                                                                                                                                   |         |
| price             | String  | one of the following: "Free", "$1 ~ $10", "$11 ~ $20", "$21 ~ $50", "$51 ~ $80", "$80+"                                                                           |         |
| numOfParticipants | String  | (host is not considered as participants) one of the following: "1 person", "2 people", "3~5 people", "5~10 people", "11~15 people", "15~20 people", "20 + people" |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```

```

## Review Related

### [POST]Add Review

**Description**:

add a review of an event

**URL**: `/event/add-review`

**Reqeust body:**

| Name    | Type            | Description                                                                                                                      | Example |
| ------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| tags    | list of strings | one of the following: "Nice", "Friendly", "Chill", "Delayed", "Canceled", "Not as Desired", "Asked for Extra Fee", "Unorganized" |         |
| review  | String          |                                                                                                                                  |         |
| eventId | String          | object id of an event                                                                                                            |         |
| userId  | String          | object id of a user                                                                                                              |         |

**Success Response**:

```
{ "code": "", "status": "success", "errMessage": "" }
```

**Error Response**:

```
{ "code": "", "status": "error", "errMessage": "no such event" }
{ "code": "", "status": "error", "errMessage": "no such user" }
```

### [GET] Load Event for review

**Description**:

load a list of events that requiring user to review

**URL**: `/event/review-required`

**Query Paramters**:

| Name   | Type   | Description | Example |
| ------ | ------ | ----------- | ------- |
| userId | String | object id   | `""`    |

**Success Response**:

```
{ "code": "200",
"status": "success",
"events": [{"eventId": "", "eventName': ""},
					{"eventId": "", "eventName': ""}]
}
```

**Error Response**:

```
{ "status": "error", "errMessage": "no such user" }
```
