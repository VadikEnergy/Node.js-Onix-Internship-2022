const invoice = {
    firstName: 'Node',
    lastName: 'Developer',
    createdAt: '2022-10-31T22:50:59.305Z',
    amount: 150,
    currency: 'USD',
};

/**
 * 1. Log firstName and lastName in dot notation and bracket notation
 */

 console.log(`First name: ${invoice.firstName}, ${invoice['firstName']}`);
 console.log(`Last name: ${invoice.lastName}, ${invoice['lastName']} `);

/**
 * 2. Log Object Keys
 */

const keys = Object.keys(invoice);

console.log({
    keys,
});

/**
 * 3. Log Object values
 */

const values = Object.values(invoice);

console.log({
    values,
});

/**
 * 4. Log Object entries
 */

const entries = Object.entries(invoice);

console.log({
    entries,
});

/**
 * 5. Create second variable invoce from original
 * Please, use more than one solution
 */

const copiedInvoice = {...invoice}; // first solution
const copiedInvoiceSecond = Object.assign({}, invoice);; // second solution
const copiedInvoiceThird = JSON.parse(JSON.stringify(invoice));; // third solution

console.log({
    copiedInvoice,
    copiedInvoiceSecond, 
    copiedInvoiceThird,
});

/**
 * 6. Modify copiedInvoice amount value
 * Important: original invoice amount shouldnt be modified
 */

copiedInvoice['amount'] = 300;

console.log({
    invoice,
    copiedInvoice,
});

/**
 * 7. Loop through object and log key-values
 */

for (const elements in invoice) {
    console.log(`${elements} - ${invoice[elements]}`);
}