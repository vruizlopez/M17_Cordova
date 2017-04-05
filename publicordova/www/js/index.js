/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function publicidad(){
  window.plugins.AdMob.createInterstitialView();
  alert("VICTOR RUIZ LOPEZ AWS2-20")
  window.plugins.AdMob.showInterstitialAd(
    true,
    function(){},
    function(e){alert(JSON.stringify(e));}

    );


}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("boton").onclick=publicidad;
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
          window.plugins.AdMob.setOptions( {
          publisherId: "ca-app-pub-4143578570875691/7043405766",
          interstitialAdId: "ca-app-pub-4143578570875691/9703677361",
          bannerAtTop: false, // set to true, to put banner at top 
          overlap: false, // set to true, to allow banner overlap webview 
          offsetTopBar: false, // set to true to avoid ios7 status bar overlap 
          isTesting: true, // receiving test ad 
          autoShow: true // auto show interstitial ad when loaded 
        });
        // display the banner at startup 
        window.plugins.AdMob.createBannerView();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();