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
 * The ApiTaskDynamicProperties model module.
 * @module model/ApiTaskDynamicProperties
 * @version 1.0
 */
class ApiTaskDynamicProperties {
    /**
     * Constructs a new <code>ApiTaskDynamicProperties</code>.
     * @alias module:model/ApiTaskDynamicProperties
     */
    constructor() { 
        
        ApiTaskDynamicProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiTaskDynamicProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiTaskDynamicProperties} obj Optional instance to populate.
     * @return {module:model/ApiTaskDynamicProperties} The populated <code>ApiTaskDynamicProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiTaskDynamicProperties();

            if (data.hasOwnProperty('None')) {
                obj['None'] = ApiClient.convertToType(data['None'], Object);
            }
            if (data.hasOwnProperty('PrimaryContact')) {
                obj['PrimaryContact'] = ApiClient.convertToType(data['PrimaryContact'], Object);
            }
            if (data.hasOwnProperty('SecondaryContact')) {
                obj['SecondaryContact'] = ApiClient.convertToType(data['SecondaryContact'], Object);
            }
            if (data.hasOwnProperty('SiteId')) {
                obj['SiteId'] = ApiClient.convertToType(data['SiteId'], Object);
            }
            if (data.hasOwnProperty('SiteUrl')) {
                obj['SiteUrl'] = ApiClient.convertToType(data['SiteUrl'], Object);
            }
            if (data.hasOwnProperty('GroupName')) {
                obj['GroupName'] = ApiClient.convertToType(data['GroupName'], Object);
            }
            if (data.hasOwnProperty('ExpirationDate')) {
                obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], Object);
            }
            if (data.hasOwnProperty('GroupOwners')) {
                obj['GroupOwners'] = ApiClient.convertToType(data['GroupOwners'], Object);
            }
            if (data.hasOwnProperty('AutoTaskActionHistories')) {
                obj['AutoTaskActionHistories'] = ApiClient.convertToType(data['AutoTaskActionHistories'], Object);
            }
            if (data.hasOwnProperty('InactivityThresholdDate')) {
                obj['InactivityThresholdDate'] = ApiClient.convertToType(data['InactivityThresholdDate'], Object);
            }
            if (data.hasOwnProperty('GroupEmail')) {
                obj['GroupEmail'] = ApiClient.convertToType(data['GroupEmail'], Object);
            }
            if (data.hasOwnProperty('GroupId')) {
                obj['GroupId'] = ApiClient.convertToType(data['GroupId'], Object);
            }
            if (data.hasOwnProperty('PolicyName')) {
                obj['PolicyName'] = ApiClient.convertToType(data['PolicyName'], Object);
            }
            if (data.hasOwnProperty('PrimaryAdministrator')) {
                obj['PrimaryAdministrator'] = ApiClient.convertToType(data['PrimaryAdministrator'], Object);
            }
            if (data.hasOwnProperty('SiteTemplate')) {
                obj['SiteTemplate'] = ApiClient.convertToType(data['SiteTemplate'], Object);
            }
            if (data.hasOwnProperty('SiteTitle')) {
                obj['SiteTitle'] = ApiClient.convertToType(data['SiteTitle'], Object);
            }
            if (data.hasOwnProperty('SiteDescription')) {
                obj['SiteDescription'] = ApiClient.convertToType(data['SiteDescription'], Object);
            }
            if (data.hasOwnProperty('Requester')) {
                obj['Requester'] = ApiClient.convertToType(data['Requester'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} None
 */
ApiTaskDynamicProperties.prototype['None'] = undefined;

/**
 * @member {Object} PrimaryContact
 */
ApiTaskDynamicProperties.prototype['PrimaryContact'] = undefined;

/**
 * @member {Object} SecondaryContact
 */
ApiTaskDynamicProperties.prototype['SecondaryContact'] = undefined;

/**
 * @member {Object} SiteId
 */
ApiTaskDynamicProperties.prototype['SiteId'] = undefined;

/**
 * @member {Object} SiteUrl
 */
ApiTaskDynamicProperties.prototype['SiteUrl'] = undefined;

/**
 * @member {Object} GroupName
 */
ApiTaskDynamicProperties.prototype['GroupName'] = undefined;

/**
 * @member {Object} ExpirationDate
 */
ApiTaskDynamicProperties.prototype['ExpirationDate'] = undefined;

/**
 * @member {Object} GroupOwners
 */
ApiTaskDynamicProperties.prototype['GroupOwners'] = undefined;

/**
 * @member {Object} AutoTaskActionHistories
 */
ApiTaskDynamicProperties.prototype['AutoTaskActionHistories'] = undefined;

/**
 * @member {Object} InactivityThresholdDate
 */
ApiTaskDynamicProperties.prototype['InactivityThresholdDate'] = undefined;

/**
 * @member {Object} GroupEmail
 */
ApiTaskDynamicProperties.prototype['GroupEmail'] = undefined;

/**
 * @member {Object} GroupId
 */
ApiTaskDynamicProperties.prototype['GroupId'] = undefined;

/**
 * @member {Object} PolicyName
 */
ApiTaskDynamicProperties.prototype['PolicyName'] = undefined;

/**
 * @member {Object} PrimaryAdministrator
 */
ApiTaskDynamicProperties.prototype['PrimaryAdministrator'] = undefined;

/**
 * @member {Object} SiteTemplate
 */
ApiTaskDynamicProperties.prototype['SiteTemplate'] = undefined;

/**
 * @member {Object} SiteTitle
 */
ApiTaskDynamicProperties.prototype['SiteTitle'] = undefined;

/**
 * @member {Object} SiteDescription
 */
ApiTaskDynamicProperties.prototype['SiteDescription'] = undefined;

/**
 * @member {Object} Requester
 */
ApiTaskDynamicProperties.prototype['Requester'] = undefined;






export default ApiTaskDynamicProperties;

