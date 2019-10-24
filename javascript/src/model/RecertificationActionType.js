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
/**
* Enum class RecertificationActionType.
* @enum {}
* @readonly
*/
export default class RecertificationActionType {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "GroupMembership"
         * @const
         */
        "GroupMembership" = "GroupMembership";

    
        /**
         * value: "GroupPermission"
         * @const
         */
        "GroupPermission" = "GroupPermission";

    
        /**
         * value: "UserPermission"
         * @const
         */
        "UserPermission" = "UserPermission";

    

    /**
    * Returns a <code>RecertificationActionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RecertificationActionType} The enum <code>RecertificationActionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

