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
import ApiDurationType from './ApiDurationType';
import ExtendType from './ExtendType';

/**
 * The ExtendSiteSetting model module.
 * @module model/ExtendSiteSetting
 * @version 1.0
 */
class ExtendSiteSetting {
    /**
     * Constructs a new <code>ExtendSiteSetting</code>.
     * @alias module:model/ExtendSiteSetting
     */
    constructor() { 
        
        ExtendSiteSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendSiteSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendSiteSetting} obj Optional instance to populate.
     * @return {module:model/ExtendSiteSetting} The populated <code>ExtendSiteSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendSiteSetting();

            if (data.hasOwnProperty('extendType')) {
                obj['extendType'] = ExtendType.constructFromObject(data['extendType']);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('durationType')) {
                obj['durationType'] = ApiDurationType.constructFromObject(data['durationType']);
            }
            if (data.hasOwnProperty('constantDuration')) {
                obj['constantDuration'] = ApiClient.convertToType(data['constantDuration'], 'Number');
            }
            if (data.hasOwnProperty('constantDurationType')) {
                obj['constantDurationType'] = ApiDurationType.constructFromObject(data['constantDurationType']);
            }
            if (data.hasOwnProperty('extendBasedTime')) {
                obj['extendBasedTime'] = ApiClient.convertToType(data['extendBasedTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ExtendType} extendType
 */
ExtendSiteSetting.prototype['extendType'] = undefined;

/**
 * @member {Number} duration
 */
ExtendSiteSetting.prototype['duration'] = undefined;

/**
 * @member {module:model/ApiDurationType} durationType
 */
ExtendSiteSetting.prototype['durationType'] = undefined;

/**
 * @member {Number} constantDuration
 */
ExtendSiteSetting.prototype['constantDuration'] = undefined;

/**
 * @member {module:model/ApiDurationType} constantDurationType
 */
ExtendSiteSetting.prototype['constantDurationType'] = undefined;

/**
 * @member {Date} extendBasedTime
 */
ExtendSiteSetting.prototype['extendBasedTime'] = undefined;






export default ExtendSiteSetting;

