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
    define(['ApiClient', 'model/ApiUser', 'model/NodeType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./NodeType'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ManagePermissionSPObject = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.NodeType);
  }
}(this, function(ApiClient, ApiUser, NodeType) {
  'use strict';



  /**
   * The ManagePermissionSPObject model module.
   * @module model/ManagePermissionSPObject
   * @version 1.0
   */

  /**
   * Constructs a new <code>ManagePermissionSPObject</code>.
   * @alias module:model/ManagePermissionSPObject
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ManagePermissionSPObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagePermissionSPObject} obj Optional instance to populate.
   * @return {module:model/ManagePermissionSPObject} The populated <code>ManagePermissionSPObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('parentUrl')) {
        obj['parentUrl'] = ApiClient.convertToType(data['parentUrl'], 'String');
      }
      if (data.hasOwnProperty('parentNodeType')) {
        obj['parentNodeType'] = NodeType.constructFromObject(data['parentNodeType']);
      }
      if (data.hasOwnProperty('siteUrl')) {
        obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
      }
      if (data.hasOwnProperty('webUrl')) {
        obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
      }
      if (data.hasOwnProperty('primaryAdministrator')) {
        obj['primaryAdministrator'] = ApiUser.constructFromObject(data['primaryAdministrator']);
      }
      if (data.hasOwnProperty('primaryContact')) {
        obj['primaryContact'] = ApiUser.constructFromObject(data['primaryContact']);
      }
      if (data.hasOwnProperty('secondaryContact')) {
        obj['secondaryContact'] = ApiUser.constructFromObject(data['secondaryContact']);
      }
      if (data.hasOwnProperty('temporaryGroupTitle')) {
        obj['temporaryGroupTitle'] = ApiClient.convertToType(data['temporaryGroupTitle'], 'String');
      }
      if (data.hasOwnProperty('webId')) {
        obj['webId'] = ApiClient.convertToType(data['webId'], 'String');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('webServerRelativeUrl')) {
        obj['webServerRelativeUrl'] = ApiClient.convertToType(data['webServerRelativeUrl'], 'String');
      }
      if (data.hasOwnProperty('listTitle')) {
        obj['listTitle'] = ApiClient.convertToType(data['listTitle'], 'String');
      }
      if (data.hasOwnProperty('topInheritUrl')) {
        obj['topInheritUrl'] = ApiClient.convertToType(data['topInheritUrl'], 'String');
      }
      if (data.hasOwnProperty('inheritNodeType')) {
        obj['inheritNodeType'] = NodeType.constructFromObject(data['inheritNodeType']);
      }
      if (data.hasOwnProperty('isInheritedPermission')) {
        obj['isInheritedPermission'] = ApiClient.convertToType(data['isInheritedPermission'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('fullUrl')) {
        obj['fullUrl'] = ApiClient.convertToType(data['fullUrl'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = NodeType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {String} parentUrl
   */
  exports.prototype['parentUrl'] = undefined;
  /**
   * @member {module:model/NodeType} parentNodeType
   */
  exports.prototype['parentNodeType'] = undefined;
  /**
   * @member {String} siteUrl
   */
  exports.prototype['siteUrl'] = undefined;
  /**
   * @member {String} webUrl
   */
  exports.prototype['webUrl'] = undefined;
  /**
   * @member {module:model/ApiUser} primaryAdministrator
   */
  exports.prototype['primaryAdministrator'] = undefined;
  /**
   * @member {module:model/ApiUser} primaryContact
   */
  exports.prototype['primaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} secondaryContact
   */
  exports.prototype['secondaryContact'] = undefined;
  /**
   * @member {String} temporaryGroupTitle
   */
  exports.prototype['temporaryGroupTitle'] = undefined;
  /**
   * @member {String} webId
   */
  exports.prototype['webId'] = undefined;
  /**
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * @member {String} webServerRelativeUrl
   */
  exports.prototype['webServerRelativeUrl'] = undefined;
  /**
   * @member {String} listTitle
   */
  exports.prototype['listTitle'] = undefined;
  /**
   * @member {String} topInheritUrl
   */
  exports.prototype['topInheritUrl'] = undefined;
  /**
   * @member {module:model/NodeType} inheritNodeType
   */
  exports.prototype['inheritNodeType'] = undefined;
  /**
   * @member {Boolean} isInheritedPermission
   */
  exports.prototype['isInheritedPermission'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} fullUrl
   */
  exports.prototype['fullUrl'] = undefined;
  /**
   * @member {module:model/NodeType} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));

