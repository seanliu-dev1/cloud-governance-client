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
    root.CgClient.GuidBooleanModel = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GuidBooleanModel model module.
   * @module model/GuidBooleanModel
   * @version 1.0
   */

  /**
   * Constructs a new <code>GuidBooleanModel</code>.
   * @alias module:model/GuidBooleanModel
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GuidBooleanModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GuidBooleanModel} obj Optional instance to populate.
   * @return {module:model/GuidBooleanModel} The populated <code>GuidBooleanModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('seletedItem')) {
        obj['seletedItem'] = ApiClient.convertToType(data['seletedItem'], 'String');
      }
      if (data.hasOwnProperty('allItems')) {
        obj['allItems'] = ApiClient.convertToType(data['allItems'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * @member {String} seletedItem
   */
  exports.prototype['seletedItem'] = undefined;
  /**
   * @member {Array.<String>} allItems
   */
  exports.prototype['allItems'] = undefined;



  return exports;
}));


