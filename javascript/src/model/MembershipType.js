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
* Enum class MembershipType.
* @enum {}
* @readonly
*/
export default class MembershipType {
    
        /**
         * value: "Owner"
         * @const
         */
        "Owner" = "Owner";

    
        /**
         * value: "Member"
         * @const
         */
        "Member" = "Member";

    

    /**
    * Returns a <code>MembershipType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MembershipType} The enum <code>MembershipType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

