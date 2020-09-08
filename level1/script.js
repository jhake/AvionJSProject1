"use strict"

const display = document.getElementById("display")
const helloBtn = document.getElementById("helloBtn")

helloBtn.onclick = () => {
    display.innerHTML = "Hello, world!"
}