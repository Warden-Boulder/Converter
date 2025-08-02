function displayLength() {
  let lengthSelect = document.getElementById("length").value;
  if (lengthSelect === "in") {
    toMM();
  } else if (lengthSelect === "mm") {
    toIn();
  } else if (lengthSelect === "ft") {
    toCm();
  } else if (lengthSelect === "cm") {
    toFt();
  }
   else if (lengthSelect === "yd") {
    toMeter();
  }
   else if (lengthSelect === "meter") {
    toYd();
  }
   else if (lengthSelect === "mi") {
    toKm();
  }
   else if (lengthSelect === "km") {
    toMi();
  }
}

function toCm() {
  let feet = document.getElementById("LengthInput").value || 0;
  let cm = feet*30.48

  if (cm.toFixed(2).endsWith('.00')) {
    cm = cm.toFixed(0);
  } else if (cm.toFixed(2).endsWith('0')) {
    cm = cm.toFixed(1);
  } else {
   cm = cm.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (feet == 1) {
    resultsHTML += `<p> ${feet} foot = `+ cm + " cm</p>";
  } else {
    resultsHTML += `<p> ${feet} feet = `+ cm + " cm</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toFt() {
  let cm = document.getElementById("LengthInput").value || 0;
  let feet = cm/30.48

   if (feet.toFixed(2).endsWith('.00')) {
    feet = feet.toFixed(0);
  } else if (feet.toFixed(2).endsWith('0')) {
    feet = feet.toFixed(1);
  } else {
   feet = feet.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (feet == 1) {
    resultsHTML += `<p> ${cm} cm = `+ feet + " foot</p>";
  } else {
    resultsHTML += `<p> ${cm} cm = `+ feet + " feet</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toIn() {
  let mm = document.getElementById("LengthInput").value || 0;
  let inch = mm/25.4

  if (inch.toFixed(2).endsWith('.00')) {
    inch= inch.toFixed(0);
  } else if (inch.toFixed(2).endsWith('0')) {
    inch = inch.toFixed(1);
  } else {
   inch = inch.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (inch == 1) {
    resultsHTML += `<p> ${mm} MM = `+ inch + " inch</p>";
  } else {
    resultsHTML += `<p> ${mm} MM = `+ inch + " inches</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toKm() {
  let mi = document.getElementById("LengthInput").value || 0;
  let km = mi*1.61;

  if (km.toFixed(2).endsWith('.00')) {
    km = km.toFixed(0);
  } else if (km.toFixed(2).endsWith('0')) {
    km = km.toFixed(1);
  } else {
   km = km.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (mi == 1) {
    resultsHTML += `<p> ${mi} mile = `+ km + " km</p>";
  } else {
    resultsHTML += `<p> ${mi} miles = `+ km + " km</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toMeter() {
  let yard = document.getElementById("LengthInput").value || 0;
  let meter = yard*0.9144

  if (meter.toFixed(2).endsWith('.00')) {
    meter = meter.toFixed(0);
  } else if (meter.toFixed(2).endsWith('0')) {
    meter = meter.toFixed(1);
  } else {
   meter = meter.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (yard == 1) {
    resultsHTML += `<p> ${yard} yard = `+ meter + " meters</p>";
  } else if (meter == 1) {
    resultsHTML += `<p> ${yard} yard = `+ meter + " meter</p>";
  } else {
    resultsHTML += `<p> ${yard} yards = `+ meter + " meters</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toMi() {
  let km = document.getElementById("LengthInput").value || 0;
  let mi = km/1.61;

  if (mi.toFixed(2).endsWith('.00')) {
    mi = mi.toFixed(0);
  } else if (mi.toFixed(2).endsWith('0')) {
    mi = mi.toFixed(1);
  } else {
   mi = mi.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (mi == 1) {
    resultsHTML += `<p> ${km} km = `+ mi + " mile</p>";
  } else {
    resultsHTML += `<p> ${km} km = `+ mi + " miles</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toMM(){
  let inches = document.getElementById("LengthInput").value || 0;
  let MM = inches*25.4;

  if (MM.toFixed(2).endsWith('.00')) {
    MM = MM.toFixed(0);
  } else if (MM.toFixed(2).endsWith('0')) {
    MM = MM.toFixed(1);
  } else {
   MM = MM.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (inches == 1) {
    resultsHTML += `<p> ${inches} inch = `+ MM + " MM</p>";
  } else {
    resultsHTML += `<p> ${inches} inches = `+ MM + " MM</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}

function toYd() {
  let meter = document.getElementById("LengthInput").value || 0;
  let yard = meter/0.9144

  if (yard.toFixed(2).endsWith('.00')) {
    yard = yard.toFixed(0);
  } else if (yard.toFixed(2).endsWith('0')) {
    yard = yard.toFixed(1);
  } else {
   yard = yard.toFixed(2);
  }

  let resultsHTML = "<h3>Result:</h3>";
  if (yard == 1) {
    resultsHTML += `<p> ${meter} meters = `+ yard + " yard</p>";
  } else if (meter == 1) {
    resultsHTML += `<p> ${meter} meter = `+ yard + " yards</p>";
  } else {
    resultsHTML += `<p> ${meter} meters = `+ yard + " yards</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}
