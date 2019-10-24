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
 * The RenewProfileRef model module.
 * @module model/RenewProfileRef
 * @version 1.0
 */
class RenewProfileRef {
    /**
     * Constructs a new <code>RenewProfileRef</code>.
     * @alias module:model/RenewProfileRef
     */
    constructor() { 
        
        RenewProfileRef.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewProfileRef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewProfileRef} obj Optional instance to populate.
     * @return {module:model/RenewProfileRef} The populated <code>RenewProfileRef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewProfileRef();

            if (data.hasOwnProperty('isLastStage')) {
                obj['isLastStage'] = ApiClient.convertToType(data['isLastStage'], 'Boolean');
            }
            if (data.hasOwnProperty('confirmMessage')) {
                obj['confirmMessage'] = ApiClient.convertToType(data['confirmMessage'], 'String');
            }
            if (data.hasOwnProperty('objectTitle')) {
                obj['objectTitle'] = ApiClient.convertToType(data['objectTitle'], 'String');
            }
            if (data.hasOwnProperty('enableContactRenewal')) {
                obj['enableContactRenewal'] = ApiClient.convertToType(data['enableContactRenewal'], 'Boolean');
            }
            if (data.hasOwnProperty('enablePermissionRenewal')) {
                obj['enablePermissionRenewal'] = ApiClient.convertToType(data['enablePermissionRenewal'], 'Boolean');
            }
            if (data.hasOwnProperty('enableMetadataRenewal')) {
                obj['enableMetadataRenewal'] = ApiClient.convertToType(data['enableMetadataRenewal'], 'Boolean');
            }
            if (data.hasOwnProperty('enableReassign')) {
                obj['enableReassign'] = ApiClient.convertToType(data['enableReassign'], 'Boolean');
            }
            if (data.hasOwnProperty('enableDeletion')) {
                obj['enableDeletion'] = ApiClient.convertToType(data['enableDeletion'], 'Boolean');
            }
            if (data.hasOwnProperty('enableArchival')) {
                obj['enableArchival'] = ApiClient.convertToType(data['enableArchival'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isLastStage
 */
RenewProfileRef.prototype['isLastStage'] = undefined;

/**
 * @member {String} confirmMessage
 */
RenewProfileRef.prototype['confirmMessage'] = undefined;

/**
 * @member {String} objectTitle
 */
RenewProfileRef.prototype['objectTitle'] = undefined;

/**
 * @member {Boolean} enableContactRenewal
 */
RenewProfileRef.prototype['enableContactRenewal'] = undefined;

/**
 * @member {Boolean} enablePermissionRenewal
 */
RenewProfileRef.prototype['enablePermissionRenewal'] = undefined;

/**
 * @member {Boolean} enableMetadataRenewal
 */
RenewProfileRef.prototype['enableMetadataRenewal'] = undefined;

/**
 * @member {Boolean} enableReassign
 */
RenewProfileRef.prototype['enableReassign'] = undefined;

/**
 * @member {Boolean} enableDeletion
 */
RenewProfileRef.prototype['enableDeletion'] = undefined;

/**
 * @member {Boolean} enableArchival
 */
RenewProfileRef.prototype['enableArchival'] = undefined;






export default RenewProfileRef;

