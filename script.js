let currentLevel = 0;
let timerInterval;
let timeLeft;
let timerDisabled = false;
let totalScore = 0;
let answered = false;

// =============================
// SAFE START
// =============================

window.onload = function () {
    if (localStorage.getItem("totalScore")) {
        totalScore = parseInt(localStorage.getItem("totalScore"));
    }

    if (localStorage.getItem("savedLevel")) {
        currentLevel = parseInt(localStorage.getItem("savedLevel"));
    }

    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("rankTitle").innerText = getRank(totalScore);
};

// =============================
// LEVEL LOADER
// =============================

function loadLevel() {

    if (typeof levels === "undefined") {
        console.error("levels.js not loaded");
        return;
    }

    if (!levels[currentLevel]) {
        console.error("Level not found");
        return;
    }

    const level = levels[currentLevel];

    document.getElementById("gameContainer").style.display = "block";

    startLevelGameplay(level);
}

// =============================
// GAMEPLAY
// =============================

function startLevelGameplay(level) {

    answered = false;

    document.getElementById("level-title").innerText = level.title;
    document.getElementById("scenario").innerText = level.scenario;
    document.getElementById("solution").style.display = "none";
    document.getElementById("user-input").value = "";

    document.getElementById("levelScore").innerText = 0;
    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("rankTitle").innerText = getRank(totalScore);

    // =============================
    // TASK
    // =============================

    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    const li = document.createElement("li");
    li.innerText = level.task || "No task defined";
    taskList.appendChild(li);

    // =============================
    // ITEMS
    // =============================

    const itemsList = document.getElementById("items");
    itemsList.innerHTML = "";

    if (level.items) {
        level.items.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            itemsList.appendChild(li);
        });
    }

    // =============================
    // BUDGET
    // =============================

    document.getElementById("money").innerText = level.budget || 0;

    // =============================
    // PET
    // =============================

    document.getElementById("pet").innerText = level.pet || "None";

    // =============================
    // PEOPLE
    // =============================

    const peopleList = document.getElementById("people");
    peopleList.innerHTML = "";

    if (level.people && level.people.length > 0) {
        level.people.forEach(person => {
            const li = document.createElement("li");
            li.innerText =
                `${person.name} — Strength: ${person.strength}, Weakness: ${person.weakness}`;
            peopleList.appendChild(li);
        });
    } else {
        peopleList.innerHTML = "<li>None</li>";
    }

    // =============================
    // COMBINATIONS
    // =============================

    const comboDiv = document.getElementById("combinations");

    if (level.combinations && level.combinations.length > 0) {
        comboDiv.innerHTML = "<h3>Possible Combinations:</h3>";

        level.combinations.forEach(combo => {
            comboDiv.innerHTML +=
                `<p>${combo.inputs.join(" + ")} → ${combo.output}</p>`;
        });
    } else {
        comboDiv.innerHTML = "";
    }

    // =============================
    // TUTORIAL
    // =============================

    const tutorialBox = document.getElementById("tutorialBox");
    const tutorialStepsList = document.getElementById("tutorialStepsList");

    if (level.tutorial) {
        tutorialBox.style.display = "block";
        tutorialStepsList.innerHTML = "";

        if (level.tutorialSteps) {
            level.tutorialSteps.forEach(step => {
                const li = document.createElement("li");
                li.innerText = step;
                tutorialStepsList.appendChild(li);
            });
        }
    } else {
        tutorialBox.style.display = "none";
    }

    // =============================
    // TIMER
    // =============================

    if (!timerDisabled && level.timeLimit) {
        startTimer(level.timeLimit);
    } else {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "No Limit";
    }

    localStorage.setItem("savedLevel", currentLevel);
}


function showExample() {
    const level = levels[currentLevel];
    if (level.exampleAnswer) {
        document.getElementById("user-input").value = level.exampleAnswer;
    }
}


// =============================
// TIMER
// =============================

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

// =============================
// SUBMIT
// =============================

function submitAnswer() {

    if (answered) return;
    answered = true;

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

    document.getElementById("solution-text").innerText =
        level.solution || "No solution provided.";

    document.getElementById("solution").style.display = "block";

    localStorage.setItem("totalScore", totalScore);
}

// =============================
// NAVIGATION
// =============================

function nextLevel() {
    currentLevel++;

    if (currentLevel >= levels.length) {
        alert("Game Completed!");
        currentLevel = 0;
    }

    loadLevel();
}

function previousLevel() {
    if (currentLevel > 0) {
        currentLevel--;
        loadLevel();
    } else {
        alert("You are at the first level.");
    }
}

function startNewGame() {
    if (!confirm("Start new game? Progress will reset.")) return;

    currentLevel = 0;
    totalScore = 0;

    localStorage.removeItem("savedLevel");
    localStorage.removeItem("totalScore");

    document.getElementById("titleScreen").style.display = "none";

    loadLevel();
}

function continueGame() {
    document.getElementById("titleScreen").style.display = "none";
    loadLevel();
}

function goToTitle() {
    clearInterval(timerInterval);
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("titleScreen").style.display = "flex";
}

// =============================
// RANK
// =============================

function getRank(score) {
    if (score < 20) return "Beginner";
    if (score < 50) return "Strategist";
    if (score < 100) return "Leader";
    if (score < 200) return "Mastermind";
    return "Grand Architect";
}
