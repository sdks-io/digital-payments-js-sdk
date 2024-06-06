/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema, string } from '../schema';
import { CollectingCompany, collectingCompanySchema } from './collectingCompany';

export interface MobilePaymentRegistrationRequest {
  /** Unique Reference ID the DPAN is registered to. The Reference ID has been implemented to accept normal alphanumeric characters plus the following ‘special characters’&colon;  dot, underscore and hyphen. The following characters are not acceptable&colon; , / @ !  &num; & * () */
  referenceId: string;
  /** Original card PAN (generated on creation of Card (see Card Order Service)) */
  pan: string;
  /** Expiry Date associated with the PAN in format YYMM. */
  panExpiry: string;
  /** Specifies how many months the DPAN should be valid for. If not present, the Token Server determines the expiry date using its default algorithm. Note that the Token Server might not respect this value and use configured business rules to override the requested validity period */
  period: number;
  /** In Shell, a Payer can have several accounts (representing company branches, divisions or generally different cost-centers that a customer wants to group cards on). You can specify this property or the AccountNumber. */
  accountId: string;
  /** The Payer Id, or the Customer Id of the Payment Customer. In Shell, a Payer is a customer belonging to a specific market geography. A Payer can have several Accounts; each account can then have different groups of cards. */
  payerId: string;
  /** The ID of the Collecting Company (in GFN), also known as Shell Code of the selected payer. This property is mandatory if the ColCoCode code is not passed */
  colCoId: string;
  /** Array of Colco Ids */
  collectingCompanies: CollectingCompany[];
}

export const mobilePaymentRegistrationRequestSchema: Schema<MobilePaymentRegistrationRequest> = object(
  {
    referenceId: ['referenceId', string()],
    pan: ['pan', string()],
    panExpiry: ['panExpiry', string()],
    period: ['period', number()],
    accountId: ['AccountId', string()],
    payerId: ['PayerId', string()],
    colCoId: ['ColCoId', string()],
    collectingCompanies: [
      'CollectingCompanies',
      array(lazy(() => collectingCompanySchema)),
    ],
  }
);