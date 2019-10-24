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
    instance = new CloudGovernanceApi.QuestionnairesApi();
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

  describe('QuestionnairesApi', function() {
    describe('getQuestionnaireById', function() {
      it('should call getQuestionnaireById successfully', function(done) {
        //uncomment below and update the code to test getQuestionnaireById
        //instance.getQuestionnaireById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitQuestionnaire', function() {
      it('should call submitQuestionnaire successfully', function(done) {
        //uncomment below and update the code to test submitQuestionnaire
        //instance.submitQuestionnaire(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitQuestionnaireInWorkspace', function() {
      it('should call submitQuestionnaireInWorkspace successfully', function(done) {
        //uncomment below and update the code to test submitQuestionnaireInWorkspace
        //instance.submitQuestionnaireInWorkspace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
