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
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bids: [ 0, 1, 2, ... ]
}
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

{% api-method method="get" host="http://localhost:7002" path="/api/book/<bid>" %}
{% api-method-summary %}
Get Book Meta
{% endapi-method-summary %}

{% api-method-description %}
Return meta data of the book with certain bid  
  
\* You can get access token at `/api/auth/signin`
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="bid" type="integer" required=true %}
BID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
access token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bid: 23,
    title: "콩쥐 팥쥐"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid or expired.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Requested `bid` is not valid  
- `bid` is not an integer\(ex. "asdf", "$-\#14af"\)  
- `bid` does not exist\(ex. "1999, "643215"\)
{% endapi-method-response-example-description %}

```javascript

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://localhost:7002" path="/api/book/<bid>/text" %}
{% api-method-summary %}
Get Book Text
{% endapi-method-summary %}

{% api-method-description %}
Return text of the book with certain bid  
  
\* You can get access token at `/api/auth/signin`  
\* Queried `bid`s are recorded and can be retrieved at `/api/user` 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="bid" type="integer" required=true %}
BID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
access token
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Request successfully processed
{% endapi-method-response-example-description %}

```javascript
{
    bid: 52,
    text: "Becomming a presentation master is not easy..."    
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid or expired.
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Requested `bid` is not valid  
- `bid` is not an integer\(ex. "asdf", "$-\#14af"\)  
- `bid` does not exist\(ex. "1999", "643215"\)
{% endapi-method-response-example-description %}

```javascript

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
  
\* You can get access token at `/api/auth/signin`  
\* `anc` should be a stringified JSON array. Recommend to use `JSON.stringify()` method.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="bid" type="integer" required=true %}
BID
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
access token
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="num" type="integer" required=false %}
number of keywords that want to receive \(Default: 5\)
{% endapi-method-parameter %}

{% api-method-parameter name="anc" type="array" required=false %}
ancestors of keyword \(Default: \[\]\)
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

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`x-access-token` is not valid or expired
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Requested `bid` is not valid  
- `bid` is not an integer\(ex. "asdf", "$-\#14af"\)  
- `bid` does not exist\(ex. "1999", "643215"\)
{% endapi-method-response-example-description %}

```javascript

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



