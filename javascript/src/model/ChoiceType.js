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
* Enum class ChoiceType.
* @enum {}
* @readonly
*/
export default class ChoiceType {
    
        /**
         * value: "DropDown"
         * @const
         */
        "DropDown" = "DropDown";

    
        /**
         * value: "RadioButton"
         * @const
         */
        "RadioButton" = "RadioButton";

    
        /**
         * value: "CheckBoxes"
         * @const
         */
        "CheckBoxes" = "CheckBoxes";

    

    /**
    * Returns a <code>ChoiceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ChoiceType} The enum <code>ChoiceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

