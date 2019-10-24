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
 * RequireSignIn=0, AnonymousLink=1
 * @export
 * @enum {string}
 */
export enum ExternalUserSharingType {
    RequireSignIn = 'RequireSignIn',
    AnonymousLink = 'AnonymousLink'
}

export function ExternalUserSharingTypeFromJSON(json: any): ExternalUserSharingType {
    return ExternalUserSharingTypeFromJSONTyped(json, false);
}

export function ExternalUserSharingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalUserSharingType {
    return json as ExternalUserSharingType;
}

export function ExternalUserSharingTypeToJSON(value?: ExternalUserSharingType): any {
    return value as any;
}

