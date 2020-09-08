"use strict"

const displayContent = document.getElementById("displayContent")
const submitBtn = document.getElementById("submitBtn")
const helloBtn = document.getElementById("helloBtn")
const nameInput = document.getElementById("nameInput")

submitBtn.onclick = () => {
    displayContent.innerHTML = nameInput.value
}

helloBtn.onclick = () => {
    displayContent.innerHTML = "Hello " + nameInput.value
}