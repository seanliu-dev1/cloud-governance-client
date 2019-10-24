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
import ChangeSitePolicySetting from './ChangeSitePolicySetting';
import ChangeSiteQuotaSettings from './ChangeSiteQuotaSettings';
import ExtendSiteSetting from './ExtendSiteSetting';
import LockSiteSetting from './LockSiteSetting';
import UnlockSiteSetting from './UnlockSiteSetting';

/**
 * The SiteLifecycleValidateResult model module.
 * @module model/SiteLifecycleValidateResult
 * @version 1.0
 */
class SiteLifecycleValidateResult {
    /**
     * Constructs a new <code>SiteLifecycleValidateResult</code>.
     * @alias module:model/SiteLifecycleValidateResult
     */
    constructor() { 
        
        SiteLifecycleValidateResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SiteLifecycleValidateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteLifecycleValidateResult} obj Optional instance to populate.
     * @return {module:model/SiteLifecycleValidateResult} The populated <code>SiteLifecycleValidateResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteLifecycleValidateResult();

            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('siteUrl')) {
                obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
            }
            if (data.hasOwnProperty('changeQuotaSetting')) {
                obj['changeQuotaSetting'] = ChangeSiteQuotaSettings.constructFromObject(data['changeQuotaSetting']);
            }
            if (data.hasOwnProperty('extendSetting')) {
                obj['extendSetting'] = ExtendSiteSetting.constructFromObject(data['extendSetting']);
            }
            if (data.hasOwnProperty('unlockSetting')) {
                obj['unlockSetting'] = UnlockSiteSetting.constructFromObject(data['unlockSetting']);
            }
            if (data.hasOwnProperty('changePolicySetting')) {
                obj['changePolicySetting'] = ChangeSitePolicySetting.constructFromObject(data['changePolicySetting']);
            }
            if (data.hasOwnProperty('lockSetting')) {
                obj['lockSetting'] = LockSiteSetting.constructFromObject(data['lockSetting']);
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} siteId
 */
SiteLifecycleValidateResult.prototype['siteId'] = undefined;

/**
 * @member {String} siteUrl
 */
SiteLifecycleValidateResult.prototype['siteUrl'] = undefined;

/**
 * @member {module:model/ChangeSiteQuotaSettings} changeQuotaSetting
 */
SiteLifecycleValidateResult.prototype['changeQuotaSetting'] = undefined;

/**
 * @member {module:model/ExtendSiteSetting} extendSetting
 */
SiteLifecycleValidateResult.prototype['extendSetting'] = undefined;

/**
 * @member {module:model/UnlockSiteSetting} unlockSetting
 */
SiteLifecycleValidateResult.prototype['unlockSetting'] = undefined;

/**
 * @member {module:model/ChangeSitePolicySetting} changePolicySetting
 */
SiteLifecycleValidateResult.prototype['changePolicySetting'] = undefined;

/**
 * @member {module:model/LockSiteSetting} lockSetting
 */
SiteLifecycleValidateResult.prototype['lockSetting'] = undefined;

/**
 * @member {Boolean} isValid
 */
SiteLifecycleValidateResult.prototype['isValid'] = undefined;

/**
 * @member {String} errorMessage
 */
SiteLifecycleValidateResult.prototype['errorMessage'] = undefined;






export default SiteLifecycleValidateResult;

