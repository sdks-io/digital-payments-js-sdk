/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { MppError, mppErrorSchema } from './mppError';

/**
 * # Digital Payments – Errors
 *  This section details the structure of the response Body vs. the different types of errors that could be returned when Digital Payments system responds with a 400 Response Code.
 *  | Error Code   | Error Description   | Suggested message to end user   |
 *  |-  |-  |-  |
 *  | 9342   | Transaction not cancelled, Txn number unknown   | Oops sorry! We are unable to cancel the transaction. Please wait for the site to cancel the transaction before you retry   |
 *  | 50004   | Transaction not cancelled, dispensing is already in progress   | Transaction cannot be cancelled, fueling already in progress   |
 *  | 50059   | Transaction not cancelable (not in a 'Processing state')   | Transaction cannot be cancelled, fuel has already been dispensed   |
 */
export interface CancelFuelingErrorResponse {
  /** The high level error code (e.g. missing data) */
  errorCode?: string;
  /** The high level error message (e.g. mandatory fields have not been specified. */
  errorDescription?: string;
  /** Array of error objects. Majority of the time the errorCode and errorDescription will suffice */
  errors?: MppError[];
}

export const cancelFuelingErrorResponseSchema: Schema<CancelFuelingErrorResponse> = object(
  {
    errorCode: ['errorCode', optional(string())],
    errorDescription: ['errorDescription', optional(string())],
    errors: ['errors', optional(array(lazy(() => mppErrorSchema)))],
  }
);