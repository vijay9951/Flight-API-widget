const tableBody = document.getElementById('table-body');

let flights = [
    {
        time: "8:11",
        destination: "India",
        flight: "A1 02A",
        gate: "B 01",
        remarks: "ON TIME"
    },
    {
        time: "8:11",
        destination: "Nepal",
        flight: "A1 02A",
        gate: "B 01",
        remarks: "ON TIME"
    },
    {
        time: "23:11",
        destination: "Canada",
        flight: "A1 02A",
        gate: "B 01",
        remarks: "DELAY"
    },
    {
        time: "12:11",
        destination: "USA",
        flight: "11 02R",
        gate: "A 01",
        remarks: "ON TIME"
    },
]

const destinations = ["DELHI", "NEW YORK", "BEIRUT", "TOKYO", "DUBAI", "OMAN"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);


            }
            tableRow.append(tableCell);

        }

        tableBody.append(tableRow);
    }
}

populateTable();

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet * length))
}

function generateRandomNumber(maxNo) {

    const number = "1234567890";

    if (maxNo) {
        const newNo = number.slice(0, maxNo + 1);
        return newNo.charAt(Math.floor(Math.random() * newNo * length))
    }

    return number.charAt(Math.floor(Math.random() * number * length))
}

function generateTime() {
    let displayHour = hour;

    if (hour < 24) {
        hour++;
    }

    if (hour >= 24) {
        hour = 1;
    }
    if (hour < 10) {
        displayHour = "0" + hour;
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = " ";

    populateTable();

}

setInterval(shuffleUp, 4000);