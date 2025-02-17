/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CancelFuelingRequest {
  mppTransactionId?: string;
  reasonCode?: string;
}

export const cancelFuelingRequestSchema: Schema<CancelFuelingRequest> = object({
  mppTransactionId: ['mppTransactionId', optional(string())],
  reasonCode: ['reasonCode', optional(string())],
});
