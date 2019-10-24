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
import ConvertHubSiteActionType from './ConvertHubSiteActionType';

/**
 * The HubSiteSettings model module.
 * @module model/HubSiteSettings
 * @version 1.0
 */
class HubSiteSettings {
    /**
     * Constructs a new <code>HubSiteSettings</code>.
     * @alias module:model/HubSiteSettings
     */
    constructor() { 
        
        HubSiteSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HubSiteSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HubSiteSettings} obj Optional instance to populate.
     * @return {module:model/HubSiteSettings} The populated <code>HubSiteSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HubSiteSettings();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ConvertHubSiteActionType.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('associatedHubSiteId')) {
                obj['associatedHubSiteId'] = ApiClient.convertToType(data['associatedHubSiteId'], 'String');
            }
            if (data.hasOwnProperty('associatedHubSiteTitle')) {
                obj['associatedHubSiteTitle'] = ApiClient.convertToType(data['associatedHubSiteTitle'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
HubSiteSettings.prototype['enabled'] = undefined;

/**
 * @member {module:model/ConvertHubSiteActionType} action
 */
HubSiteSettings.prototype['action'] = undefined;

/**
 * @member {String} associatedHubSiteId
 */
HubSiteSettings.prototype['associatedHubSiteId'] = undefined;

/**
 * @member {String} associatedHubSiteTitle
 */
HubSiteSettings.prototype['associatedHubSiteTitle'] = undefined;






export default HubSiteSettings;

