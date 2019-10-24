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
 * The BooleanMetadataSettings model module.
 * @module model/BooleanMetadataSettings
 * @version 1.0
 */
class BooleanMetadataSettings {
    /**
     * Constructs a new <code>BooleanMetadataSettings</code>.
     * @alias module:model/BooleanMetadataSettings
     */
    constructor() { 
        
        BooleanMetadataSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BooleanMetadataSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BooleanMetadataSettings} obj Optional instance to populate.
     * @return {module:model/BooleanMetadataSettings} The populated <code>BooleanMetadataSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BooleanMetadataSettings();

            if (data.hasOwnProperty('enableTerms')) {
                obj['enableTerms'] = ApiClient.convertToType(data['enableTerms'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Boolean');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enableTerms
 */
BooleanMetadataSettings.prototype['enableTerms'] = undefined;

/**
 * @member {Boolean} value
 */
BooleanMetadataSettings.prototype['value'] = undefined;

/**
 * @member {String} termsAndConditions
 */
BooleanMetadataSettings.prototype['termsAndConditions'] = undefined;






export default BooleanMetadataSettings;

