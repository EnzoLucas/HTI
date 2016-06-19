
function getWarm() {
	var value = get("dayTemperature", "day_temperature");
	document.getElementById("sliderWarm").value=value;
	document.getElementById("valueWarm").innerHTML=value+" &deg;C";
}

function updateWarm(value) {
	var cold = parseFloat(get("nightTemperature", "night_temperature"));
	value = parseFloat(value);
	if (cold.toFixed(1) > value.toFixed(1)) {
		alert("please set the warm temperature higher than the cold temperature");
		value = cold;
	}
	put("dayTemperature", "day_temperature", value.toFixed(1));
	getWarm();
}

function subWarm() {
	var slider = document.getElementById("sliderWarm");
	var value = parseFloat(slider.value);
	value -= 0.1;
	slider.value = value;
	updateWarm(value);
}

function addWarm() {
	var slider = document.getElementById("sliderWarm");
	var value = parseFloat(slider.value);
	value += 0.1;
	slider.value = value;
	updateWarm(value);
}

function getCold() {
	var value = get("nightTemperature", "night_temperature");
	document.getElementById("sliderCold").value=value;
	document.getElementById("valueCold").innerHTML=value+" &deg;C";
}

function updateCold(value) {
	var warm = parseFloat(get("dayTemperature", "day_temperature"));
	value = parseFloat(value);
	if (value.toFixed(1) > warm.toFixed(1)) {
		alert("please set the cold temperature lower than the warm temperature");
		value = warm;
	}
	put("nightTemperature", "night_temperature", value.toFixed(1));
	getCold();
}

function subCold() {
	var slider = document.getElementById("sliderCold");
	var value = parseFloat(slider.value);
	value -= 0.1;
	slider.value = value;
	updateCold(value);
}

function addCold() {
	var slider = document.getElementById("sliderCold");
	var value = parseFloat(slider.value);
	value += 0.1;
	slider.value = value;
	updateCold(value);
}

function getVacation() {
	var value = get("weekProgramState", "week_program_state");
	if (value == "on") {
		document.getElementById("switchVacation").checked=false;
	} else {
		document.getElementById("switchVacation").checked=true;
	}
}

function vacation() {
	var value = document.getElementById("switchVacation").checked;
	var temp = parseFloat(get("targetTemperature", "target_temperature"));
 	if (value == true) {
 		put("weekProgramState", "week_program_state", "off");
 	} else {
 		put("weekProgramState", "week_program_state", "on");
 	}
 	put("targetTemperature", "target_temperature", temp.toFixed(1));
 }