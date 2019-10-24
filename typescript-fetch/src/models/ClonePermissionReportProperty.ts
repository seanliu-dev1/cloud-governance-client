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
} from './';

/**
 * 
 * @export
 * @interface ClonePermissionReportProperty
 */
export interface ClonePermissionReportProperty {
    /**
     * 
     * @type {string}
     * @memberof ClonePermissionReportProperty
     */
    taskTitle?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClonePermissionReportProperty
     */
    isAllowedReassign?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ClonePermissionReportProperty
     */
    reportGeneratedTime?: Date;
    /**
     * 
     * @type {ApiUser}
     * @memberof ClonePermissionReportProperty
     */
    targetUser?: ApiUser;
}

export function ClonePermissionReportPropertyFromJSON(json: any): ClonePermissionReportProperty {
    return ClonePermissionReportPropertyFromJSONTyped(json, false);
}

export function ClonePermissionReportPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClonePermissionReportProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'taskTitle': !exists(json, 'taskTitle') ? undefined : json['taskTitle'],
        'isAllowedReassign': !exists(json, 'isAllowedReassign') ? undefined : json['isAllowedReassign'],
        'reportGeneratedTime': !exists(json, 'reportGeneratedTime') ? undefined : new Date(json['reportGeneratedTime']),
        'targetUser': !exists(json, 'targetUser') ? undefined : ApiUserFromJSON(json['targetUser']),
    };
}

export function ClonePermissionReportPropertyToJSON(value?: ClonePermissionReportProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'taskTitle': value.taskTitle,
        'isAllowedReassign': value.isAllowedReassign,
        'reportGeneratedTime': value.reportGeneratedTime == null ? undefined : value.reportGeneratedTime.toISOString(),
        'targetUser': ApiUserToJSON(value.targetUser),
    };
}


