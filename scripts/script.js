"use strict";
let userHP = 40;
let bossHP = 10;
let wincondition = 3;

let answer = prompt("Do you want to play?");
if (answer === ("no")) {
    console.log("Alright. We will play another time"); 
}
else if (answer === ("yes")||("Yes")) {
    let name = prompt("What is your name?");
    while (name === name) {
        if (wincondition === 0)  {
        console.log(`Grant is donezo, ${name} is victorious!`)
        break;
        }
        else if (userHP <= 0) {
            console.log(`Grant proved to be too mighty, ${name} has lost the game.`)
            break;
        }
        else if (bossHP <= 0 && userHP != 0) {
            bossHP = 10;
            wincondition--;
            console.log(`With a mighty blow from ${name}, Grant falls to the ground`);
        }  
        else {
            (userHP -= Math.floor(Math.random() * (2 - 1 + 1) + 1));
            (bossHP -= Math.floor(Math.random() * (2 - 1 + 1) + 1));
            console.log(`${name}'s health is ${userHP}.`);
            console.log(`Grant's health is ${bossHP}.`); 
        }
    }
} 
else {
    console.log("That is not a valid answer, please reload the page.");
}
