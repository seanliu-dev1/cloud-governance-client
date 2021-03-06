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
    define(['ApiClient', 'model/MembershipRecertificationItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MembershipRecertificationItem'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.MembershipRecertificationItemPageResult = factory(root.CgClient.ApiClient, root.CgClient.MembershipRecertificationItem);
  }
}(this, function(ApiClient, MembershipRecertificationItem) {
  'use strict';



  /**
   * The MembershipRecertificationItemPageResult model module.
   * @module model/MembershipRecertificationItemPageResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>MembershipRecertificationItemPageResult</code>.
   * @alias module:model/MembershipRecertificationItemPageResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MembershipRecertificationItemPageResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MembershipRecertificationItemPageResult} obj Optional instance to populate.
   * @return {module:model/MembershipRecertificationItemPageResult} The populated <code>MembershipRecertificationItemPageResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], [MembershipRecertificationItem]);
      }
      if (data.hasOwnProperty('nextLink')) {
        obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/MembershipRecertificationItem>} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} nextLink
   */
  exports.prototype['nextLink'] = undefined;



  return exports;
}));


