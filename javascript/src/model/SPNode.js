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
import NodeType from './NodeType';

/**
 * The SPNode model module.
 * @module model/SPNode
 * @version 1.0
 */
class SPNode {
    /**
     * Constructs a new <code>SPNode</code>.
     * @alias module:model/SPNode
     */
    constructor() { 
        
        SPNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPNode} obj Optional instance to populate.
     * @return {module:model/SPNode} The populated <code>SPNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPNode();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fullUrl')) {
                obj['fullUrl'] = ApiClient.convertToType(data['fullUrl'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NodeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('isSelected')) {
                obj['isSelected'] = ApiClient.convertToType(data['isSelected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
SPNode.prototype['id'] = undefined;

/**
 * @member {String} fullUrl
 */
SPNode.prototype['fullUrl'] = undefined;

/**
 * @member {module:model/NodeType} type
 */
SPNode.prototype['type'] = undefined;

/**
 * @member {String} name
 */
SPNode.prototype['name'] = undefined;

/**
 * @member {String} title
 */
SPNode.prototype['title'] = undefined;

/**
 * @member {Boolean} isSelected
 */
SPNode.prototype['isSelected'] = undefined;






export default SPNode;

