/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of AccessToken
 */
interface AccessToken {
  errorCode?: string;
  error?: string;
}

export class AccessTokenError extends ApiError<AccessToken> {}
