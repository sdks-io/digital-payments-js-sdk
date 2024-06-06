
# Mpp Acces Token Error Response Error

## Structure

`MppAccesTokenErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string` | Required | error code or short description |
| `errorCode` | `string` | Required | error code or short description due to invalid request or invalid client ID |
| `errorDescription` | `string \| undefined` | Optional | Description of the error |

## Example (as JSON)

```json
{
  "error": "invalid_request",
  "error_code": "Invalid_client",
  "error_description": "Missing grant type"
}
```

