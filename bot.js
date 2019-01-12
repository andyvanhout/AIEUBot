
const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

let prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!help for Info");
});

client.on('message', msg => {
  if (msg.author.bot) {
    return null;
  } 
  
  else if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send(
      "\`\`\`Available Commands: \n!help -- Details available commands \n!evetime -- Displays the current EVE Time.\`\`\`")
  }

  else if (msg.content.startsWith(prefix + 'evetime')) {
    let evetime = new Date().toUTCString().replace('GMT', 'EVE');
    console.log(evetime);
    msg.reply(evetime);
  }

  else if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send(`Pong! \`${Date.now() - msg.createdTimestamp} ms\``);
  } 
  
  else {
    console.log("Something is broken");
  }

});

client.login(token);