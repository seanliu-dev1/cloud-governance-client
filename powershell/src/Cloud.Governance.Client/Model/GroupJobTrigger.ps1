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

.PARAMETER GroupNameOrId
No description available.

.PARAMETER IsEnabled
No description available.

.OUTPUTS

GroupJobTrigger<PSCustomObject>
#>

function New-GroupJobTrigger {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${GroupNameOrId},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsEnabled}
    )

    Process {
        'Creating object: Cloud.Governance.Client => GroupJobTrigger' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "groupNameOrId" = ${GroupNameOrId}
            "isEnabled" = ${IsEnabled}
        }

        return $PSO
    }
}