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
    /// ElectionProcessModel
    /// </summary>
    [DataContract]
    public partial class ElectionProcessModel :  IEquatable<ElectionProcessModel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ElectionProcessModel" /> class.
        /// </summary>
        /// <param name="enablePrimarySiteContact">enablePrimarySiteContact.</param>
        /// <param name="enableSecondarySiteContact">enableSecondarySiteContact.</param>
        /// <param name="enablePrimarySiteAdministrator">enablePrimarySiteAdministrator.</param>
        /// <param name="enableAdministratorGroupUser">enableAdministratorGroupUser.</param>
        /// <param name="administratorGroupUserCount">administratorGroupUserCount.</param>
        /// <param name="enableMainPermissionUsers">enableMainPermissionUsers.</param>
        /// <param name="mainPermissionLevel">mainPermissionLevel.</param>
        /// <param name="mainPermissionUserCount">mainPermissionUserCount.</param>
        /// <param name="enableAlternativePermissionUsers">enableAlternativePermissionUsers.</param>
        /// <param name="alternativePermissionLevel">alternativePermissionLevel.</param>
        /// <param name="alternativPermissionUserCount">alternativPermissionUserCount.</param>
        public ElectionProcessModel(bool enablePrimarySiteContact = default(bool), bool enableSecondarySiteContact = default(bool), bool enablePrimarySiteAdministrator = default(bool), bool enableAdministratorGroupUser = default(bool), int? administratorGroupUserCount = default(int?), bool enableMainPermissionUsers = default(bool), Guid? mainPermissionLevel = default(Guid?), int? mainPermissionUserCount = default(int?), bool enableAlternativePermissionUsers = default(bool), Guid? alternativePermissionLevel = default(Guid?), int? alternativPermissionUserCount = default(int?))
        {
            this.EnablePrimarySiteContact = enablePrimarySiteContact;
            this.EnableSecondarySiteContact = enableSecondarySiteContact;
            this.EnablePrimarySiteAdministrator = enablePrimarySiteAdministrator;
            this.EnableAdministratorGroupUser = enableAdministratorGroupUser;
            this.AdministratorGroupUserCount = administratorGroupUserCount;
            this.EnableMainPermissionUsers = enableMainPermissionUsers;
            this.MainPermissionLevel = mainPermissionLevel;
            this.MainPermissionUserCount = mainPermissionUserCount;
            this.EnableAlternativePermissionUsers = enableAlternativePermissionUsers;
            this.AlternativePermissionLevel = alternativePermissionLevel;
            this.AlternativPermissionUserCount = alternativPermissionUserCount;
        }
        
        /// <summary>
        /// Gets or Sets EnablePrimarySiteContact
        /// </summary>
        [DataMember(Name="enablePrimarySiteContact", EmitDefaultValue=false)]
        public bool EnablePrimarySiteContact { get; set; }

        /// <summary>
        /// Gets or Sets EnableSecondarySiteContact
        /// </summary>
        [DataMember(Name="enableSecondarySiteContact", EmitDefaultValue=false)]
        public bool EnableSecondarySiteContact { get; set; }

        /// <summary>
        /// Gets or Sets EnablePrimarySiteAdministrator
        /// </summary>
        [DataMember(Name="enablePrimarySiteAdministrator", EmitDefaultValue=false)]
        public bool EnablePrimarySiteAdministrator { get; set; }

        /// <summary>
        /// Gets or Sets EnableAdministratorGroupUser
        /// </summary>
        [DataMember(Name="enableAdministratorGroupUser", EmitDefaultValue=false)]
        public bool EnableAdministratorGroupUser { get; set; }

        /// <summary>
        /// Gets or Sets AdministratorGroupUserCount
        /// </summary>
        [DataMember(Name="administratorGroupUserCount", EmitDefaultValue=true)]
        public int? AdministratorGroupUserCount { get; set; }

        /// <summary>
        /// Gets or Sets EnableMainPermissionUsers
        /// </summary>
        [DataMember(Name="enableMainPermissionUsers", EmitDefaultValue=false)]
        public bool EnableMainPermissionUsers { get; set; }

        /// <summary>
        /// Gets or Sets MainPermissionLevel
        /// </summary>
        [DataMember(Name="mainPermissionLevel", EmitDefaultValue=true)]
        public Guid? MainPermissionLevel { get; set; }

        /// <summary>
        /// Gets or Sets MainPermissionUserCount
        /// </summary>
        [DataMember(Name="mainPermissionUserCount", EmitDefaultValue=true)]
        public int? MainPermissionUserCount { get; set; }

        /// <summary>
        /// Gets or Sets EnableAlternativePermissionUsers
        /// </summary>
        [DataMember(Name="enableAlternativePermissionUsers", EmitDefaultValue=false)]
        public bool EnableAlternativePermissionUsers { get; set; }

        /// <summary>
        /// Gets or Sets AlternativePermissionLevel
        /// </summary>
        [DataMember(Name="alternativePermissionLevel", EmitDefaultValue=true)]
        public Guid? AlternativePermissionLevel { get; set; }

        /// <summary>
        /// Gets or Sets AlternativPermissionUserCount
        /// </summary>
        [DataMember(Name="alternativPermissionUserCount", EmitDefaultValue=true)]
        public int? AlternativPermissionUserCount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ElectionProcessModel {\n");
            sb.Append("  EnablePrimarySiteContact: ").Append(EnablePrimarySiteContact).Append("\n");
            sb.Append("  EnableSecondarySiteContact: ").Append(EnableSecondarySiteContact).Append("\n");
            sb.Append("  EnablePrimarySiteAdministrator: ").Append(EnablePrimarySiteAdministrator).Append("\n");
            sb.Append("  EnableAdministratorGroupUser: ").Append(EnableAdministratorGroupUser).Append("\n");
            sb.Append("  AdministratorGroupUserCount: ").Append(AdministratorGroupUserCount).Append("\n");
            sb.Append("  EnableMainPermissionUsers: ").Append(EnableMainPermissionUsers).Append("\n");
            sb.Append("  MainPermissionLevel: ").Append(MainPermissionLevel).Append("\n");
            sb.Append("  MainPermissionUserCount: ").Append(MainPermissionUserCount).Append("\n");
            sb.Append("  EnableAlternativePermissionUsers: ").Append(EnableAlternativePermissionUsers).Append("\n");
            sb.Append("  AlternativePermissionLevel: ").Append(AlternativePermissionLevel).Append("\n");
            sb.Append("  AlternativPermissionUserCount: ").Append(AlternativPermissionUserCount).Append("\n");
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
            return this.Equals(input as ElectionProcessModel);
        }

        /// <summary>
        /// Returns true if ElectionProcessModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ElectionProcessModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ElectionProcessModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EnablePrimarySiteContact == input.EnablePrimarySiteContact ||
                    this.EnablePrimarySiteContact.Equals(input.EnablePrimarySiteContact)
                ) && 
                (
                    this.EnableSecondarySiteContact == input.EnableSecondarySiteContact ||
                    this.EnableSecondarySiteContact.Equals(input.EnableSecondarySiteContact)
                ) && 
                (
                    this.EnablePrimarySiteAdministrator == input.EnablePrimarySiteAdministrator ||
                    this.EnablePrimarySiteAdministrator.Equals(input.EnablePrimarySiteAdministrator)
                ) && 
                (
                    this.EnableAdministratorGroupUser == input.EnableAdministratorGroupUser ||
                    this.EnableAdministratorGroupUser.Equals(input.EnableAdministratorGroupUser)
                ) && 
                (
                    this.AdministratorGroupUserCount == input.AdministratorGroupUserCount ||
                    (this.AdministratorGroupUserCount != null &&
                    this.AdministratorGroupUserCount.Equals(input.AdministratorGroupUserCount))
                ) && 
                (
                    this.EnableMainPermissionUsers == input.EnableMainPermissionUsers ||
                    this.EnableMainPermissionUsers.Equals(input.EnableMainPermissionUsers)
                ) && 
                (
                    this.MainPermissionLevel == input.MainPermissionLevel ||
                    (this.MainPermissionLevel != null &&
                    this.MainPermissionLevel.Equals(input.MainPermissionLevel))
                ) && 
                (
                    this.MainPermissionUserCount == input.MainPermissionUserCount ||
                    (this.MainPermissionUserCount != null &&
                    this.MainPermissionUserCount.Equals(input.MainPermissionUserCount))
                ) && 
                (
                    this.EnableAlternativePermissionUsers == input.EnableAlternativePermissionUsers ||
                    this.EnableAlternativePermissionUsers.Equals(input.EnableAlternativePermissionUsers)
                ) && 
                (
                    this.AlternativePermissionLevel == input.AlternativePermissionLevel ||
                    (this.AlternativePermissionLevel != null &&
                    this.AlternativePermissionLevel.Equals(input.AlternativePermissionLevel))
                ) && 
                (
                    this.AlternativPermissionUserCount == input.AlternativPermissionUserCount ||
                    (this.AlternativPermissionUserCount != null &&
                    this.AlternativPermissionUserCount.Equals(input.AlternativPermissionUserCount))
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
                hashCode = hashCode * 59 + this.EnablePrimarySiteContact.GetHashCode();
                hashCode = hashCode * 59 + this.EnableSecondarySiteContact.GetHashCode();
                hashCode = hashCode * 59 + this.EnablePrimarySiteAdministrator.GetHashCode();
                hashCode = hashCode * 59 + this.EnableAdministratorGroupUser.GetHashCode();
                if (this.AdministratorGroupUserCount != null)
                    hashCode = hashCode * 59 + this.AdministratorGroupUserCount.GetHashCode();
                hashCode = hashCode * 59 + this.EnableMainPermissionUsers.GetHashCode();
                if (this.MainPermissionLevel != null)
                    hashCode = hashCode * 59 + this.MainPermissionLevel.GetHashCode();
                if (this.MainPermissionUserCount != null)
                    hashCode = hashCode * 59 + this.MainPermissionUserCount.GetHashCode();
                hashCode = hashCode * 59 + this.EnableAlternativePermissionUsers.GetHashCode();
                if (this.AlternativePermissionLevel != null)
                    hashCode = hashCode * 59 + this.AlternativePermissionLevel.GetHashCode();
                if (this.AlternativPermissionUserCount != null)
                    hashCode = hashCode * 59 + this.AlternativPermissionUserCount.GetHashCode();
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