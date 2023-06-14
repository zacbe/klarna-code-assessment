# Balance by category

Calculate the balance in each requested category within the specified time period.

`getBalanceByCategoryInPeriod(transactions, categories, startTime, endTime)`

We are expecting production-ready code and tests, so take your time and do your best!
If you have any notes that are not code comments, you can put them in the Your Notes section.

## Input:

You can assume that the transactions parameter will always be present and valid.

- list of transactions ( Transaction [] ): All transactions are guaranteed to have the same currency.
- list of categories ( String [] )
- start time (inclusive) (Date )
- end time (exclusive) ( Date )

## Output:

- Object of category as key and balance as value ( Object: { category: balance })

## Transaction data model

- Negative transaction amount means money spent. Positive transaction amount means income.
- Amount is represented using the smallest currency unit.
- A transaction with amount of `-350` and currency `'EUR'` means an expense of three euros and fifty cents.

This is what a transaction looks like:

```json
{
  "id": "bfd6alla-2099-4b69-a7bb-572d8436cf73",
  "sourceAccount": "my_account",
  "targetAccount": "coffee_shop",
  "amount": -350,
  "currency": "EUR",
  "category": "eating_out",
  "time": "2021-03-12T12:34:00Z"
}
```

### Example Test:

```javascript
getBalanceByCategoryInPeriod(
  [
    {
      id: "11ff73b5-e771-441c-886a-498d9365093d",
      sourceAccount: "my_account",
      targetAccount: "book store",
      amount: -9600,
      currency: "EUR",
      category: "entertainment",
      time: "2021-04-08T05:15:56.905Z",
    },
    {
      id: "8c3ec38d-1821-4d49-aef1-2385cb3c2b1b",
      sourceAccount: "my_account",
      targetAccount: "cinema",
      amount: -5700,
      currency: "EUR",
      category: "entertainment",
      time: "2021-04-07T21:16:57.819Z",
    },
    {
      id: "d1c77d7c-ccda-453c-ac01-444e9d5abca3",
      sourceAccount: "my_account",
      targetAccount: "book store",
      amount: -7400,
      currency: "EUR",
      category: "entertainment",
      time: "2021-04-07T22:46:44.071Z",
    },
    {
      id: "837127ab-f523-4b11-bed3-ae488be4545d",
      sourceAccount: "my_account",
      targetAccount: "fitness_club",
      amount: -9200,
      currency: "EUR",
      category: "sports",
      time: "2021-04-05T01:55:16.646Z",
    },
  ],
  ["'sports"],
  new Date("2021-04-01"),
  new Date("2021-04-30")
);
```

### Expected output:

```json
{ "sports": -9200 }
```
