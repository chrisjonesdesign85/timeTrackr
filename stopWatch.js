// let startTimerButton = document.querySelector('.startTimer');
// let pauseTimerButton = document.querySelector('.pauseTimer');
let timerDisplay = document.querySelector('.timer');
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;

 function startTimer(){
  if(!running){
    let startTimerButton = document.querySelector('.startTimer');
    let pauseTimerButton = document.querySelector('.pauseTimer');
    let timerDisplay = document.querySelector('.timer');
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.background = "#02C39A";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "#05668D";
    startTimerButton.classList.add('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
  }
}

function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    let timerDisplay = document.querySelector('.timer');
    let startTimerButton = document.querySelector('.startTimer');
    let pauseTimerButton = document.querySelector('.pauseTimer');
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "#A90000";
    timerDisplay.style.color = "#690000";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  } else {
    startTimer()
  }
}

function resetTimer(){
  let timerDisplay = document.querySelector('.timer');
  let startTimerButton = document.querySelector('.startTimer');
  let pauseTimerButton = document.querySelector('.pauseTimer');
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = "00:00:00:00";
  timerDisplay.style.background = "#A90000";
  timerDisplay.style.color = "#fff";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove('lighter');
  pauseTimerButton.classList.remove('lighter');
  startTimerButton.style.cursor = "pointer";
  pauseTimerButton.style.cursor = "auto";
}

function getShowTime(e){
  
  let timer = document.querySelector('.timer');
  

  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  let timerDisplay = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
let timez = timerDisplay
timer.textContent = timez
}

// exports
export {startTimer, pauseTimer, resetTimer, getShowTime, timerDisplay }