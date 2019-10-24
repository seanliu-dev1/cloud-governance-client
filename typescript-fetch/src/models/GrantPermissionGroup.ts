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
/**
 * 
 * @export
 * @interface GrantPermissionGroup
 */
export interface GrantPermissionGroup {
    /**
     * 
     * @type {number}
     * @memberof GrantPermissionGroup
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GrantPermissionGroup
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GrantPermissionGroup
     */
    displayName?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GrantPermissionGroup
     */
    permissionIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof GrantPermissionGroup
     */
    description?: string | null;
}

export function GrantPermissionGroupFromJSON(json: any): GrantPermissionGroup {
    return GrantPermissionGroupFromJSONTyped(json, false);
}

export function GrantPermissionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrantPermissionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'permissionIds': !exists(json, 'permissionIds') ? undefined : json['permissionIds'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function GrantPermissionGroupToJSON(value?: GrantPermissionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'displayName': value.displayName,
        'permissionIds': value.permissionIds,
        'description': value.description,
    };
}


