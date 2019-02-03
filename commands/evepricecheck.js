exports.run = (bot, message, args) => {
    //first arg should be your item to price check
    //take that and query evemarketdata's api?
    //the api data probably returns json or something for that item with pricing
    //so reply or send or return with the price of the first arg
    message.channel.send(`On the one hand, I know you what you want to price check: ${args}. 
    On the other hand, I don't know how to do that yet. Someone tell me how to pull 
    from some market API and I'll get right on that. Until that time: http://lmgtfy.com/?q=EVE+Online+${args}`).catch(console.error);
}