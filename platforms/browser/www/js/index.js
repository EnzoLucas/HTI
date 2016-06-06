var app = {
    // Application Constructor
    getTargetTemp: function() {
        document.getElementById('TargetTemp').innerHTML=get("targetTemperature", "target_temperature");
    },

    increaseTemp: function() {
        var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    	number = number + 0.5;
        put("targetTemperature", "target_temperature", number.toFixed(1))
   		this.getTargetTemp();
    },

    decreaseTemp: function() {
    	var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    	number -= 0.5;
        put("targetTemperature", "target_temperature", number.toFixed(1))
    	this.getTargetTemp();
    }
};
