"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";

window.onload = init;

async function init() {
    try {
    const response = await fetch(url);
    const schedule = await response.json();

    displayCode(code)

} catch {
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}

function displayCode(schedule) {
    const codeEl = document.getElementById("table-list");

    schedule.forEach((course) => {
        codeEl.innerHTML += `
        <tr>
            <td>${course.code}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
        </tr>
        `;
    });
}


}