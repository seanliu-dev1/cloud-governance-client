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
    /// AzureStorage
    /// </summary>
    [DataContract]
    public partial class AzureStorage :  IEquatable<AzureStorage>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AzureStorage" /> class.
        /// </summary>
        /// <param name="accountName">accountName.</param>
        /// <param name="accountKey">accountKey.</param>
        /// <param name="needHttps">needHttps.</param>
        public AzureStorage(string accountName = default(string), string accountKey = default(string), bool needHttps = default(bool))
        {
            this.AccountName = accountName;
            this.AccountKey = accountKey;
            this.NeedHttps = needHttps;
        }
        
        /// <summary>
        /// Gets or Sets AccountName
        /// </summary>
        [DataMember(Name="accountName", EmitDefaultValue=true)]
        public string AccountName { get; set; }

        /// <summary>
        /// Gets or Sets AccountKey
        /// </summary>
        [DataMember(Name="accountKey", EmitDefaultValue=true)]
        public string AccountKey { get; set; }

        /// <summary>
        /// Gets or Sets NeedHttps
        /// </summary>
        [DataMember(Name="needHttps", EmitDefaultValue=false)]
        public bool NeedHttps { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AzureStorage {\n");
            sb.Append("  AccountName: ").Append(AccountName).Append("\n");
            sb.Append("  AccountKey: ").Append(AccountKey).Append("\n");
            sb.Append("  NeedHttps: ").Append(NeedHttps).Append("\n");
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
            return this.Equals(input as AzureStorage);
        }

        /// <summary>
        /// Returns true if AzureStorage instances are equal
        /// </summary>
        /// <param name="input">Instance of AzureStorage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AzureStorage input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AccountName == input.AccountName ||
                    (this.AccountName != null &&
                    this.AccountName.Equals(input.AccountName))
                ) && 
                (
                    this.AccountKey == input.AccountKey ||
                    (this.AccountKey != null &&
                    this.AccountKey.Equals(input.AccountKey))
                ) && 
                (
                    this.NeedHttps == input.NeedHttps ||
                    this.NeedHttps.Equals(input.NeedHttps)
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
                if (this.AccountName != null)
                    hashCode = hashCode * 59 + this.AccountName.GetHashCode();
                if (this.AccountKey != null)
                    hashCode = hashCode * 59 + this.AccountKey.GetHashCode();
                hashCode = hashCode * 59 + this.NeedHttps.GetHashCode();
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