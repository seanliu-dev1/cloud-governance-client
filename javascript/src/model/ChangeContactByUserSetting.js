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
 * The ChangeContactByUserSetting model module.
 * @module model/ChangeContactByUserSetting
 * @version 1.0
 */
class ChangeContactByUserSetting {
    /**
     * Constructs a new <code>ChangeContactByUserSetting</code>.
     * @alias module:model/ChangeContactByUserSetting
     */
    constructor() { 
        
        ChangeContactByUserSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeContactByUserSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeContactByUserSetting} obj Optional instance to populate.
     * @return {module:model/ChangeContactByUserSetting} The populated <code>ChangeContactByUserSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeContactByUserSetting();

            if (data.hasOwnProperty('currentUser')) {
                obj['currentUser'] = ApiUser.constructFromObject(data['currentUser']);
            }
            if (data.hasOwnProperty('newUser')) {
                obj['newUser'] = ApiUser.constructFromObject(data['newUser']);
            }
            if (data.hasOwnProperty('alternativeUser')) {
                obj['alternativeUser'] = ApiUser.constructFromObject(data['alternativeUser']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApiUser} currentUser
 */
ChangeContactByUserSetting.prototype['currentUser'] = undefined;

/**
 * @member {module:model/ApiUser} newUser
 */
ChangeContactByUserSetting.prototype['newUser'] = undefined;

/**
 * @member {module:model/ApiUser} alternativeUser
 */
ChangeContactByUserSetting.prototype['alternativeUser'] = undefined;






export default ChangeContactByUserSetting;

