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
    define(['ApiClient', 'model/ApiUser', 'model/GeoLocationBase', 'model/HubSiteSettings', 'model/RequestGroupWithPermissions', 'model/RequestMetadata', 'model/RequestStatusNullable', 'model/RequestUserWithPermissions', 'model/ServiceTypeNullable', 'model/SiteLeasePeriodRequestSettings', 'model/SiteUrl', 'model/StringModel', 'model/YammerGroupRequestSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./GeoLocationBase'), require('./HubSiteSettings'), require('./RequestGroupWithPermissions'), require('./RequestMetadata'), require('./RequestStatusNullable'), require('./RequestUserWithPermissions'), require('./ServiceTypeNullable'), require('./SiteLeasePeriodRequestSettings'), require('./SiteUrl'), require('./StringModel'), require('./YammerGroupRequestSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.CreateSiteRequest = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.GeoLocationBase, root.CgClient.HubSiteSettings, root.CgClient.RequestGroupWithPermissions, root.CgClient.RequestMetadata, root.CgClient.RequestStatusNullable, root.CgClient.RequestUserWithPermissions, root.CgClient.ServiceTypeNullable, root.CgClient.SiteLeasePeriodRequestSettings, root.CgClient.SiteUrl, root.CgClient.StringModel, root.CgClient.YammerGroupRequestSettings);
  }
}(this, function(ApiClient, ApiUser, GeoLocationBase, HubSiteSettings, RequestGroupWithPermissions, RequestMetadata, RequestStatusNullable, RequestUserWithPermissions, ServiceTypeNullable, SiteLeasePeriodRequestSettings, SiteUrl, StringModel, YammerGroupRequestSettings) {
  'use strict';



  /**
   * The CreateSiteRequest model module.
   * @module model/CreateSiteRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateSiteRequest</code>.
   * @alias module:model/CreateSiteRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreateSiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSiteRequest} obj Optional instance to populate.
   * @return {module:model/CreateSiteRequest} The populated <code>CreateSiteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('siteTitle')) {
        obj['siteTitle'] = ApiClient.convertToType(data['siteTitle'], 'String');
      }
      if (data.hasOwnProperty('siteDescription')) {
        obj['siteDescription'] = ApiClient.convertToType(data['siteDescription'], 'String');
      }
      if (data.hasOwnProperty('siteUrl')) {
        obj['siteUrl'] = SiteUrl.constructFromObject(data['siteUrl']);
      }
      if (data.hasOwnProperty('policyId')) {
        obj['policyId'] = ApiClient.convertToType(data['policyId'], 'String');
      }
      if (data.hasOwnProperty('timeZone')) {
        obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'Number');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('deploymentManagerPlanName')) {
        obj['deploymentManagerPlanName'] = ApiClient.convertToType(data['deploymentManagerPlanName'], 'String');
      }
      if (data.hasOwnProperty('primaryAdmin')) {
        obj['primaryAdmin'] = ApiUser.constructFromObject(data['primaryAdmin']);
      }
      if (data.hasOwnProperty('additionalAdmins')) {
        obj['additionalAdmins'] = ApiClient.convertToType(data['additionalAdmins'], [ApiUser]);
      }
      if (data.hasOwnProperty('primaryContact')) {
        obj['primaryContact'] = ApiUser.constructFromObject(data['primaryContact']);
      }
      if (data.hasOwnProperty('secondaryContact')) {
        obj['secondaryContact'] = ApiUser.constructFromObject(data['secondaryContact']);
      }
      if (data.hasOwnProperty('isShownClassificationAndDesing')) {
        obj['isShownClassificationAndDesing'] = ApiClient.convertToType(data['isShownClassificationAndDesing'], 'Boolean');
      }
      if (data.hasOwnProperty('siteDesign')) {
        obj['siteDesign'] = StringModel.constructFromObject(data['siteDesign']);
      }
      if (data.hasOwnProperty('classification')) {
        obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
      }
      if (data.hasOwnProperty('isShownHubsiteSettings')) {
        obj['isShownHubsiteSettings'] = ApiClient.convertToType(data['isShownHubsiteSettings'], 'Boolean');
      }
      if (data.hasOwnProperty('hubSiteSettings')) {
        obj['hubSiteSettings'] = HubSiteSettings.constructFromObject(data['hubSiteSettings']);
      }
      if (data.hasOwnProperty('userPermissions')) {
        obj['userPermissions'] = ApiClient.convertToType(data['userPermissions'], [RequestUserWithPermissions]);
      }
      if (data.hasOwnProperty('groupPermissions')) {
        obj['groupPermissions'] = ApiClient.convertToType(data['groupPermissions'], [RequestGroupWithPermissions]);
      }
      if (data.hasOwnProperty('yammerGroupSettings')) {
        obj['yammerGroupSettings'] = YammerGroupRequestSettings.constructFromObject(data['yammerGroupSettings']);
      }
      if (data.hasOwnProperty('leasePeriodSettings')) {
        obj['leasePeriodSettings'] = SiteLeasePeriodRequestSettings.constructFromObject(data['leasePeriodSettings']);
      }
      if (data.hasOwnProperty('multiGeoLocation')) {
        obj['multiGeoLocation'] = GeoLocationBase.constructFromObject(data['multiGeoLocation']);
      }
      if (data.hasOwnProperty('inputTitle')) {
        obj['inputTitle'] = ApiClient.convertToType(data['inputTitle'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('serviceId')) {
        obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('notesToApprovers')) {
        obj['notesToApprovers'] = ApiClient.convertToType(data['notesToApprovers'], 'String');
      }
      if (data.hasOwnProperty('questionnaireId')) {
        obj['questionnaireId'] = ApiClient.convertToType(data['questionnaireId'], 'String');
      }
      if (data.hasOwnProperty('metadatas')) {
        obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [RequestMetadata]);
      }
      if (data.hasOwnProperty('ticketNumber')) {
        obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], ServiceTypeNullable);
      }
      if (data.hasOwnProperty('typeDescription')) {
        obj['typeDescription'] = ApiClient.convertToType(data['typeDescription'], 'String');
      }
      if (data.hasOwnProperty('requester')) {
        obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], RequestStatusNullable);
      }
      if (data.hasOwnProperty('progressStatus')) {
        obj['progressStatus'] = ApiClient.convertToType(data['progressStatus'], 'Number');
      }
      if (data.hasOwnProperty('progressStatusDescription')) {
        obj['progressStatusDescription'] = ApiClient.convertToType(data['progressStatusDescription'], 'String');
      }
      if (data.hasOwnProperty('submittedTime')) {
        obj['submittedTime'] = ApiClient.convertToType(data['submittedTime'], 'Date');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
      }
      if (data.hasOwnProperty('assignTo')) {
        obj['assignTo'] = ApiClient.convertToType(data['assignTo'], 'String');
      }
      if (data.hasOwnProperty('fullPath')) {
        obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} siteTitle
   */
  exports.prototype['siteTitle'] = undefined;
  /**
   * @member {String} siteDescription
   */
  exports.prototype['siteDescription'] = undefined;
  /**
   * @member {module:model/SiteUrl} siteUrl
   */
  exports.prototype['siteUrl'] = undefined;
  /**
   * @member {String} policyId
   */
  exports.prototype['policyId'] = undefined;
  /**
   * @member {Number} timeZone
   */
  exports.prototype['timeZone'] = undefined;
  /**
   * @member {Number} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * @member {String} deploymentManagerPlanName
   */
  exports.prototype['deploymentManagerPlanName'] = undefined;
  /**
   * @member {module:model/ApiUser} primaryAdmin
   */
  exports.prototype['primaryAdmin'] = undefined;
  /**
   * @member {Array.<module:model/ApiUser>} additionalAdmins
   */
  exports.prototype['additionalAdmins'] = undefined;
  /**
   * @member {module:model/ApiUser} primaryContact
   */
  exports.prototype['primaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} secondaryContact
   */
  exports.prototype['secondaryContact'] = undefined;
  /**
   * @member {Boolean} isShownClassificationAndDesing
   */
  exports.prototype['isShownClassificationAndDesing'] = undefined;
  /**
   * @member {module:model/StringModel} siteDesign
   */
  exports.prototype['siteDesign'] = undefined;
  /**
   * @member {String} classification
   */
  exports.prototype['classification'] = undefined;
  /**
   * @member {Boolean} isShownHubsiteSettings
   */
  exports.prototype['isShownHubsiteSettings'] = undefined;
  /**
   * @member {module:model/HubSiteSettings} hubSiteSettings
   */
  exports.prototype['hubSiteSettings'] = undefined;
  /**
   * @member {Array.<module:model/RequestUserWithPermissions>} userPermissions
   */
  exports.prototype['userPermissions'] = undefined;
  /**
   * @member {Array.<module:model/RequestGroupWithPermissions>} groupPermissions
   */
  exports.prototype['groupPermissions'] = undefined;
  /**
   * @member {module:model/YammerGroupRequestSettings} yammerGroupSettings
   */
  exports.prototype['yammerGroupSettings'] = undefined;
  /**
   * @member {module:model/SiteLeasePeriodRequestSettings} leasePeriodSettings
   */
  exports.prototype['leasePeriodSettings'] = undefined;
  /**
   * @member {module:model/GeoLocationBase} multiGeoLocation
   */
  exports.prototype['multiGeoLocation'] = undefined;
  /**
   * @member {String} inputTitle
   */
  exports.prototype['inputTitle'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} serviceId
   */
  exports.prototype['serviceId'] = undefined;
  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;
  /**
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * @member {String} notesToApprovers
   */
  exports.prototype['notesToApprovers'] = undefined;
  /**
   * @member {String} questionnaireId
   */
  exports.prototype['questionnaireId'] = undefined;
  /**
   * @member {Array.<module:model/RequestMetadata>} metadatas
   */
  exports.prototype['metadatas'] = undefined;
  /**
   * @member {Number} ticketNumber
   */
  exports.prototype['ticketNumber'] = undefined;
  /**
   * @member {module:model/ServiceTypeNullable} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} typeDescription
   */
  exports.prototype['typeDescription'] = undefined;
  /**
   * @member {String} requester
   */
  exports.prototype['requester'] = undefined;
  /**
   * @member {module:model/RequestStatusNullable} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} progressStatus
   */
  exports.prototype['progressStatus'] = undefined;
  /**
   * @member {String} progressStatusDescription
   */
  exports.prototype['progressStatusDescription'] = undefined;
  /**
   * @member {Date} submittedTime
   */
  exports.prototype['submittedTime'] = undefined;
  /**
   * @member {Date} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {Date} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {String} assignTo
   */
  exports.prototype['assignTo'] = undefined;
  /**
   * @member {String} fullPath
   */
  exports.prototype['fullPath'] = undefined;



  return exports;
}));


