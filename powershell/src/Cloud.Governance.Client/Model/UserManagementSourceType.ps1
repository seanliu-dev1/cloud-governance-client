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

User=0, Group=1, All=2, </br>

.OUTPUTS

UserManagementSourceType<PSCustomObject>
#>

function New-UserManagementSourceType {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Creating object: Cloud.Governance.Client => UserManagementSourceType' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
        }

        return $PSO
    }
}