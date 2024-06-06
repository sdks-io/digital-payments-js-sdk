# Digital Payment Enablement

```ts
const digitalPaymentEnablementController = new DigitalPaymentEnablementController(client);
```

## Class Name

`DigitalPaymentEnablementController`


# Mpay V1 Tokens Ref Put

Generates a DPAN and stores the relationship between the Reference ID, DPAN and the real PAN. This method is called during the customer registration process, ahead of any payment. The Reference ID is an identifier chosen by the client system for mobile payment registration. It must be unique in context of the client system, and is the key to obtaining and managing the payment details later.

```ts
async mpayV1TokensRefPut(
  body: MobilePaymentRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentEnablementResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MobilePaymentRegistrationRequest`](../../doc/models/mobile-payment-registration-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentEnablementResponse`](../../doc/models/payment-enablement-response.md)

## Example Usage

```ts
const body: MobilePaymentRegistrationRequest = {
  referenceId: 'caa29807-6fa7-4801-87bb-dd975e2cbf41',
  pan: '7077141290120180000',
  panExpiry: '2101',
  period: 3,
  accountId: '8682',
  payerId: '8682',
  colCoId: '32',
  collectingCompanies: [
    {
      colCoId: '32',
    }
  ],
};

try {
  const { result, ...httpResponse } = await digitalPaymentEnablementController.mpayV1TokensRefPut(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error Occurred. The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, invalid request message). | [`PaymentEnablementErrorResponseError`](../../doc/models/payment-enablement-error-response-error.md) |
| 401 | Unauthorized. The request has not been applied because it lacks valid authentication credentials for the target resource. | `ApiError` |
| 403 | Forbidden. The server understood the request but refuses to authorize it. | `ApiError` |
| 404 | Not Found. The origin server did not find a current representation for the target resource or is not willing to disclose that one exists. | `ApiError` |
| 500 | Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request. | `ApiError` |

