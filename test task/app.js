const express = require('express');
const app = express();
const port = 3000;
const request = require('request');

app.get('/rates', (req,res) => {    
    const options = {
        'url': 'https://api.coincap.io/v2/rates/'
    }; 
    request(options, function (error, response) {
        if (error) throw new Error(res.status(404)); 
        var usd = {};
        var json = JSON.parse(response.body);
        for (el in json['data']){
            usd['usd'] = json['data'][el]['rateUsd'];
            var currency = req.query.currency; // query parameter
            if (currency === json['data'][el]['id']) {
                res.status(200).type('text/html');
                res.send(`<h1 style = "text-align: center;"> ${JSON.stringify(usd)}</h1>`);
            } 
        } 
    });
})

app.use((req, res, next) => {
    res.status(404).type('text/html');
    res.send('<h1>Not found!</h1>');
})

app.listen(port, function(error){
    console.log(`Server running successfully on port: http://localhost:${port}`);
})
