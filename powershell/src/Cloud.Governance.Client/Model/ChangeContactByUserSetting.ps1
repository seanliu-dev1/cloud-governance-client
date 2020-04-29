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

.PARAMETER CurrentUser
No description available.

.PARAMETER NewUser
No description available.

.PARAMETER AlternativeUser
No description available.

.OUTPUTS

ChangeContactByUserSetting<PSCustomObject>
#>

function New-ChangeContactByUserSetting {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${CurrentUser},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${NewUser},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject]
        ${AlternativeUser}
    )

    Process {
        'Creating object: Cloud.Governance.Client => ChangeContactByUserSetting' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $PSO = [PSCustomObject]@{
            "currentUser" = ${CurrentUser}
            "newUser" = ${NewUser}
            "alternativeUser" = ${AlternativeUser}
        }

        return $PSO
    }
}