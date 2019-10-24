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
 * Duration=0, Date=1
 * @export
 * @enum {string}
 */
export enum GroupLeasePeriodType {
    Duration = 'Duration',
    Date = 'Date'
}

export function GroupLeasePeriodTypeFromJSON(json: any): GroupLeasePeriodType {
    return GroupLeasePeriodTypeFromJSONTyped(json, false);
}

export function GroupLeasePeriodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupLeasePeriodType {
    return json as GroupLeasePeriodType;
}

export function GroupLeasePeriodTypeToJSON(value?: GroupLeasePeriodType): any {
    return value as any;
}

