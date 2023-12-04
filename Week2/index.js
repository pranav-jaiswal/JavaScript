const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

/* 
Middleware lets us capture global things we need to do before our actual handler (methods) are being called
Middleware also has power to send the response
In case authentication is not successfull, don't call next
And simply we can retuen the response using
        res.send('Encountered with some error or can't be authenticated')
*/
function middleware(req, res, next) {
    console.log('Inside middleware' + req.headers);
    // Once next is called then request goes to GET/POST methods
    next();
}

function calculateSum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

/* 
if we use this.. before request goes to any GET/ POST method
The request goes to middleware function and then only goes to the GET/ POST method
USE of MIDDLEWARE: For authentication
NOTE: MIDDLEWARES CAN BE METHOD SPECIFIC AS WELL
*/

/* 
body-parser is another middleware which helps us to extract the request body
We need this explicitly as express does not directly gives req.body in GET/ POST methods
*/
app.use(bodyParser.json());
app.use(middleware);

app.get('/handleSum', (req, res) => {

    let counter = req.body.counter;
    // console.log('Counter: ' + req.headers.counter);
    // console.log('Counter: ' + req.query.counter);
    console.log('Counter: ' + req.body.counter);
    console.log('from get method: counter=' + counter);
    if(counter < 1000000) {
        let calculatedSum = calculateSum(counter);
        // text as response body
        res.send(`Calculated sum is ${calculatedSum}`);
    } else {
        // By default express sends 200, this way we can change the status code.
        res.status(411).send('You have sent very big number.');
    }
})

// multiple types of response body : text/ json/ html
app.get('/', (req, res) => {
    obj = {
        name: "Pranav",
        lastName: "Jaiswal"
    }
    // Json Body
    // res.send(obj);

    // Send html/ html file
    res.sendFile(__dirname+"/a.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

