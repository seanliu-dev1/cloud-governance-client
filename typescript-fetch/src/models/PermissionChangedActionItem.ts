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
    PermissionActionType,
    PermissionActionTypeFromJSON,
    PermissionActionTypeFromJSONTyped,
    PermissionActionTypeToJSON,
    PrincipalType,
    PrincipalTypeFromJSON,
    PrincipalTypeFromJSONTyped,
    PrincipalTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface PermissionChangedActionItem
 */
export interface PermissionChangedActionItem {
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    groupChanges?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    permissionChanges?: string | null;
    /**
     * 
     * @type {PrincipalType}
     * @memberof PermissionChangedActionItem
     */
    accountType?: PrincipalType;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    readonly accountTypeDescription?: string | null;
    /**
     * 
     * @type {PermissionActionType}
     * @memberof PermissionChangedActionItem
     */
    actionType?: PermissionActionType;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    readonly actionTypeDescription?: string | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof PermissionChangedActionItem
     */
    changedBy?: ApiUser;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    objectTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    objectUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItem
     */
    objectType?: string | null;
}

export function PermissionChangedActionItemFromJSON(json: any): PermissionChangedActionItem {
    return PermissionChangedActionItemFromJSONTyped(json, false);
}

export function PermissionChangedActionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionChangedActionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'groupChanges': !exists(json, 'groupChanges') ? undefined : json['groupChanges'],
        'permissionChanges': !exists(json, 'permissionChanges') ? undefined : json['permissionChanges'],
        'accountType': !exists(json, 'accountType') ? undefined : PrincipalTypeFromJSON(json['accountType']),
        'accountTypeDescription': !exists(json, 'accountTypeDescription') ? undefined : json['accountTypeDescription'],
        'actionType': !exists(json, 'actionType') ? undefined : PermissionActionTypeFromJSON(json['actionType']),
        'actionTypeDescription': !exists(json, 'actionTypeDescription') ? undefined : json['actionTypeDescription'],
        'changedBy': !exists(json, 'changedBy') ? undefined : ApiUserFromJSON(json['changedBy']),
        'objectTitle': !exists(json, 'objectTitle') ? undefined : json['objectTitle'],
        'objectUrl': !exists(json, 'objectUrl') ? undefined : json['objectUrl'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
    };
}

export function PermissionChangedActionItemToJSON(value?: PermissionChangedActionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'groupChanges': value.groupChanges,
        'permissionChanges': value.permissionChanges,
        'accountType': PrincipalTypeToJSON(value.accountType),
        'actionType': PermissionActionTypeToJSON(value.actionType),
        'changedBy': ApiUserToJSON(value.changedBy),
        'objectTitle': value.objectTitle,
        'objectUrl': value.objectUrl,
        'objectType': value.objectType,
    };
}


