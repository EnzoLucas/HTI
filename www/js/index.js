var app = {
    getTargetTemp: function() {
        var temp = get("targetTemperature", "target_temperature");
        document.getElementById('TargetTemp').innerHTML=temp;
        this.checkButtonVisibility(temp);
    },
    getCurrentTemp: function() {
        document.getElementById('CurrentTemp').innerHTML=get("currentTemperature", "current_temperature");
    },

    increaseTemp: function() {
        var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    	number = number + 0.5;
        put("targetTemperature", "target_temperature", number.toFixed(1));
   		this.getTargetTemp();
    },

    decreaseTemp: function() {
    	var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    	number -= 0.5;
        put("targetTemperature", "target_temperature", number.toFixed(1));
    	this.getTargetTemp();
    },

    checkButtonVisibility: function(temp) {
        var decreaseButton = document.getElementById("decreaseButton");
        var increaseButton = document.getElementById("increaseButton");
        if (temp == 5) {
            decreaseButton.style.visibility='hidden';
        } else if (temp == 30) {
            increaseButton.style.visibility='hidden';
        } else {
            decreaseButton.style.visibility='visible';
            increaseButton.style.visibility='visible';
        };
    },
    // pressAndHold: function(func, button) {
    //     var timeout;
    //     var multiplier = 1000;

    //     var repeat = function() {
    //         func();
    //         timeout = setTimeout(repeat, 20*Math.log(multiplier));
    //         if multipier > 2 {
    //             multipier = multiplier/2;
    //         }
    //     }

    //     button.mousedown = function() {
    //         repeat();
    //     }

    //     button.mouseup = function() {
    //         clearTimeout(timeout);
    //     }
    // },
};
