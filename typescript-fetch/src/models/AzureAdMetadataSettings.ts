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
    GuidModel,
    GuidModelFromJSON,
    GuidModelFromJSONTyped,
    GuidModelToJSON,
    LookupValue,
    LookupValueFromJSON,
    LookupValueFromJSONTyped,
    LookupValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface AzureAdMetadataSettings
 */
export interface AzureAdMetadataSettings {
    /**
     * 
     * @type {GuidModel}
     * @memberof AzureAdMetadataSettings
     */
    office365Tenant?: GuidModel;
    /**
     * 
     * @type {string}
     * @memberof AzureAdMetadataSettings
     */
    property?: string | null;
    /**
     * 
     * @type {LookupValue}
     * @memberof AzureAdMetadataSettings
     */
    value?: LookupValue;
}

export function AzureAdMetadataSettingsFromJSON(json: any): AzureAdMetadataSettings {
    return AzureAdMetadataSettingsFromJSONTyped(json, false);
}

export function AzureAdMetadataSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AzureAdMetadataSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'office365Tenant': !exists(json, 'office365Tenant') ? undefined : GuidModelFromJSON(json['office365Tenant']),
        'property': !exists(json, 'property') ? undefined : json['property'],
        'value': !exists(json, 'value') ? undefined : LookupValueFromJSON(json['value']),
    };
}

export function AzureAdMetadataSettingsToJSON(value?: AzureAdMetadataSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'office365Tenant': GuidModelToJSON(value.office365Tenant),
        'property': value.property,
        'value': LookupValueToJSON(value.value),
    };
}


