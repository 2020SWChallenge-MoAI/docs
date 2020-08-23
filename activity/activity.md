# Activity

{% api-method method="get" host="https://ttokdok.moai" path="/activity" %}
{% api-method-summary %}
List of Activities
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get free cakes.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="x-access-token" type="string" required=true %}
Access token
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="bid" type="string" required=true %}
Book bid
{% endapi-method-parameter %}

{% api-method-parameter name="uid" type="integer" required=false %}
User uid
{% endapi-method-parameter %}

{% api-method-parameter name="criteria" type="string" required=false %}
Sorting criteria. "time" or "likes"
{% endapi-method-parameter %}

{% api-method-parameter name="order" type="string" %}
Sorting order. "asc" or "desc"
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



