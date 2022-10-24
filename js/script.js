"use strict";
const fizzBox=document.querySelector(".box");
for(let i = 1; i <= 100; i++)
{   if(i % 3===0){
    document.querySelector(`.box_number`).innerHTML=(`fizz`);
}
    const boxNumber=document.createElement(`div`);
    boxNumber.classList.add(`box_number`);
    boxNumber.innerHTML = i;
    fizzBox.append(boxNumber);
}
