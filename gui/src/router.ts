/*****************************************************************************
 Filename:          router.ts
 Description:       Router

 Creation Date:     01/08/2019
 Author:            Piyush Gupte

 Do NOT modify or remove this copyright and confidentiality notice!
 Copyright (c) 2001 - $Date: 2015/01/14 $ Seagate Technology, LLC.
 The code contained herein is CONFIDENTIAL to Seagate Technology, LLC.
 Portions are also trade secret. Any use, duplication, derivation, distribution
 or disclosure of this code, for any reason, not expressly authorized is
 prohibited. All other rights are expressly reserved by Seagate Technology, LLC.
 *****************************************************************************/
import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/dashboard.vue";
import EosAlertLarge from "./components/dashboard/alert-large.vue";
import EosNetworkSettings from "./components/onboarding/system-config/mgmt-network/network-settings.vue";
import EosNetworkSettingsIpv4 from "./components/onboarding/system-config/mgmt-network/network-settings-ipv4.vue";
import EosNetworkSettingsIpv6 from "./components/onboarding/system-config/mgmt-network/network-settings-ipv6.vue";
import EosDataNetwork from "./components/onboarding/system-config/data-network/data-network.vue";
import EosDataNetworkIpv4 from "./components/onboarding/system-config/data-network/data-network-ipv4.vue";
import EosDataNetworkIpv6 from "./components/onboarding/system-config/data-network/data-network-ipv6.vue";
import EosDnsSettings from "./components/onboarding/system-config/dns/dns-setting.vue";
import EosDateTime from "./components/onboarding/system-config/date-time/date-time.vue";
import EosUserSetting from "./components/onboarding/system-config/user-settings/user-setting.vue";
import EosUserSettingLocal from "./components/onboarding/system-config/user-settings/user-setting-local.vue";
import EosUserSettingLdap from "./components/onboarding/system-config/user-settings/user-setting-ldap.vue";
import EosNotifications from "./components/onboarding/system-config/notifications/notifications.vue";
import EosNotificationsEmail from "./components/onboarding/system-config/notifications/notifications-email.vue";
import EosNotificationsSyslog from "./components/onboarding/system-config/notifications/notifications-syslog.vue";
import EosInterfaceSelect from "./components/onboarding/system-config/interface-select/interface-select.vue";
import EosAccountManagement from "./components/s3/account-management.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/alertlarge",
      name: "eosAlertLarge",
      component: EosAlertLarge,
    },
    {
      path: "/systemconfig1",
      name: "systemconfig1",
      component: EosNetworkSettings,
    },
    {
      path: "/systemconfig2",
      name: "systemconfig2",
      component: EosNetworkSettingsIpv4,
    },
    {
      path: "/systemconfig3",
      name: "systemconfig3",
      component: EosNetworkSettingsIpv6,
    },
    {
      path: "/dataconfig1",
      name: "dataconfig2",
      component: EosDataNetwork,
    },
    {
      path: "/dataconfig2",
      name: "dataconfig2",
      component: EosDataNetworkIpv4,
    },
    {
      path: "/dataconfig3",
      name: "dataconfig3",
      component: EosDataNetworkIpv6,
    },
    {
      path: "/dnsconfig",
      name: "dnsconfig",
      component: EosDnsSettings,
    },
    {
      path: "/datetime",
      name: "datetime",
      component: EosDateTime,
    },
    {
      path: "/usersetting",
      name: "usersetting",
      component: EosUserSetting,
    },
    {
      path: "/usersettinglocal",
      name: "usersettinglocal",
      component: EosUserSettingLocal,
    },
    {
      path: "/usersettingldap",
      name: "usersettingldap",
      component: EosUserSettingLdap,
    },
    {
      path: "/notifications",
      name: "notifications",
      component: EosNotifications,
    },
    {
      path: "/notificationsemail",
      name: "notificationsemail",
      component: EosNotificationsEmail,
    },
    {
      path: "/notificationssyslog",
      name: "notificationssyslog",
      component: EosNotificationsSyslog,
    },
    {
      path: "/interfaceselect",
      name: "interfaceselect",
      component: EosInterfaceSelect,
    },
    {
      path: "/s3account",
      name: "s3account",
      component: EosAccountManagement,
    }
  ],
});
