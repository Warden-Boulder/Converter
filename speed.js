
function displaySpeed() {
  let speedSelect = document.getElementById("speed").value;
  if (speedSelect === "mph") {
    MPHtoKnots();
  } else if (speedSelect === "knots") {
    KnotstoMPH();
  } else if (speedSelect === "knots2") {
    KnotstoKmh();
  } else if (speedSelect === "mph2") {
    MPHtoKmh();
  } else if (speedSelect === "kmh") {
    KmhtoMPH();
  }  else  {
    KmhtoKnots();
  }
}

function KmhtoKnots() {
  let Kmh = document.getElementById("SpeedInput").value || 0;
  const knots = Kmh/1.852

  let formattedInput = Kmh >= 1000 ? parseFloat(Kmh).toLocaleString() : Kmh;
  let formattedResult = knots >= 1000 ? parseFloat(knots.toFixed(2)).toLocaleString() : knots.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} Km/h = `+ formattedResult + " Knot(s)</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}

function KmhtoMPH() {
  let kmh = document.getElementById("SpeedInput").value || 0;
  const mph = kmh/1.61;

  let formattedInput = kmh >= 1000 ? parseFloat(kmh).toLocaleString() : kmh;
  let formattedResult = mph >= 1000 ? parseFloat(mph.toFixed(2)).toLocaleString() : mph.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} Km/h = `+ formattedResult + " mph</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}

function KnotstoKmh() {
  let knots = document.getElementById("SpeedInput").value || 0;
  const Kmh = knots*1.852

  let formattedInput = knots >= 1000 ? parseFloat(knots).toLocaleString() : knots;
  let formattedResult = Kmh >= 1000 ? parseFloat(Kmh.toFixed(2)).toLocaleString() : Kmh.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} knot(s) = `+ formattedResult + " Km/h</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}

function KnotstoMPH() {
  let knots = document.getElementById("SpeedInput").value || 0;
  const mph = parseFloat(knots)*1.15;

  let formattedInput = knots >= 1000 ? parseFloat(knots).toLocaleString() : knots;
  let formattedResult = mph >= 1000 ? parseFloat(mph.toFixed(2)).toLocaleString() : mph.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} knot(s) = `+ formattedResult + " MPH</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}

function MPHtoKmh() {
  let mph = document.getElementById("SpeedInput").value || 0;
  const Kmh = mph*1.61;

  let formattedInput = mph >= 1000 ? parseFloat(mph).toLocaleString() : mph;
  let formattedResult = Kmh >= 1000 ? parseFloat(Kmh.toFixed(2)).toLocaleString() : Kmh.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} mph = `+ formattedResult + " Km/h</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}

function MPHtoKnots() {
  let mph = document.getElementById("SpeedInput").value || 0;
  const knots = parseFloat(mph)/1.15;

  let formattedInput = mph >= 1000 ? parseFloat(mph).toLocaleString() : mph;
  let formattedResult = knots >= 1000 ? parseFloat(knots.toFixed(2)).toLocaleString() : knots.toFixed(2);
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${formattedInput} mph = `+ formattedResult + " knot(s)</p>";
  document.getElementById("speedResults").innerHTML = resultsHTML;
}
