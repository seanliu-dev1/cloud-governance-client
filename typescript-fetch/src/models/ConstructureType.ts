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
 * Text=0, Metadata=1, Attribute=2, </br>
 * @export
 * @enum {string}
 */
export enum ConstructureType {
    Text = 'Text',
    Metadata = 'Metadata',
    Attribute = 'Attribute'
}

export function ConstructureTypeFromJSON(json: any): ConstructureType {
    return ConstructureTypeFromJSONTyped(json, false);
}

export function ConstructureTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructureType {
    return json as ConstructureType;
}

export function ConstructureTypeToJSON(value?: ConstructureType): any {
    return value as any;
}

