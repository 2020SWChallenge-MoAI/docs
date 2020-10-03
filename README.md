---
description: API for books
---

# Book

{% api-method method="get" host="http://localhost:7002" path="/api/book" %}
{% api-method-summary %}
Get BID List
{% endapi-method-summary %}

{% api-method-description %}
Return all BID list.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bids: [ 0, 1, 2, ... ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://localhost:7002" path="/api/book/<bid>" %}
{% api-method-summary %}
Get Book Text
{% endapi-method-summary %}

{% api-method-description %}
Return title and text of the book with certain bid
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="bid" type="integer" required=true %}
BID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bid: 52,
    title: "How to be a presentation master!",
    text: "Becomming a presentation master is not easy..."    
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Requested bid is not valid  
- bid is not an integer\(ex. "asdf", "-14af"\)  
- bid does not exist\(ex. "1999", "643215"\)
{% endapi-method-response-example-description %}

```javascript
{
    bid: 1999,
    err_msg: "bid not exist"   
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

