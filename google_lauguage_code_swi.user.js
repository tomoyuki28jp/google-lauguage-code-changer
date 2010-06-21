// ==UserScript==
// @name           Google Lauguage Code Switcher
// @namespace      Minibuffer.GLCS
// @description    Change/add the hl parameter value on google result pages.
// @include        http://*.google.*/search?*
// ==/UserScript==

var VERSION = '22 Feb 2010';

if (window.Minibuffer) {
    (function () {
        var _hl = function(lang) {
            if (location.search.match(/hl=([a-zA-Z]{2})/)) {
                location.href = location.href.replace(/hl=([a-zA-Z]{2})/, 'hl='+lang)
            } else {
                location.href += '&hl='+lang
            }
        }

        Minibuffer.addCommand({
            'ja': function() { _hl('ja') },
            'en': function() { _hl('en') }
        });
    })()
}
