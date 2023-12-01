// This is another way of Async calls in JS

/*
Output

5050
15050
5 seconds gone
10 seonds have passed

*/

function sum(n1, n2) {
    let sum = 0;
    for(let i=n1; i<=n2; i++) {
        sum += i;
    }
    console.log(sum);
}

setTimeout(function() {
    console.log('10 seonds have passed');
}, 10*1000);

function print5() {
    console.log('5 seconds gone');
}

setTimeout(print5, 5*1000);

sum(1,100);
sum(101,200);

