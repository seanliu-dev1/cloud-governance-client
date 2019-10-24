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
 * @interface DeleteSiteRequest
 */
export interface DeleteSiteRequest {
    /**
     * 
     * @type {SiteLifecycleActionType}
     * @memberof DeleteSiteRequest
     */
    action?: SiteLifecycleActionType;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    readonly actionDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    serviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    department?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    summary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    notesToApprovers?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    questionnaireId?: string | null;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof DeleteSiteRequest
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {number}
     * @memberof DeleteSiteRequest
     */
    ticketNumber?: number | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof DeleteSiteRequest
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    readonly typeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    requester?: string | null;
    /**
     * 
     * @type {RequestStatus}
     * @memberof DeleteSiteRequest
     */
    status?: RequestStatus;
    /**
     * 
     * @type {number}
     * @memberof DeleteSiteRequest
     */
    readonly progressStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    readonly progressStatusDescription?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof DeleteSiteRequest
     */
    submittedTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof DeleteSiteRequest
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof DeleteSiteRequest
     */
    createdTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    assignTo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeleteSiteRequest
     */
    fullPath?: string | null;
}

export function DeleteSiteRequestFromJSON(json: any): DeleteSiteRequest {
    return DeleteSiteRequestFromJSONTyped(json, false);
}

export function DeleteSiteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSiteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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

export function DeleteSiteRequestToJSON(value?: DeleteSiteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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


