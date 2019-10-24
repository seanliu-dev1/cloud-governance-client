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
    MembershipType,
    MembershipTypeFromJSON,
    MembershipTypeFromJSONTyped,
    MembershipTypeToJSON,
    RecertificationActionType,
    RecertificationActionTypeFromJSON,
    RecertificationActionTypeFromJSONTyped,
    RecertificationActionTypeToJSON,
    RenewalItemAction,
    RenewalItemActionFromJSON,
    RenewalItemActionFromJSONTyped,
    RenewalItemActionToJSON,
    UserAccessType,
    UserAccessTypeFromJSON,
    UserAccessTypeFromJSONTyped,
    UserAccessTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface MembershipRecertificationItem
 */
export interface MembershipRecertificationItem {
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    instanceId?: string;
    /**
     * 
     * @type {RecertificationActionType}
     * @memberof MembershipRecertificationItem
     */
    type?: RecertificationActionType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    taskId?: string | null;
    /**
     * 
     * @type {RenewalItemAction}
     * @memberof MembershipRecertificationItem
     */
    action?: RenewalItemAction;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    readonly actionDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    user?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    userDisplayName?: string | null;
    /**
     * 
     * @type {MembershipType}
     * @memberof MembershipRecertificationItem
     */
    membershipType?: MembershipType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    readonly membershipTypeDescription?: string | null;
    /**
     * 
     * @type {UserAccessType}
     * @memberof MembershipRecertificationItem
     */
    accessType?: UserAccessType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRecertificationItem
     */
    readonly accessTypeDescription?: string | null;
}

export function MembershipRecertificationItemFromJSON(json: any): MembershipRecertificationItem {
    return MembershipRecertificationItemFromJSONTyped(json, false);
}

export function MembershipRecertificationItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipRecertificationItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'instanceId': !exists(json, 'instanceId') ? undefined : json['instanceId'],
        'type': !exists(json, 'type') ? undefined : RecertificationActionTypeFromJSON(json['type']),
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
        'action': !exists(json, 'action') ? undefined : RenewalItemActionFromJSON(json['action']),
        'actionDescription': !exists(json, 'actionDescription') ? undefined : json['actionDescription'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'userDisplayName': !exists(json, 'userDisplayName') ? undefined : json['userDisplayName'],
        'membershipType': !exists(json, 'membershipType') ? undefined : MembershipTypeFromJSON(json['membershipType']),
        'membershipTypeDescription': !exists(json, 'membershipTypeDescription') ? undefined : json['membershipTypeDescription'],
        'accessType': !exists(json, 'accessType') ? undefined : UserAccessTypeFromJSON(json['accessType']),
        'accessTypeDescription': !exists(json, 'accessTypeDescription') ? undefined : json['accessTypeDescription'],
    };
}

export function MembershipRecertificationItemToJSON(value?: MembershipRecertificationItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'instanceId': value.instanceId,
        'type': RecertificationActionTypeToJSON(value.type),
        'taskId': value.taskId,
        'action': RenewalItemActionToJSON(value.action),
        'user': value.user,
        'userDisplayName': value.userDisplayName,
        'membershipType': MembershipTypeToJSON(value.membershipType),
        'accessType': UserAccessTypeToJSON(value.accessType),
    };
}


