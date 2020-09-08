"use strict"

const displayContent = document.getElementById("displayContent")
const submitBtn = document.getElementById("submitBtn")
const nameInput = document.getElementById("nameInput")

submitBtn.onclick = () => {
    displayContent.innerHTML = nameInput.value
}