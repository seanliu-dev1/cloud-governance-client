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

.PARAMETER DataSource
No description available.

.PARAMETER Departments
No description available.

.OUTPUTS

DepartmentSettingsModel<PSCustomObject>
#>

function New-DepartmentSettingsModel {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${DataSource},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Departments}
    )

    Process {
        'Creating object: Cloud.Governance.Client => DepartmentSettingsModel' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "dataSource" = ${DataSource}
            "departments" = ${Departments}
        }

        return $PSO
    }
}