
const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');

let prefix = settings.prefix

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity("Testing, Not Production");
});

bot.on('message', msg => {
  
  if (!msg.author.bot) {
    switch (msg.content) {
      case (prefix + "help"):
        msg.channel.send(
          "\`\`\`Available Commands:" +
          "\n!help -- Details available commands" +
          "\n!evetime -- Displays the current EVE Time." +
          "\n!ping -- I don't actually know what this does.\`\`\`");
        break;
      
      case (prefix + "evetime"):
        let evetime = new Date().toUTCString().replace('GMT', 'EVE');
        console.log(evetime);
        msg.reply(evetime);
        break;

      case (prefix + 'ping'):
        msg.channel.send(`Pong! \`${Date.now() - msg.createdTimestamp} ms\``);
        break;

      default:
        console.log(`Not a command, message is: ${msg.content}`);
        break;
    }
  } else {
    console.log(`Bot message: ${msg.content}`);
  }
});
bot.login(settings.token);