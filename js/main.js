const pomodoroButton = document.getElementById('pomodoro');
const shortBreakButton = document.getElementById('short');
const longBreakButton = document.getElementById('long');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let time = 25 * 60;
let interval;
let isRunning = false;
let currentMode = 'pomodoro';

timerDisplay.textContent = '25:00';

pomodoroButton.addEventListener('click', function () {
    time = 25 * 60;
    currentMode = 'pomodoro';
    timerDisplay.textContent = '25:00';
    clearInterval(interval);
    startButton.textContent = 'Start';
    isRunning = false;
});

shortBreakButton.addEventListener('click', function () {
    time = 5 * 60;
    currentMode = 'short';
    timerDisplay.textContent = '5:00';
    clearInterval(interval);
    startButton.textContent = 'Start';
    isRunning = false;
});

longBreakButton.addEventListener('click', function () {
    time = 15 * 60;
    currentMode = 'long';
    timerDisplay.textContent = '15:00';
    clearInterval(interval);
    startButton.textContent = 'Start';
    isRunning = false;
});

startButton.addEventListener('click', function () {
    if (!isRunning) {
        clearInterval(interval);
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        interval = setInterval(function () {
            time--;
            minutes = Math.floor(time / 60);
            seconds = time % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            if (time < 0) {
                clearInterval(interval);
                timerDisplay.textContent = '00:00';
                startButton.textContent = 'Start';
                isRunning = false;
            }
        }, 1000);
        startButton.textContent = 'Pause';
        isRunning = true;
    } else {
        clearInterval(interval);
        startButton.textContent = 'Resume';
        isRunning = false;
    }
});

resetButton.addEventListener('click', function () {
    clearInterval(interval);
    isRunning = false;
    startButton.textContent = 'Start';
    if (currentMode === 'pomodoro') {
        time = 25 * 60;
        timerDisplay.textContent = '25:00';
    } else if (currentMode === 'short') {
        time = 5 * 60;
        timerDisplay.textContent = '5:00';
    } else if (currentMode === 'long') {
        time = 15 * 60;
        timerDisplay.textContent = '15:00';
    }
});