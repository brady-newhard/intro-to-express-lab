const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// ------------Exercise 1------------ //

app.get('/greetings/:username', (req, res) => {
    res.send(`Wazzzzzup!, ${req.params.username}!`)
    
});

// Avisa's logic //
app.get('/greetings/:username', (req, res) => {
    const name = req.params.username
    res.send(`Yo, yo, yo!, ${name}!`)
   
});

// ------------Exercise 2------------ //

app.get('/roll/:number', (req, res) => {
    const number = req.params.number
    const num = parseInt(number)
    if (isNaN(number)) {
        res.send("You must specify a number")
    } else {
        const rollNumber = (Math.floor(Math.random() * (num + 1)))
        res.send(`You rolled a ${rollNumber}`)
    }
});

// ------------Exercise 3------------ //

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  
  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= collectibles.length) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        const item = collectibles[index];
        res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});

// ------------Exercise 4------------ //

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let filterShoes = shoes
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;

    if (minPrice) {
        filterShoes = filterShoes.filter(shoe => shoe.price >= minPrice);
    }
    if (maxPrice) {
        filterShoes = filterShoes.filter(shoe => shoe.price <= maxPrice);
    }
    if (type) {
        filterShoes = filterShoes.filter(shoe => shoe.type === type);
    }

    res.send(`Results: ${filterShoes.map(shoe => shoe.name).join(', ')}`);  
})

app.listen(3000, () => {
    console.log('🎧Listening on http://localhost:3000')
})
    