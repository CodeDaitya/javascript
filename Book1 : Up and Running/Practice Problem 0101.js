/*
Program to calculate the total price of your phone purchase.
You will keep purchasing phones until you run out of money in
your bank account. You’ll also buy accessories for each phone
as long as your purchase amount is below your mental spending
threshold.
*/

var TAX_RATE = 0.15;

function taxAmount(purchasePrice){
    return purchasePrice*TAX_RATE;
}

function purchaseReciept(priceOfPhone, priceOfAccessory, purchasePrice, tax){
    console.log("Phone : $", priceOfPhone.toPrecision(3));
    console.log("Accessories : $", priceOfAccessory.toPrecision(3));
    console.log("Total : $", purchasePrice.toPrecision(3));
    console.log("Tax : $", tax.toPrecision(3));
    console.log("Price after Taxes : $", (purchasePrice + tax).toPrecision(3));
}

var totalPrice = 0;
var purchasePrice = 0;
var priceOfPhone = 0;
var priceOfAccessory = 0;
var spendingThreshold = 0; // also the total expenditure on a purchase
var bankBalance = 0;

bankBalance = prompt("What is your bank balance?");

if(bankBalance!=0){
    while(bankBalance!=0){
        
        console.log("\nNew Purchase!!");

        spendingThreshold = prompt("Enter your spending threshold:");

/*        if(bankBalance < spendingThreshold){

            alert("Spending Threshold can't be greater than Bank Balance!!!");
            continue;

        }
*/

        priceOfPhone = prompt("What is the price of the phone you just purchased?");

        if(priceOfPhone > spendingThreshold){
            
            alert("Price can't be greater than the Spending Threshold!!!");
            continue;

        }

        priceOfAccessory = spendingThreshold - priceOfPhone;

        if(priceOfAccessory == 0){

            console.log("No accessories sorted!");

        }//else{

           // console.log("The accesories costed ", priceOfAccessory);

        //}

        purchasePrice  += Number(spendingThreshold);
        tax = taxAmount(purchasePrice);
        purchaseReciept(Number(priceOfPhone), priceOfAccessory, purchasePrice, tax);

        console.log("Can I afford it?");
        if(bankBalance >= purchasePrice + tax){

            console.log("Go ahead, you're rich!!!!");
            bankBalance -= spendingThreshold;
            totalPrice  += Number(priceOfPhone);

        }else{
            
            console.log("Hah, in your dreams!");

        }

    }

    console.log("\nTotal Price of all the phone purchses : ", totalPrice);   

}else{
    alert("You're Broke!!!!");
}