// function with no parmeters

function showRestuarantNAme(){
    console.log("Welcome to Eat to Live")
};

showRestuarantNAme();

// function with one parameters

function greetCustomer(user){
    console.log("Welcome " + user + " We are happy to have you at Eat to Live!");
};

greetCustomer("Maria");
greetCustomer("James");
greetCustomer("Sofia");

//function with two parameters that returns or makes a value
function calculateTotal(price, tax) {
    return price * (1+tax)
}

let hotDogTotal = calculateTotal(6, 0.075)
console.log("Hot dog - total with tax: $ " + hotDogTotal)

let SmoothiesTotal = calculateTotal(5, 0.08)
console.log("Smoothies - total with tax: $ " + SmoothiesTotal)

let SkewersTotal = calculateTotal(5, 0.08)
console.log("Smoothies - total with tax: $ " + SkewersTotal)



// Extra example

function calculateTotal2(dishName, price){
    let tax = price * 0.075 // 6 * 0.075 = 0.45
    let total = price + tax // 6 + 0.45 = 6.45

    console.log(dishName + " - Total with tax: " + total ) // Enchiladas - Total with tax: $13.50
}


calculateTotal2("Hot dog", 6) // Hot dog - Total with tax: 6.45cal
calculateTotal2("Smoothies", 5)
calculateTotal2("Tofu Skewers", 4)