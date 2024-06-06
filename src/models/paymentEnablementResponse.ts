/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PaymentEnablementResponse {
  /** DPan Last number */
  dpanLast4: string;
}

export const paymentEnablementResponseSchema: Schema<PaymentEnablementResponse> = object(
  { dpanLast4: ['dpanLast4', string()] }
);
