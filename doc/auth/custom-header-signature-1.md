
# Custom Header Signature



Documentation for accessing and setting credentials for oAuthTokenPost.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-Apigee-Authorization | `string` | APIGEE access token ([How to obtain APIGEE access token?](page:guided-walkthrough/walkthrough1)) | `xApigeeAuthorization` |



**Note:** Auth credentials can be set using `oAuthTokenPostCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  oAuthTokenPostCredentials: {
    'X-Apigee-Authorization': 'X-Apigee-Authorization'
  },
});
```


