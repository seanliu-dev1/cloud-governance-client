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
 * The GeoLocationModel model module.
 * @module model/GeoLocationModel
 * @version 1.0
 */
class GeoLocationModel {
    /**
     * Constructs a new <code>GeoLocationModel</code>.
     * @alias module:model/GeoLocationModel
     */
    constructor() { 
        
        GeoLocationModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeoLocationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeoLocationModel} obj Optional instance to populate.
     * @return {module:model/GeoLocationModel} The populated <code>GeoLocationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoLocationModel();

            if (data.hasOwnProperty('rootSiteUrl')) {
                obj['rootSiteUrl'] = ApiClient.convertToType(data['rootSiteUrl'], 'String');
            }
            if (data.hasOwnProperty('tenantAdminUrl')) {
                obj['tenantAdminUrl'] = ApiClient.convertToType(data['tenantAdminUrl'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} rootSiteUrl
 */
GeoLocationModel.prototype['rootSiteUrl'] = undefined;

/**
 * @member {String} tenantAdminUrl
 */
GeoLocationModel.prototype['tenantAdminUrl'] = undefined;

/**
 * @member {String} name
 */
GeoLocationModel.prototype['name'] = undefined;

/**
 * @member {String} displayName
 */
GeoLocationModel.prototype['displayName'] = undefined;






export default GeoLocationModel;

