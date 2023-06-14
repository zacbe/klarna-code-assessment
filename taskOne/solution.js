function getBalanceByCategoryInPeriod(
  transactions,
  categories,
  startTime,
  endTime
) {
  const balances = {};

  // Filter transactions within the specified time period
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionTime = new Date(transaction.time);
    return transactionTime >= startTime && transactionTime < endTime;
  });

  // Calculate the balance for each category
  filteredTransactions.forEach((transaction) => {
    const category = transaction.category;
    const amount = transaction.amount;

    if (categories.includes(category)) {
      balances[category] = (balances[category] || 0) + amount;
    }
  });

  // Initialize balances for all categories to 0
  categories.forEach((category) => {
    balances[category] = 0;
  });

  return balances;
}
