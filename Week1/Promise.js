// Promise is another way of async calls

/* getMedicine is a promise object
   once promise is complete which is setTimeout of 10 seconds here (wait for 10 sec)
   Then .then() is being called.
*/

function getMedicine() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 10 * 1000);
    });
}


getMedicine().then(function(){
    console.log("Got medicine after 10 seconds.")
});