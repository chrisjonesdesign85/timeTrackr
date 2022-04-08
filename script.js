import { startTimer, pauseTimer, resetTimer, getShowTime, timerDisplay,  } from './stopWatch.js'
// ON LOAD 

// GLOBAL VARIABLES
const input = document.getElementById("project-input");
const projectSubmit = document.getElementById("project-submit");
// let timerDisplay = document.getElementsByClassName('timer')

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

// add project when submit button is clicked
let addProject = e => { 
  
  //get input from user 
  const inputValue = input.value

  //create project div
  let projDiv = document.createElement("div")
  projDiv.classList.add("projectContainer")

  //total hours for project
  let hours = document.createElement("div")
  hours.classList.add("hours")
  hours.innerHTML = "[00]";

  //title
  let title = document.createElement("div")
  title.classList.add("title");
  
  let titleH3 = document.createElement("h3")
  titleH3.innerHTML = inputValue;
  title.appendChild(titleH3)

  //timer
  let timer = document.createElement("div")
  timer.classList.add("timer")
  timer.textContent = "00:00:00:00"


  //start btn (startTimer)
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

    // append the created elements
    projDiv.appendChild(hours)
    projDiv.appendChild(title)
    projDiv.appendChild(timer)
    projDiv.appendChild(playBtn)
    projDiv.appendChild(pauseBtn)
    projDiv.appendChild(resetBtn)
    projDiv.appendChild(deleteBtn)


    // Listeners
    projDiv.addEventListener('click',(e) => {
      e.stopPropagation()
      console.log(e.target);
    })

    timer.addEventListener('click', () => {
        console.log("Display")
        
    })


    // let playOnly = e => {
    //   const project = e.target
    //   if(project.classList[2] === "timer") {
    //     console.log(project, "Hi")
    //   }
    // }

    playBtn.addEventListener('click', e => {
      const p = e.target
      e.stopPropagation()
          console.log("start");
          p.style.background="green"
          timer.style.background="blue"
          timer.innerHTML = timer.textContent
          console.log(timer.textContent)
          
          startTimer(e.target);
        })
   


    pauseBtn.addEventListener('click', () =>{
        console.log("pause")

        pauseTimer()
    })

    resetBtn.addEventListener('click', () => {
        console.log("reset")
        resetTimer()
    })
    
    deleteBtn.addEventListener('click', () => {
        let res = confirm(`Delete?`)
        if (res == true) {
            let proj = document.getElementById("projects")
            proj.removeChild(projDiv)
        } else {
            return true
        }
        console.log("delete")
    })

    //append the project to the projects div
    document.getElementById("projects").appendChild(projDiv)

    input.value = "" // clear input field after a Project Title has been entered
    input.focus();

  } // end addProject function



//run addProject when the submit button is clicked.
projectSubmit.addEventListener("click", (addProject) => {
    // addProject.preventDefault();
    console.log('hello');
    alertMessage();
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






// for local storage
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



