# Shell API Platform Security Authentication

```ts
const shellAPIPlatformSecurityAuthenticationController = new ShellAPIPlatformSecurityAuthenticationController(client);
```

## Class Name

`ShellAPIPlatformSecurityAuthenticationController`


# Oauth Token Post

To obtain APIGEE access token

:information_source: **Note** This endpoint does not require authentication.

```ts
async oauthTokenPost(
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
  const { result, ...httpResponse } = await shellAPIPlatformSecurityAuthenticationController.oauthTokenPost(
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

