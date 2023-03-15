// https: //lms.kiet.edu.pk/kietlms/my/Student_reports/Class_Schedule.php?session_id=02d462eb0331c047b7c6cfa0963b0a9d76c0f6001677662718

// get the table content in an 2D Array
function getTableContent() {
    let htmlTable = document.getElementsByClassName('table_main')[0];
    let rowLength = htmlTable.rows.length;
    let table = [];

    //loops through rows    
    for (i = 0; i < rowLength; i++) {

        //gets cells of current row  
        let oCells = htmlTable.rows.item(i).cells;

        //gets amount of cells of current row
        let cellLength = oCells.length;

        let row = []

        //loops through each cell in current row
        for (let j = 0; j < cellLength; j++) {
            // get your cell info here

            let cellVal = oCells.item(j).innerText;
            //console.log(cellVal);

            row.push(cellVal);
        }

        table.push(row);
    }

    let tableJSON = JSON.stringify(table);
    return tableJSON;

    // return table;
}

let createTable = () => {
    // create schedule container
    const scheduleContainer = document.createElement("div");
    scheduleContainer.classList.add("schedule__container");

    // create days container
    const daysContainer = document.createElement("div");
    daysContainer.classList.add("days__container");

    // create days of the week
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    days.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        daysContainer.appendChild(dayDiv);
    });

    // create corner span element
    const cornerSpan = document.createElement("span");
    cornerSpan.classList.add("corner");
    daysContainer.insertBefore(cornerSpan, daysContainer.firstChild);

    // create part of the day containers
    const partOfDayContainers = [];

    const times = ["8:40am - 11:30pm", "11:30pm - 12:30pm", "12:30pm - 3:pm"];

    times.forEach(time => {
        const partOfDay = document.createElement("div");
        partOfDay.classList.add("part__day");

        const timeSpan = document.createElement("span");
        timeSpan.classList.add("time");
        timeSpan.innerHTML = time.replace(/\s/g, "<br />");

        partOfDay.appendChild(timeSpan);

        for (let i = 0; i < 5; i++) {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            partOfDay.appendChild(taskDiv);
        }

        partOfDayContainers.push(partOfDay);
    });

    // add all elements to the schedule container
    scheduleContainer.appendChild(daysContainer);
    partOfDayContainers.forEach(partOfDay => {
        scheduleContainer.appendChild(partOfDay);
    });

    // add the schedule container to the DOM
    tableId = document.getElementById("table");
    tableId.appendChild(scheduleContainer);
}

function addTable() {
    let htmlTable = document.getElementsByClassName('table_main')[0];
    let table_parent = htmlTable.parentElement;
    newTable = document.createElement('div');
    // newTable.id = "coursesTable";
    newTable.id = "table";
    table_parent.appendChild(newTable);
    // console.log(newTable.outerHTML);

    addTableCss();

    createTable();

    // p = document.createElement('p')
    // p.innerText = 'pppp'
    // table_parent.appendChild(p);

    // table_parent.innerHTML = newTable.outerHTML;

}

function addTableCss() {
    let cssPath = browser.runtime.getURL("styles/table.css");
    let headStyleTag = document.createElement('link');
    headStyleTag.setAttribute("rel", "stylesheet")
    headStyleTag.href = cssPath;

    // headStyleTag.innerText = ``

    document.head.appendChild(headStyleTag)
    // document.head.append(headStyleTag);
    console.log("table styles added");
}

console.log(true);

// Getting current page url
const current_url = new URL(window.location.href);
// console.log(current_url);

if (current_url.pathname == "/kietlms/my/Student_reports/Class_Schedule.php") {
    console.log('Schedule page')
    table_main = document.getElementsByClassName('table_main')
    if (table_main) {

        let table = getTableContent();
        if (table) {
            console.log("Table content fetched");
        }

        addTable();
        console.log("div table");
        // addddddd();
        // console.log("create table");

    }
}


// let header = document.createElement('h1');
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);

// document.querySelector('[language="JavaScript"]').innerText = '';
// console.log('right click script removed');


// script_el = document.createElement("script")
// script_el.setAttribute("type", "text/javascript");

// console.log('')

console.log('EOF');