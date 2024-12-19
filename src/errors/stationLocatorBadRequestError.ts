/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of StationLocatorBadRequest
 */
interface StationLocatorBadRequest {
  errorCode?: string;
  errorDescription?: string;
}

export class StationLocatorBadRequestError extends ApiError<
  StationLocatorBadRequest
> {}
