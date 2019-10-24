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
 * The PermissionActionLockItem model module.
 * @module model/PermissionActionLockItem
 * @version 1.0
 */
class PermissionActionLockItem {
    /**
     * Constructs a new <code>PermissionActionLockItem</code>.
     * @alias module:model/PermissionActionLockItem
     */
    constructor() { 
        
        PermissionActionLockItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionActionLockItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionActionLockItem} obj Optional instance to populate.
     * @return {module:model/PermissionActionLockItem} The populated <code>PermissionActionLockItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionActionLockItem();

            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
            }
            if (data.hasOwnProperty('permissionActionInstanceId')) {
                obj['permissionActionInstanceId'] = ApiClient.convertToType(data['permissionActionInstanceId'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isEnabledText')) {
                obj['isEnabledText'] = ApiClient.convertToType(data['isEnabledText'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} instanceId
 */
PermissionActionLockItem.prototype['instanceId'] = undefined;

/**
 * @member {String} permissionActionInstanceId
 */
PermissionActionLockItem.prototype['permissionActionInstanceId'] = undefined;

/**
 * @member {Boolean} isEnabled
 */
PermissionActionLockItem.prototype['isEnabled'] = undefined;

/**
 * @member {String} isEnabledText
 */
PermissionActionLockItem.prototype['isEnabledText'] = undefined;






export default PermissionActionLockItem;

