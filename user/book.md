---
description: Information of Books that user read
---

# Book

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/category" %}
{% api-method-summary %}
All Categories
{% endapi-method-summary %}

{% api-method-description %}
Returns all categories of books user read
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
    categories: [
        {
            cid: , // integer
            name: // string
        }
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`uid` is not valid : error code 0
{% endapi-method-response-example-description %}

```javascript
{
    error_code: 0,
    error_msg: "uid is not valid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid
{% endapi-method-response-example-description %}

```javascript

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

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/category/:cid/book" %}
{% api-method-summary %}
All Books of the Category
{% endapi-method-summary %}

{% api-method-description %}
Returns all books of the category user read
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}

{% api-method-parameter name="cid" type="integer" required=true %}
Category cid
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
    book: [
        {
            bid: , // integer
            category: , // string
            title: , // string
            author: , // string
            publisher: , // string
            cover_image: , // base64 encoded string
            rating: // float
        }, ...
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`uid` is not valid : error code 0  
`cid` is not valid : error code 1
{% endapi-method-response-example-description %}

```javascript
{
    error_code: 0,
    error_msg: "uid is not valid"
}

{
    error_code: 1,
    error_msg: "cid is not valid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` in not valid
{% endapi-method-response-example-description %}

```javascript

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

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/book/:bid/activities" %}
{% api-method-summary %}
All Activities of the Book
{% endapi-method-summary %}

{% api-method-description %}
Returns all activities of the book user read
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}

{% api-method-parameter name="bid" type="integer" required=true %}
Book bid
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
   activities: [
        {
            aid: , // integer
            type: , // string
            cotent: // object
        }, ...
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`uid` is not valid : error code 0  
`bid` is not valid : error code 2
{% endapi-method-response-example-description %}

```javascript
{
    error_code: 0,
    error_msg: "uid is not valid"
}

{
    error_code: 2,
    error_msg: "bid is not valid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid
{% endapi-method-response-example-description %}

```javascript

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}
Server  down
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://ttokdok.moai" path="/users/:uid/followers/book/:bid/activities" %}
{% api-method-summary %}
Follower's All Activities of the Book
{% endapi-method-summary %}

{% api-method-description %}
Returns follower's all activities of the book
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="uid" type="integer" required=true %}
User uid
{% endapi-method-parameter %}

{% api-method-parameter name="bid" type="integer" required=true %}
Book bid
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
   activities: [
        {
            aid: , // integer
            type: , // string
            cotent: // object
        }, ...
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`uid` is not valid : error code 0  
`bid` is not valid : error code 2
{% endapi-method-response-example-description %}

```javascript
{
    error_code: 0,
    error_msg: "uid is not valid"
}

{
    error_code: 2,
    error_msg: "bid is not valid"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid
{% endapi-method-response-example-description %}

```

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



