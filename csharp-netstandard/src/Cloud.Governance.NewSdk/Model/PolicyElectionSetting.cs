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
    /// PolicyElectionSetting
    /// </summary>
    [DataContract]
    public partial class PolicyElectionSetting :  IEquatable<PolicyElectionSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PolicyElectionSetting" /> class.
        /// </summary>
        /// <param name="isEnabled">isEnabled.</param>
        /// <param name="excludeUsers">excludeUsers.</param>
        /// <param name="isNotifyTaskEnabled">isNotifyTaskEnabled.</param>
        /// <param name="taskEmailTemplate">taskEmailTemplate.</param>
        /// <param name="isNotifyPrimaryContactEnabled">isNotifyPrimaryContactEnabled.</param>
        /// <param name="notifyPrimaryContactTemplate">notifyPrimaryContactTemplate.</param>
        /// <param name="isNotifySecondaryContactEnabled">isNotifySecondaryContactEnabled.</param>
        /// <param name="notifySecondaryContactTemplate">notifySecondaryContactTemplate.</param>
        /// <param name="duration">duration.</param>
        /// <param name="durationType">durationType.</param>
        /// <param name="isReminderEnabled">isReminderEnabled.</param>
        /// <param name="reminderProfileId">reminderProfileId.</param>
        /// <param name="enableOnlyOtherContactElection">enableOnlyOtherContactElection.</param>
        public PolicyElectionSetting(bool isEnabled = default(bool), string excludeUsers = default(string), bool isNotifyTaskEnabled = default(bool), Guid? taskEmailTemplate = default(Guid?), bool isNotifyPrimaryContactEnabled = default(bool), Guid? notifyPrimaryContactTemplate = default(Guid?), bool isNotifySecondaryContactEnabled = default(bool), Guid? notifySecondaryContactTemplate = default(Guid?), int duration = default(int), int durationType = default(int), bool isReminderEnabled = default(bool), Guid? reminderProfileId = default(Guid?), bool enableOnlyOtherContactElection = default(bool))
        {
            this.ExcludeUsers = excludeUsers;
            this.TaskEmailTemplate = taskEmailTemplate;
            this.NotifyPrimaryContactTemplate = notifyPrimaryContactTemplate;
            this.NotifySecondaryContactTemplate = notifySecondaryContactTemplate;
            this.ReminderProfileId = reminderProfileId;
            this.IsEnabled = isEnabled;
            this.ExcludeUsers = excludeUsers;
            this.IsNotifyTaskEnabled = isNotifyTaskEnabled;
            this.TaskEmailTemplate = taskEmailTemplate;
            this.IsNotifyPrimaryContactEnabled = isNotifyPrimaryContactEnabled;
            this.NotifyPrimaryContactTemplate = notifyPrimaryContactTemplate;
            this.IsNotifySecondaryContactEnabled = isNotifySecondaryContactEnabled;
            this.NotifySecondaryContactTemplate = notifySecondaryContactTemplate;
            this.Duration = duration;
            this.DurationType = durationType;
            this.IsReminderEnabled = isReminderEnabled;
            this.ReminderProfileId = reminderProfileId;
            this.EnableOnlyOtherContactElection = enableOnlyOtherContactElection;
        }
        
        /// <summary>
        /// Gets or Sets IsEnabled
        /// </summary>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets ExcludeUsers
        /// </summary>
        [DataMember(Name="excludeUsers", EmitDefaultValue=true)]
        public string ExcludeUsers { get; set; }

        /// <summary>
        /// Gets or Sets IsNotifyTaskEnabled
        /// </summary>
        [DataMember(Name="isNotifyTaskEnabled", EmitDefaultValue=false)]
        public bool IsNotifyTaskEnabled { get; set; }

        /// <summary>
        /// Gets or Sets TaskEmailTemplate
        /// </summary>
        [DataMember(Name="taskEmailTemplate", EmitDefaultValue=true)]
        public Guid? TaskEmailTemplate { get; set; }

        /// <summary>
        /// Gets or Sets IsNotifyPrimaryContactEnabled
        /// </summary>
        [DataMember(Name="isNotifyPrimaryContactEnabled", EmitDefaultValue=false)]
        public bool IsNotifyPrimaryContactEnabled { get; set; }

        /// <summary>
        /// Gets or Sets NotifyPrimaryContactTemplate
        /// </summary>
        [DataMember(Name="notifyPrimaryContactTemplate", EmitDefaultValue=true)]
        public Guid? NotifyPrimaryContactTemplate { get; set; }

        /// <summary>
        /// Gets or Sets IsNotifySecondaryContactEnabled
        /// </summary>
        [DataMember(Name="isNotifySecondaryContactEnabled", EmitDefaultValue=false)]
        public bool IsNotifySecondaryContactEnabled { get; set; }

        /// <summary>
        /// Gets or Sets NotifySecondaryContactTemplate
        /// </summary>
        [DataMember(Name="notifySecondaryContactTemplate", EmitDefaultValue=true)]
        public Guid? NotifySecondaryContactTemplate { get; set; }

        /// <summary>
        /// Gets or Sets Duration
        /// </summary>
        [DataMember(Name="duration", EmitDefaultValue=false)]
        public int Duration { get; set; }

        /// <summary>
        /// Gets or Sets DurationType
        /// </summary>
        [DataMember(Name="durationType", EmitDefaultValue=false)]
        public int DurationType { get; set; }

        /// <summary>
        /// Gets or Sets IsReminderEnabled
        /// </summary>
        [DataMember(Name="isReminderEnabled", EmitDefaultValue=false)]
        public bool IsReminderEnabled { get; set; }

        /// <summary>
        /// Gets or Sets ReminderProfileId
        /// </summary>
        [DataMember(Name="reminderProfileId", EmitDefaultValue=true)]
        public Guid? ReminderProfileId { get; set; }

        /// <summary>
        /// Gets or Sets EnableOnlyOtherContactElection
        /// </summary>
        [DataMember(Name="enableOnlyOtherContactElection", EmitDefaultValue=false)]
        public bool EnableOnlyOtherContactElection { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PolicyElectionSetting {\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  ExcludeUsers: ").Append(ExcludeUsers).Append("\n");
            sb.Append("  IsNotifyTaskEnabled: ").Append(IsNotifyTaskEnabled).Append("\n");
            sb.Append("  TaskEmailTemplate: ").Append(TaskEmailTemplate).Append("\n");
            sb.Append("  IsNotifyPrimaryContactEnabled: ").Append(IsNotifyPrimaryContactEnabled).Append("\n");
            sb.Append("  NotifyPrimaryContactTemplate: ").Append(NotifyPrimaryContactTemplate).Append("\n");
            sb.Append("  IsNotifySecondaryContactEnabled: ").Append(IsNotifySecondaryContactEnabled).Append("\n");
            sb.Append("  NotifySecondaryContactTemplate: ").Append(NotifySecondaryContactTemplate).Append("\n");
            sb.Append("  Duration: ").Append(Duration).Append("\n");
            sb.Append("  DurationType: ").Append(DurationType).Append("\n");
            sb.Append("  IsReminderEnabled: ").Append(IsReminderEnabled).Append("\n");
            sb.Append("  ReminderProfileId: ").Append(ReminderProfileId).Append("\n");
            sb.Append("  EnableOnlyOtherContactElection: ").Append(EnableOnlyOtherContactElection).Append("\n");
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
            return this.Equals(input as PolicyElectionSetting);
        }

        /// <summary>
        /// Returns true if PolicyElectionSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of PolicyElectionSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PolicyElectionSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.IsEnabled == input.IsEnabled ||
                    this.IsEnabled.Equals(input.IsEnabled)
                ) && 
                (
                    this.ExcludeUsers == input.ExcludeUsers ||
                    (this.ExcludeUsers != null &&
                    this.ExcludeUsers.Equals(input.ExcludeUsers))
                ) && 
                (
                    this.IsNotifyTaskEnabled == input.IsNotifyTaskEnabled ||
                    this.IsNotifyTaskEnabled.Equals(input.IsNotifyTaskEnabled)
                ) && 
                (
                    this.TaskEmailTemplate == input.TaskEmailTemplate ||
                    (this.TaskEmailTemplate != null &&
                    this.TaskEmailTemplate.Equals(input.TaskEmailTemplate))
                ) && 
                (
                    this.IsNotifyPrimaryContactEnabled == input.IsNotifyPrimaryContactEnabled ||
                    this.IsNotifyPrimaryContactEnabled.Equals(input.IsNotifyPrimaryContactEnabled)
                ) && 
                (
                    this.NotifyPrimaryContactTemplate == input.NotifyPrimaryContactTemplate ||
                    (this.NotifyPrimaryContactTemplate != null &&
                    this.NotifyPrimaryContactTemplate.Equals(input.NotifyPrimaryContactTemplate))
                ) && 
                (
                    this.IsNotifySecondaryContactEnabled == input.IsNotifySecondaryContactEnabled ||
                    this.IsNotifySecondaryContactEnabled.Equals(input.IsNotifySecondaryContactEnabled)
                ) && 
                (
                    this.NotifySecondaryContactTemplate == input.NotifySecondaryContactTemplate ||
                    (this.NotifySecondaryContactTemplate != null &&
                    this.NotifySecondaryContactTemplate.Equals(input.NotifySecondaryContactTemplate))
                ) && 
                (
                    this.Duration == input.Duration ||
                    this.Duration.Equals(input.Duration)
                ) && 
                (
                    this.DurationType == input.DurationType ||
                    this.DurationType.Equals(input.DurationType)
                ) && 
                (
                    this.IsReminderEnabled == input.IsReminderEnabled ||
                    this.IsReminderEnabled.Equals(input.IsReminderEnabled)
                ) && 
                (
                    this.ReminderProfileId == input.ReminderProfileId ||
                    (this.ReminderProfileId != null &&
                    this.ReminderProfileId.Equals(input.ReminderProfileId))
                ) && 
                (
                    this.EnableOnlyOtherContactElection == input.EnableOnlyOtherContactElection ||
                    this.EnableOnlyOtherContactElection.Equals(input.EnableOnlyOtherContactElection)
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
                if (this.ExcludeUsers != null)
                    hashCode = hashCode * 59 + this.ExcludeUsers.GetHashCode();
                hashCode = hashCode * 59 + this.IsNotifyTaskEnabled.GetHashCode();
                if (this.TaskEmailTemplate != null)
                    hashCode = hashCode * 59 + this.TaskEmailTemplate.GetHashCode();
                hashCode = hashCode * 59 + this.IsNotifyPrimaryContactEnabled.GetHashCode();
                if (this.NotifyPrimaryContactTemplate != null)
                    hashCode = hashCode * 59 + this.NotifyPrimaryContactTemplate.GetHashCode();
                hashCode = hashCode * 59 + this.IsNotifySecondaryContactEnabled.GetHashCode();
                if (this.NotifySecondaryContactTemplate != null)
                    hashCode = hashCode * 59 + this.NotifySecondaryContactTemplate.GetHashCode();
                hashCode = hashCode * 59 + this.Duration.GetHashCode();
                hashCode = hashCode * 59 + this.DurationType.GetHashCode();
                hashCode = hashCode * 59 + this.IsReminderEnabled.GetHashCode();
                if (this.ReminderProfileId != null)
                    hashCode = hashCode * 59 + this.ReminderProfileId.GetHashCode();
                hashCode = hashCode * 59 + this.EnableOnlyOtherContactElection.GetHashCode();
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
