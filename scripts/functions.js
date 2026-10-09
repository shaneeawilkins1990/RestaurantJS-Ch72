// void function
// Step 1: Declare the function (buy th coffe machine)
function login(){
    console.log("Welcome to the system!");
    console.log("heyyy");
};

//Step 2: Call the function (turn the coffee machine on)
login();

// functions with parameters
function logout(user){ // "Shanee"
    console.log("Goodbye " + user + " see you later");
};

logout("Shanee");

// parameters are student correct item and point

function gradeExaam(student, correctItem, points){
    let totalPoints = correctItem + points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);

};

gradeExaam("Luis", 10, 0.33);
gradeExaam("Michael", 13, .33);

//Functions with returns
function add(num1, num2){
    let total = num1 + num2;
    return total;
};

let X = add(10,12);
console.log("The result is: " + X);
console.log(X - 5);