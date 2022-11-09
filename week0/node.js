/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */
const request = require('request'); // * install module to call API
const fs = require("fs");

function fetchAndWriteFile(url, fileName){
  request(`${url}`, { json: true }, (err, res, body) => {
    fs.writeFile(`${fileName}`, JSON.stringify(body), err => {
      console.log(`New file '${fileName}' successfully done writing`); // Success
    });
  });
}

fetchAndWriteFile('https://jsonplaceholder.typicode.com/users','users.json');

/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script. 
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */
require('dotenv').config();

const config =  process.env.ENV === 'PRODUCTION' ? fetchAndWriteFile('https://jsonplaceholder.typicode.com/todos','todos.json') :
                process.env.ENV === 'DEV' ? fetchAndWriteFile('https://jsonplaceholder.typicode.com/albums','albums.json'):
                console.log(' The new param is not a PRODUCTION or DEV ');