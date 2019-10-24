/* 
 * Cloud Governance Api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using Cloud.Governance.NewSdk.Client;
using Cloud.Governance.NewSdk.Api;
using Cloud.Governance.NewSdk.Model;

namespace Cloud.Governance.NewSdk.Test
{
    /// <summary>
    ///  Class for testing MetadataApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class MetadataApiTests : IDisposable
    {
        private MetadataApi instance;

        public MetadataApiTests()
        {
            instance = new MetadataApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of MetadataApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' MetadataApi
            //Assert.IsType(typeof(MetadataApi), instance, "instance is a MetadataApi");
        }

        
        /// <summary>
        /// Test GetMetadata
        /// </summary>
        [Fact]
        public void GetMetadataTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string filter = null;
            //string orderby = null;
            //string search = null;
            //int? top = null;
            //int? skip = null;
            //var response = instance.GetMetadata(filter, orderby, search, top, skip);
            //Assert.IsType<List<CustomMetadata>> (response, "response is List<CustomMetadata>");
        }
        
        /// <summary>
        /// Test GetMetadataById
        /// </summary>
        [Fact]
        public void GetMetadataByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid id = null;
            //var response = instance.GetMetadataById(id);
            //Assert.IsType<CustomMetadata> (response, "response is CustomMetadata");
        }
        
    }

}
