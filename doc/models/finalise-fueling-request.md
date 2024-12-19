
# Finalise Fueling Request

## Structure

`FinaliseFuelingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siteName` | `string \| undefined` | Optional | - |
| `timestamp` | `bigint \| undefined` | Optional | - |
| `volumeQuantity` | `number \| undefined` | Optional | - |
| `volumeUnit` | `string \| undefined` | Optional | - |
| `finalPrice` | `number \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `siteAddress` | `string \| undefined` | Optional | - |
| `originalPrice` | `number \| undefined` | Optional | - |
| `discount` | `number \| undefined` | Optional | - |
| `payment` | [`Payment \| undefined`](../../doc/models/payment.md) | Optional | - |
| `products` | [`Product[] \| undefined`](../../doc/models/product.md) | Optional | - |
| `mppTransactionId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "siteName": "Pentahof Site B 9997",
  "timestamp": 1548429960631,
  "volumeQuantity": 10.4,
  "volumeUnit": "LTR",
  "finalPrice": 23.3,
  "currency": "GBP",
  "status": "FINISHED",
  "siteAddress": "Test Geman Address",
  "originalPrice": 23.3,
  "discount": 0,
  "mppTransactionId": "000000006KCC"
}
```

