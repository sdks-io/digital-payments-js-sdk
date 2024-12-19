/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  MobilePaymentRegistrationRequest,
  mobilePaymentRegistrationRequestSchema,
} from '../models/mobilePaymentRegistrationRequest';
import {
  PaymentEnablementResponse,
  paymentEnablementResponseSchema,
} from '../models/paymentEnablementResponse';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';
import { PaymentEnablementErrorResponseError } from '../errors/paymentEnablementErrorResponseError';

export class DigitalPaymentEnablementController extends BaseController {
  /**
   * Generates a DPAN and stores the relationship between the Reference ID, DPAN and the real PAN. This
   * method is called during the customer registration process, ahead of any payment. The Reference ID is
   * an identifier chosen by the client system for mobile payment registration. It must be unique in
   * context of the client system, and is the key to obtaining and managing the payment details later.
   *
   * @param body
   * @return Response from the API call
   */
  async mpayV1TokensRefPut(
    body: MobilePaymentRegistrationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PaymentEnablementResponse>> {
    const req = this.createRequest('PUT', '/PaymentEnablement/v1/ref');
    const mapped = req.prepareArgs({
      body: [body, mobilePaymentRegistrationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(
      400,
      PaymentEnablementErrorResponseError,
      'Error Occurred. The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, invalid request message).'
    );
    req.throwOn(
      401,
      ApiError,
      'Unauthorized. The request has not been applied because it lacks valid authentication credentials for the target resource.'
    );
    req.throwOn(
      403,
      ApiError,
      'Forbidden. The server understood the request but refuses to authorize it.'
    );
    req.throwOn(
      404,
      ApiError,
      'Not Found. The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.'
    );
    req.throwOn(
      500,
      ApiError,
      'Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.'
    );
    req.authenticate([{ oAuthTokenPost: true }]);
    return req.callAsJson(paymentEnablementResponseSchema, requestOptions);
  }
}
