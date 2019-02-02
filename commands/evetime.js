exports.run = (bot, message, args) => {
    let evetime = new Date().toUTCString().replace('GMT', 'EVE');
    message.reply(evetime).catch(console.error);
}

