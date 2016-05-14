# glowwormpoker-api

Api for Glowworm Poker

Heroku Url: https://glowwormpoker-api.herokuapp.com/

API DOCS

This will add a jira to the MongoDB

POST: /api/latest/jira/jiras

SAMPLE REQUEST JSON:

```javascript
{
    "jira": {
        "name": "Create Landing Page",
        "description": "As a user, I would like to land on a friendly and potentially useful landing page",
        "createdBy": "Best Coder"
    }
}
```

This will bring back the full list of stories from the MongoDB

GET: /api/lastest/jira/jiras

SAMPLE RESPONSE JSON

```javascript
[
  {
    "_id": "57367d00331af565b87fe675",
    "createdBy": "Best Coder",
    "description": "As a user, I would like to login to the app",
    "name": "Create Login",
    "__v": 0
  },
  {
    "_id": "57367d25331af565b87fe677",
    "createdBy": "Best Coder",
    "description": "As a user, I would like to land on a friendly and potentially useful landing page",
    "name": "Create Landing Page",
    "__v": 0
  }
]
```