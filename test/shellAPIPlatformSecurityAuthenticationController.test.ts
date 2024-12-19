/**
 * Shell SmartPay APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ShellAPIPlatformSecurityAuthenticationController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('ShellAPIPlatformSecurityAuthenticationController', () => {
  let controller : ShellAPIPlatformSecurityAuthenticationController;

  beforeAll(() => {
    controller = new ShellAPIPlatformSecurityAuthenticationController(testClient);
  });

  it('should Test OauthTokenPost', async () => {
    const grantType = 'client_credentials';

    const clientId = 'SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA';

    const clientSecret = 'cRnWgw7gACqM3gVS';

    const response = await makeApiCall(
      () => controller.oauthTokenPost(grantType, clientId, clientSecret)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});