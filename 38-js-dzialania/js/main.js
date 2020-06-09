"use strict";

function numbers(x, y) {
    let dod = x + y;
    let odj = x - y;
    let mnoz = x * y;
  
  
    if ( (dod < 0) || (odj < 0) || (mnoz < 0) ) {
      console.log("Wynik jest ujemny")
    } else {
      console.log("Wynik dodawania wynosi: " + dod);
      console.log("Wynik odejmowania wynosi: " + odj);
      console.log("Wynik mnożenia wynosi: " + mnoz)
  
    }
  }
  
  // numbers(7, 60);
  numbers(10, 6);