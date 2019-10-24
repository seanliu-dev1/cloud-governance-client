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
import ChangeGroupPolicyResult from './ChangeGroupPolicyResult';
import ChangeGroupQuotaResult from './ChangeGroupQuotaResult';
import ExtendGroupResult from './ExtendGroupResult';

/**
 * The GroupLifecycleValidateResult model module.
 * @module model/GroupLifecycleValidateResult
 * @version 1.0
 */
class GroupLifecycleValidateResult {
    /**
     * Constructs a new <code>GroupLifecycleValidateResult</code>.
     * @alias module:model/GroupLifecycleValidateResult
     */
    constructor() { 
        
        GroupLifecycleValidateResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupLifecycleValidateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupLifecycleValidateResult} obj Optional instance to populate.
     * @return {module:model/GroupLifecycleValidateResult} The populated <code>GroupLifecycleValidateResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupLifecycleValidateResult();

            if (data.hasOwnProperty('extendSetting')) {
                obj['extendSetting'] = ExtendGroupResult.constructFromObject(data['extendSetting']);
            }
            if (data.hasOwnProperty('changePolicySetting')) {
                obj['changePolicySetting'] = ChangeGroupPolicyResult.constructFromObject(data['changePolicySetting']);
            }
            if (data.hasOwnProperty('changeQuotaSetting')) {
                obj['changeQuotaSetting'] = ChangeGroupQuotaResult.constructFromObject(data['changeQuotaSetting']);
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
 * @member {module:model/ExtendGroupResult} extendSetting
 */
GroupLifecycleValidateResult.prototype['extendSetting'] = undefined;

/**
 * @member {module:model/ChangeGroupPolicyResult} changePolicySetting
 */
GroupLifecycleValidateResult.prototype['changePolicySetting'] = undefined;

/**
 * @member {module:model/ChangeGroupQuotaResult} changeQuotaSetting
 */
GroupLifecycleValidateResult.prototype['changeQuotaSetting'] = undefined;

/**
 * @member {Boolean} isValid
 */
GroupLifecycleValidateResult.prototype['isValid'] = undefined;

/**
 * @member {String} errorMessage
 */
GroupLifecycleValidateResult.prototype['errorMessage'] = undefined;






export default GroupLifecycleValidateResult;

