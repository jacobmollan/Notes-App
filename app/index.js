"use strict";
//Inital console log to clarify file has been loaded
console.log("index.js loaded");
//Declares app version and logs it
const version = "0.1";
console.log("version:", version);
//Declares the html version text as a const
const elVersion = document.querySelector("#version");
//Displays the app version as in the element with the tag #version
elVersion.innerText = version;
//Declares DOM elements as consts
const elSubmitBtn = document.querySelector("#submit");
const elGrid = document.querySelector("#grid-test");
elSubmitBtn.addEventListener("click", (event) => {
    let elTitleInput = document.querySelector("#title-input");
    let elLargeInput = document.querySelector("#large-input");
    if (elLargeInput.value.length == 0 || elTitleInput.value.length == 0) {
        alert("Please complete both requirements");
        return false;
    }
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let span = document.createElement("span");
    elGrid.appendChild(div);
    div.className = "box-border min-h-16 w-full  max-w-xl  p-4 bg-white text-black rounded-xl border-2 border-violet-400 overflow-hidden break-words transform transition duration-300 hover:scale-105 cursor-pointer hover:border-red-500 hover:bg-red-50";
    div.appendChild(h1);
    h1.className = "font-source font-semibold leading-tight text-2xl text-start";
    div.appendChild(p);
    p.className = "text-left";
    p.appendChild(span);
    h1.appendChild(document.createTextNode(elTitleInput.value.toString()));
    span.appendChild(document.createTextNode(elLargeInput.value));
    div.setAttribute("onClick", "this.remove()");
});
