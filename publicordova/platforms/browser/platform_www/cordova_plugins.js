cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-admob/www/AdMob.js",
        "id": "cordova-plugin-admob.AdMob",
        "pluginId": "cordova-plugin-admob",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-admobsdk": "1.0.4",
    "cordova-plugin-admob": "3.2.4"
}
// BOTTOM OF METADATA
});