
chrome.browserAction.onClicked.addListener(function(tab) {

  _gaq.push(['_trackEvent', 'chrome_extension_newPing', 'browserAction_onClicked']);
  var source = localStorage["defaultSource"];
  chrome.tabs.executeScript(null,{code : "var body = document.getElementsByTagName('body')[0];body.setAttribute('data-source','"+source+"');"});
  chrome.tabs.executeScript(null, { code: "(function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('pinMethod','extension');e.setAttribute('src',chrome.runtime.getURL('javascript/pinmarklet.js')+'?r='+Math.random()*99999999);document.body.appendChild(e)})();" });
});

chrome.management.onEnabled.addListener(function(tab) {
	_gaq.push(['_trackEvent', 'chrome_extension_newPing', 'management_onEnabled']);
});

chrome.management.onDisabled.addListener(function(tab) {
	_gaq.push(['_trackEvent', 'chrome_extension_newPing', 'management_onDisabled']);
});