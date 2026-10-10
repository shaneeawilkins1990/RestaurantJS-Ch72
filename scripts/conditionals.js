console.log("Conditionals");

// if-statement condtion (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condiotn is true
//}

let result = 30;

if(result > 60){
    console.log("you passed the exam!");
}

// case 1: 5 == 5 ->  true
// case 2: 5 == "5" -> true
// case 3: 5 === "5" -> false

let points = 10;
if(points > 60){
    console.log("You won!");
}else{
    console.log("You lose!")
}

// Challenge 1: print if the water is boiling or not
// consider 100 as the boiling temp

let waterTemp = 101;
if(waterTemp > 100){
    console.log("It's boiling!")
}else{
    console.log("Not boiling")
}

// else-if constion
// if(condtional1)

let age = 35;

if(age < 13){
    console.log("you are a child");
}else if(age < 21){
    console.log("you are a teenager");
}else if(age < 64){
    console.log("You are an adult!");
}else{
    console.log("You are a senior!");
}

//challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

let trafficLight = prompt("Input a traffic light color:") .toLocaleLowerCase();

if(trafficLight === "green"){
    console.log("Go!");
}else if (trafficLight === "yellow"){
    console.log("Slow down");
}else if (trafficLight === "red"){
    console.log("Stop!");
}else{
    console.log("Invalid input");
}

// && and || operators
// && = AND -  both conditions must be true
// || = OR - at least one condition must be true

let hour = 20;

if(hour >= 12 && hour <= 16){
    console.log("lunch time")
}

let isWeekend = true;
let isHoloday = false;

if(isWeekend || isHoloday){
    console.log("restaurant is closed today");
}else{
    console.log("Restaurant is open");
}

function checkAge(age){
    if(age>= 18){
        return "Can order alcohol";
    }else{
        return "Cannot order alcohol";
    }
}

let message1 = checkAge(20);
console.log(message1);

let message2 = checkAge(15);
console.log(message2);