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

/**
 * Public=0, Private=1
 * @export
 * @enum {string}
 */
export enum YammerGroupType {
    Public = 'Public',
    Private = 'Private'
}

export function YammerGroupTypeFromJSON(json: any): YammerGroupType {
    return YammerGroupTypeFromJSONTyped(json, false);
}

export function YammerGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): YammerGroupType {
    return json as YammerGroupType;
}

export function YammerGroupTypeToJSON(value?: YammerGroupType): any {
    return value as any;
}

