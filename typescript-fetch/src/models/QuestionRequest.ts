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
    StringModel,
    StringModelFromJSON,
    StringModelFromJSONTyped,
    StringModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface QuestionRequest
 */
export interface QuestionRequest {
    /**
     * 
     * @type {string}
     * @memberof QuestionRequest
     */
    id?: string;
    /**
     * 
     * @type {StringModel}
     * @memberof QuestionRequest
     */
    value?: StringModel;
}

export function QuestionRequestFromJSON(json: any): QuestionRequest {
    return QuestionRequestFromJSONTyped(json, false);
}

export function QuestionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'value': !exists(json, 'value') ? undefined : StringModelFromJSON(json['value']),
    };
}

export function QuestionRequestToJSON(value?: QuestionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'value': StringModelToJSON(value.value),
    };
}


