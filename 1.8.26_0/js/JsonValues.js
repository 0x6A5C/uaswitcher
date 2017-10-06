﻿var JSON_Settings = {
		Remember: "0",
		LastUsed_Id: "Default",
		LastUsed_Name: "Default",
		LastUsed_UserAgent: ""
	},
	JSON_DefaultUserAgent = {
		Id: "Default",
		Name: "Default",
		UserAgent: ""
	},
	JSON_UserAgentsList = [{
		Id: "Android",
		Name: "Android",
		UserAgents: [{
			Id: "Nexus7",
			Name: "Nexus 7 (Tablet)",
			UserAgent: "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166  Safari/535.19"
		}, {
			Id: "AndroidGalaxyS3",
			Name: "Samsung Galaxy S3 (Handset)",
			UserAgent: "Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
		}, {
			Id: "AndroidGalaxyTab",
			Name: "Samsung Galaxy Tab (Tablet)",
			UserAgent: "Mozilla/5.0 (Linux; U; Android 2.2; en-gb; GT-P1000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
		}]
	}, {
		Id: "Default",
		Name: "Default",
		UserAgent: "",
		UserAgents: []
	}, {
		Id: "Firefox",
		Name: "Firefox",
		UserAgents: [{
			Id: "FFAndroidHandset",
			Name: "Firefox on Android Mobile",
			UserAgent: "Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0"
		}, {
			Id: "FFAndroidTablet",
			Name: "Firefox on Android Tablet",
			UserAgent: "Mozilla/5.0 (Android; Tablet; rv:14.0) Gecko/14.0 Firefox/14.0"
		}, {
			Id: "FFMac",
			Name: "Firefox on Mac",
			UserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0"
		}, {
			Id: "FFUbuntu",
			Name: "Firefox on Ubuntu",
			UserAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0"
		}, {
			Id: "FFWin",
			Name: "Firefox on Windows",
			UserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0"
		}]
	}, {
		Id: "Chrome",
		Name: "Google Chrome",
		UserAgents: [{
			Id: "ChromeAndroidMobile",
			Name: "Chrome on Android Mobile",
			UserAgent: "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"
		}, {
			Id: "ChromeAndroidTablet",
			Name: "Chrome on Android Tablet",
			UserAgent: "Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZ054K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19"
		}, {
			Id: "ChromeMac",
			Name: "Chrome on Mac",
			UserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36"
		}, {
			Id: "ChromeUbuntu",
			Name: "Chrome on Ubuntu",
			UserAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/11.10 Chromium/27.0.1453.93 Chrome/27.0.1453.93 Safari/537.36"
		}, {
			Id: "ChromeWin",
			Name: "Chrome on Windows",
			UserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36"
		}, {
			Id: "ChromeiPhone",
			Name: "Chrome on iPhone",
			UserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/27.0.1453.10 Mobile/10B350 Safari/8536.25"
		}]
	}, {
		Id: "IE",
		Name: "Internet Explorer",
		UserAgents: [{
			Id: "IE11",
			Name: "Internet Explorer 11",
			UserAgent: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko"
		}, {
			Id: "IE10",
			Name: "Internet Explorer 10",
			UserAgent: "Mozilla/5.0 (compatible; WOW64; MSIE 10.0; Windows NT 6.2)"
		}, {
			Id: "IE6",
			Name: "Internet Explorer 6",
			UserAgent: "Mozilla/4.0 (Windows; MSIE 6.0; Windows NT 5.2)"
		}, {
			Id: "IE7",
			Name: "Internet Explorer 7",
			UserAgent: "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
		}, {
			Id: "IE8",
			Name: "Internet Explorer 8",
			UserAgent: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"
		}, {
			Id: "IE9",
			Name: "Internet Explorer 9",
			UserAgent: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
		}]
	}, {
		Id: "Edge",
		Name: "Edge",
		UserAgents: [{
			Id: "Edge12",
			Name: "Edge 12",
			UserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"
		}, {
			Id: "Edge13",
			Name: "Edge 13",
			UserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
		}]
	}, {
		Id: "Opera",
		Name: "Opera",
		UserAgents: [{
			Id: "OperaMac",
			Name: "Opera on Mac",
			UserAgent: "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.9.168 Version/11.52"
		}, {
			Id: "OperaWin",
			Name: "Opera on Windows",
			UserAgent: "Opera/9.80 (Windows NT 6.1; WOW64; U; en) Presto/2.10.229 Version/11.62"
		}]
	}, {
		Id: "Other",
		Name: "Other",
		UserAgents: [{
			Id: "BlackBerry",
			Name: "BlackBerry - Playbook 2.1",
			UserAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+"
		}, {
			Id: "MeeGo",
			Name: "MeeGo - Nokia N9",
			UserAgent: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13"
		}]
	}, {
		Id: "Safari",
		Name: "Safari",
		UserAgents: [{
			Id: "SafariMac",
			Name: "Safari on Mac",
			UserAgent: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27"
		}, {
			Id: "SafariWin",
			Name: "Safari on Windows",
			UserAgent: "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27"
		}, {
			Id: "SafariiPad",
			Name: "Safari on iPad",
			UserAgent: "Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3"
		}, {
			Id: "SafariiPhone",
			Name: "Safari on iPhone",
			UserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3"
		}]
	}, {
		Id: "Spider",
		Name: "Spider / Bot",
		UserAgents: [{
			Id: "BingBot",
			Name: "BingBot (Bing's spider)",
			UserAgent: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
		}, {
			Id: "Googlebot",
			Name: "Googlebot (Google's spider)",
			UserAgent: "Googlebot/2.1 (+http://www.googlebot.com/bot.html)"
		}, {
			Id: "Slurp",
			Name: "Slurp! (Yahoo's spider)",
			UserAgent: "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
		}]
	}, {
		Id: "WinPhone",
		Name: "Windows Phone",
		UserAgents: [{
			Id: "Win7Phone",
			Name: "Windows Phone 7",
			UserAgent: "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)"
		}, {
			Id: "Win75Phone",
			Name: "Windows Phone 7.5",
			UserAgent: "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)"
		}, {
			Id: "Win8Phone",
			Name: "Windows Phone 8",
			UserAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
		}]
	}, {
		Id: "iOS",
		Name: "iOS",
		UserAgents: [{
			Id: "iPad",
			Name: "iPad",
			UserAgent: "Mozilla/5.0 (iPad; CPU OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4"
		}, {
			Id: "iPhone",
			Name: "iPhone",
			UserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4"
		}, {
			Id: "iPod",
			Name: "iPod",
			UserAgent: "Mozilla/5.0 (iPod; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3"
		}]
	}];