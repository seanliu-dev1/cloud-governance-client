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
import AssignBy from './AssignBy';
import AzureAdMetadataSettings from './AzureAdMetadataSettings';
import BooleanMetadataSettings from './BooleanMetadataSettings';
import ChoiceMetadataSettings from './ChoiceMetadataSettings';
import DisplayInReportType from './DisplayInReportType';
import LinkMetadataSettings from './LinkMetadataSettings';
import MetadataFieldType from './MetadataFieldType';
import SingleLineOrMultipleLineMetadataSettings from './SingleLineOrMultipleLineMetadataSettings';
import TermsMetadataSettings from './TermsMetadataSettings';
import TextValidationRuleRef from './TextValidationRuleRef';
import UserMetadataSettings from './UserMetadataSettings';
import UserProfileMetadataSettings from './UserProfileMetadataSettings';

/**
 * The CustomMetadata model module.
 * @module model/CustomMetadata
 * @version 1.0
 */
class CustomMetadata {
    /**
     * Constructs a new <code>CustomMetadata</code>.
     * @alias module:model/CustomMetadata
     */
    constructor() { 
        
        CustomMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomMetadata} obj Optional instance to populate.
     * @return {module:model/CustomMetadata} The populated <code>CustomMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomMetadata();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MetadataFieldType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('displayType')) {
                obj['displayType'] = DisplayInReportType.constructFromObject(data['displayType']);
            }
            if (data.hasOwnProperty('assignBy')) {
                obj['assignBy'] = AssignBy.constructFromObject(data['assignBy']);
            }
            if (data.hasOwnProperty('enableTextValidation')) {
                obj['enableTextValidation'] = ApiClient.convertToType(data['enableTextValidation'], 'Boolean');
            }
            if (data.hasOwnProperty('textValidationRule')) {
                obj['textValidationRule'] = TextValidationRuleRef.constructFromObject(data['textValidationRule']);
            }
            if (data.hasOwnProperty('booleanMetadataSettings')) {
                obj['booleanMetadataSettings'] = BooleanMetadataSettings.constructFromObject(data['booleanMetadataSettings']);
            }
            if (data.hasOwnProperty('termsMetadataSettings')) {
                obj['termsMetadataSettings'] = TermsMetadataSettings.constructFromObject(data['termsMetadataSettings']);
            }
            if (data.hasOwnProperty('userMetadataSettings')) {
                obj['userMetadataSettings'] = UserMetadataSettings.constructFromObject(data['userMetadataSettings']);
            }
            if (data.hasOwnProperty('userProfileMetadataSettings')) {
                obj['userProfileMetadataSettings'] = UserProfileMetadataSettings.constructFromObject(data['userProfileMetadataSettings']);
            }
            if (data.hasOwnProperty('azureAdMetadataSettings')) {
                obj['azureAdMetadataSettings'] = AzureAdMetadataSettings.constructFromObject(data['azureAdMetadataSettings']);
            }
            if (data.hasOwnProperty('choiceMetadataSettings')) {
                obj['choiceMetadataSettings'] = ChoiceMetadataSettings.constructFromObject(data['choiceMetadataSettings']);
            }
            if (data.hasOwnProperty('linkMetadataSettings')) {
                obj['linkMetadataSettings'] = LinkMetadataSettings.constructFromObject(data['linkMetadataSettings']);
            }
            if (data.hasOwnProperty('singleLineOrMultipleLineMetadataSettings')) {
                obj['singleLineOrMultipleLineMetadataSettings'] = SingleLineOrMultipleLineMetadataSettings.constructFromObject(data['singleLineOrMultipleLineMetadataSettings']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CustomMetadata.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CustomMetadata.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CustomMetadata.prototype['description'] = undefined;

/**
 * @member {module:model/MetadataFieldType} type
 */
CustomMetadata.prototype['type'] = undefined;

/**
 * @member {module:model/DisplayInReportType} displayType
 */
CustomMetadata.prototype['displayType'] = undefined;

/**
 * @member {module:model/AssignBy} assignBy
 */
CustomMetadata.prototype['assignBy'] = undefined;

/**
 * @member {Boolean} enableTextValidation
 */
CustomMetadata.prototype['enableTextValidation'] = undefined;

/**
 * @member {module:model/TextValidationRuleRef} textValidationRule
 */
CustomMetadata.prototype['textValidationRule'] = undefined;

/**
 * @member {module:model/BooleanMetadataSettings} booleanMetadataSettings
 */
CustomMetadata.prototype['booleanMetadataSettings'] = undefined;

/**
 * @member {module:model/TermsMetadataSettings} termsMetadataSettings
 */
CustomMetadata.prototype['termsMetadataSettings'] = undefined;

/**
 * @member {module:model/UserMetadataSettings} userMetadataSettings
 */
CustomMetadata.prototype['userMetadataSettings'] = undefined;

/**
 * @member {module:model/UserProfileMetadataSettings} userProfileMetadataSettings
 */
CustomMetadata.prototype['userProfileMetadataSettings'] = undefined;

/**
 * @member {module:model/AzureAdMetadataSettings} azureAdMetadataSettings
 */
CustomMetadata.prototype['azureAdMetadataSettings'] = undefined;

/**
 * @member {module:model/ChoiceMetadataSettings} choiceMetadataSettings
 */
CustomMetadata.prototype['choiceMetadataSettings'] = undefined;

/**
 * @member {module:model/LinkMetadataSettings} linkMetadataSettings
 */
CustomMetadata.prototype['linkMetadataSettings'] = undefined;

/**
 * @member {module:model/SingleLineOrMultipleLineMetadataSettings} singleLineOrMultipleLineMetadataSettings
 */
CustomMetadata.prototype['singleLineOrMultipleLineMetadataSettings'] = undefined;






export default CustomMetadata;

