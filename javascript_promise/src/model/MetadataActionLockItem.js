/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.MetadataActionLockItem = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MetadataActionLockItem model module.
   * @module model/MetadataActionLockItem
   * @version 1.0
   */

  /**
   * Constructs a new <code>MetadataActionLockItem</code>.
   * @alias module:model/MetadataActionLockItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MetadataActionLockItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataActionLockItem} obj Optional instance to populate.
   * @return {module:model/MetadataActionLockItem} The populated <code>MetadataActionLockItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('instanceId')) {
        obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
      }
      if (data.hasOwnProperty('metadataActionInstanceId')) {
        obj['metadataActionInstanceId'] = ApiClient.convertToType(data['metadataActionInstanceId'], 'String');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnabledText')) {
        obj['isEnabledText'] = ApiClient.convertToType(data['isEnabledText'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} instanceId
   */
  exports.prototype['instanceId'] = undefined;
  /**
   * @member {String} metadataActionInstanceId
   */
  exports.prototype['metadataActionInstanceId'] = undefined;
  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * @member {String} isEnabledText
   */
  exports.prototype['isEnabledText'] = undefined;



  return exports;
}));

