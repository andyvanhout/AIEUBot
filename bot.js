//this is a discord bot file
//
//write something to make the bot log in
//also write more to-dos

//client ID = 327308932878041089
//secret = 9OEaZRfeRzK7S7vjI7Z_0IsYZHIjJko6


const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzI3MzA4OTMyODc4MDQxMDg5.Dxr0cA.gy8e5FjLomC9FxyE_kS9jRVEiBE';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(token);