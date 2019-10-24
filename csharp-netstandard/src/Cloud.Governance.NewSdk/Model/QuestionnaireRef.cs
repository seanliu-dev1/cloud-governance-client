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
    /// QuestionnaireRef
    /// </summary>
    [DataContract]
    public partial class QuestionnaireRef :  IEquatable<QuestionnaireRef>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QuestionnaireRef" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="questions">questions.</param>
        /// <param name="node">node.</param>
        public QuestionnaireRef(Guid id = default(Guid), string name = default(string), string description = default(string), List<Question> questions = default(List<Question>), QuestionnaireNode node = default(QuestionnaireNode))
        {
            this.Name = name;
            this.Description = description;
            this.Questions = questions;
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Questions = questions;
            this.Node = node;
        }
        
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
        /// Gets or Sets Questions
        /// </summary>
        [DataMember(Name="questions", EmitDefaultValue=true)]
        public List<Question> Questions { get; set; }

        /// <summary>
        /// Gets or Sets Node
        /// </summary>
        [DataMember(Name="node", EmitDefaultValue=false)]
        public QuestionnaireNode Node { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class QuestionnaireRef {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Questions: ").Append(Questions).Append("\n");
            sb.Append("  Node: ").Append(Node).Append("\n");
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
            return this.Equals(input as QuestionnaireRef);
        }

        /// <summary>
        /// Returns true if QuestionnaireRef instances are equal
        /// </summary>
        /// <param name="input">Instance of QuestionnaireRef to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QuestionnaireRef input)
        {
            if (input == null)
                return false;

            return 
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
                    this.Questions == input.Questions ||
                    this.Questions != null &&
                    input.Questions != null &&
                    this.Questions.SequenceEqual(input.Questions)
                ) && 
                (
                    this.Node == input.Node ||
                    (this.Node != null &&
                    this.Node.Equals(input.Node))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Questions != null)
                    hashCode = hashCode * 59 + this.Questions.GetHashCode();
                if (this.Node != null)
                    hashCode = hashCode * 59 + this.Node.GetHashCode();
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
