/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Payment {
  method?: string;
  cardId?: string;
  cardLastDigits?: string;
}

export const paymentSchema: Schema<Payment> = object({
  method: ['method', optional(string())],
  cardId: ['cardId', optional(string())],
  cardLastDigits: ['cardLastDigits', optional(string())],
});
