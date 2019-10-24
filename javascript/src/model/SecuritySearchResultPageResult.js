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
import SecuritySearchResult from './SecuritySearchResult';

/**
 * The SecuritySearchResultPageResult model module.
 * @module model/SecuritySearchResultPageResult
 * @version 1.0
 */
class SecuritySearchResultPageResult {
    /**
     * Constructs a new <code>SecuritySearchResultPageResult</code>.
     * @alias module:model/SecuritySearchResultPageResult
     */
    constructor() { 
        
        SecuritySearchResultPageResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritySearchResultPageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritySearchResultPageResult} obj Optional instance to populate.
     * @return {module:model/SecuritySearchResultPageResult} The populated <code>SecuritySearchResultPageResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritySearchResultPageResult();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [SecuritySearchResult]);
            }
            if (data.hasOwnProperty('nextLink')) {
                obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SecuritySearchResult>} value
 */
SecuritySearchResultPageResult.prototype['value'] = undefined;

/**
 * @member {String} nextLink
 */
SecuritySearchResultPageResult.prototype['nextLink'] = undefined;






export default SecuritySearchResultPageResult;

