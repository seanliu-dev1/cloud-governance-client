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

.PARAMETER ExternalSharingOptions
No description available.

.PARAMETER EnableShareAnnoymousLink
No description available.

.PARAMETER Object
No description available.

.PARAMETER SpPermissionLevels
No description available.

.PARAMETER SpGroups
No description available.

.PARAMETER AllowBreakPermissionInheritance
No description available.

.PARAMETER IsValid
No description available.

.PARAMETER ErrorMessage
No description available.

.OUTPUTS

GrantPermissionUrlValidationResult<PSCustomObject>
#>

function New-GrantPermissionUrlValidationResult {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${ExternalSharingOptions},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${EnableShareAnnoymousLink},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${Object},
        [Parameter(Position = 3, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${SpPermissionLevels},
        [Parameter(Position = 4, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${SpGroups},
        [Parameter(Position = 5, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${AllowBreakPermissionInheritance},
        [Parameter(Position = 6, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${IsValid},
        [Parameter(Position = 7, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${ErrorMessage}
    )

    Process {
        'Creating object: Cloud.Governance.Client => GrantPermissionUrlValidationResult' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "externalSharingOptions" = ${ExternalSharingOptions}
            "enableShareAnnoymousLink" = ${EnableShareAnnoymousLink}
            "object" = ${Object}
            "spPermissionLevels" = ${SpPermissionLevels}
            "spGroups" = ${SpGroups}
            "allowBreakPermissionInheritance" = ${AllowBreakPermissionInheritance}
            "isValid" = ${IsValid}
            "errorMessage" = ${ErrorMessage}
        }

        return $PSO
    }
}