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
    ManuallyArchiveRecordModel,
    ManuallyArchiveRecordModelFromJSON,
    ManuallyArchiveRecordModelFromJSONTyped,
    ManuallyArchiveRecordModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ManuallyArchiveRecordModelPageResult
 */
export interface ManuallyArchiveRecordModelPageResult {
    /**
     * 
     * @type {Array<ManuallyArchiveRecordModel>}
     * @memberof ManuallyArchiveRecordModelPageResult
     */
    value?: Array<ManuallyArchiveRecordModel> | null;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModelPageResult
     */
    nextLink?: string | null;
}

export function ManuallyArchiveRecordModelPageResultFromJSON(json: any): ManuallyArchiveRecordModelPageResult {
    return ManuallyArchiveRecordModelPageResultFromJSONTyped(json, false);
}

export function ManuallyArchiveRecordModelPageResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManuallyArchiveRecordModelPageResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (json['value'] as Array<any>).map(ManuallyArchiveRecordModelFromJSON),
        'nextLink': !exists(json, 'nextLink') ? undefined : json['nextLink'],
    };
}

export function ManuallyArchiveRecordModelPageResultToJSON(value?: ManuallyArchiveRecordModelPageResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value == null ? undefined : (value.value as Array<any>).map(ManuallyArchiveRecordModelToJSON),
        'nextLink': value.nextLink,
    };
}


