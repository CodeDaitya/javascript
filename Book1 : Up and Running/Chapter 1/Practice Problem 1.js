/*
Program to calculate the total price of your phone purchase.
You will keep purchasing phones until you run out of money in
your bank account. You’ll also buy accessories for each phone
as long as your purchase amount is below your mental spending
threshold.
*/

var totalPrice = 0;
var priceOfPhone;
var priceOfPurchase;
var priceOfAccessory;
var spendingThreshold;
var bankBalance = prompt("What is your bank balance?");


while(bankBalance){
    spendingThreshold = prompt("Enter your spending threshold:");
    priceOfPurchased  = prompt("What is the price of the phone you just purchsed?");
    priceOfAccessory  = spendingThreshold - priceOfPurchased;
    priceOfPurchase   = priceOfPurchased + priceOfAccessory; // spendingThreshold too equals total cost of a single purchase
    totalPrice       += priceOfPurchase;
}

console.log("Total Price of all the phone purchses : ", totalPrice);