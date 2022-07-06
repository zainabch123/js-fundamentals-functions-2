// This extension will require you to read the test failure messages to
// figure out what you need to change, not all of the information has been
// provided in the comments below.

// Do not edit this book object directly
const book = {
    name: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Cooking',
    isbn: {
        isbn10: '9780132350884',
        asin: '0132350882'
    },
    publisher: 'Prentice Hall',
    dimensions: '10x12x2'
}

const isbn13 = '978-0132350884'

// Set this to the book name
const name = ''

// Set this to the isbn 10 value
const isbn10 = ''

// Do not modify this basket object directly
const basket = {
    items: [
        {
            name: 'Apple',
            quantity: 10,
            price: 1
        },
        {
            name: 'Lemon',
            quantity: 2,
            price: 0.5
        }
    ],
    voucherCodes: [
        'AA-AA-A',
        'BB-BB-B'
    ]
}

// Set this variable to the length of the baskets voucher codes array
const numberOfVoucherCodes = null

// Set this variable to the first element in of the baskets voucher codes array
const firstVoucherCode = null
  

// Do not edit this exported object
module.exports = {
    name: name,
    isbn10: isbn10,
    book: book,
    basket: basket,
    numberOfVoucherCodes: numberOfVoucherCodes,
    firstVoucherCode: firstVoucherCode
}
