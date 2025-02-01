// ==UserScript==
// @name        IITM: Press dot to play lecture (keybinding)
// @namespace   Violentmonkey Scripts
// @match       https://seek.onlinedegree.iitm.ac.in/courses/*
// @grant       none
// @version     1.0
// @author      lavafroth
// @description 12/5/2024, 4:59:35 PM
// ==/UserScript==

document.addEventListener('keyup', ({ key }) => {
  if (key === '.') {
    $('#player').get(0)?.contentWindow.postMessage('openInMpv', "*")
  }
}, false);
