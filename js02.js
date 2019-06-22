require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer",
	"esri/layers/GeoJSONLayer"
], function(Map, MapView, FeatureLayer, GeoJSONLayer) {
	
	var renderer02 = {
		type:"simple",
		symbol:{
			type:"simple-marker",
			color: "#d93a49",
			size: 12
		}
	};
	var renderer03 = {
		type:"simple",
		symbol:{
			type:"simple-marker",
			color: "#426ab3",
			size: 10
		}
	};
	var renderer04 = {
		type:"simple",
		symbol:{
			type:"simple-marker",
			color: "#f47920",
			size: 8
		}
	};

	var map = new Map({
		basemap: {
			portalItem: {
				id: "72c6f7e1fa2b41b59e90afa1fe35adb4"
			}
		}
	});

	//*************************添加图层*************************************
	// Trailheads Point feature layer
	var featureLayer01 = new FeatureLayer({
		portalItem: {
			id: "ab3017ec8a6a4c1b98b84a91081c154a"
		}
	});

	// Trailheads Line feature layer
	var featureLayer02 = new GeoJSONLayer({
		url: "https://sunxinjie.github.io/webGIS/Government_agencies.json",
		renderer: renderer02
	});

	// Trailheads Polygon feature layer
	var featureLayer03 = new GeoJSONLayer({
		url: "https://sunxinjie.github.io/webGIS/car services.json",
		renderer: renderer03
	});

	var featureLayer04 = new GeoJSONLayer({
		url: "https://sunxinjie.github.io/webGIS/gas.json",
		renderer: renderer04
	});

	document.getElementById("AddGongAn").addEventListener("click", function() {
		map.add(featureLayer01);
	});

	document.getElementById("AddGav").addEventListener("click", function() {
		map.add(featureLayer02);
	});

	document.getElementById("AddCar").addEventListener("click", function() {
		map.add(featureLayer03);
	});
	document.getElementById("AddGas").addEventListener("click", function() {
		map.add(featureLayer04);
	});

	//*************************添加地图到视图*************************************
	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [112.5, 30],
		zoom: 9
	});

	//*************************移除图层*************************************
	document.getElementById("RemoveGongAn").addEventListener("click", function() {
		view.map.remove(featureLayer01);
	});

	document.getElementById("RemoveGav").addEventListener("click", function() {
		view.map.remove(featureLayer02);
	});

	document.getElementById("RemoveCar").addEventListener("click", function() {
		view.map.remove(featureLayer03);
	});

	document.getElementById("RemoveGas").addEventListener("click", function() {
		view.map.remove(featureLayer04);
	});

	//*************************计算图层数量*************************************
	view.map.allLayers.on("change", function(event) {
		var num = event.target.length - 1;
		document.getElementById("Layers").textContent = "Layers： " + num;
	});
	
	

});