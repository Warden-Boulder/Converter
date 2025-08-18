
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

  let formattedInput = feet >= 1000 ? parseFloat(feet).toLocaleString() : feet;
  let formattedResult = cm >= 1000 ? parseFloat(cm).toLocaleString() : cm;
  let resultsHTML = "<h3>Result:</h3>";
  if (feet == 1) {
    resultsHTML += `<p> ${formattedInput} foot = `+ formattedResult + " cm</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} feet = `+ formattedResult + " cm</p>";
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

  let formattedInput = cm >= 1000 ? parseFloat(cm).toLocaleString() : cm;
  let formattedResult = feet >= 1000 ? parseFloat(feet).toLocaleString() : feet;
  let resultsHTML = "<h3>Result:</h3>";
  if (feet == 1) {
    resultsHTML += `<p> ${formattedInput} cm = `+ formattedResult + " foot</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} cm = `+ formattedResult + " feet</p>";
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

  let formattedInput = mm >= 1000 ? parseFloat(mm).toLocaleString() : mm;
  let formattedResult = inch >= 1000 ? parseFloat(inch).toLocaleString() : inch;
  let resultsHTML = "<h3>Result:</h3>";
  if (inch == 1) {
    resultsHTML += `<p> ${formattedInput} MM = `+ formattedResult + " inch</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} MM = `+ formattedResult + " inches</p>";
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

  let formattedInput = mi >= 1000 ? parseFloat(mi).toLocaleString() : mi;
  let formattedResult = km >= 1000 ? parseFloat(km).toLocaleString() : km;
  let resultsHTML = "<h3>Result:</h3>";
  if (mi == 1) {
    resultsHTML += `<p> ${formattedInput} mile = `+ formattedResult + " km</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} miles = `+ formattedResult + " km</p>";
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

  let formattedInput = yard >= 1000 ? parseFloat(yard).toLocaleString() : yard;
  let formattedResult = meter >= 1000 ? parseFloat(meter).toLocaleString() : meter;
  let resultsHTML = "<h3>Result:</h3>";
  if (yard == 1) {
    resultsHTML += `<p> ${formattedInput} yard = `+ formattedResult + " meters</p>";
  } else if (meter == 1) {
    resultsHTML += `<p> ${formattedInput} yard = `+ formattedResult + " meter</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} yards = `+ formattedResult + " meters</p>";
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

  let formattedInput = km >= 1000 ? parseFloat(km).toLocaleString() : km;
  let formattedResult = mi >= 1000 ? parseFloat(mi).toLocaleString() : mi;
  let resultsHTML = "<h3>Result:</h3>";
  if (mi == 1) {
    resultsHTML += `<p> ${formattedInput} km = `+ formattedResult + " mile</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} km = `+ formattedResult + " miles</p>";
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

  let formattedInput = inches >= 1000 ? parseFloat(inches).toLocaleString() : inches;
  let formattedResult = MM >= 1000 ? parseFloat(MM).toLocaleString() : MM;
  let resultsHTML = "<h3>Result:</h3>";
  if (inches == 1) {
    resultsHTML += `<p> ${formattedInput} inch = `+ formattedResult + " MM</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} inches = `+ formattedResult + " MM</p>";
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

  let formattedInput = meter >= 1000 ? parseFloat(meter).toLocaleString() : meter;
  let formattedResult = yard >= 1000 ? parseFloat(yard).toLocaleString() : yard;
  let resultsHTML = "<h3>Result:</h3>";
  if (yard == 1) {
    resultsHTML += `<p> ${formattedInput} meters = `+ formattedResult + " yard</p>";
  } else if (meter == 1) {
    resultsHTML += `<p> ${formattedInput} meter = `+ formattedResult + " yards</p>";
  } else {
    resultsHTML += `<p> ${formattedInput} meters = `+ formattedResult + " yards</p>";
  }
  document.getElementById("lengthResults").innerHTML = resultsHTML;
}
