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
using OpenAPIDateConverter = Cloud.Governance.Client.Client.OpenAPIDateConverter;

namespace Cloud.Governance.Client.Model
{
    /// <summary>
    /// None&#x3D;0, Extend&#x3D;1, Delete&#x3D;2, &lt;/br&gt;Archive&#x3D;3, ChangePolicy&#x3D;4, Unlock&#x3D;5, &lt;/br&gt;Lock&#x3D;7, ChangeQuota&#x3D;8
    /// </summary>
    /// <value>None&#x3D;0, Extend&#x3D;1, Delete&#x3D;2, &lt;/br&gt;Archive&#x3D;3, ChangePolicy&#x3D;4, Unlock&#x3D;5, &lt;/br&gt;Lock&#x3D;7, ChangeQuota&#x3D;8</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum SiteLifecycleActionType
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum Extend for value: Extend
        /// </summary>
        [EnumMember(Value = "Extend")]
        Extend = 2,

        /// <summary>
        /// Enum Delete for value: Delete
        /// </summary>
        [EnumMember(Value = "Delete")]
        Delete = 3,

        /// <summary>
        /// Enum Archive for value: Archive
        /// </summary>
        [EnumMember(Value = "Archive")]
        Archive = 4,

        /// <summary>
        /// Enum ChangePolicy for value: ChangePolicy
        /// </summary>
        [EnumMember(Value = "ChangePolicy")]
        ChangePolicy = 5,

        /// <summary>
        /// Enum Unlock for value: Unlock
        /// </summary>
        [EnumMember(Value = "Unlock")]
        Unlock = 6,

        /// <summary>
        /// Enum Lock for value: Lock
        /// </summary>
        [EnumMember(Value = "Lock")]
        Lock = 7,

        /// <summary>
        /// Enum ChangeQuota for value: ChangeQuota
        /// </summary>
        [EnumMember(Value = "ChangeQuota")]
        ChangeQuota = 8

    }

}