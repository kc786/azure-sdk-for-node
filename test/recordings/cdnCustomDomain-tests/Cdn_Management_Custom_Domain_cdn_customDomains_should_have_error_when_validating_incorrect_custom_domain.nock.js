// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/validateCustomDomain?api-version=2017-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b7778e77-ac10-48d7-af28-eefa8caf269c',
  'x-ms-client-request-id': '427fae36-caeb-4b8d-a22b-a73ab22f5b4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '314ab8be-bde5-48b0-a4b6-c4786741fa30',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014948Z:314ab8be-bde5-48b0-a4b6-c4786741fa30',
  date: 'Wed, 22 Feb 2017 01:49:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/validateCustomDomain?api-version=2017-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'b7778e77-ac10-48d7-af28-eefa8caf269c',
  'x-ms-client-request-id': '427fae36-caeb-4b8d-a22b-a73ab22f5b4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '314ab8be-bde5-48b0-a4b6-c4786741fa30',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014948Z:314ab8be-bde5-48b0-a4b6-c4786741fa30',
  date: 'Wed, 22 Feb 2017 01:49:47 GMT',
  connection: 'close' });
 return result; }]];