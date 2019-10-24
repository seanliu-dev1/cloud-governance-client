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
    /// BusinessUser&#x3D;0, BusinessUserWithRequired&#x3D;1, ITAdminWithReadOnly&#x3D;2, &lt;/br&gt;ITAdminWithHide&#x3D;3
    /// </summary>
    /// <value>BusinessUser&#x3D;0, BusinessUserWithRequired&#x3D;1, ITAdminWithReadOnly&#x3D;2, &lt;/br&gt;ITAdminWithHide&#x3D;3</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum AssignBy
    {
        /// <summary>
        /// Enum BusinessUser for value: BusinessUser
        /// </summary>
        [EnumMember(Value = "BusinessUser")]
        BusinessUser = 1,

        /// <summary>
        /// Enum BusinessUserWithRequired for value: BusinessUserWithRequired
        /// </summary>
        [EnumMember(Value = "BusinessUserWithRequired")]
        BusinessUserWithRequired = 2,

        /// <summary>
        /// Enum ITAdminWithReadOnly for value: ITAdminWithReadOnly
        /// </summary>
        [EnumMember(Value = "ITAdminWithReadOnly")]
        ITAdminWithReadOnly = 3,

        /// <summary>
        /// Enum ITAdminWithHide for value: ITAdminWithHide
        /// </summary>
        [EnumMember(Value = "ITAdminWithHide")]
        ITAdminWithHide = 4

    }

}
