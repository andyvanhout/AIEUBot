module.exports = (bot, message) => {
    //do nothing for bot messages
    if (message.author.bot) return;
    //do nothing if the message doesn't start with your prefix
    if (message.content.indexOf(process.env.prefix) !== 0) return;
    //store some args, figure out the command
    const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //with the figured out command, get the command
    const cmd = bot.commands.get(command);
    //if it's not a command do nothing
    if (!cmd) return;
    //if it's a command do whatever "run" with bot, the message, and the command args
    cmd.run(bot, message, args);
};
