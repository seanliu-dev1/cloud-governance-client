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
    MembershipUserType,
    MembershipUserTypeFromJSON,
    MembershipUserTypeFromJSONTyped,
    MembershipUserTypeToJSON,
    RenewalItemAction,
    RenewalItemActionFromJSON,
    RenewalItemActionFromJSONTyped,
    RenewalItemActionToJSON,
    RenewalType,
    RenewalTypeFromJSON,
    RenewalTypeFromJSONTyped,
    RenewalTypeToJSON,
    UserAccessType,
    UserAccessTypeFromJSON,
    UserAccessTypeFromJSONTyped,
    UserAccessTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface MembershipRenewalItemModel
 */
export interface MembershipRenewalItemModel {
    /**
     * 
     * @type {RenewalType}
     * @memberof MembershipRenewalItemModel
     */
    type?: RenewalType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    user?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    userDisplayName?: string | null;
    /**
     * 
     * @type {MembershipUserType}
     * @memberof MembershipRenewalItemModel
     */
    groupUserType?: MembershipUserType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    groupUserTypeDescription?: string | null;
    /**
     * 
     * @type {UserAccessType}
     * @memberof MembershipRenewalItemModel
     */
    accessType?: UserAccessType;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    readonly accessTypeDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MembershipRenewalItemModel
     */
    objectId?: string;
    /**
     * 
     * @type {RenewalItemAction}
     * @memberof MembershipRenewalItemModel
     */
    action?: RenewalItemAction;
}

export function MembershipRenewalItemModelFromJSON(json: any): MembershipRenewalItemModel {
    return MembershipRenewalItemModelFromJSONTyped(json, false);
}

export function MembershipRenewalItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipRenewalItemModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : RenewalTypeFromJSON(json['type']),
        'user': !exists(json, 'user') ? undefined : json['user'],
        'userDisplayName': !exists(json, 'userDisplayName') ? undefined : json['userDisplayName'],
        'groupUserType': !exists(json, 'groupUserType') ? undefined : MembershipUserTypeFromJSON(json['groupUserType']),
        'groupUserTypeDescription': !exists(json, 'groupUserTypeDescription') ? undefined : json['groupUserTypeDescription'],
        'accessType': !exists(json, 'accessType') ? undefined : UserAccessTypeFromJSON(json['accessType']),
        'accessTypeDescription': !exists(json, 'accessTypeDescription') ? undefined : json['accessTypeDescription'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'action': !exists(json, 'action') ? undefined : RenewalItemActionFromJSON(json['action']),
    };
}

export function MembershipRenewalItemModelToJSON(value?: MembershipRenewalItemModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': RenewalTypeToJSON(value.type),
        'user': value.user,
        'userDisplayName': value.userDisplayName,
        'groupUserType': MembershipUserTypeToJSON(value.groupUserType),
        'groupUserTypeDescription': value.groupUserTypeDescription,
        'accessType': UserAccessTypeToJSON(value.accessType),
        'id': value.id,
        'objectId': value.objectId,
        'action': RenewalItemActionToJSON(value.action),
    };
}


