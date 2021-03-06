# GrantPermissionService
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowBreakPermissionInheritance** | **Boolean** |  | [optional] [default to $false]
**ScopeSettings** | [**ServiceScopeSettings**](ServiceScopeSettings.md) |  | [optional] 
**UserLevelControlSettings** | [**UserLevelControlSettings**](UserLevelControlSettings.md) |  | [optional] 
**PermissionDurationSettings** | [**GrantPermissionServiceDurationSettings**](GrantPermissionServiceDurationSettings.md) |  | [optional] 
**PermissionSettings** | [**GrantPermissionServicePermissionSettings**](GrantPermissionServicePermissionSettings.md) |  | [optional] 
**DefaultWelcomeEmailSettings** | [**WelcomeEmailSettings**](WelcomeEmailSettings.md) |  | [optional] 
**WelcomeEmailAssignBy** | [**AssignBy**](AssignBy.md) |  | [optional] 
**RequestTemplate** | [**GrantPermissionRequest**](GrantPermissionRequest.md) |  | [optional] 
**DepartmentAssignBy** | [**AssignBy**](AssignBy.md) |  | [optional] 
**Metadatas** | [**CustomMetadata[]**](CustomMetadata.md) |  | [optional] 
**HideRequestSummary** | **Boolean** |  | [optional] [default to $false]
**Id** | **String** |  | [optional] 
**Name** | **String** |  | [optional] 
**Description** | **String** |  | [optional] 
**Type** | [**ServiceType**](ServiceType.md) |  | [optional] 
**Department** | **String** |  | [optional] 
**LoadDepartmentFromUps** | **Boolean** |  | [optional] [default to $false]
**Departments** | **String[]** |  | [optional] 
**ServiceContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**ServiceAdminContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**ApproversContainManagerRole** | **Boolean** |  | [optional] [default to $false]
**Status** | [**CommonStatus**](CommonStatus.md) |  | [optional] 
**ShowServiceInCatalog** | **Boolean** |  | [optional] [default to $false]
**CustomActions** | [**CustomActionSettings**](CustomActionSettings.md) |  | [optional] 
**ApprovalProcessId** | **String** |  | [optional] 
**LanguageId** | **Int32** |  | [optional] [default to 0]
**CategoryId** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GrantPermissionService = New-Cloud.Governance.ClientGrantPermissionService  -AllowBreakPermissionInheritance null `
 -ScopeSettings null `
 -UserLevelControlSettings null `
 -PermissionDurationSettings null `
 -PermissionSettings null `
 -DefaultWelcomeEmailSettings null `
 -WelcomeEmailAssignBy null `
 -RequestTemplate null `
 -DepartmentAssignBy null `
 -Metadatas null `
 -HideRequestSummary null `
 -Id null `
 -Name null `
 -Description null `
 -Type null `
 -Department null `
 -LoadDepartmentFromUps null `
 -Departments null `
 -ServiceContact null `
 -ServiceAdminContact null `
 -ApproversContainManagerRole null `
 -Status null `
 -ShowServiceInCatalog null `
 -CustomActions null `
 -ApprovalProcessId null `
 -LanguageId null `
 -CategoryId null
```

- Convert the resource to JSON
```powershell
$GrantPermissionService | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

