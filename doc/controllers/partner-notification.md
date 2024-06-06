# Partner Notification

```ts
const partnerNotificationController = new PartnerNotificationController(client);
```

## Class Name

`PartnerNotificationController`

## Methods

* [Partner Token](../../doc/controllers/partner-notification.md#partner-token)
* [Finalise Fueling](../../doc/controllers/partner-notification.md#finalise-fueling)
* [Cancel Fueling](../../doc/controllers/partner-notification.md#cancel-fueling)


# Partner Token

To access the Partner’s endpoints, for sending callback messages, Shell will need to connect to the Partner API end points. It is recemmended that the partner offers OAuth 2.0 as a standard for call back APIs and will require the OAuth 2.0 token for authentication. Note this needs to be implemented over HTTPS

:information_source: **Note** This endpoint does not require authentication.

```ts
async partnerToken(
  grantType: string,
  clientId: string,
  clientSecret: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccessTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantType` | `string` | Form, Required | In OAuth 2.0, the term grant typee refers to the way an application gets an access token. OAuth 2.0 defines several grant types, including the authorization code flow. |
| `clientId` | `string` | Form, Required | After registering your app, you will receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. |
| `clientSecret` | `string` | Form, Required | After registering your app, you will receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. The client secret must be kept confidential. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccessTokenResponse`](../../doc/models/access-token-response.md)

## Example Usage

```ts
const grantType = 'client_credentials';

const clientId = 'SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA';

const clientSecret = 'cRnWgw7gACqM3gVS';

try {
  const { result, ...httpResponse } = await partnerNotificationController.partnerToken(
  grantType,
  clientId,
  clientSecret
);
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
| 401 | Unauthorized | [`AccessTokenError`](../../doc/models/access-token-error.md) |


# Finalise Fueling

Enables Shell to inform partner of the successful completion of a transaction. Note this needs to be implemented over HTTPS

:information_source: **Note** This endpoint does not require authentication.

```ts
async finaliseFueling(
  body?: FinaliseFuelingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`FinaliseFuelingRequest \| undefined`](../../doc/models/finalise-fueling-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: FinaliseFuelingRequest = {
  siteName: 'Pentahof Site B 9997',
  timestamp: BigInt(1548429960631),
  volumeQuantity: 10.4,
  volumeUnit: 'LTR',
  finalPrice: 23.3,
  currency: 'GBP',
  status: 'FINISHED',
  siteAddress: 'Test Geman Address',
  originalPrice: 23.3,
  discount: 0,
  mppTransactionId: '000000006KCC',
};

try {
  const { result, ...httpResponse } = await partnerNotificationController.finaliseFueling(body);
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
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |


# Cancel Fueling

Enables Shell to inform partner that a Mobile Payment transaction has been cancelled by Shell as an error/issue occured. Note this needs to be implemented over HTTPS

:information_source: **Note** This endpoint does not require authentication.

```ts
async cancelFueling(
  body?: CancelFuelingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CancelFuelingRequest \| undefined`](../../doc/models/cancel-fueling-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CancelFuelingRequest = {
  mppTransactionId: '000000001E5M',
  reasonCode: 'CANCELLED',
};

try {
  const { result, ...httpResponse } = await partnerNotificationController.cancelFueling(body);
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
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |

