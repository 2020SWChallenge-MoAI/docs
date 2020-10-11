---
description: API for users
---

# User

{% api-method method="get" host="http://localhost:7002" path="/api/user" %}
{% api-method-summary %}
Get User Information
{% endapi-method-summary %}

{% api-method-description %}
Return the information of the user who currently signed in  
  
\* You can get access token at `/api/auth/signin`
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
access token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    nickname: "User1",
    email: "user1@test.ttokdok.moai",
    age: 10,
    profile_img_url: "",
    profile_text: "",
    created_at: "Mon, 05 Oct 2020 00:16:14 GMT",
    updated_at: ""Mon, 05 Oct 2020 00:16:14 GMT",
    read_book_bids: [
        {
            bid: 1,
            read_at: "Sun, 11 Oct 2020 23:41:29 GMT"
        },
        {
            bid: 0,
            read_at: "Sun, 11 Oct 2020 23:31:41 GMT"
        },
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
User not exist  
\* May be occurred when the user is using the deleted user's access token
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid or expired.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



