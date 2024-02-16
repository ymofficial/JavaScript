function calculateMoney(ticketSale){
    if(ticketSale<0){
        return "Invalid Number! Please input positive numbers";
    }
   
   const perTicketPrice =120;
   const dailyCost = 900; // daroan = 500, Staff = (8*50) = 400 , Total = 900 cost daily
   const dailyTicketSale = ticketSale * perTicketPrice;
   const dailyIncome = dailyTicketSale - dailyCost;

   return dailyIncome;
}

function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }
    if (name.endsWith('a') || name.endsWith('A') || name.endsWith('y') || name.endsWith('Y') || name.endsWith('i') || name.endsWith('I')
        || name.endsWith('e') || name.endsWith('E') || name.endsWith('o') || name.endsWith('O') || name.endsWith('u') || name.endsWith('U')
        || name.endsWith('w') || name.endsWith('W') ) {
        return 'Good Name';
    }
    return 'Bad Name';
}

function deleteInvalids(array){
    if(!Array.isArray(array)) {
        return "Invalid Array!!";
    }
    
    const onlyNumberArray = array.filter(item => typeof item === 'number' && !isNaN(item));
    return onlyNumberArray;
}

function password(obj){
    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')){
        return "Invalid";
    }

    if(obj.birthYear.toString().length !== 4){
        return "Invalid" ;
    }

    const upperCaseSiteName = obj.siteName.charAt(0). toUpperCase() + obj.siteName.slice(1);

    const strongPassword = `${upperCaseSiteName}#${obj.name}@${obj.birthYear}`;

    return strongPassword;
}

function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
      return 'Invalid Input';
    }
  
    
    let amountRemain = 0;
    for (let payment of payments) {
      if (payment >= 3000) {
        const taxAmount = payment * 0.2;
        payment -= taxAmount;
      }
      amountRemain += payment;
    }
    amountRemain -= livingCost;
  
   
    if (amountRemain >= 0) {
      return amountRemain;
    } else {
      return 'earn more';
    }
  }