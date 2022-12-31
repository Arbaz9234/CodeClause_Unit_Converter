const cubickilometerEl = document.querySelector("#cubickilometer");
const cubicmeterEl = document.querySelector("#cubicmeter");
const cubiccentimeterEl = document.querySelector("#cubiccentimeter");
const cubicmillimeterEl = document.querySelector("#cubicmillimeter");
const cubiclitreEl = document.querySelector("#cubiclitre");

function cubickilometer(value) {
	cubicmeterEl.value = value * 1000000000;
	cubiccentimeterEl.value = value * 1000000000000000;
	cubicmillimeterEl.value = value * 1000000000000000000;
	cubiclitreEl.value = value * 1000000000000;
    
}

function cubicmeter(value) {
	cubickilometerEl.value = value /1000000000 ;
	cubiccentimeterEl.value = value * 1000000;
	cubicmillimeterEl.value = value * 1000000000;
	cubiclitreEl.value = value * 1000;
}

function cubiccentimeter(value) {
	cubickilometerEl.value = value / 1000000000000000;
	cubicmeterEl.value = value /1000000;
	cubicmillimeterEl.value = value * 1000;
	cubiclitreEl.value = value /1000;
}

function cubicmillimeter(value) {
	cubickilometerEl.value = value / 1000000000000000000;
	cubicmeterEl.value = value / 1000000000;
	cubiccentimeterEl.value = value / 1000;
	cubiclitreEl.value = value * 1000000;
}
function cubiclitre(value) {
	cubickilometerEl.value = value / 1000000000000;
	cubicmeterEl.value = value / 1000;
	cubiccentimeterEl.value = value * 1000;
	cubicmillimeterEl.value = value / 1000000;
}
