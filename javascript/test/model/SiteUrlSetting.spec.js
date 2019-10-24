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
    instance = new CloudGovernanceApi.SiteUrlSetting();
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

  describe('SiteUrlSetting', function() {
    it('should create an instance of SiteUrlSetting', function() {
      // uncomment below and update the code to test SiteUrlSetting
      //var instane = new CloudGovernanceApi.SiteUrlSetting();
      //expect(instance).to.be.a(CloudGovernanceApi.SiteUrlSetting);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.SiteUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property manuallyInputSetting (base name: "manuallyInputSetting")', function() {
      // uncomment below and update the code to test the property manuallyInputSetting
      //var instane = new CloudGovernanceApi.SiteUrlSetting();
      //expect(instance).to.be();
    });

    it('should have the property autoGenerateUrlSetting (base name: "autoGenerateUrlSetting")', function() {
      // uncomment below and update the code to test the property autoGenerateUrlSetting
      //var instane = new CloudGovernanceApi.SiteUrlSetting();
      //expect(instance).to.be();
    });

  });

}));
