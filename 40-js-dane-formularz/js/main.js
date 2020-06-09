"use strict";

"use strict";

let imie = document.getElementById("imie");
let nazwisko = document.getElementById("nazwisko");
let tel = document.getElementById("tel");
console.log(imie.value)

let btn = document.getElementById("btn");

function clickFunction() {
    document.getElementById("name").innerText = imie.value;
    document.getElementById("surname").innerText = nazwisko.value;
    document.getElementById("phone").innerText = tel.value;
}

btn.addEventListener("click", clickFunction);
