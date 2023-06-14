# Categorize similar transactions

Given a list of transactions, some transactions are categorized, some transactions are not categorized. Find similar transactions and categorize them if possible. Similar transactions have the same targetAccount and the amount difference is not greater than 1000 (for all currencies) from the originally categorized transaction. If an uncategorized transaction is simila to more than one transaction, it should take the category from the one with the smallest amount difference. Transactions tha cannot be categorized should still be included in the returned list. The returned list should preserve the order of the original list.

`categorizeSimilarTransactions(transactions)`

We are expecting production-ready code and tests, so take your time and do your best!
If you have any notes, you can put them in the Candidate Notes (instead of polluting your nice code with comments).

Input:
You can assume that the transactions parameter will always be present and valid.

• `list of transactions ( Transaction [] )`

Output:

• `List of transactions Transaction [] ) with enhanced categorization if possible.`

## Transaction data model:

Negative transaction amount means money spent. Positive transaction amount means income.
Amount is represented using the smallest currency unit.

A transaction with amount of `-350` and currency `'EUR'` means an expense of three euros and fifty cents.

This is what a categorized transaction looks like:

```json
{
  "id": "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
  "sourceAccount": "my_account",
  "targetAccount": "coffee_shop",
  "amount": -350,
  "currency": "EUR",
  "category": "eating_out",
  "time": "2021-03-12T12:34:00Z"
}
```

An uncategorized transaction does not have category property. This is what an uncategorized transaction looks like:

```json
{
  "id": "of0ffbf9-2e26-45a-a6c0-fcbd504002f8",
  "sourceAccount": "my_account",
  "targetAccount": "eating_out",
  "amount": -1900,
  "currency": "EUR",
  "time": "2021-03-12T12:34:00Z"
}
```

The following two transactions are similar:

```json
{
  "id": "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
  "sourceAccount": "my_account",
  "targetAccount": "coffee_shop",
  "amount": -350,
  "currency": "EUR",
  "category": "eating_out",
  "time": "2021-03-12T12:34:00Z"
}
```

and

```json
{
  "id": "a001bb66-6f4c-48bf-8ae-f73453aa8dd5",
  "sourceAccount": "my_account",
  "targetAccount": "coffee_shop",
  "amount": -620,
  "currency": "EUR",
  "time": "2021-04-10T10:30:00Z"
}
```

## Example Test:

Input:

```javascript
categorizeSimilarTransactions([
  {
    id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: 350,
    currency: "EUR",
    time: "2021-04-10T10:30:00Z",
  },
  {
    id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -150,
    currency: "EUR",
    category: "eating_out",
    time: "2021-03-12T12:34:00Z",
  },
  {
    id: "6359091e-1187-471f-a2aa-81bd2647210f",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: 100,
    currency: "EUR",
    category: "entertainment",
    time: "2021-01-12T08:23:00Z",
  },
  {
    id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -1690,
    currency: "EUR",
    time: "2021-04-12T08:20:00Z",
  },
]);
```

Expected Output:

```json
[
  {
    "id": "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": 350,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-04-10T10:30:00Z"
  },
  {
    "id": "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -150,
    "currency": "EUR",
    "category": "eating_out",
    "time": "2021-03-12T12:34:00Z"
  },
  {
    "id": "6359091e-1187-471f-a2aa-81bd2647210f",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": 100,
    "currency": "EUR",
    "category": "entertainment",
    "time": "2021-01-12T08:23:00Z"
  },
  {
    "id": "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
    "sourceAccount": "my_account",
    "targetAccount": "coffee_shop",
    "amount": -1690,
    "currency": "EUR",
    "time": "2021-04-12T08:20:00Z"
  }
]
```
