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
* Enum class InviteType.
* @enum {}
* @readonly
*/
export default class InviteType {
    
        /**
         * value: "User"
         * @const
         */
        "User" = "User";

    
        /**
         * value: "Group"
         * @const
         */
        "Group" = "Group";

    
        /**
         * value: "UserInGroup"
         * @const
         */
        "UserInGroup" = "UserInGroup";

    
        /**
         * value: "PortalSupport"
         * @const
         */
        "PortalSupport" = "PortalSupport";

    
        /**
         * value: "ProductSupport"
         * @const
         */
        "ProductSupport" = "ProductSupport";

    

    /**
    * Returns a <code>InviteType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InviteType} The enum <code>InviteType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

