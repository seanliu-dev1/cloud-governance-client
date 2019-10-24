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
    SiteLockType,
    SiteLockTypeFromJSON,
    SiteLockTypeFromJSONTyped,
    SiteLockTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface PolicyLockLifecycleItem
 */
export interface PolicyLockLifecycleItem {
    /**
     * 
     * @type {SiteLockType}
     * @memberof PolicyLockLifecycleItem
     */
    lockType?: SiteLockType;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyLockLifecycleItem
     */
    isNotifyEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyLockLifecycleItem
     */
    notifyUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PolicyLockLifecycleItem
     */
    notifyTemplate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyLockLifecycleItem
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyLockLifecycleItem
     */
    isDefaultProcess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyLockLifecycleItem
     */
    processId?: string;
}

export function PolicyLockLifecycleItemFromJSON(json: any): PolicyLockLifecycleItem {
    return PolicyLockLifecycleItemFromJSONTyped(json, false);
}

export function PolicyLockLifecycleItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyLockLifecycleItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lockType': !exists(json, 'lockType') ? undefined : SiteLockTypeFromJSON(json['lockType']),
        'isNotifyEnabled': !exists(json, 'isNotifyEnabled') ? undefined : json['isNotifyEnabled'],
        'notifyUser': !exists(json, 'notifyUser') ? undefined : json['notifyUser'],
        'notifyTemplate': !exists(json, 'notifyTemplate') ? undefined : json['notifyTemplate'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isDefaultProcess': !exists(json, 'isDefaultProcess') ? undefined : json['isDefaultProcess'],
        'processId': !exists(json, 'processId') ? undefined : json['processId'],
    };
}

export function PolicyLockLifecycleItemToJSON(value?: PolicyLockLifecycleItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lockType': SiteLockTypeToJSON(value.lockType),
        'isNotifyEnabled': value.isNotifyEnabled,
        'notifyUser': value.notifyUser,
        'notifyTemplate': value.notifyTemplate,
        'isEnabled': value.isEnabled,
        'isDefaultProcess': value.isDefaultProcess,
        'processId': value.processId,
    };
}


