// tslint:disable
/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CommonStatus,
    CommonStatusFromJSON,
    CommonStatusFromJSONTyped,
    CommonStatusToJSON,
    PolicyDaoSetting,
    PolicyDaoSettingFromJSON,
    PolicyDaoSettingFromJSONTyped,
    PolicyDaoSettingToJSON,
    PolicyElectionSetting,
    PolicyElectionSettingFromJSON,
    PolicyElectionSettingFromJSONTyped,
    PolicyElectionSettingToJSON,
    PolicyExpirationSetting,
    PolicyExpirationSettingFromJSON,
    PolicyExpirationSettingFromJSONTyped,
    PolicyExpirationSettingToJSON,
    PolicyIconSetting,
    PolicyIconSettingFromJSON,
    PolicyIconSettingFromJSONTyped,
    PolicyIconSettingToJSON,
    PolicyLifecycleSetting,
    PolicyLifecycleSettingFromJSON,
    PolicyLifecycleSettingFromJSONTyped,
    PolicyLifecycleSettingToJSON,
    PolicyQuotaSetting,
    PolicyQuotaSettingFromJSON,
    PolicyQuotaSettingFromJSONTyped,
    PolicyQuotaSettingToJSON,
    PolicyQuotaThresholdSetting,
    PolicyQuotaThresholdSettingFromJSON,
    PolicyQuotaThresholdSettingFromJSONTyped,
    PolicyQuotaThresholdSettingToJSON,
    PolicyRecertificationSetting,
    PolicyRecertificationSettingFromJSON,
    PolicyRecertificationSettingFromJSONTyped,
    PolicyRecertificationSettingToJSON,
    PolicySharingSetting,
    PolicySharingSettingFromJSON,
    PolicySharingSettingFromJSONTyped,
    PolicySharingSettingToJSON,
    PolicyType,
    PolicyTypeFromJSON,
    PolicyTypeFromJSONTyped,
    PolicyTypeToJSON,
    ReapplyPolicySetting,
    ReapplyPolicySettingFromJSON,
    ReapplyPolicySettingFromJSONTyped,
    ReapplyPolicySettingToJSON,
} from './';

/**
 * 
 * @export
 * @interface SitePolicyInfo
 */
export interface SitePolicyInfo {
    /**
     * 
     * @type {PolicyQuotaSetting}
     * @memberof SitePolicyInfo
     */
    quotaSetting?: PolicyQuotaSetting;
    /**
     * 
     * @type {PolicySharingSetting}
     * @memberof SitePolicyInfo
     */
    sharingSetting?: PolicySharingSetting;
    /**
     * 
     * @type {boolean}
     * @memberof SitePolicyInfo
     */
    isDesignerEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SitePolicyInfo
     */
    siteMaxDepth?: number;
    /**
     * 
     * @type {PolicyIconSetting}
     * @memberof SitePolicyInfo
     */
    iconSetting?: PolicyIconSetting;
    /**
     * 
     * @type {PolicyDaoSetting}
     * @memberof SitePolicyInfo
     */
    daoSetting?: PolicyDaoSetting;
    /**
     * 
     * @type {PolicyExpirationSetting}
     * @memberof SitePolicyInfo
     */
    leasePeriodSetting?: PolicyExpirationSetting;
    /**
     * 
     * @type {PolicyExpirationSetting}
     * @memberof SitePolicyInfo
     */
    inactivitySetting?: PolicyExpirationSetting;
    /**
     * 
     * @type {PolicyLifecycleSetting}
     * @memberof SitePolicyInfo
     */
    lifecycleSetting?: PolicyLifecycleSetting;
    /**
     * 
     * @type {PolicyRecertificationSetting}
     * @memberof SitePolicyInfo
     */
    recertificationSetting?: PolicyRecertificationSetting;
    /**
     * 
     * @type {PolicyRecertificationSetting}
     * @memberof SitePolicyInfo
     */
    renewalSetting?: PolicyRecertificationSetting;
    /**
     * 
     * @type {PolicyElectionSetting}
     * @memberof SitePolicyInfo
     */
    electionSetting?: PolicyElectionSetting;
    /**
     * 
     * @type {PolicyQuotaThresholdSetting}
     * @memberof SitePolicyInfo
     */
    quotaThresholdSetting?: PolicyQuotaThresholdSetting;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    category?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    detail?: string | null;
    /**
     * 
     * @type {PolicyType}
     * @memberof SitePolicyInfo
     */
    type?: PolicyType;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    farmId?: string;
    /**
     * 
     * @type {Date}
     * @memberof SitePolicyInfo
     */
    createdTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    createdBy?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SitePolicyInfo
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SitePolicyInfo
     */
    modifiedTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof SitePolicyInfo
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {CommonStatus}
     * @memberof SitePolicyInfo
     */
    status?: CommonStatus;
    /**
     * 
     * @type {boolean}
     * @memberof SitePolicyInfo
     */
    isReferenced?: boolean;
    /**
     * 
     * @type {ReapplyPolicySetting}
     * @memberof SitePolicyInfo
     */
    reapplyPolicySetting?: ReapplyPolicySetting;
}

export function SitePolicyInfoFromJSON(json: any): SitePolicyInfo {
    return SitePolicyInfoFromJSONTyped(json, false);
}

export function SitePolicyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SitePolicyInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quotaSetting': !exists(json, 'quotaSetting') ? undefined : PolicyQuotaSettingFromJSON(json['quotaSetting']),
        'sharingSetting': !exists(json, 'sharingSetting') ? undefined : PolicySharingSettingFromJSON(json['sharingSetting']),
        'isDesignerEnabled': !exists(json, 'isDesignerEnabled') ? undefined : json['isDesignerEnabled'],
        'siteMaxDepth': !exists(json, 'siteMaxDepth') ? undefined : json['siteMaxDepth'],
        'iconSetting': !exists(json, 'iconSetting') ? undefined : PolicyIconSettingFromJSON(json['iconSetting']),
        'daoSetting': !exists(json, 'daoSetting') ? undefined : PolicyDaoSettingFromJSON(json['daoSetting']),
        'leasePeriodSetting': !exists(json, 'leasePeriodSetting') ? undefined : PolicyExpirationSettingFromJSON(json['leasePeriodSetting']),
        'inactivitySetting': !exists(json, 'inactivitySetting') ? undefined : PolicyExpirationSettingFromJSON(json['inactivitySetting']),
        'lifecycleSetting': !exists(json, 'lifecycleSetting') ? undefined : PolicyLifecycleSettingFromJSON(json['lifecycleSetting']),
        'recertificationSetting': !exists(json, 'recertificationSetting') ? undefined : PolicyRecertificationSettingFromJSON(json['recertificationSetting']),
        'renewalSetting': !exists(json, 'renewalSetting') ? undefined : PolicyRecertificationSettingFromJSON(json['renewalSetting']),
        'electionSetting': !exists(json, 'electionSetting') ? undefined : PolicyElectionSettingFromJSON(json['electionSetting']),
        'quotaThresholdSetting': !exists(json, 'quotaThresholdSetting') ? undefined : PolicyQuotaThresholdSettingFromJSON(json['quotaThresholdSetting']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'type': !exists(json, 'type') ? undefined : PolicyTypeFromJSON(json['type']),
        'farmId': !exists(json, 'farmId') ? undefined : json['farmId'],
        'createdTime': !exists(json, 'createdTime') ? undefined : new Date(json['createdTime']),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'modifiedTime': !exists(json, 'modifiedTime') ? undefined : new Date(json['modifiedTime']),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'status': !exists(json, 'status') ? undefined : CommonStatusFromJSON(json['status']),
        'isReferenced': !exists(json, 'isReferenced') ? undefined : json['isReferenced'],
        'reapplyPolicySetting': !exists(json, 'reapplyPolicySetting') ? undefined : ReapplyPolicySettingFromJSON(json['reapplyPolicySetting']),
    };
}

export function SitePolicyInfoToJSON(value?: SitePolicyInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quotaSetting': PolicyQuotaSettingToJSON(value.quotaSetting),
        'sharingSetting': PolicySharingSettingToJSON(value.sharingSetting),
        'isDesignerEnabled': value.isDesignerEnabled,
        'siteMaxDepth': value.siteMaxDepth,
        'iconSetting': PolicyIconSettingToJSON(value.iconSetting),
        'daoSetting': PolicyDaoSettingToJSON(value.daoSetting),
        'leasePeriodSetting': PolicyExpirationSettingToJSON(value.leasePeriodSetting),
        'inactivitySetting': PolicyExpirationSettingToJSON(value.inactivitySetting),
        'lifecycleSetting': PolicyLifecycleSettingToJSON(value.lifecycleSetting),
        'recertificationSetting': PolicyRecertificationSettingToJSON(value.recertificationSetting),
        'renewalSetting': PolicyRecertificationSettingToJSON(value.renewalSetting),
        'electionSetting': PolicyElectionSettingToJSON(value.electionSetting),
        'quotaThresholdSetting': PolicyQuotaThresholdSettingToJSON(value.quotaThresholdSetting),
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'category': value.category,
        'detail': value.detail,
        'type': PolicyTypeToJSON(value.type),
        'farmId': value.farmId,
        'createdTime': value.createdTime == null ? undefined : value.createdTime.toISOString(),
        'createdBy': value.createdBy,
        'isDeleted': value.isDeleted,
        'modifiedTime': value.modifiedTime == null ? undefined : value.modifiedTime.toISOString(),
        'modifiedBy': value.modifiedBy,
        'status': CommonStatusToJSON(value.status),
        'isReferenced': value.isReferenced,
        'reapplyPolicySetting': ReapplyPolicySettingToJSON(value.reapplyPolicySetting),
    };
}


