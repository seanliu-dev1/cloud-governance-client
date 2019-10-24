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
import ApiUser from './ApiUser';
import GroupOwnerType from './GroupOwnerType';
import GroupUser from './GroupUser';
import PermissionLevel from './PermissionLevel';
import SharePointBuildInGroupType from './SharePointBuildInGroupType';

/**
 * The RequestGroupWithPermissions model module.
 * @module model/RequestGroupWithPermissions
 * @version 1.0
 */
class RequestGroupWithPermissions {
    /**
     * Constructs a new <code>RequestGroupWithPermissions</code>.
     * @alias module:model/RequestGroupWithPermissions
     */
    constructor() { 
        
        RequestGroupWithPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestGroupWithPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestGroupWithPermissions} obj Optional instance to populate.
     * @return {module:model/RequestGroupWithPermissions} The populated <code>RequestGroupWithPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestGroupWithPermissions();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [GroupUser]);
            }
            if (data.hasOwnProperty('permissionLevels')) {
                obj['permissionLevels'] = ApiClient.convertToType(data['permissionLevels'], [PermissionLevel]);
            }
            if (data.hasOwnProperty('groupOwner')) {
                obj['groupOwner'] = ApiUser.constructFromObject(data['groupOwner']);
            }
            if (data.hasOwnProperty('groupOwnerType')) {
                obj['groupOwnerType'] = GroupOwnerType.constructFromObject(data['groupOwnerType']);
            }
            if (data.hasOwnProperty('buildInGroupType')) {
                obj['buildInGroupType'] = SharePointBuildInGroupType.constructFromObject(data['buildInGroupType']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RequestGroupWithPermissions.prototype['name'] = undefined;

/**
 * @member {String} description
 */
RequestGroupWithPermissions.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/GroupUser>} users
 */
RequestGroupWithPermissions.prototype['users'] = undefined;

/**
 * @member {Array.<module:model/PermissionLevel>} permissionLevels
 */
RequestGroupWithPermissions.prototype['permissionLevels'] = undefined;

/**
 * @member {module:model/ApiUser} groupOwner
 */
RequestGroupWithPermissions.prototype['groupOwner'] = undefined;

/**
 * @member {module:model/GroupOwnerType} groupOwnerType
 */
RequestGroupWithPermissions.prototype['groupOwnerType'] = undefined;

/**
 * @member {module:model/SharePointBuildInGroupType} buildInGroupType
 */
RequestGroupWithPermissions.prototype['buildInGroupType'] = undefined;






export default RequestGroupWithPermissions;

