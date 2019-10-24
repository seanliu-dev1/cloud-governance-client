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
import ApiUser from './ApiUser';

/**
 * The ApiUserChangedProperty model module.
 * @module model/ApiUserChangedProperty
 * @version 1.0
 */
class ApiUserChangedProperty {
    /**
     * Constructs a new <code>ApiUserChangedProperty</code>.
     * @alias module:model/ApiUserChangedProperty
     */
    constructor() { 
        
        ApiUserChangedProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiUserChangedProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiUserChangedProperty} obj Optional instance to populate.
     * @return {module:model/ApiUserChangedProperty} The populated <code>ApiUserChangedProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiUserChangedProperty();

            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiUser.constructFromObject(data['changeValue']);
            }
            if (data.hasOwnProperty('originalValue')) {
                obj['originalValue'] = ApiUser.constructFromObject(data['originalValue']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApiUser} changeValue
 */
ApiUserChangedProperty.prototype['changeValue'] = undefined;

/**
 * @member {module:model/ApiUser} originalValue
 */
ApiUserChangedProperty.prototype['originalValue'] = undefined;






export default ApiUserChangedProperty;

