// ==UserScript==
// @name        IITM: Press dot to play lecture (player)
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/embed/*
// @grant       none
// @version     1.0
// @author      lavafroth
// @description 12/5/2024, 4:59:35 PM
// ==/UserScript==


function openInMpv(event) {
  if (event.origin !== "https://seek.onlinedegree.iitm.ac.in") {
    return;
  }

  if (event.data !== "openInMpv") {
    return
  }

  const url = document.querySelector('.ytp-impression-link').href
  const encodedURL = encodeURI(url).replace(/'/g, "%27");
  const location = `iitm://watch#${encodedURL}`
  document.location = location
}


window.addEventListener('message', openInMpv, false);
