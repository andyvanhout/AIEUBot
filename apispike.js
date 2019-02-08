const fetch = require('node-fetch');


fetch("https://evepraisal.com/appraisal.json?market=jita", { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then(json => console.log(json));