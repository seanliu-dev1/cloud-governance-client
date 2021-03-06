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
    define(['ApiClient', 'model/GuidModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GuidModel'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.TeamsTemplateSettings = factory(root.CgClient.ApiClient, root.CgClient.GuidModel);
  }
}(this, function(ApiClient, GuidModel) {
  'use strict';



  /**
   * The TeamsTemplateSettings model module.
   * @module model/TeamsTemplateSettings
   * @version 1.0
   */

  /**
   * Constructs a new <code>TeamsTemplateSettings</code>.
   * @alias module:model/TeamsTemplateSettings
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TeamsTemplateSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsTemplateSettings} obj Optional instance to populate.
   * @return {module:model/TeamsTemplateSettings} The populated <code>TeamsTemplateSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enableCreateTeamFromScratch')) {
        obj['enableCreateTeamFromScratch'] = ApiClient.convertToType(data['enableCreateTeamFromScratch'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCreateTeamFromExistTeam')) {
        obj['enableCreateTeamFromExistTeam'] = ApiClient.convertToType(data['enableCreateTeamFromExistTeam'], 'Boolean');
      }
      if (data.hasOwnProperty('selectedTemplate')) {
        obj['selectedTemplate'] = GuidModel.constructFromObject(data['selectedTemplate']);
      }
      if (data.hasOwnProperty('enableCloneChannels')) {
        obj['enableCloneChannels'] = ApiClient.convertToType(data['enableCloneChannels'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneApps')) {
        obj['enableCloneApps'] = ApiClient.convertToType(data['enableCloneApps'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneTabs')) {
        obj['enableCloneTabs'] = ApiClient.convertToType(data['enableCloneTabs'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneMembers')) {
        obj['enableCloneMembers'] = ApiClient.convertToType(data['enableCloneMembers'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneTeamSetting')) {
        obj['enableCloneTeamSetting'] = ApiClient.convertToType(data['enableCloneTeamSetting'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneTeamPrivacy')) {
        obj['enableCloneTeamPrivacy'] = ApiClient.convertToType(data['enableCloneTeamPrivacy'], 'Boolean');
      }
      if (data.hasOwnProperty('enableCloneTeamClassification')) {
        obj['enableCloneTeamClassification'] = ApiClient.convertToType(data['enableCloneTeamClassification'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} enableCreateTeamFromScratch
   */
  exports.prototype['enableCreateTeamFromScratch'] = undefined;
  /**
   * @member {Boolean} enableCreateTeamFromExistTeam
   */
  exports.prototype['enableCreateTeamFromExistTeam'] = undefined;
  /**
   * @member {module:model/GuidModel} selectedTemplate
   */
  exports.prototype['selectedTemplate'] = undefined;
  /**
   * @member {Boolean} enableCloneChannels
   */
  exports.prototype['enableCloneChannels'] = undefined;
  /**
   * @member {Boolean} enableCloneApps
   */
  exports.prototype['enableCloneApps'] = undefined;
  /**
   * @member {Boolean} enableCloneTabs
   */
  exports.prototype['enableCloneTabs'] = undefined;
  /**
   * @member {Boolean} enableCloneMembers
   */
  exports.prototype['enableCloneMembers'] = undefined;
  /**
   * @member {Boolean} enableCloneTeamSetting
   */
  exports.prototype['enableCloneTeamSetting'] = undefined;
  /**
   * @member {Boolean} enableCloneTeamPrivacy
   */
  exports.prototype['enableCloneTeamPrivacy'] = undefined;
  /**
   * @member {Boolean} enableCloneTeamClassification
   */
  exports.prototype['enableCloneTeamClassification'] = undefined;



  return exports;
}));


