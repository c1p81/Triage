// debug

function d(s) {
	console.log(s);
	//alert(s);
	//$("#status").text(s);

}

// geo

function geoWin(pos) {
	//d("geoWin(): "+pos.coords.latitude+", "+pos.coords.longitude);
	$("#nord").val(parseFloat(pos.coords.latitude));
	$("#est").val(parseFloat(pos.coords.longitude));
	//alert(pos.coords.latitude);
}

function geoFail(error) {
	//d("geoFail(): "+error.code+": "+error.message);
	//$("#nord").val("0");
    //$("#est").val("0");
    //alert("NO");
}

function startGeoWatch() {
	d("startGeoWatch()");
	opt = {timeout: 1000, enableHighAccuracy: true};
	watchGeo = navigator.geolocation.watchPosition(geoWin, geoFail, opt);
}

function stopGeoWatch() {
	d("stopGeoWatch()");
	navigator.geolocation.clearWatch(watchGeo);
}

// life cycle

function onPause() {
	d("onPause()");
	stopGeoWatch();
}

function onResume() {
	d("onResume()");
	startGeoWatch();
}

// init

function onDeviceReady() {
	d("onDeviceReady()");
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	startGeoWatch();
}

function main() {
	document.addEventListener('deviceready', onDeviceReady, false);
	//alert("DOC");
}

// Based on geo.js by Tero Karvinen 2015 http://TeroKarvinen.com
// main & globals
var watchGeo=null;
//main();