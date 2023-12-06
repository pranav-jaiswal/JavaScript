// One node js process talking to another node js process
let obj = {
    method: "GET"
};

function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody);

}

fetch("http://localhost:3000/", obj).then(callbackFn)