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
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${Kmh} Km/h = `+ knots.toFixed(2) + " Knot(s)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KmhtoMPH() {
  let kmh = document.getElementById("SpeedInput").value || 0;
  const mph = kmh/1.61;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${kmh} Km/h = `+ mph.toFixed(2) + " mph</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KnotstoKmh() {
  let knots = document.getElementById("SpeedInput").value || 0;
  const Kmh = knots*1.852
  
  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${knots} knot(s) = `+ Kmh.toFixed(2) + " Km/h</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function KnotstoMPH() {
  let knots = document.getElementById("SpeedInput").value || 0;
  const mph = parseFloat(knots)*1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${knots} knot(s) = `+ mph.toFixed(2) + " MPH</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function MPHtoKmh() {
  let mph = document.getElementById("SpeedInput").value || 0;
  const Kmh = mph*1.61;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${mph} mph = `+ Kmh.toFixed(2) + " Km/h</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}

function MPHtoKnots() {
  let mph = document.getElementById("SpeedInput").value || 0;
  const knots = parseFloat(mph)/1.15;

  let resultsHTML = "<h3>Result:</h3>";
  resultsHTML += `<p>${mph} mph = `+ knots.toFixed(2) + " knot(s)</p>";
  document.getElementById("results").innerHTML = resultsHTML;
}
