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
 * Contact=0, License=1, Organization=2, </br>
 * @export
 * @enum {string}
 */
export enum CategoryType {
    Contact = 'Contact',
    License = 'License',
    Organization = 'Organization'
}

export function CategoryTypeFromJSON(json: any): CategoryType {
    return CategoryTypeFromJSONTyped(json, false);
}

export function CategoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryType {
    return json as CategoryType;
}

export function CategoryTypeToJSON(value?: CategoryType): any {
    return value as any;
}

