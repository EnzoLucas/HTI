function printWeek(refresh) {
	$.each(Program,
		function (index, value) {
			var day = index;
			var idx = 0;
			var table = "<table style='margin: auto;'>";
			if (value.length == 0 && !refresh){
				document.getElementById("add"+day).firstElementChild.innerHTML="add the start of your day!";
				document.getElementById("add"+day).style.visibility="visible";
				return;
	 		} else {
				$.each(value, 
					function (index, value) {
						table = table + "<tr><td>" + value[0] + " - " + value[1] + "</td><td><button onclick='removePeriod(\""+day+"\", "+idx+")'>remove</button></td></td></tr>";
						idx++;
					}
				);
				if (value.length < 5 && !refresh){
					document.getElementById("add"+day).style.visibility="visible";
				} else if (value.length == 5) {
					document.getElementById(day+"Time").style.visibility="hidden";
				}
				table += "</table>";
				document.getElementById(day+"Table").innerHTML=table;
			}
		}
	);
}

function add(day) {
	document.getElementById("add"+day).style.visibility="hidden";
	document.getElementById(day+"Time").style.visibility="visible";
}

function submit(day) {
	var start = document.getElementById("start"+day).value;
	var end = document.getElementById("end"+day).value;
	if (start < end) {
		addPeriod(day, start, end);
		getWeekProgram();
		printWeek(true);
	} else {
		alert("Please select a start time before the end time");
	}
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none');
}