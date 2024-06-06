
# Mpp Error

## Structure

`MppError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | Descriptive, human readable error message. Description of the error (e.g. This field is required and must to be between 1 and 255 characters long) |
| `reason` | `string \| undefined` | Optional | Additional classification specific for each error type e.g. 'noStock'. The nature of the issue (e.g. missing) |
| `subject` | `string \| undefined` | Optional | Identifier of the related object e.g. '1'. The field/attribute with an issue (e.g. First Name) |
| `subjectType` | `string \| undefined` | Optional | Type of the object related to the error e.g. 'entry'. The item it relates to (e.g. Parameter) |
| `type` | `string \| undefined` | Optional | Type of the error e.g. 'LowStockError', 'Validation Error' |

## Example (as JSON)

```json
{
  "message": "message4",
  "reason": "reason8",
  "subject": "subject0",
  "subjectType": "subjectType8",
  "type": "type4"
}
```

