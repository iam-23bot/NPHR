document.getElementById('nphr-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const heatInput = parseFloat(document.getElementById('heat-input').value);
    const netPowerOutput = parseFloat(document.getElementById('net-power-output').value);

    if (isNaN(heatInput) || isNaN(netPowerOutput) || netPowerOutput === 0) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const nphr = (heatInput / (netPowerOutput * 3600)).toFixed(2); // NPHR = Heat Input / Net Power Output (in Joules)

    document.getElementById('result').textContent = `NPHR: ${nphr} kJ/kWh`;
});
