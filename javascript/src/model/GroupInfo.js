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
 * The GroupInfo model module.
 * @module model/GroupInfo
 * @version 1.0
 */
class GroupInfo {
    /**
     * Constructs a new <code>GroupInfo</code>.
     * @alias module:model/GroupInfo
     */
    constructor() { 
        
        GroupInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupInfo} obj Optional instance to populate.
     * @return {module:model/GroupInfo} The populated <code>GroupInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupInfo();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
            }
            if (data.hasOwnProperty('networkId')) {
                obj['networkId'] = ApiClient.convertToType(data['networkId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GroupInfo.prototype['name'] = undefined;

/**
 * @member {String} id
 */
GroupInfo.prototype['id'] = undefined;

/**
 * @member {String} imageUrl
 */
GroupInfo.prototype['imageUrl'] = undefined;

/**
 * @member {String} description
 */
GroupInfo.prototype['description'] = undefined;

/**
 * @member {String} privacy
 */
GroupInfo.prototype['privacy'] = undefined;

/**
 * @member {String} networkId
 */
GroupInfo.prototype['networkId'] = undefined;






export default GroupInfo;

