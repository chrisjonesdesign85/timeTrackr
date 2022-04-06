


const input = document.getElementById("project-input")
// const inputValue = input.value
const projectSubmit = document.getElementById("project-submit")

// let timerDisplay = document.getElementsByClassName('timer')
// let addProject = () => {
//     let timerContainer = document.createElement("timerContainer")

// }


// let project = {
//     start: startTime,
//     // end: endTime
//     // totalHours: function() {
//     //     //military time 
//     //     //subtract startTime from endTime
//     //     return this.startTime - this.endTime
//     //     console.log("We getting it!")
//     // }
// }


// import { startTimer } from './stopWatch.js';
// import { timerDisplay } from './stopWatch.js'
// import { getShowTime } from ''

let addProject = () => {
    
    const inputValue = input.value

    //create project div
    let projDiv = document.createElement("div")
    projDiv.classList.add("projectContainer")
    
    //total hours for project
    let hours = document.createElement("div")
    hours.classList.add("hours")
    hours.innerHTML = "[00]"

    //title
    let title = document.createElement("div")
    title.classList.add("title")
    let titleH3 = document.createElement("h3")
    titleH3.innerHTML = inputValue
    title.appendChild(titleH3)

    //timer
    let timer = document.createElement("div")
    timer.classList.add("timer")
    timer.innerHTML = "00:00:00"

  
    //play btn (startTimer)
    let playBtn = document.createElement("div")
    playBtn.classList.add("startTimer", "reset")
    playBtn.innerHTML = '<i class="fas fa-play"></i>'

    //pause btn
    let pauseBtn = document.createElement("div")
    pauseBtn.classList.add("pauseTimer", "reset")
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>'

    //reset btn
    let resetBtn = document.createElement("div")
    resetBtn.classList.add("resetTimer", "reset")
    resetBtn.innerHTML = "Rest Btn"

    // delete btn
    let deleteBtn = document.createElement("div")
    deleteBtn.classList.add("deleteBtn", "reset")
    deleteBtn.innerHTML = "Delete"


    // Listeners
    timer.addEventListener('click', () => {
        console.log("Display")
    })


    playBtn.addEventListener('click', () => {
        console.log("hey")
        startTimer()
    })    

    pauseBtn.addEventListener('click', () =>{
        console.log("pause")
        pauseTimer()
    })

    resetBtn.addEventListener('click', () => {
        console.log("reset")
        resetTimer()
    })
    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        let res = confirm(`Delete ${title}?`)
        if (res == true) {
            let proj = document.getElementById("projects")
            proj.removeChild(projDiv)
        } else {
            return true
        }
        console.log("delete")
    })

    // append the created elements
    projDiv.appendChild(hours)
    projDiv.appendChild(title)
    projDiv.appendChild(timer)
    projDiv.appendChild(playBtn)
    projDiv.appendChild(pauseBtn)
    projDiv.appendChild(resetBtn)
    projDiv.appendChild(deleteBtn)

    deleteBtn.classList.add("reset")
    //append the project to the projects div
    document.getElementById("projects").appendChild(projDiv)







var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.background = "#FF0000";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "80ed99";
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
    startTimer();
  }
}

function resetTimer(){
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

function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

input.value = "" // clear input field after a Project Title has been entered
} // end addProject function


// projectSubmit.addEventListener("click", addProject)

//run addProject when the submit button is clicked.
projectSubmit.addEventListener("click", (addProject) => {
    addProject.preventDefault()
    alertMessage(input)
});
 
//create an alert when there is nothing in input
const alertMessage = () => {
        let text = input.value
        if ( text === "") {
            alert('Add a Project')
        } else {
            addProject()
            
    }
}



let pauseTime = () => {
    console.log(timerDisplay.textContent)
    // let startTime = project.startTime
    // let endingTime = project.endTime
    // let hours = endingTime - startingTime
    console.log("get time on pause")    
}

let sTime = () => {
    console.log('get time on start')
    console.log(timerDisplay.textContent)

}



