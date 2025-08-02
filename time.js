function displayTime() {
  let timeSelect = document.getElementById('time').value;
  if (timeSelect === "min1") {
    const hourInMinutes = 60;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / hourInMinutes;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === hourInMinutes) {
      resultsHTML += `<p> ${formattedInput} minutes = 1 hour</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} minutes = ${result} hour(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  } else if (timeSelect === "min2") {
    const dayInMinutes = 1440;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / dayInMinutes;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === dayInMinutes) {
      resultsHTML += `<p> ${formattedInput} minutes = 1 day</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} minutes = ${result} day(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  } else if (timeSelect === "hour") {
    const dayInHours = 24;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / dayInHours;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === dayInHours) {
      resultsHTML += `<p> ${formattedInput} hours = 1 day</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} hours = ${result} day(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  } else if (timeSelect === "sec1") {
    const minuteInSeconds = 60;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / minuteInSeconds;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === minuteInSeconds) {
      resultsHTML += `<p> ${formattedInput} seconds = 1 minute</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} seconds = ${result} minute(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  } else if (timeSelect === "sec2") {
    const hourInSeconds = 3600;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / hourInSeconds;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === hourInSeconds) {
      resultsHTML += `<p> ${formattedInput} seconds = 1 hour</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} seconds = ${result} hour(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  } else if (timeSelect === "sec3") {
    const dayInSeconds = 86400;
    let input = parseFloat(document.getElementById('timeInput').value) || 0;
    let result = input / dayInSeconds;

    if (result.toFixed(2).endsWith('.00')) {
      result = result.toFixed(0);
    } else if (result.toFixed(2).endsWith('0')) {
      result = result.toFixed(1);
    } else {
      result = result.toFixed(2);
    }

    let formattedInput = input >= 1000 ? input.toLocaleString() : input;

    let resultsHTML = "<h3>Result:</h3>";
    if (input === dayInSeconds) {
      resultsHTML += `<p> ${formattedInput} seconds = 1 day</p>`;
    } else {
      resultsHTML += `<p> ${formattedInput} seconds = ${result} day(s)</p>`;
    }
    document.getElementById("timeResults").innerHTML = resultsHTML;
  }
}
