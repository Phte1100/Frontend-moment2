"use strict";

const url = "https://dahlgren.miun.se/ramschema_ht23.php";
let schedule;
window.onload = init;

async function init() {
    try {
    const response = await fetch(url);
    schedule = await response.json();

    displaySchedule(schedule)

} catch {
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}

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

let codeSort = document.getElementById("code");
codeSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.code > b.code) ? 1 : -1);
    displaySchedule(schedule);
})

let codeSortReverse = document.getElementById("code");
codeSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.code < b.code) ? 1 : -1);
    displaySchedule(schedule);
})

let coursenameSort = document.getElementById("name");
coursenameSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    displaySchedule(schedule);
})

let coursenameSortReverse = document.getElementById("name");
coursenameSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.coursename < b.coursename) ? 1 : -1);
    displaySchedule(schedule);
})

let progressionSort = document.getElementById("progression");
progressionSort.addEventListener("click", function (e) {
    schedule.sort((a, b) => (a.progression > b.progression) ? 1 : -1);
    displaySchedule(schedule);
})

let progressionSortReverse = document.getElementById("progression");
progressionSortReverse.addEventListener("dblclick", function (e) {
    schedule.sort((a, b) => (a.progression < b.progression) ? 1 : -1);
    displaySchedule(schedule);
})

let scheduleFilter = document.getElementById ("search");
scheduleFilter.addEventListener("input", function (e) {
    let filtredSchedule = schedule.filter((find) => {
        return find.code.toLowerCase().includes(e.target.value.toLowerCase())|| find.coursename.toLowerCase().includes(e.target.value.toLowerCase());
    
})
displaySchedule(filtredSchedule);
})}
