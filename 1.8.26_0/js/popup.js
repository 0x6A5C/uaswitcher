﻿function saveSettings(n, t) {
	var i = chrome.extension.getBackgroundPage().settings;
	switch (n) {
		case "Remember":
			i.Remember = t == !0 ? "1" : "0"
	}
	localStorage.uaSettings = JSON.stringify(i);
	chrome.extension.getBackgroundPage().runAppStart()
}

function loadSettings() {
	chrome.extension.getBackgroundPage().settings.Remember == "1" && $("#rememberLastUsed").prop("checked", !0)
}

function openOptionsTab() {
	chrome.tabs.getSelected(function(n) {
		chrome.tabs.create({
			index: n.index + 1,
			url: "options.html"
		})
	})
}

function setUserAgent(n, t) {
	chrome.extension.getBackgroundPage().setUserAgent(n, t, "PopUp", function() {
		window.close()
	})
}
$(function() {
	var i = chrome.extension.getBackgroundPage().selectedUserAgent,
		n = $("#UserAgents"),
		t;
	n.empty();
	t = chrome.extension.getBackgroundPage().userAgents;
	n.append('<optgroup label="Default">');
	n.append('<option value="Default">Default<\/option>');
	n.append("<\/optgroup>");
	loadSettings();
	t.forEach(function(t) {
		t.UserAgents.length != 0 && (n.append('<optgroup label="' + t.Name + '">'), t.UserAgents.forEach(function(t) {
			n.append('<option value="' + t.Id + '">' + t.Name + "<\/option>")
		}), n.append("<\/optgroup>"))
	});
	$("#rememberLastUsed").click(function() {
		saveSettings("Remember", $("#rememberLastUsed").prop("checked"))
	});
	n.val(i.Id);
	n.unbind("change");
	n.change(function() {
		setUserAgent($(this).val(), !0)
	});
	$('[data-Action="ShowOption"]').click(function() {
		openOptionsTab()
	});
	$('[data-Action="ShowUserAgent"]').click(function() {
		chrome.tabs.create({
			url: "http://www.esolutions.se/whatsmyinfo"
		})
	})
});