# Station Locator

```ts
const stationLocatorController = new StationLocatorController(client);
```

## Class Name

`StationLocatorController`


# Stationlocator V1 Stations Get Around Location

Returns all sites within specified radius of specified GPS location. Sites of all Types are returned. This call must be used when attempting to establish the station the user is located at as part of fuelling journey (i.e. user has to be within 300m of station to be considered located at the station). This API could also be used as a general query to find nearby Shell locations

```ts
async stationlocatorV1StationsGetAroundLocation(
  m: string,
  lon: number,
  lat: number,
  radius: number,
  offerCode?: string,
  n?: number,
  amenities?: string[],
  countries?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<AroundLocationArray>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `m` | `string` | Query, Required | API Method to be executed |
| `lon` | `number` | Query, Required | The user’s current longitude |
| `lat` | `number` | Query, Required | The user’s current latitude |
| `radius` | `number` | Query, Required | The search radius in kilometers |
| `offerCode` | `string \| undefined` | Query, Optional | This enables requestor to specify locations that will honour the specified (advanced) offer code |
| `n` | `number \| undefined` | Query, Optional | This enables requestor to limit the number of locations that are returned and defaulted to a maximum of 250 locations. Locations returned based on distance to User’s location as-the-crow-flies. |
| `amenities` | `string[] \| undefined` | Query, Optional | This enables requestor to filter locations based on one or more amenities (e.g. Filter locations so that only those with a Toilet are returned). |
| `countries` | `string[] \| undefined` | Query, Optional | This enables requestor to filter locations based on one or more Countries (i.e. by country codes). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AroundLocationArray`](../../doc/models/around-location-array.md)

## Example Usage

```ts
const m = 'aroundLocation';

const lon = 77.6730103;

const lat = 12.9132169;

const radius = 0.3;

try {
  const { result, ...httpResponse } = await stationLocatorController.stationlocatorV1StationsGetAroundLocation(
  m,
  lon,
  lat,
  radius
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
| 400 | Bad request | [`StationLocatorBadRequestError`](../../doc/models/station-locator-bad-request-error.md) |
| 401 | Unauthorized | [`StationLocatorUnauthorizedError`](../../doc/models/station-locator-unauthorized-error.md) |
| 403 | Forbbiden | [`StationLocatorForbiddenError`](../../doc/models/station-locator-forbidden-error.md) |
| 404 | Not Found | [`StationLocatorNotFoundError`](../../doc/models/station-locator-not-found-error.md) |
| 500 | Internal Server Error | [`StationLocatorInternalServerError`](../../doc/models/station-locator-internal-server-error.md) |

