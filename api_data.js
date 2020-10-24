define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/signin",
    "title": "Sign In",
    "version": "0.1.0",
    "name": "Sign_In",
    "group": "Auth",
    "description": "<p>Returns an access token</p> <ul> <li>Currently, the api is using http and it does have vulnerability of sending plain password, but the api will soon be updated to https.</li> <li>Access tokens will be expired 10 minutes after they are issued</li> </ul>",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
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
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"access token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImV4cCI6MTYwMjQyNzg4M30.iGGQvVLDIwyYwm2iOG9lBOoGxhfpV75Z7sY-uMKAXgg\"\n}",
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
            "description": "<p>Either one of id or pw is not included in the request. id is not registered. id and pw are not matching.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401:Not_Authorized",
            "description": "<p>x-access-token is not valid or expired.</p>"
          }
        ]
      }
    },
    "filename": "./api/auth.py",
    "groupTitle": "Auth"
  }
] });
