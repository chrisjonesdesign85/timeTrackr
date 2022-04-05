const input = document.getElementById("project-input").value
const projectSubmit = document.getElementById("project-submit")

// let timerDisplay = document.getElementsByClassName('timer')
// let addProject = () => {
//     let timerContainer = document.createElement("timerContainer")

// }


let project = {
    start: startTime,
    // end: endTime
    // totalHours: function() {
    //     //military time 
    //     //subtract startTime from endTime
    //     return this.startTime - this.endTime
    //     console.log("We getting it!")
    // }
}

let addProject = () => {
    console.log(input)
    //create project div
    let newDiv = document.createElement("div")
    newDiv.classList.add("project")
    //create project inner div
    let projectBox = document.createElement("div")
    projectBox.classList.add("prjectBox")
    //title of Project from input field
    // store the input into a variable named input
    let input = document.getElementById("task-input").value;
    // create an h3 to store the input
    let h3 = document.createElement("h3")
    // make the text inside the h3 the input
    h3.innerHTML = input
    //add the h3 to the newDiv
    newDiv.appendChild(h3)
}

let pauseTime = () => {
    console.log(timerDisplay.textContent)
    // let startTime = project.startTime
    // let endingTime = project.endTime
    // let hours = endingTime - startingTime
    console.log("get time on pause")
}

// let startTime = () => {
//     console.log('get time on start')
//     console.log(timerDisplay.textContent)

// }

projectSubmit.addEventListener('click', () => {
    console.log("add project")
})