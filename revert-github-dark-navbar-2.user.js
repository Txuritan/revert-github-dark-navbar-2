// ==UserScript==
// @name        GitHub dark navbar revert 2
// @version      2
// @description  Revert the GitHub dark navbar change
// @author       cubeee (https://github.com/cubeee)
// @author       Txuritan (https://github.com/Txuritan)
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var css = '.header { background-color: #F5F5F5; border-bottom: 1px solid #E5E5E5; }' +
    ' .header-logo-invertocat { color: rgba(0, 0, 0, 0.87); } .header-logo-invertocat:hover { color: #4078c0; }' +
    '.header-nav-link { color: rgba(0, 0, 0, 0.87); } .header-nav-link:hover { color: #4078c0; }' +
    '.header .header-search-wrapper { color: rgba(0, 0, 0, 0.87); background-color: #fff; }' +
    '.header .header-search-scope { color: rgba(0, 0, 0, 0.87); border-right-color: #E5E5E5; }' +
    '.header .header-search-wrapper.focus { background-color: rgba(255,255,255,0.075); } .header .header-search-wrapper.focus .header-search-scope { color: rgba(0, 0, 0, 0.87); background-color: rgba(255,255,255,1);  border-right-color: #E5E5E5; } .header .header-search-wrapper.focus { background-color: rgba(255,255,255,1); }' +
    '.notification-indicator .mail-status { border: 2px solid #EEEEEE; }' +
    '.header-nav-link:hover, .header-nav-link:focus { color: #4078c0; } .header-nav-link:hover .dropdown-caret, .header-nav-link:focus .dropdown-caret { border-top-color: #4078c0; }';
var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
