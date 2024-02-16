function calculateMoney(ticketSale){
    if(ticketSale<0){
        return "Invalid Number! Please input positive numbers";
    }
   
   const perTicketPrice =120;
   const dailyCost = 900; // Caretaker = 500, Staff = (8*50) = 400 , Total = 900 cost daily
   const dailyTicketSale = ticketSale * perTicketPrice;
   const dailyIncome = dailyTicketSale - dailyCost;

   return dailyIncome;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));