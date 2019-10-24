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
 * The PolicyDaoSetting model module.
 * @module model/PolicyDaoSetting
 * @version 1.0
 */
class PolicyDaoSetting {
    /**
     * Constructs a new <code>PolicyDaoSetting</code>.
     * @alias module:model/PolicyDaoSetting
     */
    constructor() { 
        
        PolicyDaoSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PolicyDaoSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyDaoSetting} obj Optional instance to populate.
     * @return {module:model/PolicyDaoSetting} The populated <code>PolicyDaoSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyDaoSetting();

            if (data.hasOwnProperty('isPolicyEnforcerEnabled')) {
                obj['isPolicyEnforcerEnabled'] = ApiClient.convertToType(data['isPolicyEnforcerEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('policyEnforcerProfile')) {
                obj['policyEnforcerProfile'] = ApiClient.convertToType(data['policyEnforcerProfile'], 'String');
            }
            if (data.hasOwnProperty('isDpmEnabled')) {
                obj['isDpmEnabled'] = ApiClient.convertToType(data['isDpmEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('dpmPlan')) {
                obj['dpmPlan'] = ApiClient.convertToType(data['dpmPlan'], 'String');
            }
            if (data.hasOwnProperty('isBackupEnabled')) {
                obj['isBackupEnabled'] = ApiClient.convertToType(data['isBackupEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isAuditingEnabled')) {
                obj['isAuditingEnabled'] = ApiClient.convertToType(data['isAuditingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isArchiverEnabled')) {
                obj['isArchiverEnabled'] = ApiClient.convertToType(data['isArchiverEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('archiverProfile')) {
                obj['archiverProfile'] = ApiClient.convertToType(data['archiverProfile'], 'String');
            }
            if (data.hasOwnProperty('archiverProcessId')) {
                obj['archiverProcessId'] = ApiClient.convertToType(data['archiverProcessId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isPolicyEnforcerEnabled
 */
PolicyDaoSetting.prototype['isPolicyEnforcerEnabled'] = undefined;

/**
 * @member {String} policyEnforcerProfile
 */
PolicyDaoSetting.prototype['policyEnforcerProfile'] = undefined;

/**
 * @member {Boolean} isDpmEnabled
 */
PolicyDaoSetting.prototype['isDpmEnabled'] = undefined;

/**
 * @member {String} dpmPlan
 */
PolicyDaoSetting.prototype['dpmPlan'] = undefined;

/**
 * @member {Boolean} isBackupEnabled
 */
PolicyDaoSetting.prototype['isBackupEnabled'] = undefined;

/**
 * @member {Boolean} isAuditingEnabled
 */
PolicyDaoSetting.prototype['isAuditingEnabled'] = undefined;

/**
 * @member {Boolean} isArchiverEnabled
 */
PolicyDaoSetting.prototype['isArchiverEnabled'] = undefined;

/**
 * @member {String} archiverProfile
 */
PolicyDaoSetting.prototype['archiverProfile'] = undefined;

/**
 * @member {String} archiverProcessId
 */
PolicyDaoSetting.prototype['archiverProcessId'] = undefined;






export default PolicyDaoSetting;

