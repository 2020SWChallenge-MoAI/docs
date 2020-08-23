# find id / reset password

{% api-method method="get" host="https://ttokdok.moai" path="/auth/find-id" %}
{% api-method-summary %}
Find id
{% endapi-method-summary %}

{% api-method-description %}
Return all **masked IDs** _****_by the given email
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
User email
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
`email` is valid  
When ID doesn't exist under the given `email`, send empty array.
{% endapi-method-response-example-description %}

```javascript
{
    user_ids: [
        // masked ids
        // ex. "ab***fg" if ID is "abcdefg"
    ]
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`email` is in invalid format
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

{% api-method method="get" host="https://ttokdok.moai" path="/auth/password-reset-token" %}
{% api-method-summary %}
Send password reset token to email
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
User email
{% endapi-method-parameter %}

{% api-method-parameter name="user\_id" type="string" required=true %}
User ID
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Password reset token is successfully sent to `email`
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}
`email` is in invalid format
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
`email` and `user_id` is not matched
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=500 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
