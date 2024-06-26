# User controller

---

[UpdateMe](#updateMe)

## Update Me (update authorized user)

| Key    | Description   |
| ------ | ------------- |
| Method | `POST`        |
| Path   | `/user/update/me` |

### Request Body (all fields are optional)

| Key        | Type   |
| ---------- | ------ |
| `email`    | String |
| `username` | String |
| `firstName` | String |
| `lastName` | String |
| `roles` | String[] |
| `description` | String |
| `previousWorkPlace` | String[] |
| `companyId` | String |
| `portfolio` | String[] |
| `profilePicture` | String |

### Success Response

HTTP Code: 200

```json
{
  "status": true,
  "statusCode": 200,
  "data": {
    "id": "d29636a9-ecdd-4905-9568-27e0af35732f",
    "email": "default.user@email.com",
    "username": "Default User",
    "firstName": "Default",
    "lastName": "User",
    "createdAt": "2024-01-02T16:15:29.191Z",
    "updatedAt": "2024-01-03T07:56:15.257Z",
    "roles": [
      "USER"
    ],
    "description": "default user description that being created by seed.ts",
    "previousWorkplaceId": [
      "01",
      "02",
      "04"
    ],
    "previousWorkplaceCount": 3,
    "ratingsAvg": null,
    "companyId": null,
    "portfolio": [],
    "profilePicture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fnestjs%2Fswagger%2Fissues%2F1062&psig=AOvVaw3aa3sM4HwPBnbxa_JISyrs&ust=1704354787503000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDOkcfewIMDFQAAAAAdAAAAABAD",
    "hasGoogleAccount": false
  }
}
```

### Invalid credential

HTTP Code: 401

```json
{
  "status": true,
  "statusCode": 401,
  "data": {
    "access": "UNAUTHORIZED"
  }
}
```

### Invalid email format

HTTP Code: 400

```json
{
  "status": false,
  "statusCode": 400,
  "message": {
    "email": "email must be an email"
  },
  "error": "BAD_REQUEST"
}

```
### Username already used

HTTP Code: 400

```json
{
  "status": false,
  "statusCode": 400,
  "message": {
    "username": "ALREADY_USED"
  },
  "error": "BAD_REQUEST"
}
```


### Invalid field format

HTTP Code: 400

```json
{
  "status": false,
  "statusCode": 400,
  "message": {
    "username": "username must be a string"
  },
  "error": "BAD_REQUEST"
}
```
---
[Upload Profile Picture](#uploadProfilePicture)

## Upload Profile Picture

| Key    | Description      |
| ------ | ---------------- |
| Method | `POST`           |
| Path   | `/user/uploadProfilePicture` |

### Request Body

| Key              | Type   |
| ---------------- | ------ |
| `file`       | File |

### Success Response

HTTP Code: 200

```json
{
    "status": true,
    "statusCode": 200,
    "data": {
        "id": "d29636a9-ecdd-4905-9568-27e0af35732f",
        "email": "default.user@email.com",
        "username": "Default User",
        "firstName": "Default",
        "lastName": "User",
        "createdAt": "2024-01-02T16:15:29.191Z",
        "updatedAt": "2024-01-03T08:39:36.628Z",
        "roles": [
            "USER"
        ],
        "description": "default user description that being created by seed.ts",
        "previousWorkplaceId": [
            "01",
            "02",
            "04"
        ],
        "previousWorkplaceCount": 3,
        "ratingsAvg": null,
        "companyId": null,
        "portfolio": [],
        "profilePicture": "https://firebasestorage.googleapis.com/v0/b/tech-395620.appspot.com/o/profilePicture%2Fd29636a9-ecdd-4905-9568-27e0af35732f.jpg?alt=media&token=25968c38-961d-41f2-be7e-2262ee44e142",
        "hasGoogleAccount": false
    }
}
```

### Empty field

HTTP Code: 400

```json
{
    "status": false,
    "statusCode": 400,
    "message": {},
    "error": "BAD_REQUEST"
}
```
---

[Get Profile Info](#getProfileInfo)

## Get Profile Info

| Key    | Description      |
| ------ | ---------------- |
| Method | `Get`           |
| Path   | `/user/info` |


### Success Response

HTTP Code: 200

```json
{
  "status": true,
  "statusCode": 200,
  "data": {
    "id": "b06f6b23-89d0-4dae-b800-aff3604bad87",
    "email": "admin@email.com",
    "username": "Admin",
    "firstName": "Admin",
    "lastName": "Admin",
    "createdAt": "2024-01-02T16:15:28.970Z",
    "updatedAt": "2024-01-02T16:15:29.774Z",
    "roles": [
      "ADMIN",
      "USER"
    ],
    "description": null,
    "previousWorkplaceId": [],
    "previousWorkplaceCount": 0,
    "ratingsAvg": null,
    "companyId": null,
    "portfolio": [],
    "profilePicture": null,
    "hasGoogleAccount": false
  }
}
```

### Unauthorized

HTTP Code: 401

```json
{
  "status": true,
  "statusCode": 401,
  "data": {
    "access": "UNAUTHORIZED"
  }
}
```

[Get Applied Job](#getAppliedJob)

## Get Applied Job

| Key    | Description      |
| ------ | ---------------- |
| Method | `Get`           |
| Path   | `/user/applied` |

### Request Body

| Key              | Type   |
| ---------------- | ------ |
| `page`       | number |
| `size`       | number |


### Success Response

HTTP Code: 200

```json
{
  "status": true,
  "statusCode": 200,
  "data": {
    "data": [
      {
        "id": "e00b4d7f-19c1-40f7-8e96-895dcd9b6f0e",
        "title": "This is job1 title",
        "description": "This is job1 description for ninisani",
        "createdAt": "2024-01-16T08:10:00.882Z",
        "updatedAt": "2024-01-16T08:10:00.882Z",
        "companyId": "7b9e79f7-ebc1-49de-a0db-b9d53cfe1cf7"
      },
      {
        "id": "e00b4d7f-19c1-40f7-8e96-895dcd9b6f0e",
        "title": "This is job1 title",
        "description": "This is job1 description for ninisani",
        "createdAt": "2024-01-16T08:10:00.882Z",
        "updatedAt": "2024-01-16T08:10:00.882Z",
        "companyId": "7b9e79f7-ebc1-49de-a0db-b9d53cfe1cf7"
      },
      {
        "id": "e00b4d7f-19c1-40f7-8e96-895dcd9b6f0e",
        "title": "This is job1 title",
        "description": "This is job1 description for ninisani",
        "createdAt": "2024-01-16T08:10:00.882Z",
        "updatedAt": "2024-01-16T08:10:00.882Z",
        "companyId": "7b9e79f7-ebc1-49de-a0db-b9d53cfe1cf7"
      },
      {
        "id": "e00b4d7f-19c1-40f7-8e96-895dcd9b6f0e",
        "title": "This is job1 title",
        "description": "This is job1 description for ninisani",
        "createdAt": "2024-01-16T08:10:00.882Z",
        "updatedAt": "2024-01-16T08:10:00.882Z",
        "companyId": "7b9e79f7-ebc1-49de-a0db-b9d53cfe1cf7"
      },
      {
        "id": "e00b4d7f-19c1-40f7-8e96-895dcd9b6f0e",
        "title": "This is job1 title",
        "description": "This is job1 description for ninisani",
        "createdAt": "2024-01-16T08:10:00.882Z",
        "updatedAt": "2024-01-16T08:10:00.882Z",
        "companyId": "7b9e79f7-ebc1-49de-a0db-b9d53cfe1cf7"
      }
    ],
    "hasPrevious": false,
    "hasNext": true,
    "totalPages": 5,
    "isLast": false,
    "isFirst": true
  }
}
```

### Unauthorized

HTTP Code: 401

```json
{
  "status": true,
  "statusCode": 401,
  "data": {
    "access": "UNAUTHORIZED"
  }
}
```
