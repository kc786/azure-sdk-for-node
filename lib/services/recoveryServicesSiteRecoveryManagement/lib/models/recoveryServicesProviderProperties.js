/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Recovery services provider properties.
 *
 */
class RecoveryServicesProviderProperties {
  /**
   * Create a RecoveryServicesProviderProperties.
   * @member {string} [fabricType] Type of the site.
   * @member {string} [friendlyName] Friendly name of the DRA.
   * @member {string} [providerVersion] The provider version.
   * @member {string} [serverVersion] The fabric provider.
   * @member {string} [providerVersionState] DRA version status.
   * @member {date} [providerVersionExpiryDate] Expiry date if the version is
   * deprecated.
   * @member {string} [fabricFriendlyName] The fabric friendly name.
   * @member {date} [lastHeartBeat] Time when last heartbeat was sent by the
   * DRA.
   * @member {string} [connectionStatus] A value indicating whether DRA is
   * responsive.
   * @member {number} [protectedItemCount] Number of protected VMs currently
   * managed by the DRA.
   * @member {array} [allowedScenarios] The scenarios allowed on this provider.
   * @member {array} [healthErrorDetails] The recovery services provider health
   * error details.
   * @member {string} [draIdentifier] The DRA Id.
   * @member {object} [identityDetails] The identity details.
   * @member {string} [identityDetails.identityProviderType] The identity
   * provider type. Value is the ToString() of a IdentityProviderType value.
   * Possible values include: 'RecoveryServicesActiveDirectory',
   * 'CustomerActiveDirectory'
   * @member {string} [identityDetails.tenantId] The tenant Id for the service
   * principal with which the on-premise management/data plane components would
   * communicate with our Azure services.
   * @member {string} [identityDetails.applicationId] The application/client Id
   * for the service principal with which the on-premise management/data plane
   * components would communicate with our Azure services.
   * @member {string} [identityDetails.objectId] The object Id of the service
   * principal with which the on-premise management/data plane components would
   * communicate with our Azure services.
   * @member {string} [identityDetails.audience] The intended Audience of the
   * service principal with which the on-premise management/data plane
   * components would communicate with our Azure services.
   * @member {string} [identityDetails.aadAuthority] The base authority for
   * Azure Active Directory authentication.
   * @member {string} [identityDetails.certificateThumbprint] The certificate
   * thumbprint. Applicable only if IdentityProviderType is
   * RecoveryServicesActiveDirectory.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryServicesProviderProperties
   *
   * @returns {object} metadata of RecoveryServicesProviderProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryServicesProviderProperties',
      type: {
        name: 'Composite',
        className: 'RecoveryServicesProviderProperties',
        modelProperties: {
          fabricType: {
            required: false,
            serializedName: 'fabricType',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          providerVersion: {
            required: false,
            serializedName: 'providerVersion',
            type: {
              name: 'String'
            }
          },
          serverVersion: {
            required: false,
            serializedName: 'serverVersion',
            type: {
              name: 'String'
            }
          },
          providerVersionState: {
            required: false,
            serializedName: 'providerVersionState',
            type: {
              name: 'String'
            }
          },
          providerVersionExpiryDate: {
            required: false,
            serializedName: 'providerVersionExpiryDate',
            type: {
              name: 'DateTime'
            }
          },
          fabricFriendlyName: {
            required: false,
            serializedName: 'fabricFriendlyName',
            type: {
              name: 'String'
            }
          },
          lastHeartBeat: {
            required: false,
            serializedName: 'lastHeartBeat',
            type: {
              name: 'DateTime'
            }
          },
          connectionStatus: {
            required: false,
            serializedName: 'connectionStatus',
            type: {
              name: 'String'
            }
          },
          protectedItemCount: {
            required: false,
            serializedName: 'protectedItemCount',
            type: {
              name: 'Number'
            }
          },
          allowedScenarios: {
            required: false,
            serializedName: 'allowedScenarios',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          healthErrorDetails: {
            required: false,
            serializedName: 'healthErrorDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HealthErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'HealthError'
                  }
              }
            }
          },
          draIdentifier: {
            required: false,
            serializedName: 'draIdentifier',
            type: {
              name: 'String'
            }
          },
          identityDetails: {
            required: false,
            serializedName: 'identityDetails',
            type: {
              name: 'Composite',
              className: 'IdentityInformation'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryServicesProviderProperties;
