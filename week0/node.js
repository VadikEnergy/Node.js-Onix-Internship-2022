/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */
 const request = require('request'); // * install module to call API
 const fs = require("fs");

 request('https://jsonplaceholder.typicode.com/users', { json: true }, (err, res, body) => {

   if (err) { return console.log(err); }
   fs.writeFile("users.json", JSON.stringify(body), err => {

    if (err) { return console.log(err); }
    console.log("New file 'users.json' successfully done writing"); // Success
  });

 });


/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script. 
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */

require('dotenv').config();

getJsonFile(process.env.ENV);

function getJsonFile(param) {

  if (param === 'PRODUCTION') {

    request('https://jsonplaceholder.typicode.com/todos', { json: true }, (err, res, body) => {
  
     if (err) { return console.log(err); }
     fs.writeFile("todos.json", JSON.stringify(body), err => {
  
      if (err) { return console.log(err); }
      console.log("New file 'todos.json' successfully done writing"); // Success
    });
  
   });
  } else if (param === 'DEV') {
  
    request('https://jsonplaceholder.typicode.com/albums', { json: true }, (err, res, body) => {
  
     if (err) { return console.log(err); }
     fs.writeFile("albums.json", JSON.stringify(body), err => {
  
      if (err) { return console.log(err); }
      console.log("New file 'albums.json' successfully done writing"); // Success
    });
  
   });
  } else {
    console.log(' The new param is not a PRODUCTION or DEV ');
  }

}