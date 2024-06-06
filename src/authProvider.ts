/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  customHeaderAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    mppToken:
      config.mppTokenCredentials &&
      customHeaderAuthenticationProvider (
        config.mppTokenCredentials
    ),
    oAuthTokenPost:
      config.oAuthTokenPostCredentials &&
      customHeaderAuthenticationProvider (
        config.oAuthTokenPostCredentials
    ),
  };

  return compositeAuthenticationProvider <
    keyof typeof authConfig,
    typeof authConfig
  > (authConfig);
}

