﻿function sortByKey(n, t) {
	return n.sort(function(n, i) {
		var r = n[t],
			u = i[t];
		return r < u ? -1 : r > u ? 1 : 0
	})
}

function rebindEvents() {
	$('[data-Action="RemoveUserAgent"]').unbind("click"), $('[data-Action="RemoveUserAgent"]').click(function() {
		var t = $(this),
			n;
		if (confirm("Remove this User-Agent?"))
			for (n = 0; n < userAgents.length; n++) userAgents[n].UserAgents.forEach(function(i, r) {
				i.Id == t.attr("data-Id") && (userAgents[n].UserAgents.splice(r, 1), saveStorageData(), loadUserAgents())
			})
	}), $('[data-Action="EditUserAgent"], [data-Action="NewUserAgent"]').unbind("click"), $('[data-Action="EditUserAgent"], [data-Action="NewUserAgent"]').click(function() {
		var t, n;
		if ($("#UserAgentId").val(""), $("#UserAgentName").val(""), $("#UserAgentString").val(""), t = $(this), t.attr("data-Id") != "")
			for (n = 0; n < userAgents.length; n++) userAgents[n].UserAgents.forEach(function(n) {
				n.Id == t.attr("data-Id") && ($("#UserAgentId").val(n.Id), $("#UserAgentName").val(n.Name), $("#UserAgentString").val(n.UserAgent))
			});
		$("#userAgentModalWindow").modal().show()
	})
}

function findAndRemove(n, t, i) {
	$.each(n, function(r, u) {
		u[t] == i && n.splice(r, 1)
	})
}

function loadStorageData() {
	userAgents = chrome.extension.getBackgroundPage().userAgents;
	var n = localStorage.uaStorage;
	n != undefined && (userAgents = JSON.parse(n))
}

function saveStorageData() {
	for (var n = 0; n < userAgents.length; n++) userAgents[n].UserAgents = sortByKey(userAgents[n].UserAgents, "Name");
	userAgents = sortByKey(userAgents, "Name"), localStorage.uaStorage = JSON.stringify(userAgents), chrome.extension.getBackgroundPage().runAppStart()
}

function loadSettingsData() {
	settings = chrome.extension.getBackgroundPage().settings;
	var n = localStorage.uaSettings;
	n != undefined && (settings = JSON.parse(n))
}

function saveSettingsData() {
	localStorage.uaSettings = JSON.stringify(settings), chrome.extension.getBackgroundPage().runAppStart()
}

function saveSettings(n, t) {
	switch (n) {
		case "Remember":
			settings.Remember = t == !0 ? "1" : "0"
	}
	saveSettingsData()
}

function loadSettings() {
	settings.Remember == "1" && $("#rememberLastUsed").prop("checked", !0)
}

function loadUserAgentGroups() {
	var n = $("#UserAgentGroup");
	n.empty(), userAgents.forEach(function(t) {
		t.UserAgent == undefined && n.append('<option value="' + t.Id + '">' + t.Name + "<\/option>")
	})
}

function loadUserAgents() {
	el = $("#UserAgents tbody"), el.empty(), userAgents.forEach(function(n) {
		n.Id == $("#UserAgentGroup").val() && n.UserAgents.forEach(function(n) {
			rowString = "<tr>", rowString = rowString + "<td>" + n.Name + "<\/td>", rowString = rowString + '<td style="text-align:center;width:180px;">', rowString = rowString + '<button class="btn btn-mini btn-info" data-Action="EditUserAgent" data-Id="' + n.Id + '"><i class="icon-pencil icon-white"><\/i> Edit<\/button>&nbsp;', rowString = rowString + '<button class="btn btn-mini btn-danger" data-Action="RemoveUserAgent" data-Id="' + n.Id + '"><i class="icon-remove icon-white"><\/i> Remove<\/button>', rowString = rowString + "<\/td>", rowString = rowString + "<\/tr>", el.append(rowString)
		})
	}), rebindEvents()
}
var userAgents = chrome.extension.getBackgroundPage().userAgents,
	settings = chrome.extension.getBackgroundPage().settings;
$(function() {
	loadStorageData(), loadSettingsData(), loadUserAgentGroups(), loadUserAgents(), loadSettings(), $("#UserAgentGroup").change(function() {
		loadUserAgents()
	}), $("#myTab a").click(function(n) {
		n.preventDefault(), $(this).tab("show")
	}), $("#rememberLastUsed").click(function() {
		saveSettings("Remember", $("#rememberLastUsed").prop("checked"))
	}), $('[data-Action="RemoveGroup"]').click(function() {
		confirm("Remove this group and its User-Agents?") && (userAgents.forEach(function(n, t) {
			n.Id == $("#UserAgentGroup").val() && (userAgents.splice(t, 1), saveStorageData())
		}), $("#UserAgentGroup option[value=" + $("#UserAgentGroup").val() + "]").remove(), loadUserAgents())
	}), $('[data-Action="NewGroup"]').click(function() {
		$("#GroupName").val(""), $("#groupModalWindow").modal().show()
	}), $('[data-Action="SaveGroup"]').click(function() {
		var n = $("#GroupName").val(),
			t, i;
		n = n.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " "), n != "" && (t = "Id_" + Math.floor(Math.random() * 1e6 + 1), i = {
			Id: t,
			Name: n,
			UserAgents: []
		}, userAgents.push(i), saveStorageData(), loadUserAgentGroups(), $("#UserAgentGroup").val(t), loadUserAgents(), $("#groupModalWindow").modal("hide"))
	}), $('[data-Action="SaveUserAgent"]').click(function() {
		var i = $("#UserAgentName").val(),
			r = $("#UserAgentString").val(),
			u, f, n, t;
		if (i = i.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " "), r = r.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " "), i != "" && r != "") {
			for (u = "Id_" + Math.floor(Math.random() * 1e6 + 1), f = {
					Id: u,
					Name: i,
					UserAgent: r
				}, n = 0; n < userAgents.length; n++)
				if (userAgents[n].Id == $("#UserAgentGroup").val())
					if ($("#UserAgentId").val() != "")
						for (t = 0; t < userAgents[n].UserAgents.length; t++) $("#UserAgentId").val() == userAgents[n].UserAgents[t].Id && (userAgents[n].UserAgents[t].Name = i, userAgents[n].UserAgents[t].UserAgent = r);
					else userAgents[n].UserAgents.push(f);
			saveStorageData(), loadUserAgents(), $("#userAgentModalWindow").modal("hide")
		}
	})
});