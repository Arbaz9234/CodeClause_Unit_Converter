const secondEl = document.querySelector("#second");
const millisecondEl = document.querySelector("#millisecond");
const microsecondEl = document.querySelector("#microsecond");
const nanosecondEl = document.querySelector("#nanosecond");
const picosecondEl = document.querySelector("#picosecond");
const minuteEl = document.querySelector("#minute");


function second(value) {
	millisecondEl.value = value / 1000;
	microsecondEl.value = value / 100000;
	nanosecondEl.value = value / 1000000000;
    picosecondEl.value = value / 1000000000000;
	minuteEl.value = value / 60;

    
}

function millisecond(value) {
	secondEl.value = value / 1000;
	microsecondEl.value = value *1000 ;
	nanosecondEl.value = value * 1000000 ;
    picosecondEl.value = value * 1000000000;
	minuteEl.value = value * 0.0000166667;
}

function microsecond(value) {
	secondEl.value = value / 1000000;
	millisecondEl.value = value / 1000 ;
	nanosecondEl.value = value * 1000 ;
    picosecondEl.value = value * 1000000;
	minuteEl.value = value /60000000;
}


function nanosecond(value) {
	secondEl.value = value /1000000000;
	millisecondEl.value = value / 1000000 ;
	microsecondEl.value = value /1000 ;
    picosecondEl.value = value * 1000;
	minuteEl.value = value /60000000000;
}

function picosecond(value) {
	secondEl.value = value / 1000000000000;
    millisecondEl.value = value / 1000000000;
	microsecondEl.value = value /1000000 ;
	nanosecondEl.value = value / 1000 ;
	minuteEl.value = value / 60000000000000;
}


function minute(value) {
	secondEl.value = value * 60;
	millisecondEl.value = value * 600000;
	microsecondEl.value = value * 60000000 ;
	nanosecondEl.value = value * 60000000000;
    picosecondEl.value = value * 60000000000000;
}


