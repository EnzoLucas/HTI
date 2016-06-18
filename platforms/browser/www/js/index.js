

function getTargetTemp() {
    var temp = get("targetTemperature", "target_temperature");
    document.getElementById('TargetTemp').innerHTML=temp;
    this.checkButtonVisibility(temp);
}

function increaseTemp() {
    var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
    number = number + 0.5;
    put("targetTemperature", "target_temperature", number.toFixed(1));
        this.getTargetTemp();
}

function decreaseTemp() {
    var number = parseFloat(document.getElementById("TargetTemp").innerHTML);
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
    document.getElementById('CurrentTemp').innerHTML=get("currentTemperature", "current_temperature");
}

function update() {
    getTime();
    getCurrentTemp();
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
