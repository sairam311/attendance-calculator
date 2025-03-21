function calculateAttendance() {
    let percentageRequired = parseFloat(document.getElementById("percentageRequired").value);
    let present = parseInt(document.getElementById("present").value);
    let total = parseInt(document.getElementById("total").value);

    if (isNaN(present) || isNaN(total) || total < present) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Please enter valid inputs.</p>";
        return;
    }

    let currentAttendance = (present / total) * 100;

    // If current attendance is less than required, show "Go to class!"
    if (currentAttendance < percentageRequired) {
        document.getElementById("result").innerHTML = `
            <p style='color: red; font-weight: bold;'>🚨 class ki vellu ra p*ka 🚨</p>
            <p>Current Attendance: ${present}/${total} → <b>${currentAttendance.toFixed(2)}%</b></p>
        `;
        return;
    }

    let maxBunkDays = 0;
    let newTotal = total;

    while ((present / (newTotal + 1)) * 100 >= percentageRequired) {
        maxBunkDays++;
        newTotal++;
    }

    let finalAttendance = (present / newTotal) * 100;

    document.getElementById("result").innerHTML = `
        <p>You can bunk for <b>${maxBunkDays}</b> more days.</p>
        <p>Current Attendance: ${present}/${total} → <b>${currentAttendance.toFixed(2)}%</b></p>
        <p>Attendance Then: ${present}/${newTotal} → <b>${finalAttendance.toFixed(2)}%</b></p>
    `;
}
