exports.run = (bot, message, args) => {
    message.channel.send(
        "\`\`\`Available Commands:" +
        "\n!help -- Details available commands. You presumably figured this out already." +
        "\n!evetime -- List current EVE Time" +
        "\n!pricecheck -- Checks EVEpraisal for your thing. Must be exact search for item (example !pricecheck Exotic Dancers, Female)" +
        "\n!mealidea -- Inefficiently suggests a (somewhat?) random meal idea.\`\`\`")
    .catch(console.error);
}