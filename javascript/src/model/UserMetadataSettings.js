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
 * The UserMetadataSettings model module.
 * @module model/UserMetadataSettings
 * @version 1.0
 */
class UserMetadataSettings {
    /**
     * Constructs a new <code>UserMetadataSettings</code>.
     * @alias module:model/UserMetadataSettings
     */
    constructor() { 
        
        UserMetadataSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMetadataSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserMetadataSettings} obj Optional instance to populate.
     * @return {module:model/UserMetadataSettings} The populated <code>UserMetadataSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMetadataSettings();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [ApiUser]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ApiUser>} value
 */
UserMetadataSettings.prototype['value'] = undefined;






export default UserMetadataSettings;

