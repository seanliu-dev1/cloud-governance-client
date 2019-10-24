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
 * The LinkMetadataSettings model module.
 * @module model/LinkMetadataSettings
 * @version 1.0
 */
class LinkMetadataSettings {
    /**
     * Constructs a new <code>LinkMetadataSettings</code>.
     * @alias module:model/LinkMetadataSettings
     */
    constructor() { 
        
        LinkMetadataSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkMetadataSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkMetadataSettings} obj Optional instance to populate.
     * @return {module:model/LinkMetadataSettings} The populated <code>LinkMetadataSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkMetadataSettings();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
LinkMetadataSettings.prototype['title'] = undefined;

/**
 * @member {String} address
 */
LinkMetadataSettings.prototype['address'] = undefined;






export default LinkMetadataSettings;

