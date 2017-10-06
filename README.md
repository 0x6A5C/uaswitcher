# Malware Analysis
## User Agent Switcher - Chrome Extension

This extension hides its [payload](pretty/promo.js) in [promo.jpg](1.8.26_0/promo.jpg)
(which is really a png). After the payload is extracted it waits 60 minutes, before
it initializes itself. After initialization it will start sending all URLs you visit to
their server. If you visit a site of interest to them, it will redirect your request
to a URL of their choosing, which redirects you back to the site you requested.

My guess is they are using this to get money through affiliate links.

- [Google Webstore Link](https://chrome.google.com/webstore/detail/user-agent-switcher-for-g/ffhkkpnppgnfaobgihpdblnhmmbodake?utm_source=chrome-app-launcher-info-dialog)
- Extension ID: ffhkkpnppgnfaobgihpdblnhmmbodake

I discovered this when I noticed an element with an id of `sbmarwusasv5` in a web page.

### Tools used

- http://ddecode.com/hexdecoder/
- http://jsbeautifier.org/
- chrome developer tools
- node
