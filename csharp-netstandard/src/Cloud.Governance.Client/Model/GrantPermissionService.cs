

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
    /// GrantPermissionService
    /// </summary>
    [DataContract(Name = "GrantPermissionService")]
    public partial class GrantPermissionService : IEquatable<GrantPermissionService>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets WelcomeEmailAssignBy
        /// </summary>
        [DataMember(Name = "welcomeEmailAssignBy", EmitDefaultValue = false)]
        public AssignBy? WelcomeEmailAssignBy { get; set; }
        /// <summary>
        /// Gets or Sets DepartmentAssignBy
        /// </summary>
        [DataMember(Name = "departmentAssignBy", EmitDefaultValue = false)]
        public AssignBy? DepartmentAssignBy { get; set; }
        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public ServiceType? Type { get; set; }
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public CommonStatus? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="GrantPermissionService" /> class.
        /// </summary>
        /// <param name="allowBreakPermissionInheritance">allowBreakPermissionInheritance (default to false).</param>
        /// <param name="scopeSettings">scopeSettings.</param>
        /// <param name="userLevelControlSettings">userLevelControlSettings.</param>
        /// <param name="permissionDurationSettings">permissionDurationSettings.</param>
        /// <param name="permissionSettings">permissionSettings.</param>
        /// <param name="defaultWelcomeEmailSettings">defaultWelcomeEmailSettings.</param>
        /// <param name="welcomeEmailAssignBy">welcomeEmailAssignBy.</param>
        /// <param name="requestTemplate">requestTemplate.</param>
        /// <param name="departmentAssignBy">departmentAssignBy.</param>
        /// <param name="metadatas">metadatas.</param>
        /// <param name="hideRequestSummary">hideRequestSummary (default to false).</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="type">type.</param>
        /// <param name="department">department.</param>
        /// <param name="loadDepartmentFromUps">loadDepartmentFromUps (default to false).</param>
        /// <param name="departments">departments.</param>
        /// <param name="serviceContact">serviceContact.</param>
        /// <param name="serviceAdminContact">serviceAdminContact.</param>
        /// <param name="approversContainManagerRole">approversContainManagerRole (default to false).</param>
        /// <param name="status">status.</param>
        /// <param name="showServiceInCatalog">showServiceInCatalog (default to false).</param>
        /// <param name="customActions">customActions.</param>
        /// <param name="approvalProcessId">approvalProcessId.</param>
        /// <param name="languageId">languageId (default to 0).</param>
        /// <param name="categoryId">categoryId.</param>
        public GrantPermissionService(bool allowBreakPermissionInheritance = false, ServiceScopeSettings scopeSettings = default(ServiceScopeSettings), UserLevelControlSettings userLevelControlSettings = default(UserLevelControlSettings), GrantPermissionServiceDurationSettings permissionDurationSettings = default(GrantPermissionServiceDurationSettings), GrantPermissionServicePermissionSettings permissionSettings = default(GrantPermissionServicePermissionSettings), WelcomeEmailSettings defaultWelcomeEmailSettings = default(WelcomeEmailSettings), AssignBy? welcomeEmailAssignBy = default(AssignBy?), GrantPermissionRequest requestTemplate = default(GrantPermissionRequest), AssignBy? departmentAssignBy = default(AssignBy?), List<CustomMetadata> metadatas = default(List<CustomMetadata>), bool hideRequestSummary = false, Guid id = default(Guid), string name = default(string), string description = default(string), ServiceType? type = default(ServiceType?), string department = default(string), bool loadDepartmentFromUps = false, List<string> departments = default(List<string>), ApiUser serviceContact = default(ApiUser), ApiUser serviceAdminContact = default(ApiUser), bool approversContainManagerRole = false, CommonStatus? status = default(CommonStatus?), bool showServiceInCatalog = false, CustomActionSettings customActions = default(CustomActionSettings), Guid approvalProcessId = default(Guid), int languageId = 0, string categoryId = default(string))
        {
            this.AllowBreakPermissionInheritance = allowBreakPermissionInheritance;
            this.ScopeSettings = scopeSettings;
            this.UserLevelControlSettings = userLevelControlSettings;
            this.PermissionDurationSettings = permissionDurationSettings;
            this.PermissionSettings = permissionSettings;
            this.DefaultWelcomeEmailSettings = defaultWelcomeEmailSettings;
            this.WelcomeEmailAssignBy = welcomeEmailAssignBy;
            this.RequestTemplate = requestTemplate;
            this.DepartmentAssignBy = departmentAssignBy;
            this.Metadatas = metadatas;
            this.HideRequestSummary = hideRequestSummary;
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Type = type;
            this.Department = department;
            this.LoadDepartmentFromUps = loadDepartmentFromUps;
            this.Departments = departments;
            this.ServiceContact = serviceContact;
            this.ServiceAdminContact = serviceAdminContact;
            this.ApproversContainManagerRole = approversContainManagerRole;
            this.Status = status;
            this.ShowServiceInCatalog = showServiceInCatalog;
            this.CustomActions = customActions;
            this.ApprovalProcessId = approvalProcessId;
            this.LanguageId = languageId;
            this.CategoryId = categoryId;
        }

        /// <summary>
        /// Gets or Sets AllowBreakPermissionInheritance
        /// </summary>
        [DataMember(Name = "allowBreakPermissionInheritance", EmitDefaultValue = false)]
        public bool AllowBreakPermissionInheritance { get; set; }

        /// <summary>
        /// Gets or Sets ScopeSettings
        /// </summary>
        [DataMember(Name = "scopeSettings", EmitDefaultValue = true)]
        public ServiceScopeSettings ScopeSettings { get; set; }

        /// <summary>
        /// Gets or Sets UserLevelControlSettings
        /// </summary>
        [DataMember(Name = "userLevelControlSettings", EmitDefaultValue = true)]
        public UserLevelControlSettings UserLevelControlSettings { get; set; }

        /// <summary>
        /// Gets or Sets PermissionDurationSettings
        /// </summary>
        [DataMember(Name = "permissionDurationSettings", EmitDefaultValue = true)]
        public GrantPermissionServiceDurationSettings PermissionDurationSettings { get; set; }

        /// <summary>
        /// Gets or Sets PermissionSettings
        /// </summary>
        [DataMember(Name = "permissionSettings", EmitDefaultValue = true)]
        public GrantPermissionServicePermissionSettings PermissionSettings { get; set; }

        /// <summary>
        /// Gets or Sets DefaultWelcomeEmailSettings
        /// </summary>
        [DataMember(Name = "defaultWelcomeEmailSettings", EmitDefaultValue = true)]
        public WelcomeEmailSettings DefaultWelcomeEmailSettings { get; set; }

        /// <summary>
        /// Gets or Sets RequestTemplate
        /// </summary>
        [DataMember(Name = "requestTemplate", EmitDefaultValue = true)]
        public GrantPermissionRequest RequestTemplate { get; set; }

        /// <summary>
        /// Gets or Sets Metadatas
        /// </summary>
        [DataMember(Name = "metadatas", EmitDefaultValue = true)]
        public List<CustomMetadata> Metadatas { get; set; }

        /// <summary>
        /// Gets or Sets HideRequestSummary
        /// </summary>
        [DataMember(Name = "hideRequestSummary", EmitDefaultValue = false)]
        public bool HideRequestSummary { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = true)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Department
        /// </summary>
        [DataMember(Name = "department", EmitDefaultValue = true)]
        public string Department { get; set; }

        /// <summary>
        /// Gets or Sets LoadDepartmentFromUps
        /// </summary>
        [DataMember(Name = "loadDepartmentFromUps", EmitDefaultValue = false)]
        public bool LoadDepartmentFromUps { get; set; }

        /// <summary>
        /// Gets or Sets Departments
        /// </summary>
        [DataMember(Name = "departments", EmitDefaultValue = true)]
        public List<string> Departments { get; set; }

        /// <summary>
        /// Gets or Sets ServiceContact
        /// </summary>
        [DataMember(Name = "serviceContact", EmitDefaultValue = true)]
        public ApiUser ServiceContact { get; set; }

        /// <summary>
        /// Gets or Sets ServiceAdminContact
        /// </summary>
        [DataMember(Name = "serviceAdminContact", EmitDefaultValue = true)]
        public ApiUser ServiceAdminContact { get; set; }

        /// <summary>
        /// Gets or Sets ApproversContainManagerRole
        /// </summary>
        [DataMember(Name = "approversContainManagerRole", EmitDefaultValue = false)]
        public bool ApproversContainManagerRole { get; set; }

        /// <summary>
        /// Gets or Sets ShowServiceInCatalog
        /// </summary>
        [DataMember(Name = "showServiceInCatalog", EmitDefaultValue = false)]
        public bool ShowServiceInCatalog { get; set; }

        /// <summary>
        /// Gets or Sets CustomActions
        /// </summary>
        [DataMember(Name = "customActions", EmitDefaultValue = true)]
        public CustomActionSettings CustomActions { get; set; }

        /// <summary>
        /// Gets or Sets ApprovalProcessId
        /// </summary>
        [DataMember(Name = "approvalProcessId", EmitDefaultValue = false)]
        public Guid ApprovalProcessId { get; set; }

        /// <summary>
        /// Gets or Sets LanguageId
        /// </summary>
        [DataMember(Name = "languageId", EmitDefaultValue = false)]
        public int LanguageId { get; set; }

        /// <summary>
        /// Gets or Sets CategoryId
        /// </summary>
        [DataMember(Name = "categoryId", EmitDefaultValue = true)]
        public string CategoryId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GrantPermissionService {\n");
            sb.Append("  AllowBreakPermissionInheritance: ").Append(AllowBreakPermissionInheritance).Append("\n");
            sb.Append("  ScopeSettings: ").Append(ScopeSettings).Append("\n");
            sb.Append("  UserLevelControlSettings: ").Append(UserLevelControlSettings).Append("\n");
            sb.Append("  PermissionDurationSettings: ").Append(PermissionDurationSettings).Append("\n");
            sb.Append("  PermissionSettings: ").Append(PermissionSettings).Append("\n");
            sb.Append("  DefaultWelcomeEmailSettings: ").Append(DefaultWelcomeEmailSettings).Append("\n");
            sb.Append("  WelcomeEmailAssignBy: ").Append(WelcomeEmailAssignBy).Append("\n");
            sb.Append("  RequestTemplate: ").Append(RequestTemplate).Append("\n");
            sb.Append("  DepartmentAssignBy: ").Append(DepartmentAssignBy).Append("\n");
            sb.Append("  Metadatas: ").Append(Metadatas).Append("\n");
            sb.Append("  HideRequestSummary: ").Append(HideRequestSummary).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Department: ").Append(Department).Append("\n");
            sb.Append("  LoadDepartmentFromUps: ").Append(LoadDepartmentFromUps).Append("\n");
            sb.Append("  Departments: ").Append(Departments).Append("\n");
            sb.Append("  ServiceContact: ").Append(ServiceContact).Append("\n");
            sb.Append("  ServiceAdminContact: ").Append(ServiceAdminContact).Append("\n");
            sb.Append("  ApproversContainManagerRole: ").Append(ApproversContainManagerRole).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  ShowServiceInCatalog: ").Append(ShowServiceInCatalog).Append("\n");
            sb.Append("  CustomActions: ").Append(CustomActions).Append("\n");
            sb.Append("  ApprovalProcessId: ").Append(ApprovalProcessId).Append("\n");
            sb.Append("  LanguageId: ").Append(LanguageId).Append("\n");
            sb.Append("  CategoryId: ").Append(CategoryId).Append("\n");
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
            return this.Equals(input as GrantPermissionService);
        }

        /// <summary>
        /// Returns true if GrantPermissionService instances are equal
        /// </summary>
        /// <param name="input">Instance of GrantPermissionService to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GrantPermissionService input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AllowBreakPermissionInheritance == input.AllowBreakPermissionInheritance ||
                    this.AllowBreakPermissionInheritance.Equals(input.AllowBreakPermissionInheritance)
                ) && 
                (
                    this.ScopeSettings == input.ScopeSettings ||
                    (this.ScopeSettings != null &&
                    this.ScopeSettings.Equals(input.ScopeSettings))
                ) && 
                (
                    this.UserLevelControlSettings == input.UserLevelControlSettings ||
                    (this.UserLevelControlSettings != null &&
                    this.UserLevelControlSettings.Equals(input.UserLevelControlSettings))
                ) && 
                (
                    this.PermissionDurationSettings == input.PermissionDurationSettings ||
                    (this.PermissionDurationSettings != null &&
                    this.PermissionDurationSettings.Equals(input.PermissionDurationSettings))
                ) && 
                (
                    this.PermissionSettings == input.PermissionSettings ||
                    (this.PermissionSettings != null &&
                    this.PermissionSettings.Equals(input.PermissionSettings))
                ) && 
                (
                    this.DefaultWelcomeEmailSettings == input.DefaultWelcomeEmailSettings ||
                    (this.DefaultWelcomeEmailSettings != null &&
                    this.DefaultWelcomeEmailSettings.Equals(input.DefaultWelcomeEmailSettings))
                ) && 
                (
                    this.WelcomeEmailAssignBy == input.WelcomeEmailAssignBy ||
                    this.WelcomeEmailAssignBy.Equals(input.WelcomeEmailAssignBy)
                ) && 
                (
                    this.RequestTemplate == input.RequestTemplate ||
                    (this.RequestTemplate != null &&
                    this.RequestTemplate.Equals(input.RequestTemplate))
                ) && 
                (
                    this.DepartmentAssignBy == input.DepartmentAssignBy ||
                    this.DepartmentAssignBy.Equals(input.DepartmentAssignBy)
                ) && 
                (
                    this.Metadatas == input.Metadatas ||
                    this.Metadatas != null &&
                    input.Metadatas != null &&
                    this.Metadatas.SequenceEqual(input.Metadatas)
                ) && 
                (
                    this.HideRequestSummary == input.HideRequestSummary ||
                    this.HideRequestSummary.Equals(input.HideRequestSummary)
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
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Department == input.Department ||
                    (this.Department != null &&
                    this.Department.Equals(input.Department))
                ) && 
                (
                    this.LoadDepartmentFromUps == input.LoadDepartmentFromUps ||
                    this.LoadDepartmentFromUps.Equals(input.LoadDepartmentFromUps)
                ) && 
                (
                    this.Departments == input.Departments ||
                    this.Departments != null &&
                    input.Departments != null &&
                    this.Departments.SequenceEqual(input.Departments)
                ) && 
                (
                    this.ServiceContact == input.ServiceContact ||
                    (this.ServiceContact != null &&
                    this.ServiceContact.Equals(input.ServiceContact))
                ) && 
                (
                    this.ServiceAdminContact == input.ServiceAdminContact ||
                    (this.ServiceAdminContact != null &&
                    this.ServiceAdminContact.Equals(input.ServiceAdminContact))
                ) && 
                (
                    this.ApproversContainManagerRole == input.ApproversContainManagerRole ||
                    this.ApproversContainManagerRole.Equals(input.ApproversContainManagerRole)
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.ShowServiceInCatalog == input.ShowServiceInCatalog ||
                    this.ShowServiceInCatalog.Equals(input.ShowServiceInCatalog)
                ) && 
                (
                    this.CustomActions == input.CustomActions ||
                    (this.CustomActions != null &&
                    this.CustomActions.Equals(input.CustomActions))
                ) && 
                (
                    this.ApprovalProcessId == input.ApprovalProcessId ||
                    (this.ApprovalProcessId != null &&
                    this.ApprovalProcessId.Equals(input.ApprovalProcessId))
                ) && 
                (
                    this.LanguageId == input.LanguageId ||
                    this.LanguageId.Equals(input.LanguageId)
                ) && 
                (
                    this.CategoryId == input.CategoryId ||
                    (this.CategoryId != null &&
                    this.CategoryId.Equals(input.CategoryId))
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
                hashCode = hashCode * 59 + this.AllowBreakPermissionInheritance.GetHashCode();
                if (this.ScopeSettings != null)
                    hashCode = hashCode * 59 + this.ScopeSettings.GetHashCode();
                if (this.UserLevelControlSettings != null)
                    hashCode = hashCode * 59 + this.UserLevelControlSettings.GetHashCode();
                if (this.PermissionDurationSettings != null)
                    hashCode = hashCode * 59 + this.PermissionDurationSettings.GetHashCode();
                if (this.PermissionSettings != null)
                    hashCode = hashCode * 59 + this.PermissionSettings.GetHashCode();
                if (this.DefaultWelcomeEmailSettings != null)
                    hashCode = hashCode * 59 + this.DefaultWelcomeEmailSettings.GetHashCode();
                hashCode = hashCode * 59 + this.WelcomeEmailAssignBy.GetHashCode();
                if (this.RequestTemplate != null)
                    hashCode = hashCode * 59 + this.RequestTemplate.GetHashCode();
                hashCode = hashCode * 59 + this.DepartmentAssignBy.GetHashCode();
                if (this.Metadatas != null)
                    hashCode = hashCode * 59 + this.Metadatas.GetHashCode();
                hashCode = hashCode * 59 + this.HideRequestSummary.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Department != null)
                    hashCode = hashCode * 59 + this.Department.GetHashCode();
                hashCode = hashCode * 59 + this.LoadDepartmentFromUps.GetHashCode();
                if (this.Departments != null)
                    hashCode = hashCode * 59 + this.Departments.GetHashCode();
                if (this.ServiceContact != null)
                    hashCode = hashCode * 59 + this.ServiceContact.GetHashCode();
                if (this.ServiceAdminContact != null)
                    hashCode = hashCode * 59 + this.ServiceAdminContact.GetHashCode();
                hashCode = hashCode * 59 + this.ApproversContainManagerRole.GetHashCode();
                hashCode = hashCode * 59 + this.Status.GetHashCode();
                hashCode = hashCode * 59 + this.ShowServiceInCatalog.GetHashCode();
                if (this.CustomActions != null)
                    hashCode = hashCode * 59 + this.CustomActions.GetHashCode();
                if (this.ApprovalProcessId != null)
                    hashCode = hashCode * 59 + this.ApprovalProcessId.GetHashCode();
                hashCode = hashCode * 59 + this.LanguageId.GetHashCode();
                if (this.CategoryId != null)
                    hashCode = hashCode * 59 + this.CategoryId.GetHashCode();
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
