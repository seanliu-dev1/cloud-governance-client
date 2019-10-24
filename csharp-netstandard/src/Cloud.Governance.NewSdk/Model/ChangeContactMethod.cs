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
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Cloud.Governance.NewSdk.Client.OpenAPIDateConverter;

namespace Cloud.Governance.NewSdk.Model
{
    /// <summary>
    /// ChangeByUrl&#x3D;0, ChangeByUser&#x3D;1
    /// </summary>
    /// <value>ChangeByUrl&#x3D;0, ChangeByUser&#x3D;1</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ChangeContactMethod
    {
        /// <summary>
        /// Enum ChangeByUrl for value: ChangeByUrl
        /// </summary>
        [EnumMember(Value = "ChangeByUrl")]
        ChangeByUrl = 1,

        /// <summary>
        /// Enum ChangeByUser for value: ChangeByUser
        /// </summary>
        [EnumMember(Value = "ChangeByUser")]
        ChangeByUser = 2

    }

}
