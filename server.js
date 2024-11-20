const express = require('express');
const app = express();

// Exercise 1 //

app.get('/greetings/:name', (req, res) => {
    res.send(`Wazzzzzup!, ${req.params.name}!`);
});

// Exercise 2 //

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

// Exercise 3 //

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
        const collectible = collectibles[index];
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
    }
});

// Exercise 4 //



app.listen(3000, () => {
    console.log('Listening on port 3000')
})
