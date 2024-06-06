
# Custom Header Signature



Documentation for accessing and setting credentials for MppToken.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| Authorization | `string` | Digital Payments access token ([How to obtain Digital Payments access token?](page:guided-walkthrough/walkthrough1)) | `authorization` |



**Note:** Auth credentials can be set using `mppTokenCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  mppTokenCredentials: {
    'Authorization': 'Authorization'
  },
});
```


