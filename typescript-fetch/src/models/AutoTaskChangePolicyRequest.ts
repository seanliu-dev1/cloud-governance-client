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
    CommentsParam,
    CommentsParamFromJSON,
    CommentsParamFromJSONTyped,
    CommentsParamToJSON,
    GuidModel,
    GuidModelFromJSON,
    GuidModelFromJSONTyped,
    GuidModelToJSON,
    LifecycleAction,
    LifecycleActionFromJSON,
    LifecycleActionFromJSONTyped,
    LifecycleActionToJSON,
    RequestMetadata,
    RequestMetadataFromJSON,
    RequestMetadataFromJSONTyped,
    RequestMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface AutoTaskChangePolicyRequest
 */
export interface AutoTaskChangePolicyRequest {
    /**
     * 
     * @type {LifecycleAction}
     * @memberof AutoTaskChangePolicyRequest
     */
    action?: LifecycleAction;
    /**
     * 
     * @type {GuidModel}
     * @memberof AutoTaskChangePolicyRequest
     */
    policy?: GuidModel;
    /**
     * 
     * @type {string}
     * @memberof AutoTaskChangePolicyRequest
     */
    taskId?: string;
    /**
     * 
     * @type {Array<RequestMetadata>}
     * @memberof AutoTaskChangePolicyRequest
     */
    metadatas?: Array<RequestMetadata> | null;
    /**
     * 
     * @type {CommentsParam}
     * @memberof AutoTaskChangePolicyRequest
     */
    comments?: CommentsParam;
}

export function AutoTaskChangePolicyRequestFromJSON(json: any): AutoTaskChangePolicyRequest {
    return AutoTaskChangePolicyRequestFromJSONTyped(json, false);
}

export function AutoTaskChangePolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTaskChangePolicyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : LifecycleActionFromJSON(json['action']),
        'policy': !exists(json, 'policy') ? undefined : GuidModelFromJSON(json['policy']),
        'taskId': !exists(json, 'taskId') ? undefined : json['taskId'],
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(RequestMetadataFromJSON),
        'comments': !exists(json, 'comments') ? undefined : CommentsParamFromJSON(json['comments']),
    };
}

export function AutoTaskChangePolicyRequestToJSON(value?: AutoTaskChangePolicyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': LifecycleActionToJSON(value.action),
        'policy': GuidModelToJSON(value.policy),
        'taskId': value.taskId,
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(RequestMetadataToJSON),
        'comments': CommentsParamToJSON(value.comments),
    };
}


