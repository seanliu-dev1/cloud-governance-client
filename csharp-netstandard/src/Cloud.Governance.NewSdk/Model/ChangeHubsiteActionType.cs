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
    /// None&#x3D;0, RegisterAsHubSite&#x3D;1, AssociateToHubSite&#x3D;2, &lt;/br&gt;UnRegisterAsHubSite&#x3D;3, UnRegisterAndAssociateToHubSite&#x3D;4
    /// </summary>
    /// <value>None&#x3D;0, RegisterAsHubSite&#x3D;1, AssociateToHubSite&#x3D;2, &lt;/br&gt;UnRegisterAsHubSite&#x3D;3, UnRegisterAndAssociateToHubSite&#x3D;4</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ChangeHubsiteActionType
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum RegisterAsHubSite for value: RegisterAsHubSite
        /// </summary>
        [EnumMember(Value = "RegisterAsHubSite")]
        RegisterAsHubSite = 2,

        /// <summary>
        /// Enum AssociateToHubSite for value: AssociateToHubSite
        /// </summary>
        [EnumMember(Value = "AssociateToHubSite")]
        AssociateToHubSite = 3,

        /// <summary>
        /// Enum UnRegisterAsHubSite for value: UnRegisterAsHubSite
        /// </summary>
        [EnumMember(Value = "UnRegisterAsHubSite")]
        UnRegisterAsHubSite = 4,

        /// <summary>
        /// Enum UnRegisterAndAssociateToHubSite for value: UnRegisterAndAssociateToHubSite
        /// </summary>
        [EnumMember(Value = "UnRegisterAndAssociateToHubSite")]
        UnRegisterAndAssociateToHubSite = 5

    }

}
