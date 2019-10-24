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
    ManualArchiveNodeLevel,
    ManualArchiveNodeLevelFromJSON,
    ManualArchiveNodeLevelFromJSONTyped,
    ManualArchiveNodeLevelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ManuallyArchiveRecordModel
 */
export interface ManuallyArchiveRecordModel {
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    rowKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    partitionKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    readonly version?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ManuallyArchiveRecordModel
     */
    isSelected?: boolean;
    /**
     * 
     * @type {ManualArchiveNodeLevel}
     * @memberof ManuallyArchiveRecordModel
     */
    nodeType?: ManualArchiveNodeLevel;
    /**
     * 
     * @type {string}
     * @memberof ManuallyArchiveRecordModel
     */
    readonly nodeTypeDescription?: string | null;
}

export function ManuallyArchiveRecordModelFromJSON(json: any): ManuallyArchiveRecordModel {
    return ManuallyArchiveRecordModelFromJSONTyped(json, false);
}

export function ManuallyArchiveRecordModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManuallyArchiveRecordModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rowKey': !exists(json, 'rowKey') ? undefined : json['rowKey'],
        'partitionKey': !exists(json, 'partitionKey') ? undefined : json['partitionKey'],
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'isSelected': !exists(json, 'isSelected') ? undefined : json['isSelected'],
        'nodeType': !exists(json, 'nodeType') ? undefined : ManualArchiveNodeLevelFromJSON(json['nodeType']),
        'nodeTypeDescription': !exists(json, 'nodeTypeDescription') ? undefined : json['nodeTypeDescription'],
    };
}

export function ManuallyArchiveRecordModelToJSON(value?: ManuallyArchiveRecordModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rowKey': value.rowKey,
        'partitionKey': value.partitionKey,
        'siteId': value.siteId,
        'url': value.url,
        'isSelected': value.isSelected,
        'nodeType': ManualArchiveNodeLevelToJSON(value.nodeType),
    };
}


