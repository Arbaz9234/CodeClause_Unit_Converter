const sqkilometerEl = document.querySelector("#sqkilometer");
const sqmeterEl = document.querySelector("#sqmeter");
const sqcentimeterEl = document.querySelector("#sqcentimeter");
const sqmillimeterEl = document.querySelector("#sqmillimeter");
const sqinchEl = document.querySelector("#sqinch");
const sqyardEl = document.querySelector("#sqyard");

function sqkilometer(value) {
	sqmeterEl.value = value * 1000000;
	sqcentimeterEl.value = value *10000000000;
	sqmillimeterEl.value = value * 1000000000000;
	sqinchEl.value = value *1550003100.0062;
	sqyardEl.value = value * 1195990.0463011;
}

function sqmeter(value) {
	sqkilometerEl.value = value / 1000000;
	sqcentimeterEl.value = value * 10000;
	sqmillimeterEl.value = value * 1000000;
	sqinchEl.value = value * 1550;
	sqyardEl.value = value * 1.19599;
}

function sqcentimeter(value) {
	sqkilometerEl.value = value /10000000000 ;
	sqmeterEl.value = value / 10000;
	sqmillimeterEl.value = value * 100;
	sqinchEl.value = value * 0.155;
	sqyardEl.value = value / 8361.27;
}

function sqmillimeter(value) {
	sqkilometerEl.value = value / 1000000000000;
	sqmeterEl.value = value / 1000000;
	sqcentimeterEl.value = value / 100;
	sqinchEl.value = value / 645.16;
	sqyardEl.value = value / 836127;
}
function sqinch(value) {
	sqkilometerEl.value = value / 1550003100.0062;
	sqmeterEl.value = value / 1550;
	sqcentimeterEl.value = value / 0.155;
	sqmillimeterEl.value = value * 645.16;
	sqyardEl.value = value * 1296;
}
function sqyard(value) {
	sqkilometerEl.value = value / 1195990.0463011;
	sqmeterEl.value = value / 1.19599;
	sqcentimeterEl.value = value * 8361.27;
	sqmillimeterEl.value = value * 836127;
	sqinchEl.value = value / 1296;
}

