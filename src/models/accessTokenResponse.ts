/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AccessTokenResponse {
  /** It is the token used for the requests that required an authenticated user. This will be used for all the callback URLs. */
  accessToken?: string;
  /** validity of the access token in seconds */
  expiresIn?: string;
  /** Type of token provided */
  tokenType?: string;
}

export const accessTokenResponseSchema: Schema<AccessTokenResponse> = object({
  accessToken: ['access_token', optional(string())],
  expiresIn: ['expires_in', optional(string())],
  tokenType: ['token_type', optional(string())],
});
