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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudGovernanceApi);
  }
}(this, function(expect, CloudGovernanceApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudGovernanceApi.ChangeGroupSettingService();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChangeGroupSettingService', function() {
    it('should create an instance of ChangeGroupSettingService', function() {
      // uncomment below and update the code to test ChangeGroupSettingService
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be.a(CloudGovernanceApi.ChangeGroupSettingService);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property groupRestriction (base name: "groupRestriction")', function() {
      // uncomment below and update the code to test the property groupRestriction
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeName (base name: "enableChangeName")', function() {
      // uncomment below and update the code to test the property enableChangeName
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeDescription (base name: "enableChangeDescription")', function() {
      // uncomment below and update the code to test the property enableChangeDescription
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeMemberSubscription (base name: "enableChangeMemberSubscription")', function() {
      // uncomment below and update the code to test the property enableChangeMemberSubscription
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeOutsideSenders (base name: "enableChangeOutsideSenders")', function() {
      // uncomment below and update the code to test the property enableChangeOutsideSenders
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangePrimaryContact (base name: "enableChangePrimaryContact")', function() {
      // uncomment below and update the code to test the property enableChangePrimaryContact
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeSecondaryContact (base name: "enableChangeSecondaryContact")', function() {
      // uncomment below and update the code to test the property enableChangeSecondaryContact
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableAddOwners (base name: "enableAddOwners")', function() {
      // uncomment below and update the code to test the property enableAddOwners
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property addOwnerRestriction (base name: "addOwnerRestriction")', function() {
      // uncomment below and update the code to test the property addOwnerRestriction
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableRemoveOwners (base name: "enableRemoveOwners")', function() {
      // uncomment below and update the code to test the property enableRemoveOwners
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableAddMembers (base name: "enableAddMembers")', function() {
      // uncomment below and update the code to test the property enableAddMembers
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property addMemberRestriction (base name: "addMemberRestriction")', function() {
      // uncomment below and update the code to test the property addMemberRestriction
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableRemoveMembers (base name: "enableRemoveMembers")', function() {
      // uncomment below and update the code to test the property enableRemoveMembers
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeDynamicMembershipRules (base name: "enableChangeDynamicMembershipRules")', function() {
      // uncomment below and update the code to test the property enableChangeDynamicMembershipRules
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeTeamCollaboration (base name: "enableChangeTeamCollaboration")', function() {
      // uncomment below and update the code to test the property enableChangeTeamCollaboration
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeHubSite (base name: "enableChangeHubSite")', function() {
      // uncomment below and update the code to test the property enableChangeHubSite
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeClassification (base name: "enableChangeClassification")', function() {
      // uncomment below and update the code to test the property enableChangeClassification
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property classificationList (base name: "classificationList")', function() {
      // uncomment below and update the code to test the property classificationList
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableChangeMetadata (base name: "enableChangeMetadata")', function() {
      // uncomment below and update the code to test the property enableChangeMetadata
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property enableAddOrDeleteMetadata (base name: "enableAddOrDeleteMetadata")', function() {
      // uncomment below and update the code to test the property enableAddOrDeleteMetadata
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property metadataList (base name: "metadataList")', function() {
      // uncomment below and update the code to test the property metadataList
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property departmentAssignBy (base name: "departmentAssignBy")', function() {
      // uncomment below and update the code to test the property departmentAssignBy
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property hideRequestSummary (base name: "hideRequestSummary")', function() {
      // uncomment below and update the code to test the property hideRequestSummary
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property loadDepartmentFromUps (base name: "loadDepartmentFromUps")', function() {
      // uncomment below and update the code to test the property loadDepartmentFromUps
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property departments (base name: "departments")', function() {
      // uncomment below and update the code to test the property departments
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property serviceContact (base name: "serviceContact")', function() {
      // uncomment below and update the code to test the property serviceContact
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property serviceAdminContact (base name: "serviceAdminContact")', function() {
      // uncomment below and update the code to test the property serviceAdminContact
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property approversContainManagerRole (base name: "approversContainManagerRole")', function() {
      // uncomment below and update the code to test the property approversContainManagerRole
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property showServiceInCatalog (base name: "showServiceInCatalog")', function() {
      // uncomment below and update the code to test the property showServiceInCatalog
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property customActivity (base name: "customActivity")', function() {
      // uncomment below and update the code to test the property customActivity
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property approvalProcessId (base name: "approvalProcessId")', function() {
      // uncomment below and update the code to test the property approvalProcessId
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new CloudGovernanceApi.ChangeGroupSettingService();
      //expect(instance).to.be();
    });

  });

}));
