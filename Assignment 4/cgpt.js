function monthlySavings(payments, livingCost) {
  // Check if the input is valid
  if (!Array.isArray(payments) || typeof livingCost !== 'number') {
      return 'invalid input';
  }

  // Calculate total income
  const totalIncome = payments.reduce((acc, curr) => acc + curr, 0);

  // Apply bank tax if total income is Tk 3000 or more
  let netIncome = totalIncome;
  if (totalIncome >= 3000) {
      netIncome -= totalIncome * 0.2; // Apply 20% tax
  }

  // Calculate savings after deducting living cost
  const savings = netIncome - livingCost;

  // Check if savings is non-negative
  if (savings >=0) {
      return savings;
  } else {
      return 'earn more';
  }
}

// Test cases
console.log(monthlySavings([1000, 2000, 3000], 5400)); // 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // earn more
console.log(monthlySavings([900, 2700, 3400], 'invalid')); // invalid input
