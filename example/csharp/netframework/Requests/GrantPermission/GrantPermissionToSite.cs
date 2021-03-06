﻿
namespace NetFramework
{
    using Cloud.Governance.Client.Api;
    using Cloud.Governance.Client.Client;
    using Cloud.Governance.Client.Model;
    using System;
    using System.Collections.Generic;
    using System.Net;

    public class GrantPermissionToSite : TestBase
    {
        public GrantPermissionToSite(ApiConfig authData) : base(authData) { }

        public Guid Run(GrantPermissionTestData data)
        {
            try
            {
                var serviceId = this.ServicesApi.GetServiceId(data.ServiceName);
                var service = this.ServicesApi.GetGrantPermissionService(serviceId);
                var request = service.RequestTemplate;

                var grantPermissionUrlValidationResult = this.ServicesApi.ValidateForGrantPermissionService(serviceId, new SiteValidationParameter(data.ObjectUrl));
                var grantPermissionSPObject = grantPermissionUrlValidationResult.Object;

                var selectedPermissionLevelList = new List<String>(data.SelectedPermissionLevels.Split(';'));
                var selectedPermissionLevels = grantPermissionUrlValidationResult.SpPermissionLevels?.FindAll(level => selectedPermissionLevelList.Contains(level.Name));
                var permissionSettings = new GrantPermissionRequestPermissionSettings
                {
                    IsBreakInheritance = false,
                    IsGrantPermissionDirectly = true,
                    SelectedPermissionLevels = selectedPermissionLevels,
                    SelectedSPGroup = null,
                };

                var selectedUsers = new List<SharingEnabledUser>();

                var apiUsers = this.ResolveUsers(data.UserLoginNames);

                foreach (var apiUser in apiUsers)
                {
                    selectedUsers.Add(new SharingEnabledUser { LoginName = apiUser.LoginName, DisplayName = apiUser.DisplayName, Email = apiUser.Email });
                }

                request.Summary = $"Summary_GrantUserPermission_{DateTime.Now}";
                request.ServiceId = serviceId;
                request.PermissionSettings = permissionSettings;
                request.SelectedUsers = selectedUsers;
                request.Url = grantPermissionSPObject;

                var id = this.RequestsApi.SubmitGrantPermissionRequest(request);
                return id;
            }
            catch (ApiException ex)
            {
                Console.WriteLine("Exception when calling RequestsApi.SubmitGrantPermissionRequest: " + ex.Message);
                Console.WriteLine("Status Code: " + ex.ErrorCode);
                Console.WriteLine(ex.StackTrace);
                throw ex;
            }
        }
    }
}
