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
    UserLevelControlMode,
    UserLevelControlModeFromJSON,
    UserLevelControlModeFromJSONTyped,
    UserLevelControlModeToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserLevelControlSettings
 */
export interface UserLevelControlSettings {
    /**
     * 
     * @type {UserLevelControlMode}
     * @memberof UserLevelControlSettings
     */
    userLevelControlMode?: UserLevelControlMode;
    /**
     * 
     * @type {boolean}
     * @memberof UserLevelControlSettings
     */
    isSetRequesterAsDefaultEnabled?: boolean;
}

export function UserLevelControlSettingsFromJSON(json: any): UserLevelControlSettings {
    return UserLevelControlSettingsFromJSONTyped(json, false);
}

export function UserLevelControlSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLevelControlSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userLevelControlMode': !exists(json, 'userLevelControlMode') ? undefined : UserLevelControlModeFromJSON(json['userLevelControlMode']),
        'isSetRequesterAsDefaultEnabled': !exists(json, 'isSetRequesterAsDefaultEnabled') ? undefined : json['isSetRequesterAsDefaultEnabled'],
    };
}

export function UserLevelControlSettingsToJSON(value?: UserLevelControlSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userLevelControlMode': UserLevelControlModeToJSON(value.userLevelControlMode),
        'isSetRequesterAsDefaultEnabled': value.isSetRequesterAsDefaultEnabled,
    };
}


