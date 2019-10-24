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
 * @interface SharingEnabledUser
 */
export interface SharingEnabledUser {
    /**
     * 
     * @type {boolean}
     * @memberof SharingEnabledUser
     */
    isSharePointGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SharingEnabledUser
     */
    isGuestUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SharingEnabledUser
     */
    isGuestUserExistsInOrganization?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    loginName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SharingEnabledUser
     */
    isGroup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    jobTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SharingEnabledUser
     */
    physicalDeliveryOfficeName?: string | null;
}

export function SharingEnabledUserFromJSON(json: any): SharingEnabledUser {
    return SharingEnabledUserFromJSONTyped(json, false);
}

export function SharingEnabledUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharingEnabledUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isSharePointGroup': !exists(json, 'isSharePointGroup') ? undefined : json['isSharePointGroup'],
        'isGuestUser': !exists(json, 'isGuestUser') ? undefined : json['isGuestUser'],
        'isGuestUserExistsInOrganization': !exists(json, 'isGuestUserExistsInOrganization') ? undefined : json['isGuestUserExistsInOrganization'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'loginName': !exists(json, 'loginName') ? undefined : json['loginName'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'isGroup': !exists(json, 'isGroup') ? undefined : json['isGroup'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'physicalDeliveryOfficeName': !exists(json, 'physicalDeliveryOfficeName') ? undefined : json['physicalDeliveryOfficeName'],
    };
}

export function SharingEnabledUserToJSON(value?: SharingEnabledUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isSharePointGroup': value.isSharePointGroup,
        'isGuestUser': value.isGuestUser,
        'isGuestUserExistsInOrganization': value.isGuestUserExistsInOrganization,
        'id': value.id,
        'loginName': value.loginName,
        'displayName': value.displayName,
        'email': value.email,
        'isGroup': value.isGroup,
        'jobTitle': value.jobTitle,
        'physicalDeliveryOfficeName': value.physicalDeliveryOfficeName,
    };
}


