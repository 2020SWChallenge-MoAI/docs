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
Requested `bid` is not valid  
- `bid` is not an integer\(ex. "asdf", "$-\#14af"\)  
- `bid` does not exist\(ex. "1999", "643215"\)
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

{% api-method method="get" host="http://localhost:7002" path="/api/book/<bid>/keyword" %}
{% api-method-summary %}
Get Keyword
{% endapi-method-summary %}

{% api-method-description %}
Return keyword of the book
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="bid" type="integer" required=true %}
BID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="num" type="integer" required=false %}
number of keywords that want to receive
{% endapi-method-parameter %}

{% api-method-parameter name="anc" type="array" required=false %}
ancestors of keyword
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bid: 23,
    keyword_num: 3,
    keyword_ancestors: ["토끼", "경주"],
    keywords": [
        { weight: 0.085, word: "잠" },
        { weight: 0.073, word: "거북이" },
        { weight: 0.002, word: "점심" },
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Requested `bid` is not valid  
- `bid` is not an integer\(ex. "asdf", "$-\#14af"\)  
- `bid` does not exist\(ex. "1999", "643215"\)
{% endapi-method-response-example-description %}

```javascript
{
    bid: 1999,
    keyword_num: 3,
    keyword_ancestors: ["토끼", "경주"],
    err_msg: "bid not exists"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

