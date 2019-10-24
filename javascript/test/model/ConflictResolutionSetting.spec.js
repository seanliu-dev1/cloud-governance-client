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
    instance = new CloudGovernanceApi.ConflictResolutionSetting();
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

  describe('ConflictResolutionSetting', function() {
    it('should create an instance of ConflictResolutionSetting', function() {
      // uncomment below and update the code to test ConflictResolutionSetting
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be.a(CloudGovernanceApi.ConflictResolutionSetting);
    });

    it('should have the property containerConflictSolution (base name: "containerConflictSolution")', function() {
      // uncomment below and update the code to test the property containerConflictSolution
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be();
    });

    it('should have the property isCheckLowerObject (base name: "isCheckLowerObject")', function() {
      // uncomment below and update the code to test the property isCheckLowerObject
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be();
    });

    it('should have the property isEnableContentConflictResolution (base name: "isEnableContentConflictResolution")', function() {
      // uncomment below and update the code to test the property isEnableContentConflictResolution
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be();
    });

    it('should have the property contentConflictSolution (base name: "contentConflictSolution")', function() {
      // uncomment below and update the code to test the property contentConflictSolution
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be();
    });

    it('should have the property appConflictSolution (base name: "appConflictSolution")', function() {
      // uncomment below and update the code to test the property appConflictSolution
      //var instane = new CloudGovernanceApi.ConflictResolutionSetting();
      //expect(instance).to.be();
    });

  });

}));
