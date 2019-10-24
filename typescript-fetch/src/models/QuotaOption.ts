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
 * Scope=0, Specifid=1
 * @export
 * @enum {string}
 */
export enum QuotaOption {
    Scope = 'Scope',
    Specifid = 'Specifid'
}

export function QuotaOptionFromJSON(json: any): QuotaOption {
    return QuotaOptionFromJSONTyped(json, false);
}

export function QuotaOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotaOption {
    return json as QuotaOption;
}

export function QuotaOptionToJSON(value?: QuotaOption): any {
    return value as any;
}

