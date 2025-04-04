
# Getting Started with Shell SmartPay API

## Introduction

The APIs detailed within this document will enable Shell's Fleet Solutions Customers to digitalize Shell Card/s and use them to pay to refuel their vehicles at Shell Stations.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install digital-payments-sdk@1.2.0
```

For additional package details, see the [Npm page for the digital-payments-sdk@1.2.0 npm](https://www.npmjs.com/package/digital-payments-sdk/v/1.2.0).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Test`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `mppTokenCredentials` | [`MppTokenCredentials`](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/auth/custom-header-signature.md) | The credential object for mppToken |
| `oAuthTokenPostCredentials` | [`OAuthTokenPostCredentials`](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/auth/custom-header-signature-1.md) | The credential object for oAuthTokenPost |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  mppTokenCredentials: {
    'Authorization': 'Authorization'
  },
  oAuthTokenPostCredentials: {
    'X-Apigee-Authorization': 'X-Apigee-Authorization'
  },
  timeout: 0,
  environment: Environment.Test,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Test | **Default** |
| Production | - |

## Authorization

This API uses the following authentication schemes.

* [`MppToken (Custom Header Signature)`](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/auth/custom-header-signature.md)
* [`oAuthTokenPost (Custom Header Signature)`](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/auth/custom-header-signature-1.md)

## List of APIs

* [Shell API Platform Security Authentication](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/controllers/shell-api-platform-security-authentication.md)
* [Digital Payment Enablement](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/controllers/digital-payment-enablement.md)
* [Station Locator](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/controllers/station-locator.md)
* [Partner Notification](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/controllers/partner-notification.md)
* [Fueling](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/controllers/fueling.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/api-response.md)
* [HttpRequest](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/http-request.md)
* [ApiError](https://www.github.com/sdks-io/digital-payments-js-sdk/tree/1.2.0/doc/api-error.md)

