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
    define(['ApiClient', 'model/ApiUser', 'model/ChangeHubsiteActionType', 'model/DynamicGroupRuleInfo', 'model/GroupMembershipItem', 'model/RequestMetadata', 'model/RequestStatusNullable', 'model/ServiceTypeNullable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./ChangeHubsiteActionType'), require('./DynamicGroupRuleInfo'), require('./GroupMembershipItem'), require('./RequestMetadata'), require('./RequestStatusNullable'), require('./ServiceTypeNullable'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ChangeGroupSettingRequest = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.ChangeHubsiteActionType, root.CgClient.DynamicGroupRuleInfo, root.CgClient.GroupMembershipItem, root.CgClient.RequestMetadata, root.CgClient.RequestStatusNullable, root.CgClient.ServiceTypeNullable);
  }
}(this, function(ApiClient, ApiUser, ChangeHubsiteActionType, DynamicGroupRuleInfo, GroupMembershipItem, RequestMetadata, RequestStatusNullable, ServiceTypeNullable) {
  'use strict';



  /**
   * The ChangeGroupSettingRequest model module.
   * @module model/ChangeGroupSettingRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>ChangeGroupSettingRequest</code>.
   * @alias module:model/ChangeGroupSettingRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ChangeGroupSettingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeGroupSettingRequest} obj Optional instance to populate.
   * @return {module:model/ChangeGroupSettingRequest} The populated <code>ChangeGroupSettingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupEmail')) {
        obj['groupEmail'] = ApiClient.convertToType(data['groupEmail'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('originalGroupName')) {
        obj['originalGroupName'] = ApiClient.convertToType(data['originalGroupName'], 'String');
      }
      if (data.hasOwnProperty('groupDescription')) {
        obj['groupDescription'] = ApiClient.convertToType(data['groupDescription'], 'String');
      }
      if (data.hasOwnProperty('originalGroupDescription')) {
        obj['originalGroupDescription'] = ApiClient.convertToType(data['originalGroupDescription'], 'String');
      }
      if (data.hasOwnProperty('primaryContact')) {
        obj['primaryContact'] = ApiUser.constructFromObject(data['primaryContact']);
      }
      if (data.hasOwnProperty('originalPrimaryContact')) {
        obj['originalPrimaryContact'] = ApiUser.constructFromObject(data['originalPrimaryContact']);
      }
      if (data.hasOwnProperty('secondaryContact')) {
        obj['secondaryContact'] = ApiUser.constructFromObject(data['secondaryContact']);
      }
      if (data.hasOwnProperty('originalSecondaryContact')) {
        obj['originalSecondaryContact'] = ApiUser.constructFromObject(data['originalSecondaryContact']);
      }
      if (data.hasOwnProperty('groupOwners')) {
        obj['groupOwners'] = ApiClient.convertToType(data['groupOwners'], [GroupMembershipItem]);
      }
      if (data.hasOwnProperty('groupMembers')) {
        obj['groupMembers'] = ApiClient.convertToType(data['groupMembers'], [GroupMembershipItem]);
      }
      if (data.hasOwnProperty('isDynamicMembership')) {
        obj['isDynamicMembership'] = ApiClient.convertToType(data['isDynamicMembership'], 'Boolean');
      }
      if (data.hasOwnProperty('dynamicMembershipRules')) {
        obj['dynamicMembershipRules'] = ApiClient.convertToType(data['dynamicMembershipRules'], [DynamicGroupRuleInfo]);
      }
      if (data.hasOwnProperty('enabledSubscribe')) {
        obj['enabledSubscribe'] = ApiClient.convertToType(data['enabledSubscribe'], 'Boolean');
      }
      if (data.hasOwnProperty('originalEnabledSubscribe')) {
        obj['originalEnabledSubscribe'] = ApiClient.convertToType(data['originalEnabledSubscribe'], 'Boolean');
      }
      if (data.hasOwnProperty('enabledOutsideSender')) {
        obj['enabledOutsideSender'] = ApiClient.convertToType(data['enabledOutsideSender'], 'Boolean');
      }
      if (data.hasOwnProperty('originalEnabledOutsideSender')) {
        obj['originalEnabledOutsideSender'] = ApiClient.convertToType(data['originalEnabledOutsideSender'], 'Boolean');
      }
      if (data.hasOwnProperty('hubSiteActionType')) {
        obj['hubSiteActionType'] = ChangeHubsiteActionType.constructFromObject(data['hubSiteActionType']);
      }
      if (data.hasOwnProperty('associateHubSiteId')) {
        obj['associateHubSiteId'] = ApiClient.convertToType(data['associateHubSiteId'], 'String');
      }
      if (data.hasOwnProperty('associateHubSiteTitle')) {
        obj['associateHubSiteTitle'] = ApiClient.convertToType(data['associateHubSiteTitle'], 'String');
      }
      if (data.hasOwnProperty('classification')) {
        obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
      }
      if (data.hasOwnProperty('originalClassification')) {
        obj['originalClassification'] = ApiClient.convertToType(data['originalClassification'], 'String');
      }
      if (data.hasOwnProperty('enableTeams')) {
        obj['enableTeams'] = ApiClient.convertToType(data['enableTeams'], 'Boolean');
      }
      if (data.hasOwnProperty('originalEnableTeams')) {
        obj['originalEnableTeams'] = ApiClient.convertToType(data['originalEnableTeams'], 'Boolean');
      }
      if (data.hasOwnProperty('groupMetadatas')) {
        obj['groupMetadatas'] = ApiClient.convertToType(data['groupMetadatas'], [RequestMetadata]);
      }
      if (data.hasOwnProperty('originalGroupMetadata')) {
        obj['originalGroupMetadata'] = ApiClient.convertToType(data['originalGroupMetadata'], [RequestMetadata]);
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
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * @member {String} groupEmail
   */
  exports.prototype['groupEmail'] = undefined;
  /**
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * @member {String} originalGroupName
   */
  exports.prototype['originalGroupName'] = undefined;
  /**
   * @member {String} groupDescription
   */
  exports.prototype['groupDescription'] = undefined;
  /**
   * @member {String} originalGroupDescription
   */
  exports.prototype['originalGroupDescription'] = undefined;
  /**
   * @member {module:model/ApiUser} primaryContact
   */
  exports.prototype['primaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} originalPrimaryContact
   */
  exports.prototype['originalPrimaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} secondaryContact
   */
  exports.prototype['secondaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} originalSecondaryContact
   */
  exports.prototype['originalSecondaryContact'] = undefined;
  /**
   * @member {Array.<module:model/GroupMembershipItem>} groupOwners
   */
  exports.prototype['groupOwners'] = undefined;
  /**
   * @member {Array.<module:model/GroupMembershipItem>} groupMembers
   */
  exports.prototype['groupMembers'] = undefined;
  /**
   * @member {Boolean} isDynamicMembership
   */
  exports.prototype['isDynamicMembership'] = undefined;
  /**
   * @member {Array.<module:model/DynamicGroupRuleInfo>} dynamicMembershipRules
   */
  exports.prototype['dynamicMembershipRules'] = undefined;
  /**
   * @member {Boolean} enabledSubscribe
   */
  exports.prototype['enabledSubscribe'] = undefined;
  /**
   * @member {Boolean} originalEnabledSubscribe
   */
  exports.prototype['originalEnabledSubscribe'] = undefined;
  /**
   * @member {Boolean} enabledOutsideSender
   */
  exports.prototype['enabledOutsideSender'] = undefined;
  /**
   * @member {Boolean} originalEnabledOutsideSender
   */
  exports.prototype['originalEnabledOutsideSender'] = undefined;
  /**
   * @member {module:model/ChangeHubsiteActionType} hubSiteActionType
   */
  exports.prototype['hubSiteActionType'] = undefined;
  /**
   * @member {String} associateHubSiteId
   */
  exports.prototype['associateHubSiteId'] = undefined;
  /**
   * @member {String} associateHubSiteTitle
   */
  exports.prototype['associateHubSiteTitle'] = undefined;
  /**
   * @member {String} classification
   */
  exports.prototype['classification'] = undefined;
  /**
   * @member {String} originalClassification
   */
  exports.prototype['originalClassification'] = undefined;
  /**
   * @member {Boolean} enableTeams
   */
  exports.prototype['enableTeams'] = undefined;
  /**
   * @member {Boolean} originalEnableTeams
   */
  exports.prototype['originalEnableTeams'] = undefined;
  /**
   * @member {Array.<module:model/RequestMetadata>} groupMetadatas
   */
  exports.prototype['groupMetadatas'] = undefined;
  /**
   * @member {Array.<module:model/RequestMetadata>} originalGroupMetadata
   */
  exports.prototype['originalGroupMetadata'] = undefined;
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


