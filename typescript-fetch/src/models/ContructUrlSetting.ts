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
 * @interface ContructUrlSetting
 */
export interface ContructUrlSetting {
    /**
     * 
     * @type {Array<string>}
     * @memberof ContructUrlSetting
     */
    rules?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ContructUrlSetting
     */
    suffix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContructUrlSetting
     */
    connection?: string | null;
}

export function ContructUrlSettingFromJSON(json: any): ContructUrlSetting {
    return ContructUrlSettingFromJSONTyped(json, false);
}

export function ContructUrlSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContructUrlSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rules': !exists(json, 'rules') ? undefined : json['rules'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
    };
}

export function ContructUrlSettingToJSON(value?: ContructUrlSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rules': value.rules,
        'suffix': value.suffix,
        'connection': value.connection,
    };
}


