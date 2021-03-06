# CgClient.ChangeGroupSettingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **String** |  | [optional] 
**groupEmail** | **String** |  | [optional] 
**groupName** | **String** |  | [optional] 
**originalGroupName** | **String** |  | [optional] 
**groupDescription** | **String** |  | [optional] 
**originalGroupDescription** | **String** |  | [optional] 
**primaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**originalPrimaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**secondaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**originalSecondaryContact** | [**ApiUser**](ApiUser.md) |  | [optional] 
**groupOwners** | [**[GroupMembershipItem]**](GroupMembershipItem.md) |  | [optional] 
**groupMembers** | [**[GroupMembershipItem]**](GroupMembershipItem.md) |  | [optional] 
**isDynamicMembership** | **Boolean** |  | [optional] 
**dynamicMembershipRules** | [**[DynamicGroupRuleInfo]**](DynamicGroupRuleInfo.md) |  | [optional] 
**enabledSubscribe** | **Boolean** |  | [optional] 
**originalEnabledSubscribe** | **Boolean** |  | [optional] 
**enabledOutsideSender** | **Boolean** |  | [optional] 
**originalEnabledOutsideSender** | **Boolean** |  | [optional] 
**hubSiteActionType** | [**ChangeHubsiteActionType**](ChangeHubsiteActionType.md) |  | [optional] 
**associateHubSiteId** | **String** |  | [optional] 
**associateHubSiteTitle** | **String** |  | [optional] 
**classification** | **String** |  | [optional] 
**originalClassification** | **String** |  | [optional] 
**enableTeams** | **Boolean** |  | [optional] 
**originalEnableTeams** | **Boolean** |  | [optional] 
**groupMetadatas** | [**[RequestMetadata]**](RequestMetadata.md) |  | [optional] 
**originalGroupMetadata** | [**[RequestMetadata]**](RequestMetadata.md) |  | [optional] 
**id** | **String** |  | [optional] 
**serviceId** | **String** |  | [optional] 
**department** | **String** |  | [optional] 
**summary** | **String** |  | [optional] 
**notesToApprovers** | **String** |  | [optional] 
**questionnaireId** | **String** |  | [optional] 
**metadatas** | [**[RequestMetadata]**](RequestMetadata.md) |  | [optional] 
**ticketNumber** | **Number** |  | [optional] [readonly] 
**type** | [**ServiceTypeNullable**](ServiceTypeNullable.md) |  | [optional] [readonly] 
**typeDescription** | **String** |  | [optional] [readonly] 
**requester** | **String** |  | [optional] [readonly] 
**status** | [**RequestStatusNullable**](RequestStatusNullable.md) |  | [optional] [readonly] 
**progressStatus** | **Number** |  | [optional] [readonly] 
**progressStatusDescription** | **String** |  | [optional] [readonly] 
**submittedTime** | **Date** |  | [optional] [readonly] 
**lastUpdated** | **Date** |  | [optional] [readonly] 
**createdTime** | **Date** |  | [optional] [readonly] 
**assignTo** | **String** |  | [optional] [readonly] 
**fullPath** | **String** |  | [optional] [readonly] 


