/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Client, Configuration, Environment } from '../src';

export const testClient = new Client(createConfigurationFromEnvironment());

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const environment = process.env.SHELL_SMART_PAY_API_LIB_ENVIRONMENT;
  const timeout = process.env.SHELL_SMART_PAY_API_LIB_TIMEOUT;
  const authorization = process.env.SHELL_SMART_PAY_API_LIB_AUTHORIZATION;
  const xApigeeAuthorization = process.env.SHELL_SMART_PAY_API_LIB_X_APIGEE_AUTHORIZATION;

  if (environment !== undefined) {
    config.environment = environment as Environment;
  }

  if (timeout !== undefined && timeout !== '') {
    config.timeout = parseInt(timeout);
  }

  if (authorization !== undefined) {
    config.mppTokenCredentials = { Authorization: authorization };
  }

  if (xApigeeAuthorization !== undefined) {
    config.oAuthTokenPostCredentials = {
      'X-Apigee-Authorization': xApigeeAuthorization,
    };
  }

  return config;
}
