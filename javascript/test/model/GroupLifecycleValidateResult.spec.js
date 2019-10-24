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
    instance = new CloudGovernanceApi.GroupLifecycleValidateResult();
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

  describe('GroupLifecycleValidateResult', function() {
    it('should create an instance of GroupLifecycleValidateResult', function() {
      // uncomment below and update the code to test GroupLifecycleValidateResult
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be.a(CloudGovernanceApi.GroupLifecycleValidateResult);
    });

    it('should have the property extendSetting (base name: "extendSetting")', function() {
      // uncomment below and update the code to test the property extendSetting
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property changePolicySetting (base name: "changePolicySetting")', function() {
      // uncomment below and update the code to test the property changePolicySetting
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property changeQuotaSetting (base name: "changeQuotaSetting")', function() {
      // uncomment below and update the code to test the property changeQuotaSetting
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property isValid (base name: "isValid")', function() {
      // uncomment below and update the code to test the property isValid
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new CloudGovernanceApi.GroupLifecycleValidateResult();
      //expect(instance).to.be();
    });

  });

}));
