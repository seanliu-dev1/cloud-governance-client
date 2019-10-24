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
    WebLifecycleActionType,
    WebLifecycleActionTypeFromJSON,
    WebLifecycleActionTypeFromJSONTyped,
    WebLifecycleActionTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArchiveWebLifecycleRequest
 */
export interface ArchiveWebLifecycleRequest {
    /**
     * 
     * @type {WebLifecycleActionType}
     * @memberof ArchiveWebLifecycleRequest
     */
    action?: WebLifecycleActionType;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    webId?: string;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    webUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    webRelativeUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    readonly actionDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    serviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    department?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    summary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    notesToApprovers?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    questionnaireId?: string | null;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof ArchiveWebLifecycleRequest
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {number}
     * @memberof ArchiveWebLifecycleRequest
     */
    ticketNumber?: number | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof ArchiveWebLifecycleRequest
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    readonly typeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    requester?: string | null;
    /**
     * 
     * @type {RequestStatus}
     * @memberof ArchiveWebLifecycleRequest
     */
    status?: RequestStatus;
    /**
     * 
     * @type {number}
     * @memberof ArchiveWebLifecycleRequest
     */
    readonly progressStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    readonly progressStatusDescription?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ArchiveWebLifecycleRequest
     */
    submittedTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ArchiveWebLifecycleRequest
     */
    lastUpdated?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ArchiveWebLifecycleRequest
     */
    createdTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    assignTo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArchiveWebLifecycleRequest
     */
    fullPath?: string | null;
}

export function ArchiveWebLifecycleRequestFromJSON(json: any): ArchiveWebLifecycleRequest {
    return ArchiveWebLifecycleRequestFromJSONTyped(json, false);
}

export function ArchiveWebLifecycleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveWebLifecycleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : WebLifecycleActionTypeFromJSON(json['action']),
        'webId': !exists(json, 'webId') ? undefined : json['webId'],
        'webUrl': !exists(json, 'webUrl') ? undefined : json['webUrl'],
        'webRelativeUrl': !exists(json, 'webRelativeUrl') ? undefined : json['webRelativeUrl'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'siteUrl': !exists(json, 'siteUrl') ? undefined : json['siteUrl'],
        'actionDescription': !exists(json, 'actionDescription') ? undefined : json['actionDescription'],
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

export function ArchiveWebLifecycleRequestToJSON(value?: ArchiveWebLifecycleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': WebLifecycleActionTypeToJSON(value.action),
        'webId': value.webId,
        'webUrl': value.webUrl,
        'webRelativeUrl': value.webRelativeUrl,
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


