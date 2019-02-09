const request = require("request");

exports.run = (bot, message, args) => {
    const options = { method: 'POST',
    url: 'https://evepraisal.com/appraisal.json',
    qs: { market: 'jita', raw_textarea: args[0], persist: 'no' },
    headers: 
        { 'User-Agent': 'AIEU_Discord_Bot',
        'cache-control': 'no-cache' }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        let results = JSON.parse(body);
        let item = results.appraisal.items[0].typeName
        let sellPrice = results.appraisal.items[0].prices.sell.median
        let buyPrice = results.appraisal.items[0].prices.buy.median

        message.channel.reply(
            `Item: ${item}` +
            `\nJita Sell: ${sellPrice}` +
            `\nJita Buy: ${buyPrice}`
        )
        .catch(message.channel.reply("This is not a valid item."));

});
};