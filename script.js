function calculate() {
    let capacity = parseFloat(document.getElementById("capacity").value);
    let voltage_pin = parseFloat(document.getElementById("voltage_pin").value);
    let efficiency = parseFloat(document.getElementById("efficiency").value) / 100;
    let voltage_load = parseFloat(document.getElementById("voltage_load").value);
    let current_load = parseFloat(document.getElementById("current_load").value);

    if (isNaN(capacity) || isNaN(voltage_pin) || isNaN(efficiency) || isNaN(voltage_load) || isNaN(current_load)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập đầy đủ thông số!";
        return;
    }

    let energy_pin_Wh = (capacity / 1000) * voltage_pin;
    let energy_available_Wh = energy_pin_Wh * efficiency;
    let power_load_W = voltage_load * current_load;
    let time_hours = energy_available_Wh / power_load_W;
    let time_minutes = time_hours * 60;

    let result = `
        <strong>Năng lượng pin:</strong> ${energy_pin_Wh.toFixed(2)} Wh<br>
        <strong>Năng lượng sau boost:</strong> ${energy_available_Wh.toFixed(2)} Wh<br>
        <strong>Công suất tải:</strong> ${power_load_W.toFixed(2)} W<br>
        <strong>Thời gian sử dụng:</strong> ${time_hours.toFixed(2)} giờ (~${time_minutes.toFixed(0)} phút)
    `;
    document.getElementById("result").innerHTML = result;
}
