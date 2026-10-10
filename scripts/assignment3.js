function checkDelivery(amount){
if(amount >= 30){
    return "free delivery!";
}else{
    return "delivery fee applies.";
}
}

let message1 = checkDelivery(35);
console.log(message1);

let message2 = checkDelivery(22);
console.log(message2);

let message3 = checkDelivery(30);
console.log(message3);



let getMenuType = 22;

if(getMenuType >= 17){
    console.log("Dinner menu");
}else if(getMenuType >= 12){
    console.log("Lunch menu");
}else if(getMenuType >= 7){
    console.log("Breakfast menu");
}else{
    console.log("We are closed");
}
