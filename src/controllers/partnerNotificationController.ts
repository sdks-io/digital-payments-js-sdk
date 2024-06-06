/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { AccessTokenError } from '../errors/accessTokenError';
import {
  AccessTokenResponse,
  accessTokenResponseSchema,
} from '../models/accessTokenResponse';
import {
  CancelFuelingRequest,
  cancelFuelingRequestSchema,
} from '../models/cancelFuelingRequest';
import {
  FinaliseFuelingRequest,
  finaliseFuelingRequestSchema,
} from '../models/finaliseFuelingRequest';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class PartnerNotificationController extends BaseController {
  /**
   * To access the Partner’s endpoints, for sending callback messages, Shell will need to connect to the
   * Partner API end points. It is recemmended that the partner offers OAuth 2.0 as a standard for call
   * back APIs and will require the OAuth 2.0 token for authentication. Note this needs to be implemented
   * over HTTPS
   *
   * @param grantType     In OAuth 2.0, the term grant typee refers to the way an application gets an access
   *                                token. OAuth 2.0 defines several grant types, including the authorization code flow.
   * @param clientId      After registering your app, you will receive a client ID and a client secret. The
   *                                client ID is considered public information, and is used to build login URLs, or
   *                                included in Javascript source code on a page.
   * @param clientSecret  After registering your app, you will receive a client ID and a client secret. The
   *                                client ID is considered public information, and is used to build login URLs, or
   *                                included in Javascript source code on a page. The client secret must be kept
   *                                confidential.
   * @return Response from the API call
   */
  async partnerToken(
    grantType: string,
    clientId: string,
    clientSecret: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccessTokenResponse>> {
    const req = this.createRequest('POST', '/token');
    const mapped = req.prepareArgs({
      grantType: [grantType, string()],
      clientId: [clientId, string()],
      clientSecret: [clientSecret, string()],
    });
    req.header('Content-Type', 'application/x-www-form-urlencoded');
    req.form({
      grant_type: mapped.grantType,
      client_id: mapped.clientId,
      client_secret: mapped.clientSecret,
    });
    req.throwOn(401, AccessTokenError, 'Unauthorized');
    req.authenticate([]);
    return req.callAsJson(accessTokenResponseSchema, requestOptions);
  }

  /**
   * Enables Shell to inform partner of the successful completion of a transaction. Note this needs to be
   * implemented over HTTPS
   *
   * @param body
   * @return Response from the API call
   */
  async finaliseFueling(
    body?: FinaliseFuelingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/finaliseFueling');
    const mapped = req.prepareArgs({
      body: [body, optional(finaliseFuelingRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.authenticate([]);
    return req.call(requestOptions);
  }

  /**
   * Enables Shell to inform partner that a Mobile Payment transaction has been cancelled by Shell as an
   * error/issue occured. Note this needs to be implemented over HTTPS
   *
   * @param body
   * @return Response from the API call
   */
  async cancelFueling(
    body?: CancelFuelingRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/cancelFueling');
    const mapped = req.prepareArgs({
      body: [body, optional(cancelFuelingRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthorized');
    req.authenticate([]);
    return req.call(requestOptions);
  }
}
