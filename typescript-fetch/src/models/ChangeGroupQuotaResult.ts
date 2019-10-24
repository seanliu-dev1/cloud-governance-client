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
 * @interface ChangeGroupQuotaResult
 */
export interface ChangeGroupQuotaResult {
    /**
     * 
     * @type {boolean}
     * @memberof ChangeGroupQuotaResult
     */
    allowedAnySize?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChangeGroupQuotaResult
     */
    minQuotaSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeGroupQuotaResult
     */
    maxQuotaSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChangeGroupQuotaResult
     */
    currentQuotaSize?: number;
}

export function ChangeGroupQuotaResultFromJSON(json: any): ChangeGroupQuotaResult {
    return ChangeGroupQuotaResultFromJSONTyped(json, false);
}

export function ChangeGroupQuotaResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeGroupQuotaResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedAnySize': !exists(json, 'allowedAnySize') ? undefined : json['allowedAnySize'],
        'minQuotaSize': !exists(json, 'minQuotaSize') ? undefined : json['minQuotaSize'],
        'maxQuotaSize': !exists(json, 'maxQuotaSize') ? undefined : json['maxQuotaSize'],
        'currentQuotaSize': !exists(json, 'currentQuotaSize') ? undefined : json['currentQuotaSize'],
    };
}

export function ChangeGroupQuotaResultToJSON(value?: ChangeGroupQuotaResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowedAnySize': value.allowedAnySize,
        'minQuotaSize': value.minQuotaSize,
        'maxQuotaSize': value.maxQuotaSize,
        'currentQuotaSize': value.currentQuotaSize,
    };
}


