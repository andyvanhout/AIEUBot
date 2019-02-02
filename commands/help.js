exports.run = (bot, message, args) => {
    message.channel.send(
        "\`\`\`Available Commands:" +
        "\n!help -- Details available commands. You presumably figured this out already." +
        "\n!evetime -- List current EVE Time \`\`\`")
    .catch(console.error);
}