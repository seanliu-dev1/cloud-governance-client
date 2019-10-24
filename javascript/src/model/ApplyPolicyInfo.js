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
import ApplyPolicyStatus from './ApplyPolicyStatus';

/**
 * The ApplyPolicyInfo model module.
 * @module model/ApplyPolicyInfo
 * @version 1.0
 */
class ApplyPolicyInfo {
    /**
     * Constructs a new <code>ApplyPolicyInfo</code>.
     * @alias module:model/ApplyPolicyInfo
     */
    constructor() { 
        
        ApplyPolicyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplyPolicyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplyPolicyInfo} obj Optional instance to populate.
     * @return {module:model/ApplyPolicyInfo} The populated <code>ApplyPolicyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplyPolicyInfo();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApplyPolicyStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('lastChangeTime')) {
                obj['lastChangeTime'] = ApiClient.convertToType(data['lastChangeTime'], 'Date');
            }
            if (data.hasOwnProperty('lifeCycleStartTime')) {
                obj['lifeCycleStartTime'] = ApiClient.convertToType(data['lifeCycleStartTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApplyPolicyStatus} status
 */
ApplyPolicyInfo.prototype['status'] = undefined;

/**
 * @member {Date} lastChangeTime
 */
ApplyPolicyInfo.prototype['lastChangeTime'] = undefined;

/**
 * @member {Date} lifeCycleStartTime
 */
ApplyPolicyInfo.prototype['lifeCycleStartTime'] = undefined;






export default ApplyPolicyInfo;

