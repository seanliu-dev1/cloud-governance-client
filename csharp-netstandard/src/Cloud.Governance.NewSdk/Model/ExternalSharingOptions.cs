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
    /// Disabled&#x3D;0, VerifiedGuestUser&#x3D;1, Anyone&#x3D;2, &lt;/br&gt;ExistingGuestUser&#x3D;3
    /// </summary>
    /// <value>Disabled&#x3D;0, VerifiedGuestUser&#x3D;1, Anyone&#x3D;2, &lt;/br&gt;ExistingGuestUser&#x3D;3</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ExternalSharingOptions
    {
        /// <summary>
        /// Enum Disabled for value: Disabled
        /// </summary>
        [EnumMember(Value = "Disabled")]
        Disabled = 1,

        /// <summary>
        /// Enum VerifiedGuestUser for value: VerifiedGuestUser
        /// </summary>
        [EnumMember(Value = "VerifiedGuestUser")]
        VerifiedGuestUser = 2,

        /// <summary>
        /// Enum Anyone for value: Anyone
        /// </summary>
        [EnumMember(Value = "Anyone")]
        Anyone = 3,

        /// <summary>
        /// Enum ExistingGuestUser for value: ExistingGuestUser
        /// </summary>
        [EnumMember(Value = "ExistingGuestUser")]
        ExistingGuestUser = 4

    }

}
