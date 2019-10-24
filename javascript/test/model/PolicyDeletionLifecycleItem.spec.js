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
    instance = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
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

  describe('PolicyDeletionLifecycleItem', function() {
    it('should create an instance of PolicyDeletionLifecycleItem', function() {
      // uncomment below and update the code to test PolicyDeletionLifecycleItem
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be.a(CloudGovernanceApi.PolicyDeletionLifecycleItem);
    });

    it('should have the property isPermanentlyDelete (base name: "isPermanentlyDelete")', function() {
      // uncomment below and update the code to test the property isPermanentlyDelete
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property isNotifyEnabled (base name: "isNotifyEnabled")', function() {
      // uncomment below and update the code to test the property isNotifyEnabled
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property notifyUser (base name: "notifyUser")', function() {
      // uncomment below and update the code to test the property notifyUser
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property notifyTemplate (base name: "notifyTemplate")', function() {
      // uncomment below and update the code to test the property notifyTemplate
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property isDefaultProcess (base name: "isDefaultProcess")', function() {
      // uncomment below and update the code to test the property isDefaultProcess
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

    it('should have the property processId (base name: "processId")', function() {
      // uncomment below and update the code to test the property processId
      //var instane = new CloudGovernanceApi.PolicyDeletionLifecycleItem();
      //expect(instance).to.be();
    });

  });

}));
