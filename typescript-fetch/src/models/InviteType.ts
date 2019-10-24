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
 * User=0, Group=1, UserInGroup=2, </br>PortalSupport=3, ProductSupport=4
 * @export
 * @enum {string}
 */
export enum InviteType {
    User = 'User',
    Group = 'Group',
    UserInGroup = 'UserInGroup',
    PortalSupport = 'PortalSupport',
    ProductSupport = 'ProductSupport'
}

export function InviteTypeFromJSON(json: any): InviteType {
    return InviteTypeFromJSONTyped(json, false);
}

export function InviteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteType {
    return json as InviteType;
}

export function InviteTypeToJSON(value?: InviteType): any {
    return value as any;
}

