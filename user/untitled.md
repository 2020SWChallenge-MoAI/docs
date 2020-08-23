---
description: Get informations about users
---

# Info

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/profile" %}
{% api-method-summary %}
User profile
{% endapi-method-summary %}

{% api-method-description %}
Get user's profile 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
Access token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    user_id: , // string
    nickname: , // string
    age: , // integer
    profile_text: , // string
    profile_image: // base64 encoded string
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid  
`uid` is not valid
{% endapi-method-response-example-description %}

```javascript
{
    cause: // "x-access-token" or "uid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Server down
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/stats" %}
{% api-method-summary %}
User statistics
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
Access token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    win_rate: , // float
    n_books: , // integer
    n_activities: // integer
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid  
`uid` is not valid
{% endapi-method-response-example-description %}

```javascript
{
    cause: // "x-access-token" or "uid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Server down
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/history" %}
{% api-method-summary %}
User history
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
Access token
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="from" type="string" required=true %}
date : yyyy-mm-dd
{% endapi-method-parameter %}

{% api-method-parameter name="to" type="string" required=true %}
date : yyyy-mm-dd
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    history: [
        {
            date: // string : yyyy-mm-dd
            book: [
                {
                    bid: , // integer
                    category: , // string
                    title: , // string
                    author: , // string
                    publisher: , // string
                    is_read:  // boolean
                }, ...
            ], 
            activity: [
                {
                    aid: , // integer
                    type: , // string
                    book: {
                        bid: , // integer
                        category: , // string
                        title: , // string
                        author: , // string
                        publisher:  // string
                    }
                }, ...
            ]
        }, ...
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid  
`uid` is not valid
{% endapi-method-response-example-description %}

```javascript
{
    cause: // "x-access-token" or "uid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Server down
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

