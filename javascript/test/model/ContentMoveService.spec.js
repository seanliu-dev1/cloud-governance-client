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
    instance = new CloudGovernanceApi.ContentMoveService();
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

  describe('ContentMoveService', function() {
    it('should create an instance of ContentMoveService', function() {
      // uncomment below and update the code to test ContentMoveService
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be.a(CloudGovernanceApi.ContentMoveService);
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property copySettings (base name: "copySettings")', function() {
      // uncomment below and update the code to test the property copySettings
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property moveSettings (base name: "moveSettings")', function() {
      // uncomment below and update the code to test the property moveSettings
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property commonSettings (base name: "commonSettings")', function() {
      // uncomment below and update the code to test the property commonSettings
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property conflictResolutionAssignBy (base name: "conflictResolutionAssignBy")', function() {
      // uncomment below and update the code to test the property conflictResolutionAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property deleteTypeAssignBy (base name: "deleteTypeAssignBy")', function() {
      // uncomment below and update the code to test the property deleteTypeAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property deleteCheckedFilesAssignBy (base name: "deleteCheckedFilesAssignBy")', function() {
      // uncomment below and update the code to test the property deleteCheckedFilesAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property filterPolicyAssignBy (base name: "filterPolicyAssignBy")', function() {
      // uncomment below and update the code to test the property filterPolicyAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property methodAssignBy (base name: "methodAssignBy")', function() {
      // uncomment below and update the code to test the property methodAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property actionAssignBy (base name: "actionAssignBy")', function() {
      // uncomment below and update the code to test the property actionAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property copySettingAssignBy (base name: "copySettingAssignBy")', function() {
      // uncomment below and update the code to test the property copySettingAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property moveSettingAssignBy (base name: "moveSettingAssignBy")', function() {
      // uncomment below and update the code to test the property moveSettingAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property versionsAssignBy (base name: "versionsAssignBy")', function() {
      // uncomment below and update the code to test the property versionsAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property workflowAssignBy (base name: "workflowAssignBy")', function() {
      // uncomment below and update the code to test the property workflowAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property informationRightsManagementAssignBy (base name: "informationRightsManagementAssignBy")', function() {
      // uncomment below and update the code to test the property informationRightsManagementAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property nullColumnValueAssignBy (base name: "nullColumnValueAssignBy")', function() {
      // uncomment below and update the code to test the property nullColumnValueAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property modifiedByAndModifiedTimeAssignBy (base name: "modifiedByAndModifiedTimeAssignBy")', function() {
      // uncomment below and update the code to test the property modifiedByAndModifiedTimeAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property mappingSettingAssignBy (base name: "mappingSettingAssignBy")', function() {
      // uncomment below and update the code to test the property mappingSettingAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property backupEnvironmentAssignBy (base name: "backupEnvironmentAssignBy")', function() {
      // uncomment below and update the code to test the property backupEnvironmentAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property departmentAssignBy (base name: "departmentAssignBy")', function() {
      // uncomment below and update the code to test the property departmentAssignBy
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property hideRequestSummary (base name: "hideRequestSummary")', function() {
      // uncomment below and update the code to test the property hideRequestSummary
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property loadDepartmentFromUps (base name: "loadDepartmentFromUps")', function() {
      // uncomment below and update the code to test the property loadDepartmentFromUps
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property departments (base name: "departments")', function() {
      // uncomment below and update the code to test the property departments
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property serviceContact (base name: "serviceContact")', function() {
      // uncomment below and update the code to test the property serviceContact
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property serviceAdminContact (base name: "serviceAdminContact")', function() {
      // uncomment below and update the code to test the property serviceAdminContact
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property approversContainManagerRole (base name: "approversContainManagerRole")', function() {
      // uncomment below and update the code to test the property approversContainManagerRole
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property showServiceInCatalog (base name: "showServiceInCatalog")', function() {
      // uncomment below and update the code to test the property showServiceInCatalog
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property customActivity (base name: "customActivity")', function() {
      // uncomment below and update the code to test the property customActivity
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property approvalProcessId (base name: "approvalProcessId")', function() {
      // uncomment below and update the code to test the property approvalProcessId
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new CloudGovernanceApi.ContentMoveService();
      //expect(instance).to.be();
    });

  });

}));
