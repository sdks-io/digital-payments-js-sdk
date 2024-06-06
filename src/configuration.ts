/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  mppTokenCredentials?: {
    'Authorization': string;
  };
  oAuthTokenPostCredentials?: {
    'X-Apigee-Authorization': string;
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
}
