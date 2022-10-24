"use strict";
const fizzBox=document.querySelector(".box");
for(let i = 1; i <= 100; i++){
    const boxNumber=document.createElement(`div`);
    boxNumber.classList.add(`box_number`);
    boxNumber.innerHTML = i;
    fizzBox.append(boxNumber);
    if( i % 3===0){ boxNumber.innerHTML = (`fizz`)}else if( i % 5===0){boxNumber.innerHTML=(`buzz`)}       
    }
               

