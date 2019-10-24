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
 * Merge=0, Attach=1
 * @export
 * @enum {string}
 */
export enum ContentMoveAction {
    Merge = 'Merge',
    Attach = 'Attach'
}

export function ContentMoveActionFromJSON(json: any): ContentMoveAction {
    return ContentMoveActionFromJSONTyped(json, false);
}

export function ContentMoveActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentMoveAction {
    return json as ContentMoveAction;
}

export function ContentMoveActionToJSON(value?: ContentMoveAction): any {
    return value as any;
}

