﻿chrome.runtime.sendMessage({
	check: "UserAgent"
}, function(n) {
	if (n.userAgent != "") {
		var t = document.createElement("script");
		t.type = "text/javascript";
		t.text = "navigator.__defineGetter__('userAgent', function () { return '" + n.userAgent + "'; });";
		document.getElementsByTagName("head")[0].appendChild(t);
	}
});