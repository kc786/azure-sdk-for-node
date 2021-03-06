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
 * San enable protection provider specific input.
 *
 * @extends models['EnableProtectionProviderSpecificInput']
 */
class SanEnableProtectionInput extends models['EnableProtectionProviderSpecificInput'] {
  /**
   * Create a SanEnableProtectionInput.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SanEnableProtectionInput
   *
   * @returns {object} metadata of SanEnableProtectionInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'San',
      type: {
        name: 'Composite',
        className: 'SanEnableProtectionInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SanEnableProtectionInput;
