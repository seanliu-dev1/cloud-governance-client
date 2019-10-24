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

import { exists, mapValues } from '../runtime';
import {
    AutoPopulateUrlAssignBy,
    AutoPopulateUrlAssignByFromJSON,
    AutoPopulateUrlAssignByFromJSONTyped,
    AutoPopulateUrlAssignByToJSON,
    SPNode,
    SPNodeFromJSON,
    SPNodeFromJSONTyped,
    SPNodeToJSON,
    ScopeType,
    ScopeTypeFromJSON,
    ScopeTypeFromJSONTyped,
    ScopeTypeToJSON,
    TextValidationRuleRef,
    TextValidationRuleRefFromJSON,
    TextValidationRuleRefFromJSONTyped,
    TextValidationRuleRefToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreateWebScopeSettings
 */
export interface CreateWebScopeSettings {
    /**
     * 
     * @type {Array<SPNode>}
     * @memberof CreateWebScopeSettings
     */
    selectedNodes?: Array<SPNode> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateWebScopeSettings
     */
    restrictParentUrl?: string | null;
    /**
     * 
     * @type {ScopeType}
     * @memberof CreateWebScopeSettings
     */
    scopeType?: ScopeType;
    /**
     * 
     * @type {boolean}
     * @memberof CreateWebScopeSettings
     */
    useTitleInUrl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateWebScopeSettings
     */
    enableUrlValidation?: boolean;
    /**
     * 
     * @type {TextValidationRuleRef}
     * @memberof CreateWebScopeSettings
     */
    textValidationRule?: TextValidationRuleRef;
    /**
     * 
     * @type {boolean}
     * @memberof CreateWebScopeSettings
     */
    autoPopulateUrlWithSPContext?: boolean;
    /**
     * 
     * @type {AutoPopulateUrlAssignBy}
     * @memberof CreateWebScopeSettings
     */
    autoPopulateUrlWithSPContextAssignBy?: AutoPopulateUrlAssignBy;
}

export function CreateWebScopeSettingsFromJSON(json: any): CreateWebScopeSettings {
    return CreateWebScopeSettingsFromJSONTyped(json, false);
}

export function CreateWebScopeSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWebScopeSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'selectedNodes': !exists(json, 'selectedNodes') ? undefined : (json['selectedNodes'] as Array<any>).map(SPNodeFromJSON),
        'restrictParentUrl': !exists(json, 'restrictParentUrl') ? undefined : json['restrictParentUrl'],
        'scopeType': !exists(json, 'scopeType') ? undefined : ScopeTypeFromJSON(json['scopeType']),
        'useTitleInUrl': !exists(json, 'useTitleInUrl') ? undefined : json['useTitleInUrl'],
        'enableUrlValidation': !exists(json, 'enableUrlValidation') ? undefined : json['enableUrlValidation'],
        'textValidationRule': !exists(json, 'textValidationRule') ? undefined : TextValidationRuleRefFromJSON(json['textValidationRule']),
        'autoPopulateUrlWithSPContext': !exists(json, 'autoPopulateUrlWithSPContext') ? undefined : json['autoPopulateUrlWithSPContext'],
        'autoPopulateUrlWithSPContextAssignBy': !exists(json, 'autoPopulateUrlWithSPContextAssignBy') ? undefined : AutoPopulateUrlAssignByFromJSON(json['autoPopulateUrlWithSPContextAssignBy']),
    };
}

export function CreateWebScopeSettingsToJSON(value?: CreateWebScopeSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'selectedNodes': value.selectedNodes == null ? undefined : (value.selectedNodes as Array<any>).map(SPNodeToJSON),
        'restrictParentUrl': value.restrictParentUrl,
        'scopeType': ScopeTypeToJSON(value.scopeType),
        'useTitleInUrl': value.useTitleInUrl,
        'enableUrlValidation': value.enableUrlValidation,
        'textValidationRule': TextValidationRuleRefToJSON(value.textValidationRule),
        'autoPopulateUrlWithSPContext': value.autoPopulateUrlWithSPContext,
        'autoPopulateUrlWithSPContextAssignBy': AutoPopulateUrlAssignByToJSON(value.autoPopulateUrlWithSPContextAssignBy),
    };
}


