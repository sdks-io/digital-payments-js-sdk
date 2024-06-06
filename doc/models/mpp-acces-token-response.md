
# Mpp Acces Token Response

## Structure

`MppAccesTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | It is the token used in the requests that required to authenticate an user. |
| `tokenType` | `string \| undefined` | Optional | type of token provided<br>**Default**: `'bearer'` |
| `expiresIn` | `bigint \| undefined` | Optional | validity of the access token in seconds |
| `scope` | `string \| undefined` | Optional | scope for the authentication protocol<br>**Default**: `'basic openid'` |

## Example (as JSON)

```json
{
  "access_token": "zn2GcAQugJQRJXcGXsmHZ8LMqVde",
  "token_type": "bearer",
  "expires_in": 3599,
  "scope": "basic openid"
}
```

