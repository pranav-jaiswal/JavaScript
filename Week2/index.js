const express = require('express')
const app = express()
const port = 3000

function calculateSum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

app.get('/handleSum', (req, res) => {
    let counter = req.query.counter;
    let calculatedSum = calculateSum(counter);
    res.send(`Calculated sum is ${calculatedSum}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

