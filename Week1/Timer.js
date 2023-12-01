
let counter = 0;
function timer() {
    console.clear();
    console.log(counter);

    counter++;
}

setInterval(timer, 1000);