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
import AssignBy from './AssignBy';
import CommonStatus from './CommonStatus';
import CustomActivityInfo from './CustomActivityInfo';
import CustomMetadata from './CustomMetadata';
import GrantPermissionServiceDurationSettings from './GrantPermissionServiceDurationSettings';
import GrantPermissionServicePermissionSettings from './GrantPermissionServicePermissionSettings';
import ServiceType from './ServiceType';
import UserLevelControlSettings from './UserLevelControlSettings';
import WelcomeEmailSettings from './WelcomeEmailSettings';

/**
 * The GrantPermissionService model module.
 * @module model/GrantPermissionService
 * @version 1.0
 */
class GrantPermissionService {
    /**
     * Constructs a new <code>GrantPermissionService</code>.
     * @alias module:model/GrantPermissionService
     */
    constructor() { 
        
        GrantPermissionService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GrantPermissionService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantPermissionService} obj Optional instance to populate.
     * @return {module:model/GrantPermissionService} The populated <code>GrantPermissionService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantPermissionService();

            if (data.hasOwnProperty('allowBreakPermissionInheritance')) {
                obj['allowBreakPermissionInheritance'] = ApiClient.convertToType(data['allowBreakPermissionInheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('userLevelControlSettings')) {
                obj['userLevelControlSettings'] = UserLevelControlSettings.constructFromObject(data['userLevelControlSettings']);
            }
            if (data.hasOwnProperty('permissionDurationSettings')) {
                obj['permissionDurationSettings'] = GrantPermissionServiceDurationSettings.constructFromObject(data['permissionDurationSettings']);
            }
            if (data.hasOwnProperty('permissionSettings')) {
                obj['permissionSettings'] = GrantPermissionServicePermissionSettings.constructFromObject(data['permissionSettings']);
            }
            if (data.hasOwnProperty('defaultWelcomeEmailSettings')) {
                obj['defaultWelcomeEmailSettings'] = WelcomeEmailSettings.constructFromObject(data['defaultWelcomeEmailSettings']);
            }
            if (data.hasOwnProperty('welcomeEmailAssignBy')) {
                obj['welcomeEmailAssignBy'] = AssignBy.constructFromObject(data['welcomeEmailAssignBy']);
            }
            if (data.hasOwnProperty('departmentAssignBy')) {
                obj['departmentAssignBy'] = AssignBy.constructFromObject(data['departmentAssignBy']);
            }
            if (data.hasOwnProperty('metadatas')) {
                obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [CustomMetadata]);
            }
            if (data.hasOwnProperty('hideRequestSummary')) {
                obj['hideRequestSummary'] = ApiClient.convertToType(data['hideRequestSummary'], 'Boolean');
            }
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
                obj['type'] = ServiceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('loadDepartmentFromUps')) {
                obj['loadDepartmentFromUps'] = ApiClient.convertToType(data['loadDepartmentFromUps'], 'Boolean');
            }
            if (data.hasOwnProperty('departments')) {
                obj['departments'] = ApiClient.convertToType(data['departments'], ['String']);
            }
            if (data.hasOwnProperty('serviceContact')) {
                obj['serviceContact'] = ApiUser.constructFromObject(data['serviceContact']);
            }
            if (data.hasOwnProperty('serviceAdminContact')) {
                obj['serviceAdminContact'] = ApiUser.constructFromObject(data['serviceAdminContact']);
            }
            if (data.hasOwnProperty('approversContainManagerRole')) {
                obj['approversContainManagerRole'] = ApiClient.convertToType(data['approversContainManagerRole'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CommonStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('showServiceInCatalog')) {
                obj['showServiceInCatalog'] = ApiClient.convertToType(data['showServiceInCatalog'], 'Boolean');
            }
            if (data.hasOwnProperty('customActivity')) {
                obj['customActivity'] = CustomActivityInfo.constructFromObject(data['customActivity']);
            }
            if (data.hasOwnProperty('approvalProcessId')) {
                obj['approvalProcessId'] = ApiClient.convertToType(data['approvalProcessId'], 'String');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} allowBreakPermissionInheritance
 */
GrantPermissionService.prototype['allowBreakPermissionInheritance'] = undefined;

/**
 * @member {module:model/UserLevelControlSettings} userLevelControlSettings
 */
GrantPermissionService.prototype['userLevelControlSettings'] = undefined;

/**
 * @member {module:model/GrantPermissionServiceDurationSettings} permissionDurationSettings
 */
GrantPermissionService.prototype['permissionDurationSettings'] = undefined;

/**
 * @member {module:model/GrantPermissionServicePermissionSettings} permissionSettings
 */
GrantPermissionService.prototype['permissionSettings'] = undefined;

/**
 * @member {module:model/WelcomeEmailSettings} defaultWelcomeEmailSettings
 */
GrantPermissionService.prototype['defaultWelcomeEmailSettings'] = undefined;

/**
 * @member {module:model/AssignBy} welcomeEmailAssignBy
 */
GrantPermissionService.prototype['welcomeEmailAssignBy'] = undefined;

/**
 * @member {module:model/AssignBy} departmentAssignBy
 */
GrantPermissionService.prototype['departmentAssignBy'] = undefined;

/**
 * @member {Array.<module:model/CustomMetadata>} metadatas
 */
GrantPermissionService.prototype['metadatas'] = undefined;

/**
 * @member {Boolean} hideRequestSummary
 */
GrantPermissionService.prototype['hideRequestSummary'] = undefined;

/**
 * @member {String} id
 */
GrantPermissionService.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GrantPermissionService.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GrantPermissionService.prototype['description'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
GrantPermissionService.prototype['type'] = undefined;

/**
 * @member {String} department
 */
GrantPermissionService.prototype['department'] = undefined;

/**
 * @member {Boolean} loadDepartmentFromUps
 */
GrantPermissionService.prototype['loadDepartmentFromUps'] = undefined;

/**
 * @member {Array.<String>} departments
 */
GrantPermissionService.prototype['departments'] = undefined;

/**
 * @member {module:model/ApiUser} serviceContact
 */
GrantPermissionService.prototype['serviceContact'] = undefined;

/**
 * @member {module:model/ApiUser} serviceAdminContact
 */
GrantPermissionService.prototype['serviceAdminContact'] = undefined;

/**
 * @member {Boolean} approversContainManagerRole
 */
GrantPermissionService.prototype['approversContainManagerRole'] = undefined;

/**
 * @member {module:model/CommonStatus} status
 */
GrantPermissionService.prototype['status'] = undefined;

/**
 * @member {Boolean} showServiceInCatalog
 */
GrantPermissionService.prototype['showServiceInCatalog'] = undefined;

/**
 * @member {module:model/CustomActivityInfo} customActivity
 */
GrantPermissionService.prototype['customActivity'] = undefined;

/**
 * @member {String} approvalProcessId
 */
GrantPermissionService.prototype['approvalProcessId'] = undefined;

/**
 * @member {Number} languageId
 */
GrantPermissionService.prototype['languageId'] = undefined;

/**
 * @member {String} categoryId
 */
GrantPermissionService.prototype['categoryId'] = undefined;






export default GrantPermissionService;

