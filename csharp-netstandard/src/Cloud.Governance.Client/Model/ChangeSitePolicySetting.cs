

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Cloud.Governance.Client.Client.OpenAPIDateConverter;

namespace Cloud.Governance.Client.Model
{
    /// <summary>
    /// ChangeSitePolicySetting
    /// </summary>
    [DataContract(Name = "ChangeSitePolicySetting")]
    public partial class ChangeSitePolicySetting : IEquatable<ChangeSitePolicySetting>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets ChangePolicyAssignBy
        /// </summary>
        [DataMember(Name = "changePolicyAssignBy", EmitDefaultValue = false)]
        public AssignBy? ChangePolicyAssignBy { get; set; }
        /// <summary>
        /// Gets or Sets StartDateType
        /// </summary>
        [DataMember(Name = "startDateType", EmitDefaultValue = false)]
        public StartDateType? StartDateType { get; set; }
        /// <summary>
        /// Gets or Sets LeaseDurationType
        /// </summary>
        [DataMember(Name = "leaseDurationType", EmitDefaultValue = false)]
        public ApiDurationType? LeaseDurationType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ChangeSitePolicySetting" /> class.
        /// </summary>
        /// <param name="currentPolicy">currentPolicy.</param>
        /// <param name="allPolicies">allPolicies.</param>
        /// <param name="changePolicyAssignBy">changePolicyAssignBy.</param>
        /// <param name="startDateType">startDateType.</param>
        /// <param name="serviceSpecifyDate">serviceSpecifyDate.</param>
        /// <param name="isEnableLeaseExpired">isEnableLeaseExpired (default to false).</param>
        /// <param name="leaseDuration">leaseDuration (default to 0).</param>
        /// <param name="leaseDurationType">leaseDurationType.</param>
        /// <param name="currentStartDate">currentStartDate.</param>
        /// <param name="isAllowAutoCancel">isAllowAutoCancel (default to false).</param>
        public ChangeSitePolicySetting(GuidModel currentPolicy = default(GuidModel), List<GuidModel> allPolicies = default(List<GuidModel>), AssignBy? changePolicyAssignBy = default(AssignBy?), StartDateType? startDateType = default(StartDateType?), DateTime serviceSpecifyDate = default(DateTime), bool isEnableLeaseExpired = false, int leaseDuration = 0, ApiDurationType? leaseDurationType = default(ApiDurationType?), DateTime currentStartDate = default(DateTime), bool isAllowAutoCancel = false)
        {
            this.CurrentPolicy = currentPolicy;
            this.AllPolicies = allPolicies;
            this.ChangePolicyAssignBy = changePolicyAssignBy;
            this.StartDateType = startDateType;
            this.ServiceSpecifyDate = serviceSpecifyDate;
            this.IsEnableLeaseExpired = isEnableLeaseExpired;
            this.LeaseDuration = leaseDuration;
            this.LeaseDurationType = leaseDurationType;
            this.CurrentStartDate = currentStartDate;
            this.IsAllowAutoCancel = isAllowAutoCancel;
        }

        /// <summary>
        /// Gets or Sets CurrentPolicy
        /// </summary>
        [DataMember(Name = "currentPolicy", EmitDefaultValue = true)]
        public GuidModel CurrentPolicy { get; set; }

        /// <summary>
        /// Gets or Sets AllPolicies
        /// </summary>
        [DataMember(Name = "allPolicies", EmitDefaultValue = true)]
        public List<GuidModel> AllPolicies { get; set; }

        /// <summary>
        /// Gets or Sets ServiceSpecifyDate
        /// </summary>
        [DataMember(Name = "serviceSpecifyDate", EmitDefaultValue = false)]
        public DateTime ServiceSpecifyDate { get; set; }

        /// <summary>
        /// Gets or Sets IsEnableLeaseExpired
        /// </summary>
        [DataMember(Name = "isEnableLeaseExpired", EmitDefaultValue = false)]
        public bool IsEnableLeaseExpired { get; set; }

        /// <summary>
        /// Gets or Sets LeaseDuration
        /// </summary>
        [DataMember(Name = "leaseDuration", EmitDefaultValue = false)]
        public int LeaseDuration { get; set; }

        /// <summary>
        /// Gets or Sets CurrentStartDate
        /// </summary>
        [DataMember(Name = "currentStartDate", EmitDefaultValue = false)]
        public DateTime CurrentStartDate { get; set; }

        /// <summary>
        /// Gets or Sets IsAllowAutoCancel
        /// </summary>
        [DataMember(Name = "isAllowAutoCancel", EmitDefaultValue = false)]
        public bool IsAllowAutoCancel { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ChangeSitePolicySetting {\n");
            sb.Append("  CurrentPolicy: ").Append(CurrentPolicy).Append("\n");
            sb.Append("  AllPolicies: ").Append(AllPolicies).Append("\n");
            sb.Append("  ChangePolicyAssignBy: ").Append(ChangePolicyAssignBy).Append("\n");
            sb.Append("  StartDateType: ").Append(StartDateType).Append("\n");
            sb.Append("  ServiceSpecifyDate: ").Append(ServiceSpecifyDate).Append("\n");
            sb.Append("  IsEnableLeaseExpired: ").Append(IsEnableLeaseExpired).Append("\n");
            sb.Append("  LeaseDuration: ").Append(LeaseDuration).Append("\n");
            sb.Append("  LeaseDurationType: ").Append(LeaseDurationType).Append("\n");
            sb.Append("  CurrentStartDate: ").Append(CurrentStartDate).Append("\n");
            sb.Append("  IsAllowAutoCancel: ").Append(IsAllowAutoCancel).Append("\n");
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
            return this.Equals(input as ChangeSitePolicySetting);
        }

        /// <summary>
        /// Returns true if ChangeSitePolicySetting instances are equal
        /// </summary>
        /// <param name="input">Instance of ChangeSitePolicySetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ChangeSitePolicySetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CurrentPolicy == input.CurrentPolicy ||
                    (this.CurrentPolicy != null &&
                    this.CurrentPolicy.Equals(input.CurrentPolicy))
                ) && 
                (
                    this.AllPolicies == input.AllPolicies ||
                    this.AllPolicies != null &&
                    input.AllPolicies != null &&
                    this.AllPolicies.SequenceEqual(input.AllPolicies)
                ) && 
                (
                    this.ChangePolicyAssignBy == input.ChangePolicyAssignBy ||
                    this.ChangePolicyAssignBy.Equals(input.ChangePolicyAssignBy)
                ) && 
                (
                    this.StartDateType == input.StartDateType ||
                    this.StartDateType.Equals(input.StartDateType)
                ) && 
                (
                    this.ServiceSpecifyDate == input.ServiceSpecifyDate ||
                    (this.ServiceSpecifyDate != null &&
                    this.ServiceSpecifyDate.Equals(input.ServiceSpecifyDate))
                ) && 
                (
                    this.IsEnableLeaseExpired == input.IsEnableLeaseExpired ||
                    this.IsEnableLeaseExpired.Equals(input.IsEnableLeaseExpired)
                ) && 
                (
                    this.LeaseDuration == input.LeaseDuration ||
                    this.LeaseDuration.Equals(input.LeaseDuration)
                ) && 
                (
                    this.LeaseDurationType == input.LeaseDurationType ||
                    this.LeaseDurationType.Equals(input.LeaseDurationType)
                ) && 
                (
                    this.CurrentStartDate == input.CurrentStartDate ||
                    (this.CurrentStartDate != null &&
                    this.CurrentStartDate.Equals(input.CurrentStartDate))
                ) && 
                (
                    this.IsAllowAutoCancel == input.IsAllowAutoCancel ||
                    this.IsAllowAutoCancel.Equals(input.IsAllowAutoCancel)
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
                if (this.CurrentPolicy != null)
                    hashCode = hashCode * 59 + this.CurrentPolicy.GetHashCode();
                if (this.AllPolicies != null)
                    hashCode = hashCode * 59 + this.AllPolicies.GetHashCode();
                hashCode = hashCode * 59 + this.ChangePolicyAssignBy.GetHashCode();
                hashCode = hashCode * 59 + this.StartDateType.GetHashCode();
                if (this.ServiceSpecifyDate != null)
                    hashCode = hashCode * 59 + this.ServiceSpecifyDate.GetHashCode();
                hashCode = hashCode * 59 + this.IsEnableLeaseExpired.GetHashCode();
                hashCode = hashCode * 59 + this.LeaseDuration.GetHashCode();
                hashCode = hashCode * 59 + this.LeaseDurationType.GetHashCode();
                if (this.CurrentStartDate != null)
                    hashCode = hashCode * 59 + this.CurrentStartDate.GetHashCode();
                hashCode = hashCode * 59 + this.IsAllowAutoCancel.GetHashCode();
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
