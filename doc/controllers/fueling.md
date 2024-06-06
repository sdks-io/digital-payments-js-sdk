# Fueling

```ts
const fuelingController = new FuelingController(client);
```

## Class Name

`FuelingController`

## Methods

* [Mpp Token](../../doc/controllers/fueling.md#mpp-token)
* [Mpp Prepare Fueling](../../doc/controllers/fueling.md#mpp-prepare-fueling)
* [Mpp Cancel Fueling](../../doc/controllers/fueling.md#mpp-cancel-fueling)


# Mpp Token

The Digital Payments Service enables 3rd Parties to trigger the refuel process which, if successful, will unlock a pump/nozzle ready for fuelling. Enables a 3rd party to request an access token to start using fueling.
APIs

```ts
async mppToken(
  grantType: string,
  clientId: string,
  clientSecret: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MppAccesTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantType` | `string` | Form, Required | In OAuth 2.0, the term grant type refers to the way an application gets an access token. OAuth 2.0 defines several grant types, including the authorization code flow. |
| `clientId` | `string` | Form, Required | After registering your app, you will receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. |
| `clientSecret` | `string` | Form, Required | After registering your app, you will receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. The client secret must be kept confidential. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MppAccesTokenResponse`](../../doc/models/mpp-acces-token-response.md)

## Example Usage

```ts
const grantType = 'client_credentials';

const clientId = 'b2bmpp-cli';

const clientSecret = 'f20935d8f14a44bd1f0923cc4c4fa63f7b25922330cd5080f735f1a2769ece77ce245cfe8ba4cbd2a58544ee5113c200b8e37a7be33311e4b6f3c785bf3f37d2';

try {
  const { result, ...httpResponse } = await fuelingController.mppToken(
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
| 401 | Unauthorized. The request has not been applied because it lacks valid authentication credentials for the target resource. | [`MppAccesTokenErrorResponseError`](../../doc/models/mpp-acces-token-error-response-error.md) |


# Mpp Prepare Fueling

Enables a 3rd party to request to unlock a pump so that they may fill up to a pre-authorised limit. The fuel types that are unlocked may also be determined by permitted fuels stored against the user/entity profile

```ts
async mppPrepareFueling(
  siteCountry: string,
  currency: string,
  body: PrepareFuelingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PrepareFuelingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `siteCountry` | `string` | Query, Required | Country ISO code |
| `currency` | `string` | Query, Required | Currency ISO code |
| `body` | [`PrepareFuelingRequest`](../../doc/models/prepare-fueling-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PrepareFuelingResponse`](../../doc/models/prepare-fueling-response.md)

## Example Usage

```ts
const siteCountry = 'NL';

const currency = 'EUR';

const body: PrepareFuelingRequest = {
  latitude: 12.92452,
  longitude: 77.68862,
  stationId: '9955',
  pumpId: '1',
  sourceApplication: 'PARTNER_APP_EXAMPLE',
  paymentDetails: [
    {
      paymentMethodId: 'euroShell',
      paymentProperties: {
        cardIdentifier: '98e4ffd3-4146-4e94-8445-e02f4ce87a77',
      },
    }
  ],
  loyaltyDetails: [
    {
      loyaltyId: '70043201060148830',
      loyaltyType: 'Shell',
    }
  ],
};

try {
  const { result, ...httpResponse } = await fuelingController.mppPrepareFueling(
  siteCountry,
  currency,
  body
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
| 400 | Error Occurred. Request did not include bearer token or token provided and is invalid. | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden. Requestor is not permitted to call the API | `ApiError` |
| 404 | Not Found. Request received by the server but requested URL not found | `ApiError` |


# Mpp Cancel Fueling

Enables a partner user to cancel pump reservation from the App

```ts
async mppCancelFueling(
  mppTransactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mppTransactionId` | `string` | Template, Required | The ID of the transaction that’s being cancelled |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const mppTransactionId = '000000001C48';

try {
  const { result, ...httpResponse } = await fuelingController.mppCancelFueling(mppTransactionId);
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
| 400 | Error Occurred. The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, invalid request message). Please see below for information regarding structure of Response Body vs. all possible errors that could be returned. | [`CancelFuelingErrorResponseError`](../../doc/models/cancel-fueling-error-response-error.md) |
| 401 | Unauthorized. Request did not include bearer token or token provided and is invalid. | [`CancelFuelingErrorResponseError`](../../doc/models/cancel-fueling-error-response-error.md) |
| 403 | Forbidden. Requestor is not permitted to call the API. | `ApiError` |
| 404 | Not Found. Request received by the server but requested URL not found | `ApiError` |

