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
 *
 */

import ApiClient from '../ApiClient';
import SPNode from './SPNode';

/**
 * The SPNodePageResult model module.
 * @module model/SPNodePageResult
 * @version 1.0
 */
class SPNodePageResult {
    /**
     * Constructs a new <code>SPNodePageResult</code>.
     * @alias module:model/SPNodePageResult
     */
    constructor() { 
        
        SPNodePageResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPNodePageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPNodePageResult} obj Optional instance to populate.
     * @return {module:model/SPNodePageResult} The populated <code>SPNodePageResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPNodePageResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [SPNode]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SPNode>} value
 */
SPNodePageResult.prototype['value'] = undefined;

/**
 * @member {String} nextLink
 */
SPNodePageResult.prototype['nextLink'] = undefined;






export default SPNodePageResult;

