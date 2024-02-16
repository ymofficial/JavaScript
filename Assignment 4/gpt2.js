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
  
  console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
  console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
  console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: earn more
  console.log(monthlySavings(100, [900, 2700, 3400])); // Output: invalid input
  