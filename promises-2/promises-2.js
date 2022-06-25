// Promises 2

import fetch from 'node-fetch';

const BASE_URL = "https://jsonplaceholder.typicode.com";  

// /users/ - /todos/

let user = {};

const userPromise = fetch(`${BASE_URL}/users/1`).then(res => res.json()).then((userData) => {

user = userData;

console.log(user);

}).catch(err => console.error("CATCH_ERROR",err));