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
import AnonymousLinkSettings from './AnonymousLinkSettings';
import ExternalUserSharingType from './ExternalUserSharingType';

/**
 * The ExternalUserSharingSettings model module.
 * @module model/ExternalUserSharingSettings
 * @version 1.0
 */
class ExternalUserSharingSettings {
    /**
     * Constructs a new <code>ExternalUserSharingSettings</code>.
     * @alias module:model/ExternalUserSharingSettings
     */
    constructor() { 
        
        ExternalUserSharingSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalUserSharingSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalUserSharingSettings} obj Optional instance to populate.
     * @return {module:model/ExternalUserSharingSettings} The populated <code>ExternalUserSharingSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalUserSharingSettings();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('sharingType')) {
                obj['sharingType'] = ExternalUserSharingType.constructFromObject(data['sharingType']);
            }
            if (data.hasOwnProperty('anonymousLinkSettings')) {
                obj['anonymousLinkSettings'] = AnonymousLinkSettings.constructFromObject(data['anonymousLinkSettings']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
ExternalUserSharingSettings.prototype['enabled'] = undefined;

/**
 * @member {module:model/ExternalUserSharingType} sharingType
 */
ExternalUserSharingSettings.prototype['sharingType'] = undefined;

/**
 * @member {module:model/AnonymousLinkSettings} anonymousLinkSettings
 */
ExternalUserSharingSettings.prototype['anonymousLinkSettings'] = undefined;






export default ExternalUserSharingSettings;

