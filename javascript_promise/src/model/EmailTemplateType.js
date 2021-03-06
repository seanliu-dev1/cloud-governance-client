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
    root.CgClient.EmailTemplateType = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class EmailTemplateType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Assigned"
     * @const
     */
    "Assigned": "Assigned",
    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",
    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",
    /**
     * value: "Completed"
     * @const
     */
    "Completed": "Completed",
    /**
     * value: "NotifyTemplate"
     * @const
     */
    "NotifyTemplate": "NotifyTemplate",
    /**
     * value: "AdminContactTemplate"
     * @const
     */
    "AdminContactTemplate": "AdminContactTemplate",
    /**
     * value: "ExpirationTemplate"
     * @const
     */
    "ExpirationTemplate": "ExpirationTemplate",
    /**
     * value: "WarningPeriodTemplate"
     * @const
     */
    "WarningPeriodTemplate": "WarningPeriodTemplate",
    /**
     * value: "PermissionBeforeExpired"
     * @const
     */
    "PermissionBeforeExpired": "PermissionBeforeExpired",
    /**
     * value: "RequestModify"
     * @const
     */
    "RequestModify": "RequestModify",
    /**
     * value: "OwnershipNotifyContact"
     * @const
     */
    "OwnershipNotifyContact": "OwnershipNotifyContact",
    /**
     * value: "TaskReminderTemplate"
     * @const
     */
    "TaskReminderTemplate": "TaskReminderTemplate",
    /**
     * value: "SiteCollectionStatus"
     * @const
     */
    "SiteCollectionStatus": "SiteCollectionStatus",
    /**
     * value: "UserStatus"
     * @const
     */
    "UserStatus": "UserStatus",
    /**
     * value: "GroupStatus"
     * @const
     */
    "GroupStatus": "GroupStatus",
    /**
     * value: "SendUserPasswordTemplate"
     * @const
     */
    "SendUserPasswordTemplate": "SendUserPasswordTemplate",
    /**
     * value: "RequestFailedValidation"
     * @const
     */
    "RequestFailedValidation": "RequestFailedValidation",
    /**
     * value: "GroupQuotaThresholdWarning"
     * @const
     */
    "GroupQuotaThresholdWarning": "GroupQuotaThresholdWarning",
    /**
     * value: "SiteCollectionRenewalReport"
     * @const
     */
    "SiteCollectionRenewalReport": "SiteCollectionRenewalReport",
    /**
     * value: "Office365GroupRenewalReport"
     * @const
     */
    "Office365GroupRenewalReport": "Office365GroupRenewalReport",
    /**
     * value: "SiteCollectionRenewalError"
     * @const
     */
    "SiteCollectionRenewalError": "SiteCollectionRenewalError",
    /**
     * value: "Office365GroupRenewalError"
     * @const
     */
    "Office365GroupRenewalError": "Office365GroupRenewalError",
    /**
     * value: "SiteCollectionRenewalGeneratesFailed"
     * @const
     */
    "SiteCollectionRenewalGeneratesFailed": "SiteCollectionRenewalGeneratesFailed",
    /**
     * value: "Office365GroupRenewalGeneratesFailed"
     * @const
     */
    "Office365GroupRenewalGeneratesFailed": "Office365GroupRenewalGeneratesFailed",
    /**
     * value: "SiteCollectionRenewalProcessOverdue"
     * @const
     */
    "SiteCollectionRenewalProcessOverdue": "SiteCollectionRenewalProcessOverdue",
    /**
     * value: "Office365GroupRenewalProcessOverdue"
     * @const
     */
    "Office365GroupRenewalProcessOverdue": "Office365GroupRenewalProcessOverdue",
    /**
     * value: "AutoRejectTask"
     * @const
     */
    "AutoRejectTask": "AutoRejectTask",
    /**
     * value: "SiteQuotaThreshold"
     * @const
     */
    "SiteQuotaThreshold": "SiteQuotaThreshold",
    /**
     * value: "SCApplyInformation"
     * @const
     */
    "SCApplyInformation": "SCApplyInformation",
    /**
     * value: "GroupApplyInformation"
     * @const
     */
    "GroupApplyInformation": "GroupApplyInformation",
    /**
     * value: "ImportResult"
     * @const
     */
    "ImportResult": "ImportResult",
    /**
     * value: "ApplyResult"
     * @const
     */
    "ApplyResult": "ApplyResult",
    /**
     * value: "DelayedEmailNotification"
     * @const
     */
    "DelayedEmailNotification": "DelayedEmailNotification",
    /**
     * value: "ArchiveTeamEmailNotification"
     * @const
     */
    "ArchiveTeamEmailNotification": "ArchiveTeamEmailNotification",
    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled",
    /**
     * value: "NotifyApproverRejected"
     * @const
     */
    "NotifyApproverRejected": "NotifyApproverRejected",
    /**
     * value: "InviteSupportToUserPartner"
     * @const
     */
    "InviteSupportToUserPartner": "InviteSupportToUserPartner",
    /**
     * value: "InviteSupportToUser"
     * @const
     */
    "InviteSupportToUser": "InviteSupportToUser",
    /**
     * value: "InviteSupportToSupport"
     * @const
     */
    "InviteSupportToSupport": "InviteSupportToSupport"  };

  /**
   * Returns a <code>EmailTemplateType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EmailTemplateType} The enum <code>EmailTemplateType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


