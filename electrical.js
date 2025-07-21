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
    resultsHTML += `<p>${input} Amps = ${amps} MegaAmps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "AtomA") {
    let amps = input*1000;
    if (amps % 1 === 0) {
      amps = amps.toFixed(0);
    } else if ((amps*10) % 1 === 0) {
      amps = amps.toFixed(1);
    } else {
      amps = amps.toFixed(2);
    }
    resultsHTML += `<p>${input} Amps = ${amps} MilliAmps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input} Amps × ${input2} Volts = ${resistance} Ohms</p>`;
      resultsHTML += `<p>Formula used: R = V ÷ I</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input} Amps × ${input2} Ohms = ${voltage} Volts</p>`;
      resultsHTML += `<p>Formula used: V = I × R</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
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
    resultsHTML += `<p>${input} MegaAmps = ${M_Amps} Amps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
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
    resultsHTML += `<p>${input} MegaOhms = ${M_Ohms} Ohms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
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
    resultsHTML += `<p>${input} MegaVolts = ${M_Volts} Volts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
   else if (electricalSelect === "mAtoA") {
    let m_Amps = input/1000;
    if (m_Amps % 1 === 0) {
      m_Amps = m_Amps.toFixed(0);
    } else if ((m_Amps*10) % 1 === 0) {
      m_Amps = m_Amps.toFixed(1);
    } else {
      m_Amps = m_Amps.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliAmps = ${m_Amps} Amps</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "mVtoV") {
    let m_Volts = input/1000;
    if (m_Volts % 1 === 0) {
      m_Volts = m_Volts.toFixed(0);
    } else if ((m_Volts*10) % 1 === 0) {
      m_Volts = m_Volts.toFixed(1);
    } else {
      m_Volts = m_Volts.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliVolts = ${m_Volts} Volts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input2} Volts ÷ ${input} Ohms = ${current} Amps</p>`;
      resultsHTML += `<p>Formula used: I = V ÷ R</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtoMO") {
    let ohms = input/1000000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(6);
    }
    resultsHTML += `<p>${input} Ohms = ${ohms} MegaOhms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "OtomO") {
    let ohms = input*1000;
    if (ohms % 1 === 0) {
      ohms = ohms.toFixed(0);
    } else if ((ohms*10) % 1 === 0) {
      ohms = ohms.toFixed(1);
    } else {
      ohms = ohms.toFixed(2);
    }
    resultsHTML += `<p>${input} Ohms = ${ohms} MilliOhms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input2} Amps × ${input} Ohms = ${voltage} Volts</p>`;
      resultsHTML += `<p>Formula used: V = I × R</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input} Volts ÷ ${input2} Ohms = ${current} Amps</p>`;
      resultsHTML += `<p>Formula used: I = V ÷ R</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
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
      resultsHTML += `<p>${input} Volts ÷ ${input2} Amps = ${resistance} Ohms</p>`;
      resultsHTML += `<p>Formula used: R = V ÷ I</p>`;
    }
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtoMV") {
    let M_Volts = input/1000000;
    if (M_Volts % 1 === 0) {
      M_Volts = M_Volts.toFixed(0);
    } else if ((M_Volts*10) % 1 === 0) {
      M_Volts = M_Volts.toFixed(1);
    } else {
      M_Volts = M_Volts.toFixed(6);
    }
    resultsHTML += `<p>${input} Volts = ${M_Volts} MegaVolts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "VtomV") {
    let m_Volts = input*1000;
    if (m_Volts % 1 === 0) {
      m_Volts = m_Volts.toFixed(0);
    } else if ((m_Volts*10) % 1 === 0) {
      m_Volts = m_Volts.toFixed(1);
    } else {
      m_Volts = m_Volts.toFixed(2);
    }
    resultsHTML += `<p>${input} Volts = ${m_Volts} MilliVolts</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  } else if (electricalSelect === "mOtoO") {
    let m_Ohms = input/1000;
    if (m_Ohms % 1 === 0) {
      m_Ohms = m_Ohms.toFixed(0);
    } else if ((m_Ohms*10) % 1 === 0) {
      m_Ohms = m_Ohms.toFixed(1);
    } else {
      m_Ohms = m_Ohms.toFixed(2);
    }
    resultsHTML += `<p>${input} MilliOhms = ${m_Ohms} Ohms</p>`;
    document.getElementById("results").innerHTML = resultsHTML;
  }
}
