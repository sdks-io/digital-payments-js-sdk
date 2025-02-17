/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Fault, faultSchema } from './fault';

/** An error response. */
export interface FaultResponse {
  fault?: Fault;
}

export const faultResponseSchema: Schema<FaultResponse> = object({
  fault: ['fault', optional(lazy(() => faultSchema))],
});
