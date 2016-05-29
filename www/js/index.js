var app = {
    // Application Constructor
    initialize: function() {
    	document.getElementById("temp").innerHTML = "20";
    },

    up: function() {
    	var number = document.getElementById("temp").innerHTML;
    	number++;
   		document.getElementById("temp").innerHTML = number;
    },

    down: function() {
    	var number = document.getElementById("temp").innerHTML;
    	number--;
    	document.getElementById("temp").innerHTML = number;
    }
};
