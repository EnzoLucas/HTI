

function getTargetTemp() {
    var temp = get("targetTemperature", "target_temperature");
    document.getElementById('TargetTemp').innerHTML=temp+" &deg;C";
    this.checkButtonVisibility(temp);
}

function increaseTemp() {
    var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    number = Math.floor(number*2)/2;
    number = number + 0.5;
    put("targetTemperature", "target_temperature", number.toFixed(1));
        this.getTargetTemp();
}

function decreaseTemp() {
    var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    number = Math.ceil(number*2)/2;
    number -= 0.5;
    put("targetTemperature", "target_temperature", number.toFixed(1));
    this.getTargetTemp();
}

function checkButtonVisibility(temp) {
    var decreaseButton = document.getElementById("decreaseButton");
    var increaseButton = document.getElementById("increaseButton");
    if (temp == 5) {
        decreaseButton.style.opacity='0.4'
    } else if (temp == 30) {
        increaseButton.style.opacity='0.4'
    } else {
        decreaseButton.style.opacity='1';
        increaseButton.style.opacity='1';
    };
}

function getTime() {
    var time = get('time', 'time');
    var day = get('day', 'current_day');
    document.getElementById('currentTime').innerHTML=day+' '+time;
}

function getCurrentTemp() {
    document.getElementById('CurrentTemp').innerHTML=get("currentTemperature", "current_temperature")+" &deg;C";
}

function update() {
    getTime();
    getCurrentTemp();
    //checkState();
}

function pressAndHold(callback, button) {
    // var timeout;
    // var multiplier = 1000;

    // var repeat = function() {
    //     callback();
    //     timeout = setTimeout( repeat(), 1000);
    //     // if (multipier > 2) {
    //     //     multipier = multiplier/2;
    //     // }
    // }

    var interval = setInterval(callback, 100);

    button.mouseup = function() {
        clearInterval(interval);
    }
}

function checkState() {
    var vacation = get("weekProgramState", "week_program_state");
    var time = parseTime(get('time', 'time'));
    var day = get('day', 'current_day');
    var warm = false;
    if (vacation == "off") {
        document.getElementById("state").innerHTML="Vacation";
        return;
    } else {
        $.each(Program[day], 
        function (index, value) {
            var low = parseTime(value[0]);
            var high = parseTime(value[1]);
            if (time > low && time < high) {
                document.getElementById("state").innerHTML="Warm";
                warm = true;
                return;
            }
        });
        if (!warm){
            document.getElementById("state").innerHTML="Cold";
        }
    }
}