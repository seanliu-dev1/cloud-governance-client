

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
    /// ChangeContactByUserSetting
    /// </summary>
    [DataContract(Name = "ChangeContactByUserSetting")]
    public partial class ChangeContactByUserSetting : IEquatable<ChangeContactByUserSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ChangeContactByUserSetting" /> class.
        /// </summary>
        /// <param name="currentUser">currentUser.</param>
        /// <param name="newUser">newUser.</param>
        /// <param name="alternativeUser">alternativeUser.</param>
        public ChangeContactByUserSetting(ApiUser currentUser = default(ApiUser), ApiUser newUser = default(ApiUser), ApiUser alternativeUser = default(ApiUser))
        {
            this.CurrentUser = currentUser;
            this.NewUser = newUser;
            this.AlternativeUser = alternativeUser;
        }

        /// <summary>
        /// Gets or Sets CurrentUser
        /// </summary>
        [DataMember(Name = "currentUser", EmitDefaultValue = true)]
        public ApiUser CurrentUser { get; set; }

        /// <summary>
        /// Gets or Sets NewUser
        /// </summary>
        [DataMember(Name = "newUser", EmitDefaultValue = true)]
        public ApiUser NewUser { get; set; }

        /// <summary>
        /// Gets or Sets AlternativeUser
        /// </summary>
        [DataMember(Name = "alternativeUser", EmitDefaultValue = true)]
        public ApiUser AlternativeUser { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ChangeContactByUserSetting {\n");
            sb.Append("  CurrentUser: ").Append(CurrentUser).Append("\n");
            sb.Append("  NewUser: ").Append(NewUser).Append("\n");
            sb.Append("  AlternativeUser: ").Append(AlternativeUser).Append("\n");
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
            return this.Equals(input as ChangeContactByUserSetting);
        }

        /// <summary>
        /// Returns true if ChangeContactByUserSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of ChangeContactByUserSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ChangeContactByUserSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CurrentUser == input.CurrentUser ||
                    (this.CurrentUser != null &&
                    this.CurrentUser.Equals(input.CurrentUser))
                ) && 
                (
                    this.NewUser == input.NewUser ||
                    (this.NewUser != null &&
                    this.NewUser.Equals(input.NewUser))
                ) && 
                (
                    this.AlternativeUser == input.AlternativeUser ||
                    (this.AlternativeUser != null &&
                    this.AlternativeUser.Equals(input.AlternativeUser))
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
                if (this.CurrentUser != null)
                    hashCode = hashCode * 59 + this.CurrentUser.GetHashCode();
                if (this.NewUser != null)
                    hashCode = hashCode * 59 + this.NewUser.GetHashCode();
                if (this.AlternativeUser != null)
                    hashCode = hashCode * 59 + this.AlternativeUser.GetHashCode();
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
