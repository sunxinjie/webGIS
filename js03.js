var map01;
var map02;

require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {
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
	map01.add(water2013);
	map02.add(water2008);

	view01.on(["pointer-down", "pointer-move"], function(evt) {
		LinkMap02();
	});

	function LinkMap02() {
		view02.zoom = view01.zoom;
		view02.center = view01.center;
	}

	view02.on(["pointer-down", "pointer-move"], function(evt) {
		LinkMap01();
	});

	function LinkMap01() {
		view01.zoom = view02.zoom;
		view01.center = view02.center;

	}

});