"use strict"

const displayContent = document.getElementById("displayContent")
const nameInput = document.getElementById("nameInput")
const names = document.getElementById("names")

const helloBtn = document.getElementById("helloBtn")
const goodbyeBtn = document.getElementById("goodbyeBtn")

names.onclick = event => {
    if(event.target.type == "submit") {
        nameInput.value = event.target.innerHTML
    }
}

helloBtn.onclick = () => {
    displayContent.innerHTML = "Hello " + nameInput.value
}

goodbyeBtn.onclick = () => {
    displayContent.innerHTML = "Goodbye " + nameInput.value
}

