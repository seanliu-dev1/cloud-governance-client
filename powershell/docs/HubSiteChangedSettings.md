# HubSiteChangedSettings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** |  | [optional] [readonly] [default to $false]
**IsModernSite** | **Boolean** |  | [optional] [default to $false]
**Action** | [**ChangeHubsiteActionType**](ChangeHubsiteActionType.md) |  | [optional] 
**AssociatedHubSiteId** | **String** |  | [optional] 
**AssociatedHubSiteTitle** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$HubSiteChangedSettings = New-Cloud.Governance.ClientHubSiteChangedSettings  -Enabled null `
 -IsModernSite null `
 -Action null `
 -AssociatedHubSiteId null `
 -AssociatedHubSiteTitle null
```

- Convert the resource to JSON
```powershell
$HubSiteChangedSettings | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

