"use strict"

const displayContent = document.getElementById("displayContent")
const nameInput = document.getElementById("nameInput")
const names = document.getElementById("names")

names.onclick = event => {
    if(event.target.type == "submit") {
        nameInput.value = event.target.innerHTML
    }
}