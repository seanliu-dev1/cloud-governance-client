#
# Cloud Governance Api
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
# Version: 1.0
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER ApproveOrder
No description available.

.PARAMETER Approvers
No description available.

.PARAMETER Description
No description available.

.PARAMETER Name
No description available.

.PARAMETER IsAllowAutocrat
No description available.

.PARAMETER IsAllowReassign
No description available.

.PARAMETER DurationSetting
No description available.

.PARAMETER EmailSetting
No description available.

.OUTPUTS

ApprovalProcessStageModel<PSCustomObject>
#>

function New-ApprovalProcessStageModel {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ApproveOrder},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Approvers},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Description},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Name},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsAllowAutocrat},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsAllowReassign},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DurationSetting},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${EmailSetting}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ApprovalProcessStageModel' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "approveOrder" = ${ApproveOrder}
            "approvers" = ${Approvers}
            "description" = ${Description}
            "name" = ${Name}
            "isAllowAutocrat" = ${IsAllowAutocrat}
            "isAllowReassign" = ${IsAllowReassign}
            "durationSetting" = ${DurationSetting}
            "emailSetting" = ${EmailSetting}
        }

        return $PSO
    }
}