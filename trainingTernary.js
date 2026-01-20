// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
//    n < 5	                100
//    n >= 5 and n < 10	    95
//    n >= 10	            90
// You can use if..else or ternary operator to complete it.

//Params
// single number parameter, representing the num of hotdogs a customer will buy
//Returns
// how much money will the customer spend to buy n hotdogs
//Examples
    // n = 1 --> 100
    // n = 10 --> 90*10 --> 900 cents
    // n = 15 --> 85*15 --> 1275 cents
//Pseudocode
// for every five dogs, price per dog drops five cents
// 

function saleHotdogs(n){

    let dogPrice = 100;
    if (n >= 5 && n < 10) {
        dogPrice -= 5;
    } else if (n >= 10) {
        dogPrice -= 10;
    }
    return n*dogPrice;

}

console.log(saleHotdogs(5))