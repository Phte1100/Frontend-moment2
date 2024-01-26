"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const schedule;
window.onload = init;

async function init() {
    try {

    // fetchanrop
    const response = await fetch(url);
    schedule = await response.json();

    displaySchedule(schedule)

} catch {
    // catch om något går fel
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}

// funktion för att visa datan
function displaySchedule(schedule) {
    const tableEl = document.getElementById("table-list");
    tableEl.innerHTML = ``;
    schedule.forEach((course) => {
        tableEl.innerHTML += `
        <tr>
            <td>${course.code}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
        </tr>
        `;
        
    });
}

//Sorterar datan med klick
const codeSort = document.getElementById("code");
codeSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.code > b.code) ? 1 : -1);
    displaySchedule(schedule);
})
//sorterar omvändordning vid dubbelklick
const codeSortReverse = document.getElementById("code");
codeSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.code < b.code) ? 1 : -1);
    displaySchedule(schedule);
})

const coursenameSort = document.getElementById("name");
coursenameSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    displaySchedule(schedule);
})

const coursenameSortReverse = document.getElementById("name");
coursenameSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.coursename < b.coursename) ? 1 : -1);
    displaySchedule(schedule);
})

const progressionSort = document.getElementById("progression");
progressionSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
    displaySchedule(schedule);
})

const progressionSortReverse = document.getElementById("progression");
progressionSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.progression < b.progression) ? 1 : -1);
    displaySchedule(schedule);
})
//Sökfunktion
const scheduleFilter = document.getElementById ("search");
scheduleFilter.addEventListener("input", function (e) {
    const filtredSchedule = schedule.filter((find) => {
        return find.code.toLowerCase().includes(e.target.value.toLowerCase())|| find.coursename.toLowerCase().includes(e.target.value.toLowerCase());
    
})
displaySchedule(filtredSchedule);
})}
