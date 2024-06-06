
# Access Token Response

## Structure

`AccessTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | It is the token used for the requests that required an authenticated user. This will be used for all the callback URLs. |
| `expiresIn` | `string \| undefined` | Optional | validity of the access token in seconds |
| `tokenType` | `string \| undefined` | Optional | Type of token provided<br>**Default**: `'Bearer'` |

## Example (as JSON)

```json
{
  "access_token": "zn2GcAQugJQRJXcGXsmHZ8LMqVde",
  "expires_in": "3599",
  "token_type": "Bearer"
}
```

