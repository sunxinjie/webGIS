require([
	"esri/Map",
	"esri/layers/FeatureLayer",
	"esri/views/MapView"
], function(Map, FeatureLayer, MapView ) {
	var layer = new FeatureLayer({
		portalItem: {
			id: "a1a78ea967b54c4db9347a6bc22fc3d7"
		}
	});

	var map01 = new Map({
		basemap: "streets"
	});

	var view = new MapView({
		container: "viewDiv01",
		map: map01,
		center: [112.5, 30],
		zoom: 9
	});
	map01.add(layer);

	document.getElementById("basemap01").addEventListener("click", function() {
		map01.basemap = {
			portalItem: {
				id: "72c6f7e1fa2b41b59e90afa1fe35adb4"
			}
		};
	});

	document.getElementById("basemap02").addEventListener("click", function() {
		map01.basemap = {
			portalItem: {
				id: "6587a0ebed3941bba58ec3084c0f87f6"
			}
		};
	});

	document.getElementById("basemap03").addEventListener("click", function() {
		map01.basemap = {
			portalItem: {
				id: "3f1092390fb5465fa4206b4513d2d71e"
			}
		};
	});

	document.getElementById("basemap04").addEventListener("click", function() {
		map01.basemap = {
			portalItem: {
				id: "34f0c417523b42148cb0f8947bf6c6e9"
			}
		};
	});

	document.getElementById("basemap05").addEventListener("click", function() {
		map01.basemap = "streets";
	});
	document.getElementById("basemap06").addEventListener("click", function() {
		map01.basemap = "hybrid";
	});

	//**********************************************功能：显示地图的比例尺，鼠标等坐标点等**********************************************************

	//*** 添加DIV用于显示坐标等信息 ***//
	var coordsWidget = document.createElement("div");
	coordsWidget.id = "coordsWidget";
	coordsWidget.className = "esri-widget esri-component";
	coordsWidget.style.padding = "7px 15px 5px";
	view.ui.add(coordsWidget, "bottom-right");

	//***显示经纬度、比例尺大小和尺度***//
	function showCoordinates(pt) {
		var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
			" | Scale 1:" + Math.round(view.scale * 1) / 1 +
			" | Zoom " + view.zoom;
		coordsWidget.innerHTML = coords;
	}

	//*** 添加事件显示中心的坐标（在视图停止移动之后） ***//
	view.watch(["stationary"], function() {
		showCoordinates(view.center);
	});

	//*** 添加显示鼠标的坐标点***//
	view.on(["pointer-down", "pointer-move"], function(evt) {
		showCoordinates(view.toMap({
			x: evt.x,
			y: evt.y
		}));
	});

});