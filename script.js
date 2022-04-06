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



let addProject = () => {
    const inputValue = input.value
    console.log(inputValue)

    
    
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
    let startTimer = document.createElement("div")
    startTimer.innerHTML = '<i class="fas fa-play"></i>'

    //pause btn
    let pauseTimer = document.createElement("div")
    pauseTimer.classList.add("pauseTimer")

    //reset btn
    let resetTimer = document.createElement("div")
    resetTimer.classList.add("resetTimer")

    // delete btn
    let deleteBtn = document.createElement("div")
    deleteBtn.classList.add("deleteBtn")

    // append the created elements
    
    projDiv.appendChild(hours)
    projDiv.appendChild(title)
    projDiv.appendChild(timer)
    projDiv.appendChild(startTimer)
    projDiv.appendChild(pauseTimer)
    projDiv.appendChild(resetTimer)
    projDiv.appendChild(deleteBtn)
    document.getElementById("projects").appendChild(projDiv)

}

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


// //run addProject when the submit button is clicked.
// projectSubmit.addEventListener("click", (addProject) => {
//     addProject.preventDefault()
//     alertMessage(input)
// });
 
// //create an alert when there is nothing in input
// const alertMessage = () => {
//         let text = input.value
//         if ( text === "") {
//             alert('Add a Project')
//         } else {
//             addProject()
            
//     }
// }