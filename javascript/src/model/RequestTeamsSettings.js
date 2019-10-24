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
import GiphyRatingType from './GiphyRatingType';

/**
 * The RequestTeamsSettings model module.
 * @module model/RequestTeamsSettings
 * @version 1.0
 */
class RequestTeamsSettings {
    /**
     * Constructs a new <code>RequestTeamsSettings</code>.
     * @alias module:model/RequestTeamsSettings
     */
    constructor() { 
        
        RequestTeamsSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestTeamsSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestTeamsSettings} obj Optional instance to populate.
     * @return {module:model/RequestTeamsSettings} The populated <code>RequestTeamsSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestTeamsSettings();

            if (data.hasOwnProperty('allowMembersCreateUpdateChannels')) {
                obj['allowMembersCreateUpdateChannels'] = ApiClient.convertToType(data['allowMembersCreateUpdateChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMemberDeleteRestoreChannels')) {
                obj['allowMemberDeleteRestoreChannels'] = ApiClient.convertToType(data['allowMemberDeleteRestoreChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersAddRemoveApps')) {
                obj['allowMembersAddRemoveApps'] = ApiClient.convertToType(data['allowMembersAddRemoveApps'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersCreateUpdateRemoveTabs')) {
                obj['allowMembersCreateUpdateRemoveTabs'] = ApiClient.convertToType(data['allowMembersCreateUpdateRemoveTabs'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersCreateUpdateRemoveConnections')) {
                obj['allowMembersCreateUpdateRemoveConnections'] = ApiClient.convertToType(data['allowMembersCreateUpdateRemoveConnections'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersDeleteMessages')) {
                obj['allowMembersDeleteMessages'] = ApiClient.convertToType(data['allowMembersDeleteMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersEditMessages')) {
                obj['allowMembersEditMessages'] = ApiClient.convertToType(data['allowMembersEditMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowGuestsCreateUpdateChannels')) {
                obj['allowGuestsCreateUpdateChannels'] = ApiClient.convertToType(data['allowGuestsCreateUpdateChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowGuestsDeleteChannels')) {
                obj['allowGuestsDeleteChannels'] = ApiClient.convertToType(data['allowGuestsDeleteChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMentionsTeam')) {
                obj['allowMentionsTeam'] = ApiClient.convertToType(data['allowMentionsTeam'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMentionsChannel')) {
                obj['allowMentionsChannel'] = ApiClient.convertToType(data['allowMentionsChannel'], 'Boolean');
            }
            if (data.hasOwnProperty('enableGiphy')) {
                obj['enableGiphy'] = ApiClient.convertToType(data['enableGiphy'], 'Boolean');
            }
            if (data.hasOwnProperty('enableStickersAndMemes')) {
                obj['enableStickersAndMemes'] = ApiClient.convertToType(data['enableStickersAndMemes'], 'Boolean');
            }
            if (data.hasOwnProperty('enableCustomMemes')) {
                obj['enableCustomMemes'] = ApiClient.convertToType(data['enableCustomMemes'], 'Boolean');
            }
            if (data.hasOwnProperty('giphyRatingType')) {
                obj['giphyRatingType'] = GiphyRatingType.constructFromObject(data['giphyRatingType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} allowMembersCreateUpdateChannels
 */
RequestTeamsSettings.prototype['allowMembersCreateUpdateChannels'] = undefined;

/**
 * @member {Boolean} allowMemberDeleteRestoreChannels
 */
RequestTeamsSettings.prototype['allowMemberDeleteRestoreChannels'] = undefined;

/**
 * @member {Boolean} allowMembersAddRemoveApps
 */
RequestTeamsSettings.prototype['allowMembersAddRemoveApps'] = undefined;

/**
 * @member {Boolean} allowMembersCreateUpdateRemoveTabs
 */
RequestTeamsSettings.prototype['allowMembersCreateUpdateRemoveTabs'] = undefined;

/**
 * @member {Boolean} allowMembersCreateUpdateRemoveConnections
 */
RequestTeamsSettings.prototype['allowMembersCreateUpdateRemoveConnections'] = undefined;

/**
 * @member {Boolean} allowMembersDeleteMessages
 */
RequestTeamsSettings.prototype['allowMembersDeleteMessages'] = undefined;

/**
 * @member {Boolean} allowMembersEditMessages
 */
RequestTeamsSettings.prototype['allowMembersEditMessages'] = undefined;

/**
 * @member {Boolean} allowGuestsCreateUpdateChannels
 */
RequestTeamsSettings.prototype['allowGuestsCreateUpdateChannels'] = undefined;

/**
 * @member {Boolean} allowGuestsDeleteChannels
 */
RequestTeamsSettings.prototype['allowGuestsDeleteChannels'] = undefined;

/**
 * @member {Boolean} allowMentionsTeam
 */
RequestTeamsSettings.prototype['allowMentionsTeam'] = undefined;

/**
 * @member {Boolean} allowMentionsChannel
 */
RequestTeamsSettings.prototype['allowMentionsChannel'] = undefined;

/**
 * @member {Boolean} enableGiphy
 */
RequestTeamsSettings.prototype['enableGiphy'] = undefined;

/**
 * @member {Boolean} enableStickersAndMemes
 */
RequestTeamsSettings.prototype['enableStickersAndMemes'] = undefined;

/**
 * @member {Boolean} enableCustomMemes
 */
RequestTeamsSettings.prototype['enableCustomMemes'] = undefined;

/**
 * @member {module:model/GiphyRatingType} giphyRatingType
 */
RequestTeamsSettings.prototype['giphyRatingType'] = undefined;






export default RequestTeamsSettings;

