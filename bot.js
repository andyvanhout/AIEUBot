const fs = require('fs');
const Enmap = require("enmap");
const Discord = require("discord.js");

const bot = new Discord.Client();

bot.settings = settings
bot.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      //I have only a vague idea what's happening here.
      bot.on(eventName, event.bind(null, bot));
      //I definitely have no idea what's happening here or if it even is needed
      delete require.cache[require.resolve(`./events/${file}`)];
  });
});


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      bot.commands.set(commandName, props);
  });
});

bot.login(process.env.token)
