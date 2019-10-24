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
    ApiUser,
    ApiUserFromJSON,
    ApiUserFromJSONTyped,
    ApiUserToJSON,
    AssignBy,
    AssignByFromJSON,
    AssignByFromJSONTyped,
    AssignByToJSON,
    ChangeMetadataActionSetting,
    ChangeMetadataActionSettingFromJSON,
    ChangeMetadataActionSettingFromJSONTyped,
    ChangeMetadataActionSettingToJSON,
    CommonStatus,
    CommonStatusFromJSON,
    CommonStatusFromJSONTyped,
    CommonStatusToJSON,
    CustomActivityInfo,
    CustomActivityInfoFromJSON,
    CustomActivityInfoFromJSONTyped,
    CustomActivityInfoToJSON,
    CustomMetadata,
    CustomMetadataFromJSON,
    CustomMetadataFromJSONTyped,
    CustomMetadataToJSON,
    DpmServiceSetting,
    DpmServiceSettingFromJSON,
    DpmServiceSettingFromJSONTyped,
    DpmServiceSettingToJSON,
    ServiceType,
    ServiceTypeFromJSON,
    ServiceTypeFromJSONTyped,
    ServiceTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChangeWebSettingService
 */
export interface ChangeWebSettingService {
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    enableChangeTitle?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    enableChangeDescription?: boolean;
    /**
     * 
     * @type {ChangeMetadataActionSetting}
     * @memberof ChangeWebSettingService
     */
    changeMetadataSettings?: ChangeMetadataActionSetting;
    /**
     * 
     * @type {DpmServiceSetting}
     * @memberof ChangeWebSettingService
     */
    deploymentManagerPlanSettings?: DpmServiceSetting;
    /**
     * 
     * @type {AssignBy}
     * @memberof ChangeWebSettingService
     */
    departmentAssignBy?: AssignBy;
    /**
     * 
     * @type {Array<CustomMetadata>}
     * @memberof ChangeWebSettingService
     */
    metadatas?: Array<CustomMetadata> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    hideRequestSummary?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    description?: string | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof ChangeWebSettingService
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    department?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    loadDepartmentFromUps?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChangeWebSettingService
     */
    departments?: Array<string> | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeWebSettingService
     */
    serviceContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeWebSettingService
     */
    serviceAdminContact?: ApiUser;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    approversContainManagerRole?: boolean;
    /**
     * 
     * @type {CommonStatus}
     * @memberof ChangeWebSettingService
     */
    status?: CommonStatus;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeWebSettingService
     */
    showServiceInCatalog?: boolean;
    /**
     * 
     * @type {CustomActivityInfo}
     * @memberof ChangeWebSettingService
     */
    customActivity?: CustomActivityInfo;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    approvalProcessId?: string;
    /**
     * 
     * @type {number}
     * @memberof ChangeWebSettingService
     */
    languageId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebSettingService
     */
    categoryId?: string | null;
}

export function ChangeWebSettingServiceFromJSON(json: any): ChangeWebSettingService {
    return ChangeWebSettingServiceFromJSONTyped(json, false);
}

export function ChangeWebSettingServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeWebSettingService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enableChangeTitle': !exists(json, 'enableChangeTitle') ? undefined : json['enableChangeTitle'],
        'enableChangeDescription': !exists(json, 'enableChangeDescription') ? undefined : json['enableChangeDescription'],
        'changeMetadataSettings': !exists(json, 'changeMetadataSettings') ? undefined : ChangeMetadataActionSettingFromJSON(json['changeMetadataSettings']),
        'deploymentManagerPlanSettings': !exists(json, 'deploymentManagerPlanSettings') ? undefined : DpmServiceSettingFromJSON(json['deploymentManagerPlanSettings']),
        'departmentAssignBy': !exists(json, 'departmentAssignBy') ? undefined : AssignByFromJSON(json['departmentAssignBy']),
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(CustomMetadataFromJSON),
        'hideRequestSummary': !exists(json, 'hideRequestSummary') ? undefined : json['hideRequestSummary'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : ServiceTypeFromJSON(json['type']),
        'department': !exists(json, 'department') ? undefined : json['department'],
        'loadDepartmentFromUps': !exists(json, 'loadDepartmentFromUps') ? undefined : json['loadDepartmentFromUps'],
        'departments': !exists(json, 'departments') ? undefined : json['departments'],
        'serviceContact': !exists(json, 'serviceContact') ? undefined : ApiUserFromJSON(json['serviceContact']),
        'serviceAdminContact': !exists(json, 'serviceAdminContact') ? undefined : ApiUserFromJSON(json['serviceAdminContact']),
        'approversContainManagerRole': !exists(json, 'approversContainManagerRole') ? undefined : json['approversContainManagerRole'],
        'status': !exists(json, 'status') ? undefined : CommonStatusFromJSON(json['status']),
        'showServiceInCatalog': !exists(json, 'showServiceInCatalog') ? undefined : json['showServiceInCatalog'],
        'customActivity': !exists(json, 'customActivity') ? undefined : CustomActivityInfoFromJSON(json['customActivity']),
        'approvalProcessId': !exists(json, 'approvalProcessId') ? undefined : json['approvalProcessId'],
        'languageId': !exists(json, 'languageId') ? undefined : json['languageId'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
    };
}

export function ChangeWebSettingServiceToJSON(value?: ChangeWebSettingService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enableChangeTitle': value.enableChangeTitle,
        'enableChangeDescription': value.enableChangeDescription,
        'changeMetadataSettings': ChangeMetadataActionSettingToJSON(value.changeMetadataSettings),
        'deploymentManagerPlanSettings': DpmServiceSettingToJSON(value.deploymentManagerPlanSettings),
        'departmentAssignBy': AssignByToJSON(value.departmentAssignBy),
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(CustomMetadataToJSON),
        'hideRequestSummary': value.hideRequestSummary,
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'type': ServiceTypeToJSON(value.type),
        'department': value.department,
        'loadDepartmentFromUps': value.loadDepartmentFromUps,
        'departments': value.departments,
        'serviceContact': ApiUserToJSON(value.serviceContact),
        'serviceAdminContact': ApiUserToJSON(value.serviceAdminContact),
        'approversContainManagerRole': value.approversContainManagerRole,
        'status': CommonStatusToJSON(value.status),
        'showServiceInCatalog': value.showServiceInCatalog,
        'customActivity': CustomActivityInfoToJSON(value.customActivity),
        'approvalProcessId': value.approvalProcessId,
        'languageId': value.languageId,
        'categoryId': value.categoryId,
    };
}


