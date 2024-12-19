/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { MppError } from '../models/mppError';

/**
 * Creates an instance of CancelFuelingErrorResponse
 */
interface CancelFuelingErrorResponse {
  /** The high level error code (e.g. missing data) */
  errorCode?: string;
  /** The high level error message (e.g. mandatory fields have not been specified. */
  errorDescription?: string;
  /** Array of error objects. Majority of the time the errorCode and errorDescription will suffice */
  errors?: MppError[];
}

export class CancelFuelingErrorResponseError extends ApiError<
  CancelFuelingErrorResponse
> {}
