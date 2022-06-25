// Promises 3 async / await

import fetch from 'node-fetch';

const BASE_URL = "https://jsonplaceholder.typicode.com";  

// /users/ - /todos/

// let user = {};

// const userPromise = fetch(`"${BASE_URL}/users/1"`).then(res => res.json()).then((userData) => {

// user = userData;

// console.log(user);

// }).catch(err => console.error("CATCH_ERROR",err));

const fetchUsers = async () => {

   try{
      const response = await fetch(`${BASE_URL}/users/`);

   const usersData = await response.json();

   return usersData;

   }catch(e){
console.error(e);
return[];
   }

}

const users = await fetchUsers();

console.log(users);