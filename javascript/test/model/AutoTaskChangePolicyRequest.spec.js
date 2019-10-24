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
    instance = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
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

  describe('AutoTaskChangePolicyRequest', function() {
    it('should create an instance of AutoTaskChangePolicyRequest', function() {
      // uncomment below and update the code to test AutoTaskChangePolicyRequest
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be.a(CloudGovernanceApi.AutoTaskChangePolicyRequest);
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be();
    });

    it('should have the property taskId (base name: "taskId")', function() {
      // uncomment below and update the code to test the property taskId
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new CloudGovernanceApi.AutoTaskChangePolicyRequest();
      //expect(instance).to.be();
    });

  });

}));
