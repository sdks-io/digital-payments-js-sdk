
# Fault

## Structure

`Fault`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `faultstring` | `string \| undefined` | Optional | The description of the error. |
| `detail` | [`Detail \| undefined`](../../doc/models/detail.md) | Optional | - |

## Example (as JSON)

```json
{
  "faultstring": "Invalid ApiKey for given resource",
  "detail": {
    "errorcode": "errorcode6"
  }
}
```

