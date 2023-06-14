const categorizeSimilarTransactions = (transactions) => {
  const categorizedTransactions = [];
  const similarTransactionsMap = new Map();

  for (const t of transactions) {
    const { targetAccount, category } = t;

    if (category) {
      const similarTransactions =
        similarTransactionsMap.get(targetAccount) || [];
      similarTransactions.push(t);
      similarTransactionsMap.set(targetAccount, similarTransactions);
    }
  }

  for (const t of transactions) {
    const { targetAccount, amount, category } = t;
    const similarTransactions = similarTransactionsMap.get(targetAccount);

    if (similarTransactions && !category) {
      let closestTransaction = null;
      let smallestDiff = Infinity;

      for (const prevT of similarTransactions) {
        const prevAmount = prevT.amount;
        const diff = Math.abs(amount - prevAmount);

        if (diff <= 1000 && diff < smallestDiff) {
          closestTransaction = prevT;
          smallestDiff = diff;
        }
      }

      if (closestTransaction) {
        t.category = closestTransaction.category;
      }
    }

    categorizedTransactions.push(t);
  }

  return categorizedTransactions;
};

module.exports = categorizeSimilarTransactions;

// it('enhances categorization when there are similar transactions', () => {
//   expect(
//     categorizeSimilarTransactions([
//       {
//         id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
//         sourceAccount: 'my_account',
//         targetAccount: 'coffee_shop',
//         amount: -620,
//         time: '2021-04-10T10:30:00Z',
//       },
//       {
//         id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
//         sourceAccount: 'my_account',
//         targetAccount: 'coffee_shop',
//         amount: -350,
//         category: 'eating_out',
//         time: '2021-03-12T12:34:00Z',
//       },
//       {
//         id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
//         sourceAccount: 'my_account',
//         targetAccount: 'coffee_shop',
//         amount: -1690,
//         time: '2021-04-12T08:20:00Z',
//       },
//     ])
//   ).toEqual([
//     {
//       id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
//       sourceAccount: 'my_account',
//       targetAccount: 'coffee_shop',
//       amount: -620,
//       category: 'eating_out',
//       time: '2021-04-10T10:30:00Z',
//     },
//     {
//       id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
//       sourceAccount: 'my_account',
//       targetAccount: 'coffee_shop',
//       amount: -350,
//       category: 'eating_out',
//       time: '2021-03-12T12:34:00Z',
//     },
//     {
//       id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
//       sourceAccount: 'my_account',
//       targetAccount: 'coffee_shop',
//       amount: -1690,
//       time: '2021-04-12T08:20:00Z',
//     },
//   ]);
// });
