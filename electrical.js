function displayElectric() {
  let electricalSelect = document.getElementById("electric").value;
  let input = parseFloat(document.getElementById('ElectricalInput').value) || 0;
  let input2 = parseFloat(document.getElementById('ElectricalInput2').value) || 0;
  let resultsHTML = "<h3>Results:</h3>";
  let secondInput = document.getElementById('ElectricalInput2');
  let firstInput = document.getElementById('ElectricalInput');

  if (['AtoO', 'AtoV', 'OtoA', 'OtoV', 'VtoA', 'VtoO'].includes(electricalSelect)) {
    secondInput.style.display = 'inline';
    if (electricalSelect === 'AtoO') {
      firstInput.placeholder = 'Enter current (Amps)';
      secondInput.placeholder = 'Enter voltage (Volts)';
    } else if (electricalSelect === 'AtoV') {
      firstInput.placeholder = 'Enter current (Amps)';
      secondInput.placeholder = 'Enter resistance (Ohms)';
    } else if (electricalSelect === 'OtoA') {
      firstInput.placeholder = 'Enter resistance (Ohms)';
      secondInput.placeholder = 'Enter voltage (Volts)';
    } else if (electricalSelect === 'OtoV') {
      firstInput.placeholder = 'Enter resistance (Ohms)';
      secondInput.placeholder = 'Enter current (Amps)';
    } else if (electricalSelect === 'VtoA') {
      firstInput.placeholder = 'Enter voltage (Volts)';
      secondInput.placeholder = 'Enter resistance (Ohms)';
    } else if (electricalSelect === 'VtoO') {
      firstInput.placeholder = 'Enter voltage (Volts)';
      secondInput.placeholder = 'Enter current (Amps)';
    }
  } else {
    secondInput.style.display = 'none';
    firstInput.placeholder = 'Enter value to convert';
  }
  if (electricalSelect === "AtoMA") {
    let amps = input/1000000;
    if (amps % 1 === 0) {
      amps = amps.toFixed(0);
    } else if ((amps*10) % 1 === 0) {
      amps = amps.toFixed(1);
    } else {
      amps = amps.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = amps >= 1000 ? amps.toLocaleString() : amps;
    resultsHTML += `<p>${formattedInput} Amps = ${formattedResult} MegaAmps</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtomA") {
    let amps = input*1000;
    if (amps % 1 === 0) {
      amps = amps.toFixed(0);
    } else if ((amps*10) % 1 === 0) {
      amps = amps.toFixed(1);
    } else {
      amps = amps.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = amps >= 1000 ? amps.toLocaleString() : amps;
    resultsHTML += `<p>${formattedInput} Amps = ${formattedResult} MilliAmps</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtoO") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter voltage value in the second input field</p>`;
      resultsHTML += `<p>Formula: Resistance (Ω) = Voltage (V) ÷ Current (A)</p>`;
    } else {
      let resistance = input2 / input;
      if (resistance % 1 === 0) {
        resistance = resistance.toFixed(0);
      } else if ((resistance*10) % 1 === 0) {
        resistance = resistance.toFixed(1);
      } else {
        resistance = resistance.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = resistance >= 1000 ? resistance.toLocaleString() : resistance;
      resultsHTML += `<p>${formattedInput2} Volts ÷ ${formattedInput} Amps = ${formattedResult} Ohms</p>`;
      resultsHTML += `<p>Formula used: R = V ÷ I</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtoV") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter resistance value in the second input field</p>`;
      resultsHTML += `<p>Formula: Voltage (V) = Current (A) × Resistance (Ω)</p>`;
    } else {
      let voltage = input * input2;
      if (voltage % 1 === 0) {
        voltage = voltage.toFixed(0);
      } else if ((voltage*10) % 1 === 0) {
        voltage = voltage.toFixed(1);
      } else {
        voltage = voltage.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = voltage >= 1000 ? voltage.toLocaleString() : voltage;
      resultsHTML += `<p>${formattedInput} Amps × ${formattedInput2} Ohms = ${formattedResult} Volts</p>`;
      resultsHTML += `<p>Formula used: V = I × R</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MAtoA") {
    let M_Amps = input*1000000;
    if (M_Amps % 1 === 0) {
      M_Amps = M_Amps.toFixed(0);
    } else if ((M_Amps*10) % 1 === 0) {
      M_Amps = M_Amps.toFixed(1);
    } else {
      M_Amps = M_Amps.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = M_Amps >= 1000 ? M_Amps.toLocaleString() : M_Amps;
    resultsHTML += `<p>${formattedInput} MegaAmps = ${formattedResult} Amps</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MOtoO") {
    let M_Ohms = input*1000000;
    if (M_Ohms % 1 === 0) {
      M_Ohms = M_Ohms.toFixed(0);
    } else if ((M_Ohms*10) % 1 === 0) {
      M_Ohms = M_Ohms.toFixed(1);
    } else {
      M_Ohms = M_Ohms.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = M_Ohms >= 1000 ? M_Ohms.toLocaleString() : M_Ohms;
    resultsHTML += `<p>${formattedInput} MegaOhms = ${formattedResult} Ohms</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "MVtoV") {
    let M_Volts = input*1000000;
    if (M_Volts % 1 === 0) {
      M_Volts = M_Volts.toFixed(0);
    } else if ((M_Volts*10) % 1 === 0) {
      M_Volts = M_Volts.toFixed(1);
    } else {
      M_Volts = M_Volts.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = M_Volts >= 1000 ? M_Volts.toLocaleString() : M_Volts;
    resultsHTML += `<p>${formattedInput} MegaVolts = ${formattedResult} Volts</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "mAtoA") {
    let m_Amps = input/1000;
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = m_Amps >= 1000 ? m_Amps.toLocaleString() : m_Amps;
    resultsHTML += `<p>${formattedInput} MilliAmps = ${formattedResult} Amps</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "mVtoV") {
    let m_Volts = input/1000;
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = m_Volts >= 1000 ? m_Volts.toLocaleString() : m_Volts;
    resultsHTML += `<p>${formattedInput} MilliVolts = ${formattedResult} Volts</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoA") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter voltage value in the second input field</p>`;
      resultsHTML += `<p>Formula: Current (A) = Voltage (V) ÷ Resistance (Ω)</p>`;
    } else {
      let current = input2 / input;
      if (current % 1 === 0) {
        current = current.toFixed(0);
      } else if ((current*10) % 1 === 0) {
        current = current.toFixed(1);
      } else {
        current = current.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = current >= 1000 ? current.toLocaleString() : current;
      resultsHTML += `<p>${formattedInput2} Volts ÷ ${formattedInput} Ohms = ${formattedResult} Amps</p>`;
      resultsHTML += `<p>Formula used: I = V ÷ R</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoMO") {
    let ohms = input/1000000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = ohms >= 1000 ? ohms.toLocaleString() : ohms;
    resultsHTML += `<p>${formattedInput} Ohms = ${formattedResult} MegaOhms</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtomO") {
    let ohms = input*1000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = ohms >= 1000 ? ohms.toLocaleString() : ohms;
    resultsHTML += `<p>${formattedInput} Ohms = ${formattedResult} MilliOhms</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoV") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter current value in the second input field</p>`;
      resultsHTML += `<p>Formula: Voltage (V) = Current (A) × Resistance (Ω)</p>`;
    } else {
      let voltage = input2 * input;
      if (voltage % 1 === 0) {
        voltage = voltage.toFixed(0);
      } else if ((voltage*10) % 1 === 0) {
        voltage = voltage.toFixed(1);
      } else {
        voltage = voltage.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = voltage >= 1000 ? voltage.toLocaleString() : voltage;
      resultsHTML += `<p>${formattedInput} Ohms × ${formattedInput2} Amps = ${formattedResult} Volts</p>`;
      resultsHTML += `<p>Formula used: V = I × R</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoA") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter resistance value in the second input field</p>`;
      resultsHTML += `<p>Formula: Current (A) = Voltage (V) ÷ Resistance (Ω)</p>`;
    } else {
      let current = input / input2;
      if (current % 1 === 0) {
        current = current.toFixed(0);
      } else if ((current*10) % 1 === 0) {
        current = current.toFixed(1);
      } else {
        current = current.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = current >= 1000 ? current.toLocaleString() : current;
      resultsHTML += `<p>${formattedInput} Volts ÷ ${formattedInput2} Ohms = ${formattedResult} Amps</p>`;
      resultsHTML += `<p>Formula used: I = V ÷ R</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoO") {
    if (input2 === 0) {
      resultsHTML += `<p>Please enter current value in the second input field</p>`;
      resultsHTML += `<p>Formula: Resistance (Ω) = Voltage (V) ÷ Current (A)</p>`;
    } else {
      let resistance = input / input2;
      if (resistance % 1 === 0) {
        resistance = resistance.toFixed(0);
      } else if ((resistance*10) % 1 === 0) {
        resistance = resistance.toFixed(1);
      } else {
        resistance = resistance.toFixed(2);
      }
      let formattedInput = input >= 1000 ? input.toLocaleString() : input;
      let formattedInput2 = input2 >= 1000 ? input2.toLocaleString() : input2;
      let formattedResult = resistance >= 1000 ? resistance.toLocaleString() : resistance;
      resultsHTML += `<p>${formattedInput} Volts ÷ ${formattedInput2} Amps = ${formattedResult} Ohms</p>`;
      resultsHTML += `<p>Formula used: R = V ÷ I</p>`;
    }
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoMV") {
    let M_Volts = input/1000000;
    if (M_Volts % 1 === 0) {
      M_Volts = M_Volts.toFixed(0);
    } else if ((M_Volts*10) % 1 === 0) {
      M_Volts = M_Volts.toFixed(1);
    } else {
      M_Volts = M_Volts.toFixed(6);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = M_Volts >= 1000 ? M_Volts.toLocaleString() : M_Volts;
    resultsHTML += `<p>${formattedInput} Volts = ${formattedResult} MegaVolts</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtomV") {
    let m_Volts = input*1000;
    if (m_Volts % 1 === 0) {
      m_Volts = m_Volts.toFixed(0);
    } else if ((m_Volts*10) % 1 === 0) {
      m_Volts = m_Volts.toFixed(1);
    } else {
      m_Volts = m_Volts.toFixed(2);
    }
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = m_Volts >= 1000 ? m_Volts.toLocaleString() : m_Volts;
    resultsHTML += `<p>${formattedInput} Volts = ${formattedResult} MilliVolts</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  } else if (electricalSelect === "mOtoO") {
    let m_Ohms = input/1000;
    let formattedInput = input >= 1000 ? input.toLocaleString() : input;
    let formattedResult = m_Ohms >= 1000 ? m_Ohms.toLocaleString() : m_Ohms;
    resultsHTML += `<p>${formattedInput} MilliOhms = ${formattedResult} Ohms</p>`;
    document.getElementById("electricalResults").innerHTML = resultsHTML;
  }
}
