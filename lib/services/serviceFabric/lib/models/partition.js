/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the Partition class.
 * @constructor
 * @member {number} [serviceKind]
 * 
 * @member {object} [partitionInformation]
 * 
 * @member {number} [partitionInformation.servicePartitionKind]
 * 
 * @member {string} [partitionInformation.id]
 * 
 * @member {array} [partitionInformation.name]
 * 
 * @member {string} [partitionInformation.lowKey]
 * 
 * @member {string} [partitionInformation.highKey]
 * 
 * @member {number} [targetReplicaSetSize]
 * 
 * @member {number} [minReplicaSetSize]
 * 
 * @member {number} [healthState]
 * 
 * @member {number} [partitionStatus]
 * 
 * @member {object} [currentConfigurationEpoch]
 * 
 * @member {string} [currentConfigurationEpoch.configurationVersion]
 * 
 * @member {string} [currentConfigurationEpoch.dataLossVersion]
 * 
 */
function Partition() {
}

/**
 * Defines the metadata of Partition
 *
 * @returns {object} metadata of Partition
 *
 */
Partition.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Partition',
    type: {
      name: 'Composite',
      className: 'Partition',
      modelProperties: {
        serviceKind: {
          required: false,
          serializedName: 'ServiceKind',
          type: {
            name: 'Number'
          }
        },
        partitionInformation: {
          required: false,
          serializedName: 'PartitionInformation',
          type: {
            name: 'Composite',
            className: 'PartitionInformation'
          }
        },
        targetReplicaSetSize: {
          required: false,
          serializedName: 'TargetReplicaSetSize',
          type: {
            name: 'Number'
          }
        },
        minReplicaSetSize: {
          required: false,
          serializedName: 'MinReplicaSetSize',
          type: {
            name: 'Number'
          }
        },
        healthState: {
          required: false,
          serializedName: 'HealthState',
          type: {
            name: 'Number'
          }
        },
        partitionStatus: {
          required: false,
          serializedName: 'PartitionStatus',
          type: {
            name: 'Number'
          }
        },
        currentConfigurationEpoch: {
          required: false,
          serializedName: 'CurrentConfigurationEpoch',
          type: {
            name: 'Composite',
            className: 'PartitionCurrentConfigurationEpoch'
          }
        }
      }
    }
  };
};

module.exports = Partition;