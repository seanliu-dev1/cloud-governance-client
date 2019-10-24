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
    /// PolicyDeletionLifecycleItem
    /// </summary>
    [DataContract]
    public partial class PolicyDeletionLifecycleItem :  IEquatable<PolicyDeletionLifecycleItem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PolicyDeletionLifecycleItem" /> class.
        /// </summary>
        /// <param name="isPermanentlyDelete">isPermanentlyDelete.</param>
        /// <param name="isNotifyEnabled">isNotifyEnabled.</param>
        /// <param name="notifyUser">notifyUser.</param>
        /// <param name="notifyTemplate">notifyTemplate.</param>
        /// <param name="isEnabled">isEnabled.</param>
        /// <param name="isDefaultProcess">isDefaultProcess.</param>
        /// <param name="processId">processId.</param>
        public PolicyDeletionLifecycleItem(bool isPermanentlyDelete = default(bool), bool isNotifyEnabled = default(bool), string notifyUser = default(string), Guid notifyTemplate = default(Guid), bool isEnabled = default(bool), bool isDefaultProcess = default(bool), Guid processId = default(Guid))
        {
            this.NotifyUser = notifyUser;
            this.IsPermanentlyDelete = isPermanentlyDelete;
            this.IsNotifyEnabled = isNotifyEnabled;
            this.NotifyUser = notifyUser;
            this.NotifyTemplate = notifyTemplate;
            this.IsEnabled = isEnabled;
            this.IsDefaultProcess = isDefaultProcess;
            this.ProcessId = processId;
        }
        
        /// <summary>
        /// Gets or Sets IsPermanentlyDelete
        /// </summary>
        [DataMember(Name="isPermanentlyDelete", EmitDefaultValue=false)]
        public bool IsPermanentlyDelete { get; set; }

        /// <summary>
        /// Gets or Sets IsNotifyEnabled
        /// </summary>
        [DataMember(Name="isNotifyEnabled", EmitDefaultValue=false)]
        public bool IsNotifyEnabled { get; set; }

        /// <summary>
        /// Gets or Sets NotifyUser
        /// </summary>
        [DataMember(Name="notifyUser", EmitDefaultValue=true)]
        public string NotifyUser { get; set; }

        /// <summary>
        /// Gets or Sets NotifyTemplate
        /// </summary>
        [DataMember(Name="notifyTemplate", EmitDefaultValue=false)]
        public Guid NotifyTemplate { get; set; }

        /// <summary>
        /// Gets or Sets IsEnabled
        /// </summary>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets IsDefaultProcess
        /// </summary>
        [DataMember(Name="isDefaultProcess", EmitDefaultValue=false)]
        public bool IsDefaultProcess { get; set; }

        /// <summary>
        /// Gets or Sets ProcessId
        /// </summary>
        [DataMember(Name="processId", EmitDefaultValue=false)]
        public Guid ProcessId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PolicyDeletionLifecycleItem {\n");
            sb.Append("  IsPermanentlyDelete: ").Append(IsPermanentlyDelete).Append("\n");
            sb.Append("  IsNotifyEnabled: ").Append(IsNotifyEnabled).Append("\n");
            sb.Append("  NotifyUser: ").Append(NotifyUser).Append("\n");
            sb.Append("  NotifyTemplate: ").Append(NotifyTemplate).Append("\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  IsDefaultProcess: ").Append(IsDefaultProcess).Append("\n");
            sb.Append("  ProcessId: ").Append(ProcessId).Append("\n");
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
            return this.Equals(input as PolicyDeletionLifecycleItem);
        }

        /// <summary>
        /// Returns true if PolicyDeletionLifecycleItem instances are equal
        /// </summary>
        /// <param name="input">Instance of PolicyDeletionLifecycleItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PolicyDeletionLifecycleItem input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.IsPermanentlyDelete == input.IsPermanentlyDelete ||
                    this.IsPermanentlyDelete.Equals(input.IsPermanentlyDelete)
                ) && 
                (
                    this.IsNotifyEnabled == input.IsNotifyEnabled ||
                    this.IsNotifyEnabled.Equals(input.IsNotifyEnabled)
                ) && 
                (
                    this.NotifyUser == input.NotifyUser ||
                    (this.NotifyUser != null &&
                    this.NotifyUser.Equals(input.NotifyUser))
                ) && 
                (
                    this.NotifyTemplate == input.NotifyTemplate ||
                    (this.NotifyTemplate != null &&
                    this.NotifyTemplate.Equals(input.NotifyTemplate))
                ) && 
                (
                    this.IsEnabled == input.IsEnabled ||
                    this.IsEnabled.Equals(input.IsEnabled)
                ) && 
                (
                    this.IsDefaultProcess == input.IsDefaultProcess ||
                    this.IsDefaultProcess.Equals(input.IsDefaultProcess)
                ) && 
                (
                    this.ProcessId == input.ProcessId ||
                    (this.ProcessId != null &&
                    this.ProcessId.Equals(input.ProcessId))
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
                hashCode = hashCode * 59 + this.IsPermanentlyDelete.GetHashCode();
                hashCode = hashCode * 59 + this.IsNotifyEnabled.GetHashCode();
                if (this.NotifyUser != null)
                    hashCode = hashCode * 59 + this.NotifyUser.GetHashCode();
                if (this.NotifyTemplate != null)
                    hashCode = hashCode * 59 + this.NotifyTemplate.GetHashCode();
                hashCode = hashCode * 59 + this.IsEnabled.GetHashCode();
                hashCode = hashCode * 59 + this.IsDefaultProcess.GetHashCode();
                if (this.ProcessId != null)
                    hashCode = hashCode * 59 + this.ProcessId.GetHashCode();
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
