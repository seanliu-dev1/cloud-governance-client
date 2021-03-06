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
    define(['ApiClient', 'model/SiteTitleConstructureRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteTitleConstructureRule'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.SiteTitleSetting = factory(root.CgClient.ApiClient, root.CgClient.SiteTitleConstructureRule);
  }
}(this, function(ApiClient, SiteTitleConstructureRule) {
  'use strict';



  /**
   * The SiteTitleSetting model module.
   * @module model/SiteTitleSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>SiteTitleSetting</code>.
   * @alias module:model/SiteTitleSetting
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SiteTitleSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteTitleSetting} obj Optional instance to populate.
   * @return {module:model/SiteTitleSetting} The populated <code>SiteTitleSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('titleAssignBy')) {
        obj['titleAssignBy'] = ApiClient.convertToType(data['titleAssignBy'], 'Number');
      }
      if (data.hasOwnProperty('enableTitleConstructure')) {
        obj['enableTitleConstructure'] = ApiClient.convertToType(data['enableTitleConstructure'], 'Boolean');
      }
      if (data.hasOwnProperty('titlePrefixes')) {
        obj['titlePrefixes'] = ApiClient.convertToType(data['titlePrefixes'], [SiteTitleConstructureRule]);
      }
      if (data.hasOwnProperty('titleSuffixes')) {
        obj['titleSuffixes'] = ApiClient.convertToType(data['titleSuffixes'], [SiteTitleConstructureRule]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} titleAssignBy
   */
  exports.prototype['titleAssignBy'] = undefined;
  /**
   * @member {Boolean} enableTitleConstructure
   */
  exports.prototype['enableTitleConstructure'] = undefined;
  /**
   * @member {Array.<module:model/SiteTitleConstructureRule>} titlePrefixes
   */
  exports.prototype['titlePrefixes'] = undefined;
  /**
   * @member {Array.<module:model/SiteTitleConstructureRule>} titleSuffixes
   */
  exports.prototype['titleSuffixes'] = undefined;



  return exports;
}));


