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
    define(['ApiClient', 'model/RecertificationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecertificationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.SiteRecertificationProperty = factory(root.CgClient.ApiClient, root.CgClient.RecertificationStatus);
  }
}(this, function(ApiClient, RecertificationStatus) {
  'use strict';



  /**
   * The SiteRecertificationProperty model module.
   * @module model/SiteRecertificationProperty
   * @version 1.0
   */

  /**
   * Constructs a new <code>SiteRecertificationProperty</code>.
   * @alias module:model/SiteRecertificationProperty
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SiteRecertificationProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteRecertificationProperty} obj Optional instance to populate.
   * @return {module:model/SiteRecertificationProperty} The populated <code>SiteRecertificationProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('permissionRecertificationStatus')) {
        obj['permissionRecertificationStatus'] = RecertificationStatus.constructFromObject(data['permissionRecertificationStatus']);
      }
      if (data.hasOwnProperty('permissionRecertificationStatusDesc')) {
        obj['permissionRecertificationStatusDesc'] = ApiClient.convertToType(data['permissionRecertificationStatusDesc'], 'String');
      }
      if (data.hasOwnProperty('ownershipRecertificationStatus')) {
        obj['ownershipRecertificationStatus'] = RecertificationStatus.constructFromObject(data['ownershipRecertificationStatus']);
      }
      if (data.hasOwnProperty('ownershipRecertificationStatusDesc')) {
        obj['ownershipRecertificationStatusDesc'] = ApiClient.convertToType(data['ownershipRecertificationStatusDesc'], 'String');
      }
      if (data.hasOwnProperty('metadataRecertificationStatus')) {
        obj['metadataRecertificationStatus'] = RecertificationStatus.constructFromObject(data['metadataRecertificationStatus']);
      }
      if (data.hasOwnProperty('metadataRecertificationStatusDesc')) {
        obj['metadataRecertificationStatusDesc'] = ApiClient.convertToType(data['metadataRecertificationStatusDesc'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecertificationStatus} permissionRecertificationStatus
   */
  exports.prototype['permissionRecertificationStatus'] = undefined;
  /**
   * @member {String} permissionRecertificationStatusDesc
   */
  exports.prototype['permissionRecertificationStatusDesc'] = undefined;
  /**
   * @member {module:model/RecertificationStatus} ownershipRecertificationStatus
   */
  exports.prototype['ownershipRecertificationStatus'] = undefined;
  /**
   * @member {String} ownershipRecertificationStatusDesc
   */
  exports.prototype['ownershipRecertificationStatusDesc'] = undefined;
  /**
   * @member {module:model/RecertificationStatus} metadataRecertificationStatus
   */
  exports.prototype['metadataRecertificationStatus'] = undefined;
  /**
   * @member {String} metadataRecertificationStatusDesc
   */
  exports.prototype['metadataRecertificationStatusDesc'] = undefined;



  return exports;
}));


