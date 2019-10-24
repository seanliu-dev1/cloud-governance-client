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
    /// ResourceValue
    /// </summary>
    [DataContract]
    public partial class ResourceValue :  IEquatable<ResourceValue>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ResourceValue" /> class.
        /// </summary>
        /// <param name="display">display.</param>
        /// <param name="value">value.</param>
        /// <param name="resourceKey">resourceKey.</param>
        public ResourceValue(string display = default(string), int value = default(int), string resourceKey = default(string))
        {
            this.Display = display;
            this.ResourceKey = resourceKey;
            this.Display = display;
            this.Value = value;
            this.ResourceKey = resourceKey;
        }
        
        /// <summary>
        /// Gets or Sets Display
        /// </summary>
        [DataMember(Name="display", EmitDefaultValue=true)]
        public string Display { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public int Value { get; set; }

        /// <summary>
        /// Gets or Sets ResourceKey
        /// </summary>
        [DataMember(Name="resourceKey", EmitDefaultValue=true)]
        public string ResourceKey { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ResourceValue {\n");
            sb.Append("  Display: ").Append(Display).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  ResourceKey: ").Append(ResourceKey).Append("\n");
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
            return this.Equals(input as ResourceValue);
        }

        /// <summary>
        /// Returns true if ResourceValue instances are equal
        /// </summary>
        /// <param name="input">Instance of ResourceValue to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ResourceValue input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Display == input.Display ||
                    (this.Display != null &&
                    this.Display.Equals(input.Display))
                ) && 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
                ) && 
                (
                    this.ResourceKey == input.ResourceKey ||
                    (this.ResourceKey != null &&
                    this.ResourceKey.Equals(input.ResourceKey))
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
                if (this.Display != null)
                    hashCode = hashCode * 59 + this.Display.GetHashCode();
                hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.ResourceKey != null)
                    hashCode = hashCode * 59 + this.ResourceKey.GetHashCode();
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
