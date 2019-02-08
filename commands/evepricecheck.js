const fetch = require('node-fetch');

exports.run = (bot, message, args) => {
    fetch("https://evepraisal.com/appraisal.json?market=jita&raw_textarea=avatar&persist=no")
    .then(res => res.json())
    .then(json => console.log(json));
    message.channel.send().catch(console.error);

}