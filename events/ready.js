module.exports = (bot) => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity("The owl watches");
}