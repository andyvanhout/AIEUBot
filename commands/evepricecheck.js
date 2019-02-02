exports.run = (bot, message, args) => {
    //first arg should be your item to price check
    //take that and query evemarketdata's api?
    //the api data probably returns json or something for that item with pricing
    //so reply or send or return with the price of the first arg
    message.channel.send().catch(console.error);
}