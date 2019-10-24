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
    instance = new CloudGovernanceApi.WorkspaceList();
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

  describe('WorkspaceList', function() {
    it('should create an instance of WorkspaceList', function() {
      // uncomment below and update the code to test WorkspaceList
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be.a(CloudGovernanceApi.WorkspaceList);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property siteUrl (base name: "siteUrl")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property groupEmail (base name: "groupEmail")', function() {
      // uncomment below and update the code to test the property groupEmail
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property typeDescription (base name: "typeDescription")', function() {
      // uncomment below and update the code to test the property typeDescription
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property primaryContact (base name: "primaryContact")', function() {
      // uncomment below and update the code to test the property primaryContact
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property primaryContactEmail (base name: "primaryContactEmail")', function() {
      // uncomment below and update the code to test the property primaryContactEmail
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property phaseDescription (base name: "phaseDescription")', function() {
      // uncomment below and update the code to test the property phaseDescription
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property isCurrentRenewer (base name: "isCurrentRenewer")', function() {
      // uncomment below and update the code to test the property isCurrentRenewer
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property autoImportProfileId (base name: "autoImportProfileId")', function() {
      // uncomment below and update the code to test the property autoImportProfileId
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

    it('should have the property pendingAction (base name: "pendingAction")', function() {
      // uncomment below and update the code to test the property pendingAction
      //var instane = new CloudGovernanceApi.WorkspaceList();
      //expect(instance).to.be();
    });

  });

}));
