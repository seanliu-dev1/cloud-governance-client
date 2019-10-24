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
 * None=0, RegisterAsHubSite=1, AssociateToHubSite=2, </br>UnRegisterAsHubSite=3, UnRegisterAndAssociateToHubSite=4
 * @export
 * @enum {string}
 */
export enum ChangeHubsiteActionType {
    None = 'None',
    RegisterAsHubSite = 'RegisterAsHubSite',
    AssociateToHubSite = 'AssociateToHubSite',
    UnRegisterAsHubSite = 'UnRegisterAsHubSite',
    UnRegisterAndAssociateToHubSite = 'UnRegisterAndAssociateToHubSite'
}

export function ChangeHubsiteActionTypeFromJSON(json: any): ChangeHubsiteActionType {
    return ChangeHubsiteActionTypeFromJSONTyped(json, false);
}

export function ChangeHubsiteActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHubsiteActionType {
    return json as ChangeHubsiteActionType;
}

export function ChangeHubsiteActionTypeToJSON(value?: ChangeHubsiteActionType): any {
    return value as any;
}

