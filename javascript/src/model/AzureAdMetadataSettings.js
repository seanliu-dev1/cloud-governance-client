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
import GuidModel from './GuidModel';
import LookupValue from './LookupValue';

/**
 * The AzureAdMetadataSettings model module.
 * @module model/AzureAdMetadataSettings
 * @version 1.0
 */
class AzureAdMetadataSettings {
    /**
     * Constructs a new <code>AzureAdMetadataSettings</code>.
     * @alias module:model/AzureAdMetadataSettings
     */
    constructor() { 
        
        AzureAdMetadataSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureAdMetadataSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureAdMetadataSettings} obj Optional instance to populate.
     * @return {module:model/AzureAdMetadataSettings} The populated <code>AzureAdMetadataSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureAdMetadataSettings();

            if (data.hasOwnProperty('office365Tenant')) {
                obj['office365Tenant'] = GuidModel.constructFromObject(data['office365Tenant']);
            }
            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = LookupValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GuidModel} office365Tenant
 */
AzureAdMetadataSettings.prototype['office365Tenant'] = undefined;

/**
 * @member {String} property
 */
AzureAdMetadataSettings.prototype['property'] = undefined;

/**
 * @member {module:model/LookupValue} value
 */
AzureAdMetadataSettings.prototype['value'] = undefined;






export default AzureAdMetadataSettings;

