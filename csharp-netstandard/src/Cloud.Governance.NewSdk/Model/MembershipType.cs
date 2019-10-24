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
    /// Owner&#x3D;0, Member&#x3D;1
    /// </summary>
    /// <value>Owner&#x3D;0, Member&#x3D;1</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum MembershipType
    {
        /// <summary>
        /// Enum Owner for value: Owner
        /// </summary>
        [EnumMember(Value = "Owner")]
        Owner = 1,

        /// <summary>
        /// Enum Member for value: Member
        /// </summary>
        [EnumMember(Value = "Member")]
        Member = 2

    }

}
