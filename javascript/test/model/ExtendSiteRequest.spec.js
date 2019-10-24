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
    instance = new CloudGovernanceApi.ExtendSiteRequest();
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

  describe('ExtendSiteRequest', function() {
    it('should create an instance of ExtendSiteRequest', function() {
      // uncomment below and update the code to test ExtendSiteRequest
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be.a(CloudGovernanceApi.ExtendSiteRequest);
    });

    it('should have the property extendDuration (base name: "extendDuration")', function() {
      // uncomment below and update the code to test the property extendDuration
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property extendDurationType (base name: "extendDurationType")', function() {
      // uncomment below and update the code to test the property extendDurationType
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property actionDescription (base name: "actionDescription")', function() {
      // uncomment below and update the code to test the property actionDescription
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property siteUrl (base name: "siteUrl")', function() {
      // uncomment below and update the code to test the property siteUrl
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "serviceId")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property notesToApprovers (base name: "notesToApprovers")', function() {
      // uncomment below and update the code to test the property notesToApprovers
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property questionnaireId (base name: "questionnaireId")', function() {
      // uncomment below and update the code to test the property questionnaireId
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property ticketNumber (base name: "ticketNumber")', function() {
      // uncomment below and update the code to test the property ticketNumber
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property typeDescription (base name: "typeDescription")', function() {
      // uncomment below and update the code to test the property typeDescription
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property requester (base name: "requester")', function() {
      // uncomment below and update the code to test the property requester
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property progressStatus (base name: "progressStatus")', function() {
      // uncomment below and update the code to test the property progressStatus
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property progressStatusDescription (base name: "progressStatusDescription")', function() {
      // uncomment below and update the code to test the property progressStatusDescription
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property submittedTime (base name: "submittedTime")', function() {
      // uncomment below and update the code to test the property submittedTime
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "lastUpdated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property assignTo (base name: "assignTo")', function() {
      // uncomment below and update the code to test the property assignTo
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

    it('should have the property fullPath (base name: "fullPath")', function() {
      // uncomment below and update the code to test the property fullPath
      //var instane = new CloudGovernanceApi.ExtendSiteRequest();
      //expect(instance).to.be();
    });

  });

}));
