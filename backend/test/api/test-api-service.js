const assert = require('assert');
const { describe, it } = require('mocha');
const log4js = require('log4js'); // commented out to prevent lint errors

const testEndpoint = 'http://';

const apiService = require('../../src/api/api-service')(log4js, testEndpoint);

describe('testing api-service', () => {
  describe('Wiki Url Setup', () => {
    it('api-service-was created with the testEndpoint', () => {
      assert.equal(apiService.getWikiEndpoint(), testEndpoint);
    });
  });

  describe('search should be predictable', () => {
    it('api-service should throw an error with the bad testUrl', async () => {
      const err = await apiService.search('testKeyword');

      assert.equal(err.code, 'EAI_AGAIN');
    });
  });
});
