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
    /// TerminologyImportedModel
    /// </summary>
    [DataContract]
    public partial class TerminologyImportedModel :  IEquatable<TerminologyImportedModel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TerminologyImportedModel" /> class.
        /// </summary>
        /// <param name="result">result.</param>
        /// <param name="id">id.</param>
        /// <param name="languageId">languageId.</param>
        /// <param name="originalTerminology">originalTerminology.</param>
        /// <param name="newTerminology">newTerminology.</param>
        public TerminologyImportedModel(string result = default(string), Guid? id = default(Guid?), int languageId = default(int), string originalTerminology = default(string), string newTerminology = default(string))
        {
            this.Result = result;
            this.Id = id;
            this.LanguageId = languageId;
            this.OriginalTerminology = originalTerminology;
            this.NewTerminology = newTerminology;
        }
        
        /// <summary>
        /// Gets or Sets Result
        /// </summary>
        [DataMember(Name="result", EmitDefaultValue=true)]
        public string Result { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public Guid? Id { get; set; }

        /// <summary>
        /// Gets or Sets LanguageId
        /// </summary>
        [DataMember(Name="languageId", EmitDefaultValue=false)]
        public int LanguageId { get; set; }

        /// <summary>
        /// Gets or Sets OriginalTerminology
        /// </summary>
        [DataMember(Name="originalTerminology", EmitDefaultValue=true)]
        public string OriginalTerminology { get; set; }

        /// <summary>
        /// Gets or Sets NewTerminology
        /// </summary>
        [DataMember(Name="newTerminology", EmitDefaultValue=true)]
        public string NewTerminology { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TerminologyImportedModel {\n");
            sb.Append("  Result: ").Append(Result).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LanguageId: ").Append(LanguageId).Append("\n");
            sb.Append("  OriginalTerminology: ").Append(OriginalTerminology).Append("\n");
            sb.Append("  NewTerminology: ").Append(NewTerminology).Append("\n");
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
            return this.Equals(input as TerminologyImportedModel);
        }

        /// <summary>
        /// Returns true if TerminologyImportedModel instances are equal
        /// </summary>
        /// <param name="input">Instance of TerminologyImportedModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TerminologyImportedModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Result == input.Result ||
                    (this.Result != null &&
                    this.Result.Equals(input.Result))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.LanguageId == input.LanguageId ||
                    this.LanguageId.Equals(input.LanguageId)
                ) && 
                (
                    this.OriginalTerminology == input.OriginalTerminology ||
                    (this.OriginalTerminology != null &&
                    this.OriginalTerminology.Equals(input.OriginalTerminology))
                ) && 
                (
                    this.NewTerminology == input.NewTerminology ||
                    (this.NewTerminology != null &&
                    this.NewTerminology.Equals(input.NewTerminology))
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
                if (this.Result != null)
                    hashCode = hashCode * 59 + this.Result.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                hashCode = hashCode * 59 + this.LanguageId.GetHashCode();
                if (this.OriginalTerminology != null)
                    hashCode = hashCode * 59 + this.OriginalTerminology.GetHashCode();
                if (this.NewTerminology != null)
                    hashCode = hashCode * 59 + this.NewTerminology.GetHashCode();
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