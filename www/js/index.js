window.TestApp = $.extend(true, window.TestApp, {
    "config": {
        "navigationType": "empty"
    }
});

"use strict";

window.TestApp = window.TestApp || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    TestApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: TestApp,
        navigationType: TestApp.config.navigationType
    });

    TestApp.app.router.register(":view", { view: "home" });
    TestApp.app.navigate();   
});