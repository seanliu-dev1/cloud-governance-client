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
    /// PolicyIconSetting
    /// </summary>
    [DataContract]
    public partial class PolicyIconSetting :  IEquatable<PolicyIconSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PolicyIconSetting" /> class.
        /// </summary>
        /// <param name="isEnabled">isEnabled.</param>
        /// <param name="address">address.</param>
        /// <param name="referenceUrl">referenceUrl.</param>
        public PolicyIconSetting(bool isEnabled = default(bool), string address = default(string), string referenceUrl = default(string))
        {
            this.Address = address;
            this.ReferenceUrl = referenceUrl;
            this.IsEnabled = isEnabled;
            this.Address = address;
            this.ReferenceUrl = referenceUrl;
        }
        
        /// <summary>
        /// Gets or Sets IsEnabled
        /// </summary>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name="address", EmitDefaultValue=true)]
        public string Address { get; set; }

        /// <summary>
        /// Gets or Sets ReferenceUrl
        /// </summary>
        [DataMember(Name="referenceUrl", EmitDefaultValue=true)]
        public string ReferenceUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PolicyIconSetting {\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  ReferenceUrl: ").Append(ReferenceUrl).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PolicyIconSetting);
        }

        /// <summary>
        /// Returns true if PolicyIconSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of PolicyIconSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PolicyIconSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.IsEnabled == input.IsEnabled ||
                    this.IsEnabled.Equals(input.IsEnabled)
                ) && 
                (
                    this.Address == input.Address ||
                    (this.Address != null &&
                    this.Address.Equals(input.Address))
                ) && 
                (
                    this.ReferenceUrl == input.ReferenceUrl ||
                    (this.ReferenceUrl != null &&
                    this.ReferenceUrl.Equals(input.ReferenceUrl))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = hashCode * 59 + this.IsEnabled.GetHashCode();
                if (this.Address != null)
                    hashCode = hashCode * 59 + this.Address.GetHashCode();
                if (this.ReferenceUrl != null)
                    hashCode = hashCode * 59 + this.ReferenceUrl.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
