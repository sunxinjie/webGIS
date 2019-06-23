require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer",
	"esri/core/watchUtils"
], function(Map, MapView, FeatureLayer, watchUtils) {
	//**********************************************功能：swip map**********************************************************
	var water2008 = new FeatureLayer({
		portalItem: {
			id: "4a09112c2120400ea1e68b015683afc7"
		}
	});

	var water2013 = new FeatureLayer({
		portalItem: {
			id: "8688d896fd514ffeabc25887b446cec9"
		}
	});
	var map01 = new Map({
		basemap: "streets"
	});

	var view01 = new MapView({
		container: "viewDiv01",
		map: map01,
		center: [112.2, 30],
		zoom: 10
	});

	var map02 = new Map({
		basemap: "topo"
	});

	var view02 = new MapView({
		container: "viewDiv02",
		map: map02,
		center: [112.2, 30],
		zoom: 10
	});

	map01.add(water2008);
	map02.add(water2013);

	var clit = document.getElementById("swipe");
	clit.addEventListener("input", function() {
		var wc = document.getElementById("swipe");
		var w = document.documentElement.clientWidth;
		var h = document.documentElement.clientHeight;
		document.getElementById("viewDiv02").style.clip = "rect(0px " + wc.value / 100 * w + "px " + h + "px 0px)";
	})

	window.addEventListener("resize", function() {
		var wc = document.getElementById("swipe");
		var w = document.documentElement.clientWidth;
		var h = document.documentElement.clientHeight;
		document.getElementById("viewDiv02").style.clip = "rect(0px " + wc.value / 100 * w + "px " + h + "px 0px)";
	})

	watchUtils.whenTrue(view01, "stationary", function() {
		if(view01.extent) {
			view02.extent = view01.extent;
		}
	});

	view01.on("drag", function(ev) {
		if(view01.extent) {
			view02.extent = view01.extent;
		}
	});

	view02.on("drag", function(ev) {
		if(view02.extent) {
			view01.extent = view02.extent;
		}
	});
	watchUtils.whenTrue(view02, "stationary", function() {

		if(view02.extent) {
			view01.extent = view02.extent;
		}

	});

	watchUtils.whenTrue(view01, "stationary", function() {

		if(view01.extent) {
			view02.extent = view01.extent;
		}

	});

});