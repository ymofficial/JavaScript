function calculateMoney(ticketSale){
if(ticketSale<0) {

    return "Invalid Input" ;

}

const perTicketPrice = 120;

const dailyCost = 900;

const ticketIncome = ticketSale * perTicketPrice;

const totalIncome = ticketIncome - dailyCost;

return totalIncome;
    
}

console.log(calculateMoney(10));    // Output: 300
console.log(calculateMoney(1055));  // Output: 125700
console.log(calculateMoney(93));    // Output: 10260
console.log(calculateMoney(-130));  // Output: Invalid Number
console.log(calculateMoney(-12));  // Output: Invalid Number
