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

	var view = new MapView({
		container: "viewDiv01",
		map: map01,
		center: [112.2, 30],
		zoom: 10
	});

	var map02 = new Map({
		basemap: "gray"
	});

	var view = new MapView({
		container: "viewDiv02",
		map: map02,
		center: [112.2, 30],
		zoom: 10
	});

	map01.add(water2008);
	map02.add(water2013);

});

function SwipeMap() {
	console.log(event.clientX);
	//鼠标屏幕x坐标等于上层地图宽度
	document.getElementById("viewDiv02").style.clip = "rect(0px," + event.clientX + "px,768px,0px)";

}