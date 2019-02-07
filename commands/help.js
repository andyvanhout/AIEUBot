exports.run = (bot, message, args) => {
    message.channel.send(
        "\`\`\`Available Commands:" +
        "\n!help -- Details available commands. You presumably figured this out already." +
        "\n!evetime -- List current EVE Time" +
        "\n!evepricecheck -- Currently suggests you google search the price for the thing you're wanting to price check." +
        "\n!mealidea -- Inefficiently suggests a (somewhat?) random meal idea.\`\`\`")
    .catch(console.error);
}