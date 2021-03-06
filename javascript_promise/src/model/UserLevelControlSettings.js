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
    define(['ApiClient', 'model/UserLevelControlMode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserLevelControlMode'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.UserLevelControlSettings = factory(root.CgClient.ApiClient, root.CgClient.UserLevelControlMode);
  }
}(this, function(ApiClient, UserLevelControlMode) {
  'use strict';



  /**
   * The UserLevelControlSettings model module.
   * @module model/UserLevelControlSettings
   * @version 1.0
   */

  /**
   * Constructs a new <code>UserLevelControlSettings</code>.
   * @alias module:model/UserLevelControlSettings
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>UserLevelControlSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserLevelControlSettings} obj Optional instance to populate.
   * @return {module:model/UserLevelControlSettings} The populated <code>UserLevelControlSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userLevelControlMode')) {
        obj['userLevelControlMode'] = UserLevelControlMode.constructFromObject(data['userLevelControlMode']);
      }
      if (data.hasOwnProperty('isSetRequesterAsDefaultEnabled')) {
        obj['isSetRequesterAsDefaultEnabled'] = ApiClient.convertToType(data['isSetRequesterAsDefaultEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UserLevelControlMode} userLevelControlMode
   */
  exports.prototype['userLevelControlMode'] = undefined;
  /**
   * @member {Boolean} isSetRequesterAsDefaultEnabled
   */
  exports.prototype['isSetRequesterAsDefaultEnabled'] = undefined;



  return exports;
}));


