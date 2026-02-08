let currentLevel = 0;
let timerInterval;
let timeLeft;
let timerDisabled = false;
let totalScore = 0;
let answered = false;

// =============================
// SAFE LOAD
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

    document.getElementById("level-title").innerText = level.title || "";
    document.getElementById("scenario").innerText = level.scenario || "";

    document.getElementById("solution").style.display = "none";
    document.getElementById("user-input").value = "";

    document.getElementById("levelScore").innerText = 0;
    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("rankTitle").innerText = getRank(totalScore);

    // =============================
    // TASKS
    // =============================

    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    if (level.tasks && Array.isArray(level.tasks)) {
        level.tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerText = task;
            taskList.appendChild(li);
        });
    } else if (level.task) {
        const li = document.createElement("li");
        li.innerText = level.task;
        taskList.appendChild(li);
    }

    // =============================
    // ITEMS
    // =============================

    const itemsList = document.getElementById("items");
    itemsList.innerHTML = "";

    if (level.items && Array.isArray(level.items)) {
        level.items.forEach(item => {
            const li = document.createElement("li");
            li.innerText = item;
            itemsList.appendChild(li);
        });
    }

    // =============================
    // PET
    // =============================

    document.getElementById("pet").innerText = level.pet || "None";

    // =============================
    // PEOPLE
    // =============================

    // =============================
// PEOPLE (FIXED PROPERLY)
// =============================

const peopleList = document.getElementById("people");
peopleList.innerHTML = "";

if (level.people && Array.isArray(level.people) && level.people.length > 0) {

    level.people.forEach(person => {

        const li = document.createElement("li");

        if (typeof person === "object") {

            let text = person.name || "Unknown";

            if (person.strength)
                text += " | Strength: " + person.strength;

            if (person.weakness)
                text += " | Weakness: " + person.weakness;

            if (person.demand)
                text += " | Requires: " + person.demand;

            if (person.gives)
                text += " | Provides: " + person.gives;

            li.innerText = text;

        } else {

            // If it's just a string
            li.innerText = person;
        }

        peopleList.appendChild(li);
    });

} else {
    peopleList.innerHTML = "<li>None</li>";
}


    // =============================
    // BUDGET
    // =============================

    document.getElementById("money").innerText = level.budget || 0;

    // =============================
    // TUTORIAL SUPPORT
    // =============================

    const tutorialBox = document.getElementById("tutorialBox");
    const tutorialStepsList = document.getElementById("tutorialStepsList");

    if (level.tutorialSteps && Array.isArray(level.tutorialSteps)) {
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
// =============================
// COMBINATIONS (RESTORED)
// =============================

const comboDiv = document.getElementById("combinations");
comboDiv.innerHTML = "";

if (level.combinations && level.combinations.length > 0) {

    const title = document.createElement("h3");
    title.innerText = "Possible Combinations:";
    comboDiv.appendChild(title);

    level.combinations.forEach(combo => {

        const p = document.createElement("p");

        if (combo.inputs && combo.output) {
            p.innerText = combo.inputs.join(" + ") + " → " + combo.output;
        } else {
            p.innerText = "Invalid combination format";
        }

        comboDiv.appendChild(p);
    });

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
// SUBMIT ANSWER (FIXED SCORING)
// =============================

function submitAnswer() {

    if (answered) return;
    answered = true;

    clearInterval(timerInterval);

    const userText = document.getElementById("user-input").value.toLowerCase();
    const level = levels[currentLevel];

    let levelScore = 0;

    // Combine solution + items
    let referenceText = "";

    if (level.solution)
        referenceText += level.solution.toLowerCase() + " ";

    if (level.items)
        referenceText += level.items.join(" ").toLowerCase();

    // Remove common useless words
    const stopWords = [
        "the", "and", "use", "avoid", "first", "then", "with",
        "for", "to", "a", "an", "of", "is", "are", "be",
        "in", "on", "at", "it", "as", "by"
    ];

    // Extract meaningful words
    let words = referenceText
        .replace(/[^a-zA-Z ]/g, "")   // remove punctuation
        .split(" ")
        .filter(word =>
            word.length > 3 &&
            !stopWords.includes(word)
        );

    // Remove duplicates
    words = [...new Set(words)];

    // Compare with user answer
    words.forEach(word => {
        if (userText.includes(word)) {
            levelScore++;
        }
    });

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
// EXAMPLE ANSWER (TUTORIAL FIX)
// =============================

function showExample() {
    const level = levels[currentLevel];
    if (level.exampleAnswer) {
        document.getElementById("user-input").value = level.exampleAnswer;
    }
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
// RANK SYSTEM
// =============================

function getRank(score) {

    if (score < 20) return "Beginner";
    if (score < 50) return "Strategist";
    if (score < 100) return "Leader";
    if (score < 200) return "Mastermind";
    return "Grand Architect";
}

// =============================
// POPUP SYSTEM (WORKING VERSION)
// =============================

// ================= POPUP SYSTEM =================

const popupPanel = document.getElementById("popupPanel");
const popupText = document.getElementById("popupText");

// ================= TITLE & POPUP SYSTEM =================

function openHowToPlay() {
    const panel = document.getElementById("popupPanel");
    const text = document.getElementById("popupText");

    text.innerHTML = `
        <h2>How to Play</h2>
        <p>Analyze the scenario carefully.</p>
        <p>Use available items strategically.</p>
        <p>Write a logical response.</p>
        <p>Score increases when your logic matches optimal thinking.</p>
    `;

    panel.style.display = "flex";
}

function openSettings() {
    const panel = document.getElementById("popupPanel");
    const text = document.getElementById("popupText");

    text.innerHTML = `
        <h2>Settings</h2>
        <label>
            <input type="checkbox" id="toggleTimer" onchange="toggleTimerSetting()" ${timerDisabled ? "checked" : ""}>
            Disable Time Limit
        </label>
    `;

    panel.style.display = "flex";
}

function openCredits() {
    const panel = document.getElementById("popupPanel");
    const text = document.getElementById("popupText");

    text.innerHTML = `
        <h2>Credits</h2>
        <p><strong>Leadership: The Moral Simulator</strong></p>
        <p>Created by Sahil Rajesh Warke</p>
        <p>Built using HTML, CSS & JavaScript</p>
    `;

    panel.style.display = "flex";
}

function closePopup() {
    document.getElementById("popupPanel").style.display = "none";
}

function toggleTimerSetting() {
    const checkbox = document.getElementById("toggleTimer");
    if (!checkbox) return;
    timerDisabled = checkbox.checked;
}

// ================= EXIT =================
function exitGame() {
    alert("Exit function running");

    if (confirm("Do you want to exit the game?")) {
        location.reload();
    }
}


