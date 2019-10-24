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
    AssignBy,
    AssignByFromJSON,
    AssignByFromJSONTyped,
    AssignByToJSON,
    GeoLocationBase,
    GeoLocationBaseFromJSON,
    GeoLocationBaseFromJSONTyped,
    GeoLocationBaseToJSON,
    MultiGeoControlMode,
    MultiGeoControlModeFromJSON,
    MultiGeoControlModeFromJSONTyped,
    MultiGeoControlModeToJSON,
} from './';

/**
 * 
 * @export
 * @interface MultiGeoSetting
 */
export interface MultiGeoSetting {
    /**
     * 
     * @type {boolean}
     * @memberof MultiGeoSetting
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {MultiGeoControlMode}
     * @memberof MultiGeoSetting
     */
    controlMode?: MultiGeoControlMode;
    /**
     * 
     * @type {GeoLocationBase}
     * @memberof MultiGeoSetting
     */
    defaultLocation?: GeoLocationBase;
    /**
     * 
     * @type {Array<GeoLocationBase>}
     * @memberof MultiGeoSetting
     */
    selectedLocations?: Array<GeoLocationBase> | null;
    /**
     * 
     * @type {AssignBy}
     * @memberof MultiGeoSetting
     */
    locationAssignBy?: AssignBy;
    /**
     * 
     * @type {string}
     * @memberof MultiGeoSetting
     */
    userRoleForLocation?: string | null;
    /**
     * 
     * @type {Array<GeoLocationBase>}
     * @memberof MultiGeoSetting
     */
    allLocations?: Array<GeoLocationBase> | null;
}

export function MultiGeoSettingFromJSON(json: any): MultiGeoSetting {
    return MultiGeoSettingFromJSONTyped(json, false);
}

export function MultiGeoSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiGeoSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'controlMode': !exists(json, 'controlMode') ? undefined : MultiGeoControlModeFromJSON(json['controlMode']),
        'defaultLocation': !exists(json, 'defaultLocation') ? undefined : GeoLocationBaseFromJSON(json['defaultLocation']),
        'selectedLocations': !exists(json, 'selectedLocations') ? undefined : (json['selectedLocations'] as Array<any>).map(GeoLocationBaseFromJSON),
        'locationAssignBy': !exists(json, 'locationAssignBy') ? undefined : AssignByFromJSON(json['locationAssignBy']),
        'userRoleForLocation': !exists(json, 'userRoleForLocation') ? undefined : json['userRoleForLocation'],
        'allLocations': !exists(json, 'allLocations') ? undefined : (json['allLocations'] as Array<any>).map(GeoLocationBaseFromJSON),
    };
}

export function MultiGeoSettingToJSON(value?: MultiGeoSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isEnabled': value.isEnabled,
        'controlMode': MultiGeoControlModeToJSON(value.controlMode),
        'defaultLocation': GeoLocationBaseToJSON(value.defaultLocation),
        'selectedLocations': value.selectedLocations == null ? undefined : (value.selectedLocations as Array<any>).map(GeoLocationBaseToJSON),
        'locationAssignBy': AssignByToJSON(value.locationAssignBy),
        'userRoleForLocation': value.userRoleForLocation,
        'allLocations': value.allLocations == null ? undefined : (value.allLocations as Array<any>).map(GeoLocationBaseToJSON),
    };
}


