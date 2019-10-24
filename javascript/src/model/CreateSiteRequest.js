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
import GeoLocationBase from './GeoLocationBase';
import HubSiteSettings from './HubSiteSettings';
import RequestGroupWithPermissions from './RequestGroupWithPermissions';
import RequestMetadata from './RequestMetadata';
import RequestStatus from './RequestStatus';
import RequestUserWithPermissions from './RequestUserWithPermissions';
import ServiceType from './ServiceType';
import SiteLeasePeriodRequestSettings from './SiteLeasePeriodRequestSettings';
import SiteUrl from './SiteUrl';
import YammerGroupRequestSettings from './YammerGroupRequestSettings';

/**
 * The CreateSiteRequest model module.
 * @module model/CreateSiteRequest
 * @version 1.0
 */
class CreateSiteRequest {
    /**
     * Constructs a new <code>CreateSiteRequest</code>.
     * @alias module:model/CreateSiteRequest
     */
    constructor() { 
        
        CreateSiteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSiteRequest} obj Optional instance to populate.
     * @return {module:model/CreateSiteRequest} The populated <code>CreateSiteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSiteRequest();

            if (data.hasOwnProperty('siteTitle')) {
                obj['siteTitle'] = ApiClient.convertToType(data['siteTitle'], 'String');
            }
            if (data.hasOwnProperty('siteDescription')) {
                obj['siteDescription'] = ApiClient.convertToType(data['siteDescription'], 'String');
            }
            if (data.hasOwnProperty('siteUrl')) {
                obj['siteUrl'] = SiteUrl.constructFromObject(data['siteUrl']);
            }
            if (data.hasOwnProperty('policyId')) {
                obj['policyId'] = ApiClient.convertToType(data['policyId'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'Number');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'Number');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('deploymentManagerPlanName')) {
                obj['deploymentManagerPlanName'] = ApiClient.convertToType(data['deploymentManagerPlanName'], 'String');
            }
            if (data.hasOwnProperty('primaryAdmin')) {
                obj['primaryAdmin'] = ApiUser.constructFromObject(data['primaryAdmin']);
            }
            if (data.hasOwnProperty('additionalAdmins')) {
                obj['additionalAdmins'] = ApiClient.convertToType(data['additionalAdmins'], [ApiUser]);
            }
            if (data.hasOwnProperty('primaryContact')) {
                obj['primaryContact'] = ApiUser.constructFromObject(data['primaryContact']);
            }
            if (data.hasOwnProperty('secondaryContact')) {
                obj['secondaryContact'] = ApiUser.constructFromObject(data['secondaryContact']);
            }
            if (data.hasOwnProperty('isShownClassificationAndDesing')) {
                obj['isShownClassificationAndDesing'] = ApiClient.convertToType(data['isShownClassificationAndDesing'], 'Boolean');
            }
            if (data.hasOwnProperty('designType')) {
                obj['designType'] = ApiClient.convertToType(data['designType'], 'String');
            }
            if (data.hasOwnProperty('classification')) {
                obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
            }
            if (data.hasOwnProperty('isShownHubsiteSettings')) {
                obj['isShownHubsiteSettings'] = ApiClient.convertToType(data['isShownHubsiteSettings'], 'Boolean');
            }
            if (data.hasOwnProperty('hubSiteSettings')) {
                obj['hubSiteSettings'] = HubSiteSettings.constructFromObject(data['hubSiteSettings']);
            }
            if (data.hasOwnProperty('userPermissions')) {
                obj['userPermissions'] = ApiClient.convertToType(data['userPermissions'], [RequestUserWithPermissions]);
            }
            if (data.hasOwnProperty('groupPermissions')) {
                obj['groupPermissions'] = ApiClient.convertToType(data['groupPermissions'], [RequestGroupWithPermissions]);
            }
            if (data.hasOwnProperty('yammerGroupSettings')) {
                obj['yammerGroupSettings'] = YammerGroupRequestSettings.constructFromObject(data['yammerGroupSettings']);
            }
            if (data.hasOwnProperty('leasePeriodSettings')) {
                obj['leasePeriodSettings'] = SiteLeasePeriodRequestSettings.constructFromObject(data['leasePeriodSettings']);
            }
            if (data.hasOwnProperty('multiGeoLocation')) {
                obj['multiGeoLocation'] = GeoLocationBase.constructFromObject(data['multiGeoLocation']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('notesToApprovers')) {
                obj['notesToApprovers'] = ApiClient.convertToType(data['notesToApprovers'], 'String');
            }
            if (data.hasOwnProperty('questionnaireId')) {
                obj['questionnaireId'] = ApiClient.convertToType(data['questionnaireId'], 'String');
            }
            if (data.hasOwnProperty('metadatas')) {
                obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [RequestMetadata]);
            }
            if (data.hasOwnProperty('ticketNumber')) {
                obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ServiceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('typeDescription')) {
                obj['typeDescription'] = ApiClient.convertToType(data['typeDescription'], 'String');
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = RequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('progressStatus')) {
                obj['progressStatus'] = ApiClient.convertToType(data['progressStatus'], 'Number');
            }
            if (data.hasOwnProperty('progressStatusDescription')) {
                obj['progressStatusDescription'] = ApiClient.convertToType(data['progressStatusDescription'], 'String');
            }
            if (data.hasOwnProperty('submittedTime')) {
                obj['submittedTime'] = ApiClient.convertToType(data['submittedTime'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('assignTo')) {
                obj['assignTo'] = ApiClient.convertToType(data['assignTo'], 'String');
            }
            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} siteTitle
 */
CreateSiteRequest.prototype['siteTitle'] = undefined;

/**
 * @member {String} siteDescription
 */
CreateSiteRequest.prototype['siteDescription'] = undefined;

/**
 * @member {module:model/SiteUrl} siteUrl
 */
CreateSiteRequest.prototype['siteUrl'] = undefined;

/**
 * @member {String} policyId
 */
CreateSiteRequest.prototype['policyId'] = undefined;

/**
 * @member {Number} timeZone
 */
CreateSiteRequest.prototype['timeZone'] = undefined;

/**
 * @member {Number} language
 */
CreateSiteRequest.prototype['language'] = undefined;

/**
 * @member {String} template
 */
CreateSiteRequest.prototype['template'] = undefined;

/**
 * @member {String} deploymentManagerPlanName
 */
CreateSiteRequest.prototype['deploymentManagerPlanName'] = undefined;

/**
 * @member {module:model/ApiUser} primaryAdmin
 */
CreateSiteRequest.prototype['primaryAdmin'] = undefined;

/**
 * @member {Array.<module:model/ApiUser>} additionalAdmins
 */
CreateSiteRequest.prototype['additionalAdmins'] = undefined;

/**
 * @member {module:model/ApiUser} primaryContact
 */
CreateSiteRequest.prototype['primaryContact'] = undefined;

/**
 * @member {module:model/ApiUser} secondaryContact
 */
CreateSiteRequest.prototype['secondaryContact'] = undefined;

/**
 * @member {Boolean} isShownClassificationAndDesing
 */
CreateSiteRequest.prototype['isShownClassificationAndDesing'] = undefined;

/**
 * @member {String} designType
 */
CreateSiteRequest.prototype['designType'] = undefined;

/**
 * @member {String} classification
 */
CreateSiteRequest.prototype['classification'] = undefined;

/**
 * @member {Boolean} isShownHubsiteSettings
 */
CreateSiteRequest.prototype['isShownHubsiteSettings'] = undefined;

/**
 * @member {module:model/HubSiteSettings} hubSiteSettings
 */
CreateSiteRequest.prototype['hubSiteSettings'] = undefined;

/**
 * @member {Array.<module:model/RequestUserWithPermissions>} userPermissions
 */
CreateSiteRequest.prototype['userPermissions'] = undefined;

/**
 * @member {Array.<module:model/RequestGroupWithPermissions>} groupPermissions
 */
CreateSiteRequest.prototype['groupPermissions'] = undefined;

/**
 * @member {module:model/YammerGroupRequestSettings} yammerGroupSettings
 */
CreateSiteRequest.prototype['yammerGroupSettings'] = undefined;

/**
 * @member {module:model/SiteLeasePeriodRequestSettings} leasePeriodSettings
 */
CreateSiteRequest.prototype['leasePeriodSettings'] = undefined;

/**
 * @member {module:model/GeoLocationBase} multiGeoLocation
 */
CreateSiteRequest.prototype['multiGeoLocation'] = undefined;

/**
 * @member {String} id
 */
CreateSiteRequest.prototype['id'] = undefined;

/**
 * @member {String} serviceId
 */
CreateSiteRequest.prototype['serviceId'] = undefined;

/**
 * @member {String} department
 */
CreateSiteRequest.prototype['department'] = undefined;

/**
 * @member {String} summary
 */
CreateSiteRequest.prototype['summary'] = undefined;

/**
 * @member {String} notesToApprovers
 */
CreateSiteRequest.prototype['notesToApprovers'] = undefined;

/**
 * @member {String} questionnaireId
 */
CreateSiteRequest.prototype['questionnaireId'] = undefined;

/**
 * @member {Array.<module:model/RequestMetadata>} metadatas
 */
CreateSiteRequest.prototype['metadatas'] = undefined;

/**
 * @member {Number} ticketNumber
 */
CreateSiteRequest.prototype['ticketNumber'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
CreateSiteRequest.prototype['type'] = undefined;

/**
 * @member {String} typeDescription
 */
CreateSiteRequest.prototype['typeDescription'] = undefined;

/**
 * @member {String} requester
 */
CreateSiteRequest.prototype['requester'] = undefined;

/**
 * @member {module:model/RequestStatus} status
 */
CreateSiteRequest.prototype['status'] = undefined;

/**
 * @member {Number} progressStatus
 */
CreateSiteRequest.prototype['progressStatus'] = undefined;

/**
 * @member {String} progressStatusDescription
 */
CreateSiteRequest.prototype['progressStatusDescription'] = undefined;

/**
 * @member {Date} submittedTime
 */
CreateSiteRequest.prototype['submittedTime'] = undefined;

/**
 * @member {Date} lastUpdated
 */
CreateSiteRequest.prototype['lastUpdated'] = undefined;

/**
 * @member {Date} createdTime
 */
CreateSiteRequest.prototype['createdTime'] = undefined;

/**
 * @member {String} assignTo
 */
CreateSiteRequest.prototype['assignTo'] = undefined;

/**
 * @member {String} fullPath
 */
CreateSiteRequest.prototype['fullPath'] = undefined;






export default CreateSiteRequest;

