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

/**
 * The ChangeSiteContactValidateResult model module.
 * @module model/ChangeSiteContactValidateResult
 * @version 1.0
 */
class ChangeSiteContactValidateResult {
    /**
     * Constructs a new <code>ChangeSiteContactValidateResult</code>.
     * @alias module:model/ChangeSiteContactValidateResult
     */
    constructor() { 
        
        ChangeSiteContactValidateResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeSiteContactValidateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeSiteContactValidateResult} obj Optional instance to populate.
     * @return {module:model/ChangeSiteContactValidateResult} The populated <code>ChangeSiteContactValidateResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeSiteContactValidateResult();

            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('siteUrl')) {
                obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
            }
            if (data.hasOwnProperty('primaryContact')) {
                obj['primaryContact'] = ApiUser.constructFromObject(data['primaryContact']);
            }
            if (data.hasOwnProperty('secondaryContact')) {
                obj['secondaryContact'] = ApiUser.constructFromObject(data['secondaryContact']);
            }
            if (data.hasOwnProperty('primaryAdministrator')) {
                obj['primaryAdministrator'] = ApiUser.constructFromObject(data['primaryAdministrator']);
            }
            if (data.hasOwnProperty('additionalAdministrators')) {
                obj['additionalAdministrators'] = ApiClient.convertToType(data['additionalAdministrators'], [ApiUser]);
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
ChangeSiteContactValidateResult.prototype['siteId'] = undefined;

/**
 * @member {String} siteUrl
 */
ChangeSiteContactValidateResult.prototype['siteUrl'] = undefined;

/**
 * @member {module:model/ApiUser} primaryContact
 */
ChangeSiteContactValidateResult.prototype['primaryContact'] = undefined;

/**
 * @member {module:model/ApiUser} secondaryContact
 */
ChangeSiteContactValidateResult.prototype['secondaryContact'] = undefined;

/**
 * @member {module:model/ApiUser} primaryAdministrator
 */
ChangeSiteContactValidateResult.prototype['primaryAdministrator'] = undefined;

/**
 * @member {Array.<module:model/ApiUser>} additionalAdministrators
 */
ChangeSiteContactValidateResult.prototype['additionalAdministrators'] = undefined;

/**
 * @member {Boolean} isValid
 */
ChangeSiteContactValidateResult.prototype['isValid'] = undefined;

/**
 * @member {String} errorMessage
 */
ChangeSiteContactValidateResult.prototype['errorMessage'] = undefined;






export default ChangeSiteContactValidateResult;

