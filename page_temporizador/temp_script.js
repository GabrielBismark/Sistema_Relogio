const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const hoursEl = document.querySelector('#hours');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let seconds = 0;
let hours = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            seconds -= 1;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
            hoursEl.textContent = hours;
        }
    }, 10);
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display =  "none";
}

function resetTimer() {
    isPaused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    hours = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    hoursEl.textContent = "00";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}