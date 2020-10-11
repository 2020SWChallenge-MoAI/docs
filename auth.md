---
description: API for authentication
---

# Auth

{% api-method method="post" host="http://localhost:7002" path="/api/auth/signin" %}
{% api-method-summary %}
Sign In
{% endapi-method-summary %}

{% api-method-description %}
Return an access token  
  
\* Currently, the api is using `http` and it does have vulnerability of sending plain password, but it will soon be updated to `https`.  
\* Access tokens will be expired 10 minutes after they are issued.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
ID
{% endapi-method-parameter %}

{% api-method-parameter name="pw" type="string" required=true %}
\(plain\) password
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    access-token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImV4cCI6MTYwMjQyNzg4M30.iGGQvVLDIwyYwm2iOG9lBOoGxhfpV75Z7sY-uMKAXgg"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
- Either one of `id` or `pw` is not included in the request  
- `id` is not registered  
- `id` and `pw` are not matching
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="http://localhost:7002" path="/api/auth/id-duplicate-check" %}
{% api-method-summary %}
ID Duplicate Check
{% endapi-method-summary %}

{% api-method-description %}
Checks if new `id` is duplicated or not.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
ID
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
`ID` is not duplicated \(good to use\)
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`ID` is duplicated \(not good to use\)
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://localhost:7002" path="/api/auth/signup" %}
{% api-method-summary %}
Sign Up
{% endapi-method-summary %}

{% api-method-description %}
Create a new account
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
ID
{% endapi-method-parameter %}

{% api-method-parameter name="pw" type="string" required=true %}
\(plain\) password
{% endapi-method-parameter %}

{% api-method-parameter name="nickname" type="string" required=true %}
Nickname
{% endapi-method-parameter %}

{% api-method-parameter name="email" type="string" required=true %}
Email
{% endapi-method-parameter %}

{% api-method-parameter name="age" type="integer" required=true %}
Age
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
New account has been successfully created
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
- Either one of `id`, `pw`, `nickname`, `email`, or `age` is not included in the request or not a proper type  
- `id` already registered \(duplicated id\)
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

