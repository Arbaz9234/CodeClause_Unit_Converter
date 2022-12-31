let kgRef = document.getElementById("kilogram");
let lbRef = document.getElementById("pounds");
let ozRef = document.getElementById("ounces");
let gmRef = document.getElementById("grams")
let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(3);
  ozRef.value = (kg * 35.274).toFixed(3);
  gmRef.value = (kg * 1000).toFixed(3);
};
let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(3);
  ozRef.value = (lb * 16).toFixed(3);
  gmRef.value = (lb * 453.592).toFixed(3);
};
let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(3);
  lbRef.value = (oz / 16).toFixed(3);
  gmRef.value = (oz * 28.3495).toFixed(3);
}
let convertFromGm = () => {
  let gm = gmRef.value;
  kgRef.value = (gm / 1000).toFixed(3);
  lbRef.value = (gm / 453.592).toFixed(3);
  ozRef.value = (gm / 28.3495).toFixed(3);
}



kgRef.addEventListener("input", convertFromKg);
gmRef.addEventListener("input", convertFromGm);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);