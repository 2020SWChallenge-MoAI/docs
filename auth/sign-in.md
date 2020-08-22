# sign in / sign up

{% api-method method="post" host="https://ttokdok.moai" path="/auth/sign-in" %}
{% api-method-summary %}
sign in
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="user\_id" type="string" required=true %}
User ID
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
User password\(plain text\)
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Sign-in success
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Sign-in failed
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

{% api-method method="post" host="https://ttokdok.moai" path="/auth/sign-up" %}
{% api-method-summary %}
sign up
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
User email
{% endapi-method-parameter %}

{% api-method-parameter name="user\_id" type="string" required=true %}
User ID
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
User password \(plain text\)
{% endapi-method-parameter %}

{% api-method-parameter name="nickname" type="string" required=true %}
User nickname 
{% endapi-method-parameter %}

{% api-method-parameter name="age" type="integer" required=true %}
User age
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Sign-in success
{% endapi-method-response-example-description %}

```javascript

```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}
Sign-in failed
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

