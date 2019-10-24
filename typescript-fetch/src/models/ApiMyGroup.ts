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
    AutoImportPhase,
    AutoImportPhaseFromJSON,
    AutoImportPhaseFromJSONTyped,
    AutoImportPhaseToJSON,
    RequestMetadata,
    RequestMetadataFromJSON,
    RequestMetadataFromJSONTyped,
    RequestMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface ApiMyGroup
 */
export interface ApiMyGroup {
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    objectId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    policyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    groupName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    language?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiMyGroup
     */
    applyPolicyStatus?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApiMyGroup
     */
    enableTeamCollaboration?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    readonly groupType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ApiMyGroup
     */
    createdTime?: Date | null;
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof ApiMyGroup
     */
    owners?: Array<ApiUser> | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    preferredDataLocation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    readonly preferredDataLocationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    id?: string;
    /**
     * 
     * @type {AutoImportPhase}
     * @memberof ApiMyGroup
     */
    phase?: AutoImportPhase;
    /**
     * 
     * @type {Date}
     * @memberof ApiMyGroup
     */
    phaseStartTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    readonly phaseDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    autoImportProfileId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    autoImportProfileName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    policyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiMyGroup
     */
    policyDescription?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApiMyGroup
     */
    isCurrentRenewer?: boolean;
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof ApiMyGroup
     */
    phaseAssignees?: Array<ApiUser> | null;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof ApiMyGroup
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof ApiMyGroup
     */
    primaryContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ApiMyGroup
     */
    secondaryContact?: ApiUser;
}

export function ApiMyGroupFromJSON(json: any): ApiMyGroup {
    return ApiMyGroupFromJSONTyped(json, false);
}

export function ApiMyGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiMyGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'policyId': !exists(json, 'policyId') ? undefined : json['policyId'],
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'applyPolicyStatus': !exists(json, 'applyPolicyStatus') ? undefined : json['applyPolicyStatus'],
        'enableTeamCollaboration': !exists(json, 'enableTeamCollaboration') ? undefined : json['enableTeamCollaboration'],
        'groupType': !exists(json, 'groupType') ? undefined : json['groupType'],
        'createdTime': !exists(json, 'createdTime') ? undefined : new Date(json['createdTime']),
        'owners': !exists(json, 'owners') ? undefined : (json['owners'] as Array<any>).map(ApiUserFromJSON),
        'preferredDataLocation': !exists(json, 'preferredDataLocation') ? undefined : json['preferredDataLocation'],
        'preferredDataLocationName': !exists(json, 'preferredDataLocationName') ? undefined : json['preferredDataLocationName'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'phase': !exists(json, 'phase') ? undefined : AutoImportPhaseFromJSON(json['phase']),
        'phaseStartTime': !exists(json, 'phaseStartTime') ? undefined : new Date(json['phaseStartTime']),
        'phaseDescription': !exists(json, 'phaseDescription') ? undefined : json['phaseDescription'],
        'autoImportProfileId': !exists(json, 'autoImportProfileId') ? undefined : json['autoImportProfileId'],
        'autoImportProfileName': !exists(json, 'autoImportProfileName') ? undefined : json['autoImportProfileName'],
        'policyName': !exists(json, 'policyName') ? undefined : json['policyName'],
        'policyDescription': !exists(json, 'policyDescription') ? undefined : json['policyDescription'],
        'isCurrentRenewer': !exists(json, 'isCurrentRenewer') ? undefined : json['isCurrentRenewer'],
        'phaseAssignees': !exists(json, 'phaseAssignees') ? undefined : (json['phaseAssignees'] as Array<any>).map(ApiUserFromJSON),
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(RequestMetadataFromJSON),
        'primaryContact': !exists(json, 'primaryContact') ? undefined : ApiUserFromJSON(json['primaryContact']),
        'secondaryContact': !exists(json, 'secondaryContact') ? undefined : ApiUserFromJSON(json['secondaryContact']),
    };
}

export function ApiMyGroupToJSON(value?: ApiMyGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objectId': value.objectId,
        'policyId': value.policyId,
        'tenantId': value.tenantId,
        'groupName': value.groupName,
        'email': value.email,
        'language': value.language,
        'applyPolicyStatus': value.applyPolicyStatus,
        'enableTeamCollaboration': value.enableTeamCollaboration,
        'createdTime': value.createdTime == null ? undefined : value.createdTime.toISOString(),
        'owners': value.owners == null ? undefined : (value.owners as Array<any>).map(ApiUserToJSON),
        'preferredDataLocation': value.preferredDataLocation,
        'id': value.id,
        'phase': AutoImportPhaseToJSON(value.phase),
        'phaseStartTime': value.phaseStartTime == null ? undefined : value.phaseStartTime.toISOString(),
        'autoImportProfileId': value.autoImportProfileId,
        'autoImportProfileName': value.autoImportProfileName,
        'policyName': value.policyName,
        'policyDescription': value.policyDescription,
        'isCurrentRenewer': value.isCurrentRenewer,
        'phaseAssignees': value.phaseAssignees == null ? undefined : (value.phaseAssignees as Array<any>).map(ApiUserToJSON),
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(RequestMetadataToJSON),
        'primaryContact': ApiUserToJSON(value.primaryContact),
        'secondaryContact': ApiUserToJSON(value.secondaryContact),
    };
}


