/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the GenericResource class.
 * @constructor
 * Resource information.
 * @member {object} [plan] Gets or sets the plan of the resource.
 * 
 * @member {string} [plan.name] Gets or sets the plan ID.
 * 
 * @member {string} [plan.publisher] Gets or sets the publisher ID.
 * 
 * @member {string} [plan.product] Gets or sets the offer ID.
 * 
 * @member {string} [plan.promotionCode] Gets or sets the promotion code.
 * 
 * @member {object} [properties] Gets or sets the resource properties.
 * 
 */
function GenericResource(parameters) {
  GenericResource['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.plan) {
      this.plan = new models['Plan'](parameters.plan);
    }
    if (parameters.properties !== undefined) {
      this.properties = parameters.properties;
    }
  }    
}

util.inherits(GenericResource, models['Resource']);

/**
 * Validate the payload against the GenericResource schema
 *
 * @param {JSON} payload
 *
 */
GenericResource.prototype.serialize = function () {
  var payload = GenericResource['super_'].prototype.serialize.call(this);
  if (this['plan']) {
    payload['plan'] = this['plan'].serialize();
  }

  if (this['properties'] !== null && this['properties'] !== undefined) {
    if (typeof this['properties'] !== 'object') {
      throw new Error('this[\'properties\'] must be of type object.');
    }
    payload['properties'] = this['properties'];
  }

  return payload;
};

/**
 * Deserialize the instance to GenericResource schema
 *
 * @param {JSON} instance
 *
 */
GenericResource.prototype.deserialize = function (instance) {
  GenericResource['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['plan']) {
      this['plan'] = new models['Plan']().deserialize(instance['plan']);
    }

    if (instance['properties'] !== undefined) {
      this['properties'] = instance['properties'];
    }
  }

  return this;
};

module.exports = GenericResource;