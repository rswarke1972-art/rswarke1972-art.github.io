let currentLevel = 0;
let timerInterval;
let timeLeft;
let timerDisabled = false;
let totalScore = 0;
if (localStorage.getItem("totalScore")) {
    totalScore = parseInt(localStorage.getItem("totalScore"));
}

if (localStorage.getItem("currentLevel")) {
    currentLevel = parseInt(localStorage.getItem("currentLevel"));
}



function loadLevel() {
    const level = levels[currentLevel];

    document.getElementById("level-title").innerText = level.title;
    document.getElementById("scenario").innerText = level.scenario;
   document.getElementById("totalScore").innerText = totalScore;
document.getElementById("rankTitle").innerText = getRank(totalScore);
document.getElementById("levelScore").innerText = 0;


    // TASKS handling (supports old + new levels)
const taskList = document.getElementById("tasks");
taskList.innerHTML = "";

if (level.tasks) {
    level.tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerText = task;
        taskList.appendChild(li);
    });
} else {
    // fallback for old levels
    const li = document.createElement("li");
    li.innerText = level.task;
    taskList.appendChild(li);
}


    const itemsList = document.getElementById("items");
    itemsList.innerHTML = "";

    level.items.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        itemsList.appendChild(li);
    });

    document.getElementById("user-input").value = "";
    document.getElementById("solution").style.display = "none";
    document.getElementById("rankTitle").innerText = getRank(totalScore);


    // PET fallback
    document.getElementById("pet").innerText = level.pet || "None";

    // TIMER safe handling
    // TIMER safe handling
if (!timerDisabled && level.timeLimit) {
    startTimer(level.timeLimit);
} else {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "No Limit";
}


    const peopleList = document.getElementById("people");
peopleList.innerHTML = "";

if (level.people) {
    level.people.forEach(person => {
        const li = document.createElement("li");

        let text = `${person.name} - Strength: ${person.strength}, Weakness: ${person.weakness}`;

        if (person.demand) {
            text += ` | Requires: ${person.demand}`;
        }

        if (person.gives) {
            text += ` | Provides: ${person.gives}`;
        }

        li.innerText = text;
        peopleList.appendChild(li);
    });
} else {
    peopleList.innerHTML = "<li>None</li>";
}

let currentMoney = level.budget || 0;
document.getElementById("money").innerText = currentMoney;

const comboDiv = document.getElementById("combinations");

if (level.combinations) {
    comboDiv.innerHTML = "<h3>Possible Combinations:</h3>";

    level.combinations.forEach(combo => {
        comboDiv.innerHTML += `<p>${combo.inputs.join(" + ")} → ${combo.output}</p>`;
    });
} else {
    comboDiv.innerHTML = ""; // CLEAR old combinations
}

// Tutorial handling
const tutorialBox = document.getElementById("tutorialBox");
const tutorialStepsList = document.getElementById("tutorialStepsList");

if (level.tutorial) {
    tutorialBox.style.display = "block";
    tutorialStepsList.innerHTML = "";

    level.tutorialSteps.forEach(step => {
        const li = document.createElement("li");
        li.innerText = step;
        tutorialStepsList.appendChild(li);
    });
} else {
    tutorialBox.style.display = "none";
}

}

function showExample() {
    document.getElementById("user-input").value = levels[currentLevel].exampleAnswer;
}

function startTimer(duration) {
    clearInterval(timerInterval);
    timeLeft = duration;
    document.getElementById("timer").innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitAnswer();
        }
    }, 1000);
}

function submitAnswer() {
    clearInterval(timerInterval);

    const userText = document.getElementById("user-input").value.toLowerCase();
    const level = levels[currentLevel];
    let levelScore = 0;

    if (level.keywords) {
        level.keywords.forEach(keyword => {
            if (userText.includes(keyword.toLowerCase())) {
                levelScore++;
            }
        });
    }

    totalScore += levelScore;

    document.getElementById("levelScore").innerText = levelScore;
    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("rankTitle").innerText = getRank(totalScore);


    document.getElementById("solution").style.display = "block";
    document.getElementById("solution-text").innerText =
        "Optimal Thinking:\n" + level.solution;

    localStorage.setItem("totalScore", totalScore);
localStorage.setItem("currentLevel", currentLevel);
}


function nextLevel() {
    currentLevel++;

    if (currentLevel >= levels.length) {
        alert("No more levels yet!");
        currentLevel = 0;
    }

    localStorage.setItem("savedLevel", currentLevel);
    loadLevel();
}


function startNewGame() {

    const confirmReset = confirm("Start a new game? Your saved progress will be lost.");

    if (!confirmReset) return;

    // Reset level
    currentLevel = 0;

    // Clear saved progress
    localStorage.removeItem("savedLevel");

    // Reset morality if you are saving it later
    // localStorage.removeItem("savedMorality");

    // Show game
    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";

    loadLevel();
}


function openHowToPlay() {
    document.getElementById("popupPanel").classList.remove("hidden");
    document.getElementById("popupText").innerHTML = `
        <h2>How to Play</h2>
        <p>You will face strategic scenarios across 100 levels.</p>
        <p>Every 10 levels introduce new mechanics:</p>
        <ul>
            <li>Levels 1–10: Basic object usage</li>
            <li>11–20: Time constraints</li>
            <li>21–30: Team & role management</li>
            <li>31–40: Dual-task logic</li>
            <li>41–50: Trade & stubborn characters</li>
            <li>51–60: Budget decisions</li>
            <li>61–70: Combinable items</li>
            <li>71–80: Multi-task missions</li>
            <li>81–90: Historical & future settings</li>
            <li>91–100: Moral decisions under pressure</li>
        </ul>
    `;
}

function openSettings() {
    document.getElementById("popupPanel").classList.remove("hidden");
    document.getElementById("popupText").innerHTML = `
        <h2>Settings</h2>
        <label>
            <input type="checkbox" id="toggleTimer" onchange="toggleTimerSetting()">
            Disable Time Constraint
        </label>
    `;
}

function openCredits() {
    document.getElementById("popupPanel").classList.remove("hidden");
    document.getElementById("popupText").innerHTML = `
        <h2>Credits</h2>
        <p>Game Design & Development:</p>
        <p><strong>Made by MASTER SAHIL RAJESH WARKE</strong></p>
        <p>Strategic & Moral Simulation Concept</p>
        <p>Built with HTML, CSS & JavaScript</p>
    `;
}

function closePopup() {
    document.getElementById("popupPanel").classList.add("hidden");
}

function exitGame() {
    if (confirm("Are you sure you want to exit the game?")) {
        window.close(); 
    }
}

function toggleTimerSetting() {
    timerDisabled = document.getElementById("toggleTimer").checked;
}

function goToTitle() {
    clearInterval(timerInterval);
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("titleScreen").style.display = "flex";
}

function previousLevel() {
    if (currentLevel > 0) {
        currentLevel--;
        localStorage.setItem("savedLevel", currentLevel);
        loadLevel();
    } else {
        alert("You are at the first level.");
    }
}

function continueGame() {
    const saved = localStorage.getItem("savedLevel");

    if (saved !== null) {
        currentLevel = parseInt(saved);
        document.getElementById("titleScreen").style.display = "none";
        document.getElementById("gameContainer").style.display = "block";
        loadLevel();
    } else {
        alert("No saved progress found.");
    }
}


window.onload = function () {
    const saved = localStorage.getItem("savedLevel");
    if (saved !== null) {
        currentLevel = parseInt(saved);
    }
    loadLevel();
};

function getRank(score) {
    if (score < 20) return "Beginner";
    if (score < 50) return "Strategist";
    if (score < 100) return "Leader";
    if (score < 200) return "Mastermind";
    return "Grand Architect";
}
