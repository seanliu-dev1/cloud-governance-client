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
    /// ApprovalProcessModel
    /// </summary>
    [DataContract]
    public partial class ApprovalProcessModel :  IEquatable<ApprovalProcessModel>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public CommonStatus? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ApprovalProcessModel" /> class.
        /// </summary>
        /// <param name="completionTemplateId">completionTemplateId.</param>
        /// <param name="stageOne">stageOne.</param>
        /// <param name="stageTwo">stageTwo.</param>
        /// <param name="stageThree">stageThree.</param>
        /// <param name="stageSettings">stageSettings.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="status">status.</param>
        /// <param name="category">category.</param>
        /// <param name="cc">cc.</param>
        public ApprovalProcessModel(Guid completionTemplateId = default(Guid), ApprovalProcessStageModel stageOne = default(ApprovalProcessStageModel), ApprovalProcessStageModel stageTwo = default(ApprovalProcessStageModel), ApprovalProcessStageModel stageThree = default(ApprovalProcessStageModel), ApprovalProcessStageSettings stageSettings = default(ApprovalProcessStageSettings), Guid id = default(Guid), string name = default(string), string description = default(string), CommonStatus status = default(CommonStatus), string category = default(string), List<ApiUser> cc = default(List<ApiUser>))
        {
            this.CompletionTemplateId = completionTemplateId;
            this.StageOne = stageOne;
            this.StageTwo = stageTwo;
            this.StageThree = stageThree;
            this.StageSettings = stageSettings;
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Status = status;
            this.Category = category;
            this.Cc = cc;
        }
        
        /// <summary>
        /// Gets or Sets CompletionTemplateId
        /// </summary>
        [DataMember(Name="completionTemplateId", EmitDefaultValue=false)]
        public Guid CompletionTemplateId { get; set; }

        /// <summary>
        /// Gets or Sets StageOne
        /// </summary>
        [DataMember(Name="stageOne", EmitDefaultValue=true)]
        public ApprovalProcessStageModel StageOne { get; set; }

        /// <summary>
        /// Gets or Sets StageTwo
        /// </summary>
        [DataMember(Name="stageTwo", EmitDefaultValue=true)]
        public ApprovalProcessStageModel StageTwo { get; set; }

        /// <summary>
        /// Gets or Sets StageThree
        /// </summary>
        [DataMember(Name="stageThree", EmitDefaultValue=true)]
        public ApprovalProcessStageModel StageThree { get; set; }

        /// <summary>
        /// Gets or Sets StageSettings
        /// </summary>
        [DataMember(Name="stageSettings", EmitDefaultValue=true)]
        public ApprovalProcessStageSettings StageSettings { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=true)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Category
        /// </summary>
        [DataMember(Name="category", EmitDefaultValue=true)]
        public string Category { get; set; }

        /// <summary>
        /// Gets or Sets Cc
        /// </summary>
        [DataMember(Name="cc", EmitDefaultValue=true)]
        public List<ApiUser> Cc { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ApprovalProcessModel {\n");
            sb.Append("  CompletionTemplateId: ").Append(CompletionTemplateId).Append("\n");
            sb.Append("  StageOne: ").Append(StageOne).Append("\n");
            sb.Append("  StageTwo: ").Append(StageTwo).Append("\n");
            sb.Append("  StageThree: ").Append(StageThree).Append("\n");
            sb.Append("  StageSettings: ").Append(StageSettings).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
            sb.Append("  Cc: ").Append(Cc).Append("\n");
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
            return this.Equals(input as ApprovalProcessModel);
        }

        /// <summary>
        /// Returns true if ApprovalProcessModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ApprovalProcessModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ApprovalProcessModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CompletionTemplateId == input.CompletionTemplateId ||
                    (this.CompletionTemplateId != null &&
                    this.CompletionTemplateId.Equals(input.CompletionTemplateId))
                ) && 
                (
                    this.StageOne == input.StageOne ||
                    (this.StageOne != null &&
                    this.StageOne.Equals(input.StageOne))
                ) && 
                (
                    this.StageTwo == input.StageTwo ||
                    (this.StageTwo != null &&
                    this.StageTwo.Equals(input.StageTwo))
                ) && 
                (
                    this.StageThree == input.StageThree ||
                    (this.StageThree != null &&
                    this.StageThree.Equals(input.StageThree))
                ) && 
                (
                    this.StageSettings == input.StageSettings ||
                    (this.StageSettings != null &&
                    this.StageSettings.Equals(input.StageSettings))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.Category == input.Category ||
                    (this.Category != null &&
                    this.Category.Equals(input.Category))
                ) && 
                (
                    this.Cc == input.Cc ||
                    this.Cc != null &&
                    input.Cc != null &&
                    this.Cc.SequenceEqual(input.Cc)
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
                if (this.CompletionTemplateId != null)
                    hashCode = hashCode * 59 + this.CompletionTemplateId.GetHashCode();
                if (this.StageOne != null)
                    hashCode = hashCode * 59 + this.StageOne.GetHashCode();
                if (this.StageTwo != null)
                    hashCode = hashCode * 59 + this.StageTwo.GetHashCode();
                if (this.StageThree != null)
                    hashCode = hashCode * 59 + this.StageThree.GetHashCode();
                if (this.StageSettings != null)
                    hashCode = hashCode * 59 + this.StageSettings.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.Category != null)
                    hashCode = hashCode * 59 + this.Category.GetHashCode();
                if (this.Cc != null)
                    hashCode = hashCode * 59 + this.Cc.GetHashCode();
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