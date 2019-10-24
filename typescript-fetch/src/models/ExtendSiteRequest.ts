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
    ApiDurationType,
    ApiDurationTypeFromJSON,
    ApiDurationTypeFromJSONTyped,
    ApiDurationTypeToJSON,
    RequestMetadata,
    RequestMetadataFromJSON,
    RequestMetadataFromJSONTyped,
    RequestMetadataToJSON,
    RequestStatus,
    RequestStatusFromJSON,
    RequestStatusFromJSONTyped,
    RequestStatusToJSON,
    ServiceType,
    ServiceTypeFromJSON,
    ServiceTypeFromJSONTyped,
    ServiceTypeToJSON,
    SiteLifecycleActionType,
    SiteLifecycleActionTypeFromJSON,
    SiteLifecycleActionTypeFromJSONTyped,
    SiteLifecycleActionTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ExtendSiteRequest
 */
export interface ExtendSiteRequest {
    /**
     * 
     * @type {number}
     * @memberof ExtendSiteRequest
     */
    extendDuration?: number;
    /**
     * 
     * @type {ApiDurationType}
     * @memberof ExtendSiteRequest
     */
    extendDurationType?: ApiDurationType;
    /**
     * 
     * @type {SiteLifecycleActionType}
     * @memberof ExtendSiteRequest
     */
    action?: SiteLifecycleActionType;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    readonly actionDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    serviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    department?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    summary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    notesToApprovers?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    questionnaireId?: string | null;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof ExtendSiteRequest
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {number}
     * @memberof ExtendSiteRequest
     */
    ticketNumber?: number | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof ExtendSiteRequest
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    readonly typeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    requester?: string | null;
    /**
     * 
     * @type {RequestStatus}
     * @memberof ExtendSiteRequest
     */
    status?: RequestStatus;
    /**
     * 
     * @type {number}
     * @memberof ExtendSiteRequest
     */
    readonly progressStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    readonly progressStatusDescription?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtendSiteRequest
     */
    submittedTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtendSiteRequest
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ExtendSiteRequest
     */
    createdTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    assignTo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtendSiteRequest
     */
    fullPath?: string | null;
}

export function ExtendSiteRequestFromJSON(json: any): ExtendSiteRequest {
    return ExtendSiteRequestFromJSONTyped(json, false);
}

export function ExtendSiteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendSiteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extendDuration': !exists(json, 'extendDuration') ? undefined : json['extendDuration'],
        'extendDurationType': !exists(json, 'extendDurationType') ? undefined : ApiDurationTypeFromJSON(json['extendDurationType']),
        'action': !exists(json, 'action') ? undefined : SiteLifecycleActionTypeFromJSON(json['action']),
        'actionDescription': !exists(json, 'actionDescription') ? undefined : json['actionDescription'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'siteUrl': !exists(json, 'siteUrl') ? undefined : json['siteUrl'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'serviceId': !exists(json, 'serviceId') ? undefined : json['serviceId'],
        'department': !exists(json, 'department') ? undefined : json['department'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'notesToApprovers': !exists(json, 'notesToApprovers') ? undefined : json['notesToApprovers'],
        'questionnaireId': !exists(json, 'questionnaireId') ? undefined : json['questionnaireId'],
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(RequestMetadataFromJSON),
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'type': !exists(json, 'type') ? undefined : ServiceTypeFromJSON(json['type']),
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
        'requester': !exists(json, 'requester') ? undefined : json['requester'],
        'status': !exists(json, 'status') ? undefined : RequestStatusFromJSON(json['status']),
        'progressStatus': !exists(json, 'progressStatus') ? undefined : json['progressStatus'],
        'progressStatusDescription': !exists(json, 'progressStatusDescription') ? undefined : json['progressStatusDescription'],
        'submittedTime': !exists(json, 'submittedTime') ? undefined : new Date(json['submittedTime']),
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : new Date(json['lastUpdated']),
        'createdTime': !exists(json, 'createdTime') ? undefined : new Date(json['createdTime']),
        'assignTo': !exists(json, 'assignTo') ? undefined : json['assignTo'],
        'fullPath': !exists(json, 'fullPath') ? undefined : json['fullPath'],
    };
}

export function ExtendSiteRequestToJSON(value?: ExtendSiteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extendDuration': value.extendDuration,
        'extendDurationType': ApiDurationTypeToJSON(value.extendDurationType),
        'action': SiteLifecycleActionTypeToJSON(value.action),
        'siteId': value.siteId,
        'siteUrl': value.siteUrl,
        'id': value.id,
        'serviceId': value.serviceId,
        'department': value.department,
        'summary': value.summary,
        'notesToApprovers': value.notesToApprovers,
        'questionnaireId': value.questionnaireId,
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(RequestMetadataToJSON),
        'ticketNumber': value.ticketNumber,
        'type': ServiceTypeToJSON(value.type),
        'requester': value.requester,
        'status': RequestStatusToJSON(value.status),
        'submittedTime': value.submittedTime == null ? undefined : value.submittedTime.toISOString(),
        'lastUpdated': value.lastUpdated == null ? undefined : value.lastUpdated.toISOString(),
        'createdTime': value.createdTime == null ? undefined : value.createdTime.toISOString(),
        'assignTo': value.assignTo,
        'fullPath': value.fullPath,
    };
}


