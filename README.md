You shouldn't use this, because the packages have vulnerabilities.  I'll fix it, one day.  Maybe.

AIEU Bot

I have no idea what I'm doing.

Something something MIT license.

Something something npm install

Pretty sure it uses "discordjs" library along with "enmap."  Enmap requires more stuff like better-sql to make work good but Hoots isn't there yet.

Much like no have candle, you can no have my settings.json file and yes the secret token in early commits has definately been regenerated and no longer works. You'll have to make your own bot and token if you want to test this. The settings.json file needs to be configured like this:

{
    "token": "<yourtokenhere>",
    "prefix": "<putaprefixhere>"
}


Much of the bot, particularly the command handler, was shamelessly stolen from following the tutorial at https://anidiots.guide/

I tore the code apart and broke it to figure out how it works, but I'll still leave comments in the when I make the repo public to show where I have no idea what's going on and where dark Javascript magic is happening.

Maybe I'll improve this readme some day.
