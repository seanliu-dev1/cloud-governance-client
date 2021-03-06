# TasksApi

All URIs are relative to {*Cloud_Governance_Modern_API_Endpoint*}

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-Task**](TasksApi.md#Approve-Task) | **POST** /tasks/{id}/approve | approve task
[**Edit-ArchiveGroupRequest**](TasksApi.md#Edit-ArchiveGroupRequest) | **PUT** /tasks/{id}/archivegroup | edit archive group request in task
[**Edit-ArchiveSiteRequest**](TasksApi.md#Edit-ArchiveSiteRequest) | **PUT** /tasks/{id}/archivesite | edit archive site request in task
[**Edit-ArchiveWebRequest**](TasksApi.md#Edit-ArchiveWebRequest) | **PUT** /tasks/{id}/archiveweb | edit archive web request in task
[**Edit-ChangeGroupPolicyRequest**](TasksApi.md#Edit-ChangeGroupPolicyRequest) | **PUT** /tasks/{id}/changegrouppolicy | edit change group policy request in task
[**Edit-ChangeGroupQuotaRequest**](TasksApi.md#Edit-ChangeGroupQuotaRequest) | **PUT** /tasks/{id}/changegroupquota | edit change group quota request in task
[**Edit-ChangeGroupRequest**](TasksApi.md#Edit-ChangeGroupRequest) | **PUT** /tasks/{id}/changegroup | edit create change group request
[**Edit-ChangeListSettingRequest**](TasksApi.md#Edit-ChangeListSettingRequest) | **PUT** /tasks/{id}/changelistsetting | edit change list setting request in task
[**Edit-ChangePermissionRequest**](TasksApi.md#Edit-ChangePermissionRequest) | **PUT** /tasks/{id}/changepermission | edit change permission request in task
[**Edit-ChangeSiteContactRequest**](TasksApi.md#Edit-ChangeSiteContactRequest) | **PUT** /tasks/{id}/changesite/adminorcontact | edit change site administrator/contact request
[**Edit-ChangeSitePolicyRequest**](TasksApi.md#Edit-ChangeSitePolicyRequest) | **PUT** /tasks/{id}/changesitepolicy | edit change site policy request in task
[**Edit-ChangeSiteQuotaRequest**](TasksApi.md#Edit-ChangeSiteQuotaRequest) | **PUT** /tasks/{id}/changesitequota | edit change site quota request in task
[**Edit-ChangeSiteSettingRequest**](TasksApi.md#Edit-ChangeSiteSettingRequest) | **PUT** /tasks/{id}/changesite/setting | edit change site setting request
[**Edit-ChangeWebContactRequest**](TasksApi.md#Edit-ChangeWebContactRequest) | **PUT** /tasks/{id}/changewebcontact | edit change web contact request in task
[**Edit-ChangeWebSettingRequest**](TasksApi.md#Edit-ChangeWebSettingRequest) | **PUT** /tasks/{id}/changewebsettings | edit change web setting request in task
[**Edit-ClonePermissionRequest**](TasksApi.md#Edit-ClonePermissionRequest) | **PUT** /tasks/{id}/clonepermission | edit clone permission request
[**Edit-ContentMoveRequest**](TasksApi.md#Edit-ContentMoveRequest) | **PUT** /tasks/{id}/contentmove | edit content move request
[**Edit-CreateGroupRequest**](TasksApi.md#Edit-CreateGroupRequest) | **PUT** /tasks/{id}/creategroup | edit create site group request
[**Edit-CreateGuestUserRequest**](TasksApi.md#Edit-CreateGuestUserRequest) | **PUT** /tasks/{id}/createguestuser | edit create guest user request in task
[**Edit-CreateListRequest**](TasksApi.md#Edit-CreateListRequest) | **PUT** /tasks/{id}/createlist | edit create list request in task
[**Edit-CreateSiteRequest**](TasksApi.md#Edit-CreateSiteRequest) | **PUT** /tasks/{id}/createsite | edit create site request
[**Edit-CreateWebRequest**](TasksApi.md#Edit-CreateWebRequest) | **PUT** /tasks/{id}/createweb | edit create web request in task
[**Edit-CustomRequest**](TasksApi.md#Edit-CustomRequest) | **PUT** /tasks/{id}/custom | edit custom request
[**Edit-DeleteGroupRequest**](TasksApi.md#Edit-DeleteGroupRequest) | **PUT** /tasks/{id}/deletegroup | edit delete change group request in task
[**Edit-DeleteSiteRequest**](TasksApi.md#Edit-DeleteSiteRequest) | **PUT** /tasks/{id}/deletesite | edit delete site request in task
[**Edit-DeleteWebRequest**](TasksApi.md#Edit-DeleteWebRequest) | **PUT** /tasks/{id}/deleteweb | edit delete web request in task
[**Edit-ExtendGroupRequest**](TasksApi.md#Edit-ExtendGroupRequest) | **PUT** /tasks/{id}/extendgroup | edit extend group request in task
[**Edit-ExtendSiteRequest**](TasksApi.md#Edit-ExtendSiteRequest) | **PUT** /tasks/{id}/extendsite | edit extend site request in task
[**Edit-GrantPermissionRequest**](TasksApi.md#Edit-GrantPermissionRequest) | **PUT** /tasks/{id}/grantpermission | edit grant permission request in task
[**Edit-LockSiteRequest**](TasksApi.md#Edit-LockSiteRequest) | **PUT** /tasks/{id}/locksite | edit lock site request
[**Edit-ManagePermissionRequest**](TasksApi.md#Edit-ManagePermissionRequest) | **PUT** /tasks/{id}/managepermission | edit manage permission request
[**Edit-RestoreGroupRequest**](TasksApi.md#Edit-RestoreGroupRequest) | **PUT** /tasks/{id}/restoregroup | edit restore group request in task
[**Edit-UnLockSiteRequest**](TasksApi.md#Edit-UnLockSiteRequest) | **PUT** /tasks/{id}/unlocksite | edit unlock site request
[**Get-MyTasks**](TasksApi.md#Get-MyTasks) | **GET** /tasks/my | get my tasks
[**Get-TaskByBatchId**](TasksApi.md#Get-TaskByBatchId) | **GET** /tasks/my/{batchid} | get task by batch id
[**Get-TaskById**](TasksApi.md#Get-TaskById) | **GET** /tasks/{id} | get task by id
[**Invoke-ReassignTask**](TasksApi.md#Invoke-ReassignTask) | **POST** /tasks/{id}/reassignto/{user} | reassign task
[**Deny-Task**](TasksApi.md#Deny-Task) | **POST** /tasks/{id}/reject | reject task
[**Invoke-RetryErrorTask**](TasksApi.md#Invoke-RetryErrorTask) | **POST** /tasks/{id}/retry | retry error task
[**Skip-ErrorTask**](TasksApi.md#Skip-ErrorTask) | **POST** /tasks/{id}/skip | skip error task


<a name="Approve-Task"></a>
# **Approve-Task**
> void Approve-Task<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CommentsParam] <PSCustomObject><br>

approve task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CommentsParam = (New-CommentsParam-Comments "Comments_example") # CommentsParam |  (optional)

# approve task
try {
     $Result = Approve-Task -Id $Id -CommentsParam $CommentsParam
} catch {
    Write-Host ("Exception occured when calling Approve-Task: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CommentsParam** | [**CommentsParam**](CommentsParam.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ArchiveGroupRequest"></a>
# **Edit-ArchiveGroupRequest**
> void Edit-ArchiveGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ArchiveGroupRequest] <PSCustomObject><br>

edit archive group request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ArchiveGroupRequest = (New-ArchiveGroupRequest-GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType (New-GroupObjectType) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @((New-RequestMetadata-Id "Id_example" -Name "Name_example" -BooleanValue $false -SingleLineOrMultipleLineValue "SingleLineOrMultipleLineValue_example" -UpsOrAzureAdValue (New-LookupValue-Tenant "Tenant_example" -Property "Property_example" -TargetUser (New-ApiUser-Id "Id_example" -LoginName "LoginName_example" -IsExternalUser (New-ExternalUserType) -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType (New-ApiUserType)) -UserPropertyValue "UserPropertyValue_example" -UserPropertyDisplayValue "UserPropertyDisplayValue_example") -TermsValue (New-TermsValue-TermStore (New-GuidModel-Id "Id_example" -Name "Name_example" -Description "Description_example") -TermGroup (New-GuidModel-Id "Id_example" -Name "Name_example" -Description "Description_example") -TermSet  -Value @()) -UserValue @((New-ApiUser-Id "Id_example" -LoginName "LoginName_example" -IsExternalUser (New-ExternalUserType) -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType (New-ApiUserType))) -LinkValue (New-LinkValue-Title "Title_example" -Address "Address_example") -ChoiceValue @("ChoiceValue_example") -LookupListValue (New-LookupListValue-ColumnType "ColumnType_example" -ColumnName "ColumnName_example" -Value "Value_example" -DisplayValue "DisplayValue_example") -Type (New-MetadataFieldType) -ValueString "ValueString_example" -Value "Value_example" -Action (New-MetadataActionType))) -TicketNumber 123 -Type (New-ServiceType) -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status (New-RequestStatus) -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ArchiveGroupRequest |  (optional)

# edit archive group request in task
try {
     $Result = Edit-ArchiveGroupRequest -Id $Id -ArchiveGroupRequest $ArchiveGroupRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ArchiveGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ArchiveGroupRequest** | [**ArchiveGroupRequest**](ArchiveGroupRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ArchiveSiteRequest"></a>
# **Edit-ArchiveSiteRequest**
> void Edit-ArchiveSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ArchiveSiteRequest] <PSCustomObject><br>

edit archive site request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ArchiveSiteRequest = (New-ArchiveSiteRequest-Action (New-SiteLifecycleActionType) -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @((New-RequestMetadata-Id "Id_example" -Name "Name_example" -BooleanValue $false -SingleLineOrMultipleLineValue "SingleLineOrMultipleLineValue_example" -UpsOrAzureAdValue (New-LookupValue-Tenant "Tenant_example" -Property "Property_example" -TargetUser  -UserPropertyValue "UserPropertyValue_example" -UserPropertyDisplayValue "UserPropertyDisplayValue_example") -TermsValue (New-TermsValue-TermStore  -TermGroup  -TermSet  -Value @()) -UserValue @() -LinkValue (New-LinkValue-Title "Title_example" -Address "Address_example") -ChoiceValue @("ChoiceValue_example") -LookupListValue (New-LookupListValue-ColumnType "ColumnType_example" -ColumnName "ColumnName_example" -Value "Value_example" -DisplayValue "DisplayValue_example") -Type (New-MetadataFieldType) -ValueString "ValueString_example" -Value "Value_example" -Action (New-MetadataActionType))) -TicketNumber 123 -Type (New-ServiceType) -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status (New-RequestStatus) -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ArchiveSiteRequest |  (optional)

# edit archive site request in task
try {
     $Result = Edit-ArchiveSiteRequest -Id $Id -ArchiveSiteRequest $ArchiveSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ArchiveSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ArchiveSiteRequest** | [**ArchiveSiteRequest**](ArchiveSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ArchiveWebRequest"></a>
# **Edit-ArchiveWebRequest**
> void Edit-ArchiveWebRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ArchiveWebLifecycleRequest] <PSCustomObject><br>

edit archive web request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ArchiveWebLifecycleRequest = (New-ArchiveWebLifecycleRequest-Action (New-WebLifecycleActionType) -WebId "WebId_example" -WebUrl "WebUrl_example" -WebRelativeUrl "WebRelativeUrl_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -ActionDescription "ActionDescription_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ArchiveWebLifecycleRequest |  (optional)

# edit archive web request in task
try {
     $Result = Edit-ArchiveWebRequest -Id $Id -ArchiveWebLifecycleRequest $ArchiveWebLifecycleRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ArchiveWebRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ArchiveWebLifecycleRequest** | [**ArchiveWebLifecycleRequest**](ArchiveWebLifecycleRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeGroupPolicyRequest"></a>
# **Edit-ChangeGroupPolicyRequest**
> void Edit-ChangeGroupPolicyRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeGroupPolicyRequest] <PSCustomObject><br>

edit change group policy request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeGroupPolicyRequest = (New-ChangeGroupPolicyRequest-Policy  -OriginalPolicy  -IsLeaseEnabled $false -ChangePolicyConfig (New-AssignBy) -StartDateType (New-StartDateType) -SpecifyStartDate Get-Date -GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType (New-GroupObjectType) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeGroupPolicyRequest |  (optional)

# edit change group policy request in task
try {
     $Result = Edit-ChangeGroupPolicyRequest -Id $Id -ChangeGroupPolicyRequest $ChangeGroupPolicyRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeGroupPolicyRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeGroupPolicyRequest** | [**ChangeGroupPolicyRequest**](ChangeGroupPolicyRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeGroupQuotaRequest"></a>
# **Edit-ChangeGroupQuotaRequest**
> void Edit-ChangeGroupQuotaRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeGroupQuotaRequest] <PSCustomObject><br>

edit change group quota request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeGroupQuotaRequest = (New-ChangeGroupQuotaRequest-GroupQuotaSize 123 -OriginalQuotaSize 123 -GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType  -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeGroupQuotaRequest |  (optional)

# edit change group quota request in task
try {
     $Result = Edit-ChangeGroupQuotaRequest -Id $Id -ChangeGroupQuotaRequest $ChangeGroupQuotaRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeGroupQuotaRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeGroupQuotaRequest** | [**ChangeGroupQuotaRequest**](ChangeGroupQuotaRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeGroupRequest"></a>
# **Edit-ChangeGroupRequest**
> void Edit-ChangeGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeGroupSettingRequest] <PSCustomObject><br>

edit create change group request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeGroupSettingRequest = (New-ChangeGroupSettingRequest-GroupId "GroupId_example" -GroupEmail "GroupEmail_example" -GroupName "GroupName_example" -OriginalGroupName "OriginalGroupName_example" -GroupDescription "GroupDescription_example" -OriginalGroupDescription "OriginalGroupDescription_example" -OriginalYammerGroupInfo "OriginalYammerGroupInfo_example" -PrimaryContact  -OriginalPrimaryContact  -SecondaryContact  -OriginalSecondaryContact  -GroupOwners @((New-GroupMembershipItem-LoginName "LoginName_example" -DisplayName "DisplayName_example" -AzureUserType "AzureUserType_example" -IsGroup $false -Action (New-GroupMembershipAction))) -GroupMembers @((New-GroupMembershipItem-LoginName "LoginName_example" -DisplayName "DisplayName_example" -AzureUserType "AzureUserType_example" -IsGroup $false -Action (New-GroupMembershipAction))) -IsDynamicMembership $false -DynamicMembershipRules @((New-DynamicGroupRuleInfo-Id "Id_example" -Order 123 -Relation (New-LogicalOperator) -Category (New-CategoryType) -MetadataId "MetadataId_example" -MetadataName "MetadataName_example" -MetadataValue "MetadataValue_example" -MetadataDisplayValue "MetadataDisplayValue_example" -MetadataValueAzureUserType "MetadataValueAzureUserType_example" -Condition (New-DynamicRuleCondition))) -EnabledSubscribe $false -OriginalEnabledSubscribe $false -EnabledOutsideSender $false -OriginalEnabledOutsideSender $false -HubSiteActionType (New-ChangeHubsiteActionType) -AssociateHubSiteId "AssociateHubSiteId_example" -AssociateHubSiteTitle "AssociateHubSiteTitle_example" -Classification "Classification_example" -OriginalClassification "OriginalClassification_example" -Sensitivity "Sensitivity_example" -OriginalSensitivity "OriginalSensitivity_example" -EnableTeams $false -OriginalEnableTeams $false -GroupMetadatas @() -OriginalGroupMetadata @() -ChangedDynamicGroupType (New-AddGroupMemberType) -YammerGroupInfo "YammerGroupInfo_example" -GroupObjectType  -NetworkId "NetworkId_example" -GroupObjectId "GroupObjectId_example" -EnableTeamCollaboration $false -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeGroupSettingRequest |  (optional)

# edit create change group request
try {
     $Result = Edit-ChangeGroupRequest -Id $Id -ChangeGroupSettingRequest $ChangeGroupSettingRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeGroupSettingRequest** | [**ChangeGroupSettingRequest**](ChangeGroupSettingRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeListSettingRequest"></a>
# **Edit-ChangeListSettingRequest**
> void Edit-ChangeListSettingRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeListSettingRequest] <PSCustomObject><br>

edit change list setting request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeListSettingRequest = (New-ChangeListSettingRequest-ObjectInfo (New-ChangeListSettingObjectInfo-SiteUrl "SiteUrl_example" -WebId "WebId_example" -WebUrl "WebUrl_example" -SiteId "SiteId_example" -ObjectUrl "ObjectUrl_example" -ObjectTitle "ObjectTitle_example") -ListTitle (New-StringChangedProperty-ChangeValue "ChangeValue_example" -OriginalValue "OriginalValue_example") -ListDescription (New-StringChangedProperty-ChangeValue "ChangeValue_example" -OriginalValue "OriginalValue_example") -NavigationSetting (New-BooleanChangedProperty-ChangeValue $false -OriginalValue $false) -VersionSetting (New-ListVersionSettingsChangedProperty-ChangeValue (New-ListVersionSettings-ListType (New-ListType) -EnableMajorVersions $false -EnableMajorAndMinorVersions $false -EnableMajorVersionLimit $false -MajorVersionLimit 123 -EnableMinorVersionLimit $false -MinorVersionsLimit 123 -RequireContentApproval $false) -OriginalValue (New-ListVersionSettings-ListType (New-ListType) -EnableMajorVersions $false -EnableMajorAndMinorVersions $false -EnableMajorVersionLimit $false -MajorVersionLimit 123 -EnableMinorVersionLimit $false -MinorVersionsLimit 123 -RequireContentApproval $false)) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeListSettingRequest |  (optional)

# edit change list setting request in task
try {
     $Result = Edit-ChangeListSettingRequest -Id $Id -ChangeListSettingRequest $ChangeListSettingRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeListSettingRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeListSettingRequest** | [**ChangeListSettingRequest**](ChangeListSettingRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangePermissionRequest"></a>
# **Edit-ChangePermissionRequest**
> void Edit-ChangePermissionRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangePermissionRequest] <PSCustomObject><br>

edit change permission request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangePermissionRequest = (New-ChangePermissionRequest-ObjectProperty (New-PermissionObjectProperty-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -WebId "WebId_example" -WebServerRelativeUrl "WebServerRelativeUrl_example" -ListTitle "ListTitle_example" -ObjectUrl "ObjectUrl_example" -IsInherit $false -InheritNodeType (New-TreeNodeType) -TopInheritUrl "TopInheritUrl_example" -CheckType (New-TreeNodeType)) -PermissionChangedType (New-PermissionChangedType) -IsManagedAllUsers $false -SelectedUsers @() -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangePermissionRequest |  (optional)

# edit change permission request in task
try {
     $Result = Edit-ChangePermissionRequest -Id $Id -ChangePermissionRequest $ChangePermissionRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangePermissionRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangePermissionRequest** | [**ChangePermissionRequest**](ChangePermissionRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeSiteContactRequest"></a>
# **Edit-ChangeSiteContactRequest**
> void Edit-ChangeSiteContactRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeSiteContactRequest] <PSCustomObject><br>

edit change site administrator/contact request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeSiteContactRequest = (New-ChangeSiteContactRequest-ChangeContactMethod (New-ChangeContactMethod) -ChangeByUrlSetting @((New-ChangeContactByUrlSetting-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -OriginalPrimaryContact  -NewPrimaryContact  -OriginalSecondaryContact  -NewSecondaryContact  -OriginalPrimaryAdministrator  -NewPrimaryAdministrator  -OriginalAdditionalAdministrators @() -NewAdditionalAdministrators @())) -ChangeByUserSetting (New-ChangeContactByUserSetting-CurrentUser  -NewUser  -AlternativeUser ) -SubRequests @((New-ChangeSiteContactSubRequest-Id "Id_example" -AssignTo @() -Reason "Reason_example" -Status 123 -StatusDescription "StatusDescription_example" -AdminContactSettings (New-ChangeContactByUrlSetting-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -OriginalPrimaryContact  -NewPrimaryContact  -OriginalSecondaryContact  -NewSecondaryContact  -OriginalPrimaryAdministrator  -NewPrimaryAdministrator  -OriginalAdditionalAdministrators @() -NewAdditionalAdministrators @()) -ProgressStatus (New-ApiRequestProgressStatus))) -IsServiceEnableChangeContact $false -IsServiceEnableChangeAdmin $false -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeSiteContactRequest |  (optional)

# edit change site administrator/contact request
try {
     $Result = Edit-ChangeSiteContactRequest -Id $Id -ChangeSiteContactRequest $ChangeSiteContactRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeSiteContactRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeSiteContactRequest** | [**ChangeSiteContactRequest**](ChangeSiteContactRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeSitePolicyRequest"></a>
# **Edit-ChangeSitePolicyRequest**
> void Edit-ChangeSitePolicyRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeSitePolicyRequest] <PSCustomObject><br>

edit change site policy request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeSitePolicyRequest = (New-ChangeSitePolicyRequest-Policy  -OriginalPolicy  -IsLeaseEnabled $false -ChangePolicyConfig (New-AssignBy) -StartDateType (New-StartDateType) -SpecifyStartDate Get-Date -Action (New-SiteLifecycleActionType) -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeSitePolicyRequest |  (optional)

# edit change site policy request in task
try {
     $Result = Edit-ChangeSitePolicyRequest -Id $Id -ChangeSitePolicyRequest $ChangeSitePolicyRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeSitePolicyRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeSitePolicyRequest** | [**ChangeSitePolicyRequest**](ChangeSitePolicyRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeSiteQuotaRequest"></a>
# **Edit-ChangeSiteQuotaRequest**
> void Edit-ChangeSiteQuotaRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeSiteQuotaRequest] <PSCustomObject><br>

edit change site quota request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeSiteQuotaRequest = (New-ChangeSiteQuotaRequest-QuotaSize 123 -Action  -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeSiteQuotaRequest |  (optional)

# edit change site quota request in task
try {
     $Result = Edit-ChangeSiteQuotaRequest -Id $Id -ChangeSiteQuotaRequest $ChangeSiteQuotaRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeSiteQuotaRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeSiteQuotaRequest** | [**ChangeSiteQuotaRequest**](ChangeSiteQuotaRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeSiteSettingRequest"></a>
# **Edit-ChangeSiteSettingRequest**
> void Edit-ChangeSiteSettingRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeSiteSettingRequest] <PSCustomObject><br>

edit change site setting request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeSiteSettingRequest = (New-ChangeSiteSettingRequest-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -SiteTitleSetting  -SiteDescriptionSetting  -EnableChangedMetadata $false -ChangedMetadatas @() -OriginalSiteMetadatas @() -DeploymentPlanName "DeploymentPlanName_example" -HubSiteSettings (New-HubSiteChangedSettings-Enabled $false -IsModernSite $false -Action (New-ChangeHubsiteActionType) -AssociatedHubSiteId "AssociatedHubSiteId_example" -AssociatedHubSiteTitle "AssociatedHubSiteTitle_example") -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeSiteSettingRequest |  (optional)

# edit change site setting request
try {
     $Result = Edit-ChangeSiteSettingRequest -Id $Id -ChangeSiteSettingRequest $ChangeSiteSettingRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeSiteSettingRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeSiteSettingRequest** | [**ChangeSiteSettingRequest**](ChangeSiteSettingRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeWebContactRequest"></a>
# **Edit-ChangeWebContactRequest**
> void Edit-ChangeWebContactRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeWebContactRequest] <PSCustomObject><br>

edit change web contact request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeWebContactRequest = (New-ChangeWebContactRequest-ChangedMethod (New-ChangeContactMethod) -ChangedByUserSetting (New-ChangeContactByUserSetting-CurrentUser  -NewUser  -AlternativeUser ) -ChangedByUrlItems @((New-ChangeWebContactByUrlSetting-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -WebId "WebId_example" -WebUrl "WebUrl_example" -PrimaryContact (New-ApiUserChangedProperty-ChangeValue  -OriginalValue ) -SecondaryContact (New-ApiUserChangedProperty-ChangeValue  -OriginalValue ))) -SubRequests @((New-ChangeWebContactSubRequest-Id "Id_example" -AssignTo  -Reason "Reason_example" -Status 123 -StatusDescription "StatusDescription_example" -ProgressStatus (New-ApiRequestProgressStatus) -ContactChangeSettings (New-ChangeWebContactByUrlSetting-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -WebId "WebId_example" -WebUrl "WebUrl_example" -PrimaryContact  -SecondaryContact ))) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeWebContactRequest |  (optional)

# edit change web contact request in task
try {
     $Result = Edit-ChangeWebContactRequest -Id $Id -ChangeWebContactRequest $ChangeWebContactRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeWebContactRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeWebContactRequest** | [**ChangeWebContactRequest**](ChangeWebContactRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ChangeWebSettingRequest"></a>
# **Edit-ChangeWebSettingRequest**
> void Edit-ChangeWebSettingRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ChangeWebSettingRequest] <PSCustomObject><br>

edit change web setting request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ChangeWebSettingRequest = (New-ChangeWebSettingRequest-Url (New-ChangeWebSPObject-SiteUrl "SiteUrl_example" -WebUrl "WebUrl_example" -SiteId "SiteId_example" -WebId "WebId_example") -ChangedTitle  -ChangedDescription  -ChangedMetadata (New-RequestMetadataListChangedProperty-ChangeValue @() -OriginalValue @()) -DeploymentPlanName "DeploymentPlanName_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ChangeWebSettingRequest |  (optional)

# edit change web setting request in task
try {
     $Result = Edit-ChangeWebSettingRequest -Id $Id -ChangeWebSettingRequest $ChangeWebSettingRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ChangeWebSettingRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ChangeWebSettingRequest** | [**ChangeWebSettingRequest**](ChangeWebSettingRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ClonePermissionRequest"></a>
# **Edit-ClonePermissionRequest**
> void Edit-ClonePermissionRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ClonePermissionRequest] <PSCustomObject><br>

edit clone permission request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ClonePermissionRequest = (New-ClonePermissionRequest-Urls @("Urls_example") -SourceUser  -TargetUser  -CloneOption (New-ClonePermissionOption) -AdditionalCloneOption (New-ClonePermissionAdditionalOption) -EnabledRemoveExplicitPermission $false -EnabledRemoveUserFromSPGroup $false -EnabledDeleteUserPermission $false -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ClonePermissionRequest |  (optional)

# edit clone permission request
try {
     $Result = Edit-ClonePermissionRequest -Id $Id -ClonePermissionRequest $ClonePermissionRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ClonePermissionRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ClonePermissionRequest** | [**ClonePermissionRequest**](ClonePermissionRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ContentMoveRequest"></a>
# **Edit-ContentMoveRequest**
> void Edit-ContentMoveRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ContentMoveRequest] <PSCustomObject><br>

edit content move request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ContentMoveRequest = (New-ContentMoveRequest-Method (New-ContentMoveMethod) -CopySettings (New-CopyMoveSetting-IsMigrateConfiguration $false -IsKeepLookAndFeel $false -ColumnsAndContentConflictResolution (New-ItemConflictResolutionType) -IsMigrateSecurity $false -IsMigrateColumnsAndContentTypes $false -IsMigrateContent $false -IsMigrateContentIncludeListAttachment $false) -MoveSettings (New-CopyMoveSetting-IsMigrateConfiguration $false -IsKeepLookAndFeel $false -ColumnsAndContentConflictResolution (New-ItemConflictResolutionType) -IsMigrateSecurity $false -IsMigrateColumnsAndContentTypes $false -IsMigrateContent $false -IsMigrateContentIncludeListAttachment $false) -CommonSettings (New-ContentMoveCommonSetting-IsIncludeVersions $false -IsIncludeWorkflowDefinition $false -IsDisableInformationRightsManagement $false -IsPreserveNullColumnValues $false -IsKeepModifiedByAndModifiedTime $false -ProfileMappings (New-ContentMoveProfileMappings-ColumnMapping  -ContentTypeMapping  -UserMapping  -LanguageMapping ) -BackupSettings (New-BackupEnvironmentSetting-IsBackupSource $false -IsBackupDestination $false -StoragePolicy ) -ConflictResolutionSettings (New-ConflictResolutionSetting-ContainerConflictSolution (New-ConflictSolutionType) -IsCheckLowerObject $false -IsEnableContentConflictResolution $false -ContentConflictSolution (New-ConflictSolutionType) -AppConflictSolution ) -FilterPolicy  -DeleteType (New-DeleteType) -IsDeleteCheckedFiles $false) -ObjectMappings @((New-ContentMoveSPObjectMapping-Source (New-ContentMoveSPObject-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -Title "Title_example" -FullUrl "FullUrl_example" -Type (New-NodeType)) -Destination (New-ContentMoveSPObject-SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -Title "Title_example" -FullUrl "FullUrl_example" -Type (New-NodeType)) -Action (New-ContentMoveAction))) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ContentMoveRequest |  (optional)

# edit content move request
try {
     $Result = Edit-ContentMoveRequest -Id $Id -ContentMoveRequest $ContentMoveRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ContentMoveRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ContentMoveRequest** | [**ContentMoveRequest**](ContentMoveRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CreateGroupRequest"></a>
# **Edit-CreateGroupRequest**
> void Edit-CreateGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CreateGroupRequest] <PSCustomObject><br>

edit create site group request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CreateGroupRequest = (New-CreateGroupRequest-GroupType (New-CreateGroupType) -GroupId "GroupId_example" -GroupIdWithoutPrefixSuffix "GroupIdWithoutPrefixSuffix_example" -GroupName "GroupName_example" -GroupNameWithoutPrefixSuffix "GroupNameWithoutPrefixSuffix_example" -GroupEmail "GroupEmail_example" -Policy "Policy_example" -GroupDescription "GroupDescription_example" -Owners @() -Members @() -Privacy $false -Subscribe $false -OutsideSender $false -EnableTeamCollaboration $false -Language "Language_example" -Classification "Classification_example" -Sensitivity "Sensitivity_example" -Links (New-GroupLinks-GroupSiteLink "GroupSiteLink_example" -GroupPlannerLink "GroupPlannerLink_example" -GroupFilesLink "GroupFilesLink_example" -GroupConversationsLink "GroupConversationsLink_example" -GroupNotebookLink "GroupNotebookLink_example" -YammerGroupLink "YammerGroupLink_example") -LeasePeriodSettings (New-GroupLeasePeriodSettings-IsEnabled $false -LeaseType (New-GroupLeasePeriodType) -DurationType (New-ApiDurationType) -DurationInterval 123 -LeaseExpirationDate Get-Date) -TeamsSettings (New-RequestTeamsSettings-AllowMembersCreateUpdateChannels $false -AllowMembersCreatePrivateChannels $false -AllowMemberDeleteRestoreChannels $false -AllowMembersAddRemoveApps $false -AllowMembersCreateUpdateRemoveTabs $false -AllowMembersCreateUpdateRemoveConnections $false -AllowMembersDeleteMessages $false -AllowMembersEditMessages $false -AllowGuestsCreateUpdateChannels $false -AllowGuestsDeleteChannels $false -AllowMentionsTeam $false -AllowMentionsChannel $false -EnableGiphy $false -EnableStickersAndMemes $false -EnableCustomMemes $false -GiphyRatingType (New-GiphyRatingType)) -AppliedSiteDesignId "AppliedSiteDesignId_example" -PrimaryContact  -SecondaryContact  -EnableGroupMembershipHidden $false -EnableAssignedMembership $false -EnableDynamicMembership $false -TemplateSettings (New-TeamsTemplateSettings-EnableCreateTeamFromScratch $false -EnableCreateTeamFromExistTeam $false -EnableCreateTeamFromTeamTemplate $false -SelectedTemplate  -SelectedMSTemplate (New-StringModel-Id "Id_example" -Name "Name_example") -TeamTemplates @((New-TextModel-Description "Description_example" -Id "Id_example" -Name "Name_example")) -EnableCloneChannels $false -EnableCloneApps $false -EnableCloneTabs $false -EnableCloneMembers $false -EnableCloneTeamSetting $false -EnableCloneTeamPrivacy $false -EnableCloneTeamClassification $false) -DynamicMembershipRules @((New-DynamicGroupRuleInfo-Id "Id_example" -Order 123 -Relation (New-LogicalOperator) -Category (New-CategoryType) -MetadataId "MetadataId_example" -MetadataName "MetadataName_example" -MetadataValue "MetadataValue_example" -MetadataDisplayValue "MetadataDisplayValue_example" -MetadataValueAzureUserType "MetadataValueAzureUserType_example" -Condition (New-DynamicRuleCondition))) -MultiGeoLocation (New-GeoLocationBase-Name "Name_example" -DisplayName "DisplayName_example") -HubSiteSettings (New-HubSiteSettings-Enabled $false -Action (New-ConvertHubSiteActionType) -AssociatedHubSiteId "AssociatedHubSiteId_example" -AssociatedHubSiteTitle "AssociatedHubSiteTitle_example") -YammerGroupInfo "YammerGroupInfo_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # CreateGroupRequest |  (optional)

# edit create site group request
try {
     $Result = Edit-CreateGroupRequest -Id $Id -CreateGroupRequest $CreateGroupRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CreateGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CreateGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CreateGuestUserRequest"></a>
# **Edit-CreateGuestUserRequest**
> void Edit-CreateGuestUserRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CreateGuestUserRequest] <PSCustomObject><br>

edit create guest user request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CreateGuestUserRequest = (New-CreateGuestUserRequest-UserProperties (New-GuestUserPropertyModel-DisplayName "DisplayName_example" -FirstName "FirstName_example" -LastName "LastName_example" -UserName "UserName_example" -UsageLocation "UsageLocation_example" -JobTitle "JobTitle_example" -JobDepartment "JobDepartment_example") -WelcomeEmailMessage "WelcomeEmailMessage_example" -PrimaryContact  -SecondaryContact  -InviteGroups @() -OneTimeSettings (New-GuestUserRequestOneTimeRenewalSettingModel-Option (New-OneTimeRenewalOption) -Duration 123 -DurationType (New-ApiDurationType) -StartTime Get-Date) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # CreateGuestUserRequest |  (optional)

# edit create guest user request in task
try {
     $Result = Edit-CreateGuestUserRequest -Id $Id -CreateGuestUserRequest $CreateGuestUserRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CreateGuestUserRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CreateGuestUserRequest** | [**CreateGuestUserRequest**](CreateGuestUserRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CreateListRequest"></a>
# **Edit-CreateListRequest**
> void Edit-CreateListRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CreateListRequest] <PSCustomObject><br>

edit create list request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CreateListRequest = (New-CreateListRequest-ListTitle "ListTitle_example" -ListName "ListName_example" -ListDescription "ListDescription_example" -ParentObject (New-CreateListSPObject-ParentUrl "ParentUrl_example" -SiteUrl "SiteUrl_example" -SiteId "SiteId_example") -ListTemplate "ListTemplate_example" -EnableNavigation $false -ListType  -VersionSettings  -PermissionSettings (New-ListPermissionSettings-StopInheritingPermissions $false -UserPermissions @((New-RequestUserWithPermissions-User  -PermissionLevels @((New-PermissionLevel-Id "Id_example" -IdInSharePoint 123 -Name "Name_example" -Description "Description_example" -IsExcluded $false -Type 123)))) -GroupPermissions @((New-RequestGroupWithPermissions-Name "Name_example" -Description "Description_example" -Users @((New-GroupUser-IsEnforce $false -IsHide $false -Id "Id_example" -LoginName "LoginName_example" -IsExternalUser  -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType )) -PermissionLevels @((New-PermissionLevel-Id "Id_example" -IdInSharePoint 123 -Name "Name_example" -Description "Description_example" -IsExcluded $false -Type 123)) -GroupOwner  -GroupOwnerType (New-GroupOwnerType) -BuildInGroupType (New-SharePointBuildInGroupType)))) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # CreateListRequest |  (optional)

# edit create list request in task
try {
     $Result = Edit-CreateListRequest -Id $Id -CreateListRequest $CreateListRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CreateListRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CreateListRequest** | [**CreateListRequest**](CreateListRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CreateSiteRequest"></a>
# **Edit-CreateSiteRequest**
> void Edit-CreateSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CreateSiteRequest] <PSCustomObject><br>

edit create site request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CreateSiteRequest = (New-CreateSiteRequest-SiteTitle "SiteTitle_example" -SiteDescription "SiteDescription_example" -SiteUrl (New-SiteUrl-Root "Root_example" -ManagedPath "ManagedPath_example" -Name "Name_example") -PolicyId "PolicyId_example" -TimeZone 123 -Language 123 -Template "Template_example" -DeploymentManagerPlanName "DeploymentManagerPlanName_example" -PrimaryAdmin  -AdditionalAdmins @() -PrimaryContact  -SecondaryContact  -SiteDesign (New-StringModel-Id "Id_example" -Name "Name_example") -TeamSiteDesign "TeamSiteDesign_example" -Classification "Classification_example" -HubSiteSettings (New-HubSiteSettings-Enabled $false -Action (New-ConvertHubSiteActionType) -AssociatedHubSiteId "AssociatedHubSiteId_example" -AssociatedHubSiteTitle "AssociatedHubSiteTitle_example") -UserPermissions @((New-RequestUserWithPermissions-User  -PermissionLevels @())) -GroupPermissions @((New-RequestGroupWithPermissions-Name "Name_example" -Description "Description_example" -Users @((New-GroupUser-IsEnforce $false -IsHide $false -Id "Id_example" -LoginName "LoginName_example" -IsExternalUser  -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType )) -PermissionLevels @() -GroupOwner  -GroupOwnerType (New-GroupOwnerType) -BuildInGroupType (New-SharePointBuildInGroupType))) -YammerGroupSettings (New-YammerGroupRequestSettings-NameOrId "NameOrId_example" -Description "Description_example" -Type (New-YammerGroupType) -JoinType (New-YammerGroupJoinType) -IsListInDirectory $false -IsGroupAlreadyExisted $false) -LeasePeriodSettings (New-SiteLeasePeriodRequestSettings-LeaseInterval 123 -LeaseDurationType  -LeaseWarningInterval 123 -LeaseWarningDurationType ) -MultiGeoLocation (New-GeoLocationBase-Name "Name_example" -DisplayName "DisplayName_example") -InputTitle "InputTitle_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # CreateSiteRequest |  (optional)

# edit create site request
try {
     $Result = Edit-CreateSiteRequest -Id $Id -CreateSiteRequest $CreateSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CreateSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CreateSiteRequest** | [**CreateSiteRequest**](CreateSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CreateWebRequest"></a>
# **Edit-CreateWebRequest**
> void Edit-CreateWebRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CreateWebRequest] <PSCustomObject><br>

edit create web request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CreateWebRequest = (New-CreateWebRequest-WebName "WebName_example" -WebTitle "WebTitle_example" -WebDescription "WebDescription_example" -WebLanguage (New-IntModel-Id 123 -Name "Name_example" -Description "Description_example") -WebTemplate "WebTemplate_example" -ParentSiteUrl "ParentSiteUrl_example" -ParentWebUrl "ParentWebUrl_example" -PrimaryContact  -SecondaryContact  -UserPermissions @() -GroupPermissions @() -YammerGroupSettings (New-YammerGroupRequestSettings-NameOrId "NameOrId_example" -Description "Description_example" -Type (New-YammerGroupType) -JoinType (New-YammerGroupJoinType) -IsListInDirectory $false -IsGroupAlreadyExisted $false) -IsOnQuickLaunch $false -IsOnTopLinkBar $false -IsInheritance $false -DeploymentManagerPlanName "DeploymentManagerPlanName_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # CreateWebRequest |  (optional)

# edit create web request in task
try {
     $Result = Edit-CreateWebRequest -Id $Id -CreateWebRequest $CreateWebRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CreateWebRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CreateWebRequest** | [**CreateWebRequest**](CreateWebRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-CustomRequest"></a>
# **Edit-CustomRequest**
> void Edit-CustomRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ApiRequest] <PSCustomObject><br>

edit custom request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ApiRequest = (New-ApiRequest-Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ApiRequest |  (optional)

# edit custom request
try {
     $Result = Edit-CustomRequest -Id $Id -ApiRequest $ApiRequest
} catch {
    Write-Host ("Exception occured when calling Edit-CustomRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ApiRequest** | [**ApiRequest**](ApiRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-DeleteGroupRequest"></a>
# **Edit-DeleteGroupRequest**
> void Edit-DeleteGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-DeleteGroupRequest] <PSCustomObject><br>

edit delete change group request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$DeleteGroupRequest = (New-DeleteGroupRequest-GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType  -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # DeleteGroupRequest |  (optional)

# edit delete change group request in task
try {
     $Result = Edit-DeleteGroupRequest -Id $Id -DeleteGroupRequest $DeleteGroupRequest
} catch {
    Write-Host ("Exception occured when calling Edit-DeleteGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **DeleteGroupRequest** | [**DeleteGroupRequest**](DeleteGroupRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-DeleteSiteRequest"></a>
# **Edit-DeleteSiteRequest**
> void Edit-DeleteSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-DeleteSiteRequest] <PSCustomObject><br>

edit delete site request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$DeleteSiteRequest = (New-DeleteSiteRequest-Action  -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # DeleteSiteRequest |  (optional)

# edit delete site request in task
try {
     $Result = Edit-DeleteSiteRequest -Id $Id -DeleteSiteRequest $DeleteSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-DeleteSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **DeleteSiteRequest** | [**DeleteSiteRequest**](DeleteSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-DeleteWebRequest"></a>
# **Edit-DeleteWebRequest**
> void Edit-DeleteWebRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-DeleteWebLifecycleRequest] <PSCustomObject><br>

edit delete web request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$DeleteWebLifecycleRequest = (New-DeleteWebLifecycleRequest-Action (New-WebLifecycleActionType) -WebId "WebId_example" -WebUrl "WebUrl_example" -WebRelativeUrl "WebRelativeUrl_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -ActionDescription "ActionDescription_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # DeleteWebLifecycleRequest |  (optional)

# edit delete web request in task
try {
     $Result = Edit-DeleteWebRequest -Id $Id -DeleteWebLifecycleRequest $DeleteWebLifecycleRequest
} catch {
    Write-Host ("Exception occured when calling Edit-DeleteWebRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **DeleteWebLifecycleRequest** | [**DeleteWebLifecycleRequest**](DeleteWebLifecycleRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ExtendGroupRequest"></a>
# **Edit-ExtendGroupRequest**
> void Edit-ExtendGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExtendGroupRequest] <PSCustomObject><br>

edit extend group request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ExtendGroupRequest = (New-ExtendGroupRequest-ExtendDuration 123 -ExtendDurationType  -GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType  -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ExtendGroupRequest |  (optional)

# edit extend group request in task
try {
     $Result = Edit-ExtendGroupRequest -Id $Id -ExtendGroupRequest $ExtendGroupRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ExtendGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ExtendGroupRequest** | [**ExtendGroupRequest**](ExtendGroupRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ExtendSiteRequest"></a>
# **Edit-ExtendSiteRequest**
> void Edit-ExtendSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExtendSiteRequest] <PSCustomObject><br>

edit extend site request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ExtendSiteRequest = (New-ExtendSiteRequest-ExtendDuration 123 -ExtendDurationType  -Action  -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ExtendSiteRequest |  (optional)

# edit extend site request in task
try {
     $Result = Edit-ExtendSiteRequest -Id $Id -ExtendSiteRequest $ExtendSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ExtendSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ExtendSiteRequest** | [**ExtendSiteRequest**](ExtendSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-GrantPermissionRequest"></a>
# **Edit-GrantPermissionRequest**
> void Edit-GrantPermissionRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-GrantPermissionRequest] <PSCustomObject><br>

edit grant permission request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$GrantPermissionRequest = (New-GrantPermissionRequest-Url (New-GrantPermissionSPObject-WebId "WebId_example" -SiteId "SiteId_example" -WebServerRelativeUrl "WebServerRelativeUrl_example" -ListTitle "ListTitle_example" -TopInheritUrl "TopInheritUrl_example" -InheritNodeType  -IsInheritedPermission $false -Id "Id_example" -Title "Title_example" -FullUrl "FullUrl_example" -Type ) -PermissionSettings (New-GrantPermissionRequestPermissionSettings-IsBreakInheritance $false -IsGrantPermissionDirectly $false -SelectedSPGroup (New-GrantPermissionGroup-Id 123 -Name "Name_example" -DisplayName "DisplayName_example" -PermissionIds @("PermissionIds_example") -Description "Description_example") -SelectedPermissionLevels @((New-IntModel-Id 123 -Name "Name_example" -Description "Description_example"))) -PermissionDurationSettings (New-GrantPermissionRequestDurationSettings-IsGrantTemporaryPermission $false -IsGrantPermissionLevel $false -ExpirationType (New-ExpirationType) -DurationInterval 123 -DurationDateType (New-DurationDateType) -StartTime Get-Date -EndTime Get-Date) -SelectedUsers @((New-SharingEnabledUser-IsSharePointGroup $false -IsGuestUser $false -IsGuestUserExistsInOrganization $false -Id "Id_example" -LoginName "LoginName_example" -IsExternalUser  -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType )) -ExternalUserSharingSettings (New-ExternalUserSharingSettings-Enabled $false -SharingType (New-ExternalUserSharingType) -AnonymousLinkSettings (New-AnonymousLinkSettings-Permisssion (New-AnnoymouslinkPermissions) -ExpirationDate Get-Date)) -WelcomeEmailSettings (New-WelcomeEmailSettings-Enabled $false -Subject "Subject_example" -PersonalMessage "PersonalMessage_example") -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # GrantPermissionRequest |  (optional)

# edit grant permission request in task
try {
     $Result = Edit-GrantPermissionRequest -Id $Id -GrantPermissionRequest $GrantPermissionRequest
} catch {
    Write-Host ("Exception occured when calling Edit-GrantPermissionRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **GrantPermissionRequest** | [**GrantPermissionRequest**](GrantPermissionRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-LockSiteRequest"></a>
# **Edit-LockSiteRequest**
> void Edit-LockSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-LockSiteRequest] <PSCustomObject><br>

edit lock site request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$LockSiteRequest = (New-LockSiteRequest-LockType (New-SiteLockType) -LockTypeDescription "LockTypeDescription_example" -Action  -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # LockSiteRequest |  (optional)

# edit lock site request
try {
     $Result = Edit-LockSiteRequest -Id $Id -LockSiteRequest $LockSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-LockSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **LockSiteRequest** | [**LockSiteRequest**](LockSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-ManagePermissionRequest"></a>
# **Edit-ManagePermissionRequest**
> void Edit-ManagePermissionRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ManagePermissionRequest] <PSCustomObject><br>

edit manage permission request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$ManagePermissionRequest = (New-ManagePermissionRequest-ObjectUrl "ObjectUrl_example" -ObjectType  -ObjectTitle "ObjectTitle_example" -SiteUrl "SiteUrl_example" -WebUrl "WebUrl_example" -SpGroupManagement @((New-SPGroupManagementModel-Id 123 -Name  -Description "Description_example" -Owner  -Members @((New-SPUserManagementModel-IdentityName "IdentityName_example" -DisplayName "DisplayName_example" -IsGroup $false -AzureUserType "AzureUserType_example" -Action (New-ManagePermissionAction) -ExternalUserType )) -SpGroupViewType (New-SPGroupViewOption) -SpGroupEditType (New-SPGroupEditOption) -Permissions @("Permissions_example") -Action (New-ManagePermissionAction) -IsAllowJoinOrLeaveRequest $false -IsAutoAcceptRequest $false -SendMembershipRequestEmailAddress "SendMembershipRequestEmailAddress_example" -IsTemporaryGroup $false -RoleID @("RoleID_example"))) -PermissionManagement (New-PermissionManagementModel-IsUniquePermission $false -IsPermissionInheritanceChanged $false -IsCopyPermissionsFromParent $false -InheritedSiteUrl "InheritedSiteUrl_example" -PermissionItems @((New-ObjectPermissionManagementModel-ObjectType (New-SPPrincipalType) -ObjectInfo  -Action  -Permissions @("Permissions_example") -OriginalPermissions @("OriginalPermissions_example") -ExternalUserType  -Members @((New-SharingEnabledUser-IsSharePointGroup $false -IsGuestUser $false -IsGuestUserExistsInOrganization $false -Id "Id_example" -LoginName "LoginName_example" -IsExternalUser  -AzureUserType "AzureUserType_example" -DisplayName "DisplayName_example" -IsGroup $false -IsLocalUser $false -Email "Email_example" -JobTitle "JobTitle_example" -PhysicalDeliveryOfficeName "PhysicalDeliveryOfficeName_example" -IsValid $false -TenantId "TenantId_example" -AdditionalData "TODO" -ApiUserType )) -GrantPermissionSetting (New-GrantPermissionModel-PermissionDurationSettings (New-TemporaryPermissionRequestSetting-IsGrantTemporaryPermission $false -IsGrantAdminGroup $false -ExpirationType (New-ExpirationType) -DurationInterval 123 -DurationDateType  -StartTime Get-Date -EndTime Get-Date) -WelcomeEmailSettings (New-WelcomeEmailSettings-Enabled $false -Subject "Subject_example" -PersonalMessage "PersonalMessage_example")) -OriginalName "OriginalName_example"))) -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # ManagePermissionRequest |  (optional)

# edit manage permission request
try {
     $Result = Edit-ManagePermissionRequest -Id $Id -ManagePermissionRequest $ManagePermissionRequest
} catch {
    Write-Host ("Exception occured when calling Edit-ManagePermissionRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **ManagePermissionRequest** | [**ManagePermissionRequest**](ManagePermissionRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-RestoreGroupRequest"></a>
# **Edit-RestoreGroupRequest**
> void Edit-RestoreGroupRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-RestoreGroupRequest] <PSCustomObject><br>

edit restore group request in task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$RestoreGroupRequest = (New-RestoreGroupRequest-GroupId "GroupId_example" -GroupName "GroupName_example" -GroupEmail "GroupEmail_example" -GroupObjectType  -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # RestoreGroupRequest |  (optional)

# edit restore group request in task
try {
     $Result = Edit-RestoreGroupRequest -Id $Id -RestoreGroupRequest $RestoreGroupRequest
} catch {
    Write-Host ("Exception occured when calling Edit-RestoreGroupRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **RestoreGroupRequest** | [**RestoreGroupRequest**](RestoreGroupRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-UnLockSiteRequest"></a>
# **Edit-UnLockSiteRequest**
> void Edit-UnLockSiteRequest<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-UnlockSiteRequest] <PSCustomObject><br>

edit unlock site request

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$UnlockSiteRequest = (New-UnlockSiteRequest-ExtendDuration 123 -ExtendDurationType  -Action  -ActionDescription "ActionDescription_example" -SiteId "SiteId_example" -SiteUrl "SiteUrl_example" -Id "Id_example" -ServiceId "ServiceId_example" -Department "Department_example" -Summary "Summary_example" -NotesToApprovers "NotesToApprovers_example" -QuestionnaireId "QuestionnaireId_example" -Metadatas @() -TicketNumber 123 -Type  -TypeDescription "TypeDescription_example" -Requester "Requester_example" -RequesterLoginName "RequesterLoginName_example" -Status  -ProgressStatus 123 -ProgressStatusDescription "ProgressStatusDescription_example" -SubmittedTime Get-Date -LastUpdated Get-Date -CreatedTime Get-Date -AssignTo "AssignTo_example" -FullPath "FullPath_example") # UnlockSiteRequest |  (optional)

# edit unlock site request
try {
     $Result = Edit-UnLockSiteRequest -Id $Id -UnlockSiteRequest $UnlockSiteRequest
} catch {
    Write-Host ("Exception occured when calling Edit-UnLockSiteRequest: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **UnlockSiteRequest** | [**UnlockSiteRequest**](UnlockSiteRequest.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-MyTasks"></a>
# **Get-MyTasks**
> TaskListPageResult Get-MyTasks<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Isconfirmtask] <System.Nullable[Boolean]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VarFilter] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Orderby] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Search] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Top] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Skip] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Nexttoken] <String><br>

get my tasks

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Isconfirmtask = true # Boolean |  (optional) (default to $false)
$VarFilter = "VarFilter_example" # String | Use **eq**(equal) or **ne**(not equal) to filter the results (e.g. field1 eq 'value1' and field2 ne 'value2'), supported fields :<br/> id, title, requester, requestTicketNumber, requesterDisplayName, dueDate, serviceType, createdTime, taskType, status (optional)
$Orderby = "Orderby_example" # String | Order by one field, supported fields:<br/> id, title, requester, requestTicketNumber, requesterDisplayName, dueDate, serviceType, createdTime, taskType, status (optional)
$Search = "Search_example" # String | Search for title (optional)
$Top = 987 # Int32 |  Define the number of records you want to return, max value is 200, default value is 200 (optional)
$Skip = "Skip_example" # String |  Define the number of records you want to skip, default value is 0 (optional)
$Nexttoken = "Nexttoken_example" # String |  Use the next token to get the next paging result (optional)

# get my tasks
try {
     $Result = Get-MyTasks -Isconfirmtask $Isconfirmtask -VarFilter $VarFilter -Orderby $Orderby -Search $Search -Top $Top -Skip $Skip -Nexttoken $Nexttoken
} catch {
    Write-Host ("Exception occured when calling Get-MyTasks: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Isconfirmtask** | **Boolean**|  | [optional] [default to $false]
 **VarFilter** | **String**| Use **eq**(equal) or **ne**(not equal) to filter the results (e.g. field1 eq &#39;value1&#39; and field2 ne &#39;value2&#39;), supported fields :&lt;br/&gt; id, title, requester, requestTicketNumber, requesterDisplayName, dueDate, serviceType, createdTime, taskType, status | [optional] 
 **Orderby** | **String**| Order by one field, supported fields:&lt;br/&gt; id, title, requester, requestTicketNumber, requesterDisplayName, dueDate, serviceType, createdTime, taskType, status | [optional] 
 **Search** | **String**| Search for title | [optional] 
 **Top** | **Int32**|  Define the number of records you want to return, max value is 200, default value is 200 | [optional] 
 **Skip** | **String**|  Define the number of records you want to skip, default value is 0 | [optional] 
 **Nexttoken** | **String**|  Use the next token to get the next paging result | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TaskListPageResult**](TaskListPageResult.md)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-TaskByBatchId"></a>
# **Get-TaskByBatchId**
> TaskList Get-TaskByBatchId<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Batchid] <PSCustomObject><br>

get task by batch id

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Batchid = "Batchid_example" # String | 

# get task by batch id
try {
     $Result = Get-TaskByBatchId -Batchid $Batchid
} catch {
    Write-Host ("Exception occured when calling Get-TaskByBatchId: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Batchid** | [**String**](String.md)|  | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**TaskList**](TaskList.md)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-TaskById"></a>
# **Get-TaskById**
> ApiTask Get-TaskById<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>

get task by id

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 

# get task by id
try {
     $Result = Get-TaskById -Id $Id
} catch {
    Write-Host ("Exception occured when calling Get-TaskById: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
[**ApiTask**](ApiTask.md)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-ReassignTask"></a>
# **Invoke-ReassignTask**
> void Invoke-ReassignTask<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-User] <String><br>

reassign task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$User = "User_example" # String | 

# reassign task
try {
     $Result = Invoke-ReassignTask -Id $Id -User $User
} catch {
    Write-Host ("Exception occured when calling Invoke-ReassignTask: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **User** | **String**|  | 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Deny-Task"></a>
# **Deny-Task**
> void Deny-Task<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CommentsParam] <PSCustomObject><br>

reject task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CommentsParam = (New-CommentsParam-Comments "Comments_example") # CommentsParam |  (optional)

# reject task
try {
     $Result = Deny-Task -Id $Id -CommentsParam $CommentsParam
} catch {
    Write-Host ("Exception occured when calling Deny-Task: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CommentsParam** | [**CommentsParam**](CommentsParam.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-RetryErrorTask"></a>
# **Invoke-RetryErrorTask**
> void Invoke-RetryErrorTask<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CommentsParam] <PSCustomObject><br>

retry error task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CommentsParam =  # CommentsParam |  (optional)

# retry error task
try {
     $Result = Invoke-RetryErrorTask -Id $Id -CommentsParam $CommentsParam
} catch {
    Write-Host ("Exception occured when calling Invoke-RetryErrorTask: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CommentsParam** | [**CommentsParam**](CommentsParam.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Skip-ErrorTask"></a>
# **Skip-ErrorTask**
> void Skip-ErrorTask<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CommentsParam] <PSCustomObject><br>

skip error task

### Example
```powershell
Import-Module -Name Cloud.Governance.Client

$Configuration = Get-Configuration

# You can find the Modern API Endpoint in Cloud Governance admin user guide for your environment.
$Configuration["BaseUrl"] = "{Cloud_Governance_Modern_API_Endpoint}"

# Configure API key clientSecret: Navigate to AvePoint Cloud Governance Settings > API Authentication Management to Obtain a client secret.
$Configuration["ApiKey"]["clientSecret"] = "eyJ..."

# Configure API key userPrincipalName: The value of the userPrincipalName parameter is the login name of a delegated user that will be used to invoke the AvePoint Cloud Governance API. 
# Make sure the user's account has been added to AvePoint Online Services and has the license for AvePoint Cloud Governance.
# If you calls the Admin api, make sure the user's role is Service Administrator for AvePoint Cloud Governance.
$Configuration["ApiKey"]["userPrincipalName"] = "someone@example.com"



$Id = "Id_example" # String | 
$CommentsParam =  # CommentsParam |  (optional)

# skip error task
try {
     $Result = Skip-ErrorTask -Id $Id -CommentsParam $CommentsParam
} catch {
    Write-Host ("Exception occured when calling Skip-ErrorTask: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | [**String**](String.md)|  | 
 **CommentsParam** | [**CommentsParam**](CommentsParam.md)|  | [optional] 

### Return type
# cmdlet returns PSCustomObject, the return object contains the properties of below type
void (empty response body)

### Authorization

[clientSecret](../README.md#clientSecret), [userPrincipalName](../README.md#userPrincipalName)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

