define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/signin",
    "title": "Sign In",
    "version": "0.1.0",
    "name": "Sign_In",
    "group": "Auth",
    "description": "<p>Returns an access token</p> <p>- Currently, the api is using http and it does have vulnerability of sending plain password, but the api will soon be updated to https.</p> <p>- Access tokens will be expired 10 minutes after they are issued</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body Parameter": [
          {
            "group": "Body Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Body Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>(plain) password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Access Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example",
          "content": "{\n    access token: \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImV4cCI6MTYwMjQyNzg4M30.iGGQvVLDIwyYwm2iOG9lBOoGxhfpV75Z7sY-uMKAXgg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400:Bad_Request",
            "description": "<p>Either one of <code>id</code> or <code>pw</code> is not included in the request.</p><p><code>id</code> is not registered.</p><p><code>id</code> and <code>pw</code> are not matching.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401:Not_Authorized",
            "description": "<p><code>x-access-token</code> is not valid or expired.</p>"
          }
        ]
      }
    },
    "filename": "./api/auth.py",
    "groupTitle": "Auth"
  }
] });
