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
    /// ClonePermissionSecuritySearchResult
    /// </summary>
    [DataContract]
    public partial class ClonePermissionSecuritySearchResult :  IEquatable<ClonePermissionSecuritySearchResult>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Action
        /// </summary>
        [DataMember(Name="action", EmitDefaultValue=false)]
        public ApprovalAction? Action { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ClonePermissionSecuritySearchResult" /> class.
        /// </summary>
        /// <param name="permissionsAfterClone">permissionsAfterClone.</param>
        /// <param name="id">id.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="identityName">identityName.</param>
        /// <param name="objectUrl">objectUrl.</param>
        /// <param name="objectTitle">objectTitle.</param>
        /// <param name="objectType">objectType.</param>
        /// <param name="accountType">accountType.</param>
        /// <param name="sharePointGroup">sharePointGroup.</param>
        /// <param name="permissionLevels">permissionLevels.</param>
        /// <param name="action">action.</param>
        public ClonePermissionSecuritySearchResult(string permissionsAfterClone = default(string), Guid id = default(Guid), string displayName = default(string), string identityName = default(string), string objectUrl = default(string), string objectTitle = default(string), string objectType = default(string), string accountType = default(string), string sharePointGroup = default(string), string permissionLevels = default(string), ApprovalAction action = default(ApprovalAction))
        {
            this.PermissionsAfterClone = permissionsAfterClone;
            this.DisplayName = displayName;
            this.IdentityName = identityName;
            this.ObjectUrl = objectUrl;
            this.ObjectTitle = objectTitle;
            this.ObjectType = objectType;
            this.AccountType = accountType;
            this.SharePointGroup = sharePointGroup;
            this.PermissionLevels = permissionLevels;
            this.PermissionsAfterClone = permissionsAfterClone;
            this.Id = id;
            this.DisplayName = displayName;
            this.IdentityName = identityName;
            this.ObjectUrl = objectUrl;
            this.ObjectTitle = objectTitle;
            this.ObjectType = objectType;
            this.AccountType = accountType;
            this.SharePointGroup = sharePointGroup;
            this.PermissionLevels = permissionLevels;
            this.Action = action;
        }
        
        /// <summary>
        /// Gets or Sets PermissionsAfterClone
        /// </summary>
        [DataMember(Name="permissionsAfterClone", EmitDefaultValue=true)]
        public string PermissionsAfterClone { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name="displayName", EmitDefaultValue=true)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets IdentityName
        /// </summary>
        [DataMember(Name="identityName", EmitDefaultValue=true)]
        public string IdentityName { get; set; }

        /// <summary>
        /// Gets or Sets ObjectUrl
        /// </summary>
        [DataMember(Name="objectUrl", EmitDefaultValue=true)]
        public string ObjectUrl { get; set; }

        /// <summary>
        /// Gets or Sets ObjectTitle
        /// </summary>
        [DataMember(Name="objectTitle", EmitDefaultValue=true)]
        public string ObjectTitle { get; set; }

        /// <summary>
        /// Gets or Sets ObjectType
        /// </summary>
        [DataMember(Name="objectType", EmitDefaultValue=true)]
        public string ObjectType { get; set; }

        /// <summary>
        /// Gets or Sets ObjectTypeDescription
        /// </summary>
        [DataMember(Name="objectTypeDescription", EmitDefaultValue=true)]
        public string ObjectTypeDescription { get; private set; }

        /// <summary>
        /// Gets or Sets AccountType
        /// </summary>
        [DataMember(Name="accountType", EmitDefaultValue=true)]
        public string AccountType { get; set; }

        /// <summary>
        /// Gets or Sets AccountTypeDescription
        /// </summary>
        [DataMember(Name="accountTypeDescription", EmitDefaultValue=true)]
        public string AccountTypeDescription { get; private set; }

        /// <summary>
        /// Gets or Sets SharePointGroup
        /// </summary>
        [DataMember(Name="sharePointGroup", EmitDefaultValue=true)]
        public string SharePointGroup { get; set; }

        /// <summary>
        /// Gets or Sets PermissionLevels
        /// </summary>
        [DataMember(Name="permissionLevels", EmitDefaultValue=true)]
        public string PermissionLevels { get; set; }

        /// <summary>
        /// Gets or Sets AccessType
        /// </summary>
        [DataMember(Name="accessType", EmitDefaultValue=true)]
        public string AccessType { get; private set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ClonePermissionSecuritySearchResult {\n");
            sb.Append("  PermissionsAfterClone: ").Append(PermissionsAfterClone).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  IdentityName: ").Append(IdentityName).Append("\n");
            sb.Append("  ObjectUrl: ").Append(ObjectUrl).Append("\n");
            sb.Append("  ObjectTitle: ").Append(ObjectTitle).Append("\n");
            sb.Append("  ObjectType: ").Append(ObjectType).Append("\n");
            sb.Append("  ObjectTypeDescription: ").Append(ObjectTypeDescription).Append("\n");
            sb.Append("  AccountType: ").Append(AccountType).Append("\n");
            sb.Append("  AccountTypeDescription: ").Append(AccountTypeDescription).Append("\n");
            sb.Append("  SharePointGroup: ").Append(SharePointGroup).Append("\n");
            sb.Append("  PermissionLevels: ").Append(PermissionLevels).Append("\n");
            sb.Append("  Action: ").Append(Action).Append("\n");
            sb.Append("  AccessType: ").Append(AccessType).Append("\n");
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
            return this.Equals(input as ClonePermissionSecuritySearchResult);
        }

        /// <summary>
        /// Returns true if ClonePermissionSecuritySearchResult instances are equal
        /// </summary>
        /// <param name="input">Instance of ClonePermissionSecuritySearchResult to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClonePermissionSecuritySearchResult input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.PermissionsAfterClone == input.PermissionsAfterClone ||
                    (this.PermissionsAfterClone != null &&
                    this.PermissionsAfterClone.Equals(input.PermissionsAfterClone))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.IdentityName == input.IdentityName ||
                    (this.IdentityName != null &&
                    this.IdentityName.Equals(input.IdentityName))
                ) && 
                (
                    this.ObjectUrl == input.ObjectUrl ||
                    (this.ObjectUrl != null &&
                    this.ObjectUrl.Equals(input.ObjectUrl))
                ) && 
                (
                    this.ObjectTitle == input.ObjectTitle ||
                    (this.ObjectTitle != null &&
                    this.ObjectTitle.Equals(input.ObjectTitle))
                ) && 
                (
                    this.ObjectType == input.ObjectType ||
                    (this.ObjectType != null &&
                    this.ObjectType.Equals(input.ObjectType))
                ) && 
                (
                    this.ObjectTypeDescription == input.ObjectTypeDescription ||
                    (this.ObjectTypeDescription != null &&
                    this.ObjectTypeDescription.Equals(input.ObjectTypeDescription))
                ) && 
                (
                    this.AccountType == input.AccountType ||
                    (this.AccountType != null &&
                    this.AccountType.Equals(input.AccountType))
                ) && 
                (
                    this.AccountTypeDescription == input.AccountTypeDescription ||
                    (this.AccountTypeDescription != null &&
                    this.AccountTypeDescription.Equals(input.AccountTypeDescription))
                ) && 
                (
                    this.SharePointGroup == input.SharePointGroup ||
                    (this.SharePointGroup != null &&
                    this.SharePointGroup.Equals(input.SharePointGroup))
                ) && 
                (
                    this.PermissionLevels == input.PermissionLevels ||
                    (this.PermissionLevels != null &&
                    this.PermissionLevels.Equals(input.PermissionLevels))
                ) && 
                (
                    this.Action == input.Action ||
                    this.Action.Equals(input.Action)
                ) && 
                (
                    this.AccessType == input.AccessType ||
                    (this.AccessType != null &&
                    this.AccessType.Equals(input.AccessType))
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
                if (this.PermissionsAfterClone != null)
                    hashCode = hashCode * 59 + this.PermissionsAfterClone.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.DisplayName != null)
                    hashCode = hashCode * 59 + this.DisplayName.GetHashCode();
                if (this.IdentityName != null)
                    hashCode = hashCode * 59 + this.IdentityName.GetHashCode();
                if (this.ObjectUrl != null)
                    hashCode = hashCode * 59 + this.ObjectUrl.GetHashCode();
                if (this.ObjectTitle != null)
                    hashCode = hashCode * 59 + this.ObjectTitle.GetHashCode();
                if (this.ObjectType != null)
                    hashCode = hashCode * 59 + this.ObjectType.GetHashCode();
                if (this.ObjectTypeDescription != null)
                    hashCode = hashCode * 59 + this.ObjectTypeDescription.GetHashCode();
                if (this.AccountType != null)
                    hashCode = hashCode * 59 + this.AccountType.GetHashCode();
                if (this.AccountTypeDescription != null)
                    hashCode = hashCode * 59 + this.AccountTypeDescription.GetHashCode();
                if (this.SharePointGroup != null)
                    hashCode = hashCode * 59 + this.SharePointGroup.GetHashCode();
                if (this.PermissionLevels != null)
                    hashCode = hashCode * 59 + this.PermissionLevels.GetHashCode();
                hashCode = hashCode * 59 + this.Action.GetHashCode();
                if (this.AccessType != null)
                    hashCode = hashCode * 59 + this.AccessType.GetHashCode();
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
