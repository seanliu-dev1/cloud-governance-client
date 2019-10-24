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
 * None=0, Remove=1, Add=2, </br>Edit=3, DeleteUser=4, PromoteAsOwner=5, </br>DemoteAsMember=6
 * @export
 * @enum {string}
 */
export enum RenewalItemAction {
    None = 'None',
    Remove = 'Remove',
    Add = 'Add',
    Edit = 'Edit',
    DeleteUser = 'DeleteUser',
    PromoteAsOwner = 'PromoteAsOwner',
    DemoteAsMember = 'DemoteAsMember'
}

export function RenewalItemActionFromJSON(json: any): RenewalItemAction {
    return RenewalItemActionFromJSONTyped(json, false);
}

export function RenewalItemActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenewalItemAction {
    return json as RenewalItemAction;
}

export function RenewalItemActionToJSON(value?: RenewalItemAction): any {
    return value as any;
}

