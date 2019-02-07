const puppeteer = require('puppeteer');

exports.run = (bot, message, args) => {;
    let scrape = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.randomlists.com/random-recipes');
        
        const result = await page.evaluate( () => {
            let recipeText = document.querySelector('span.title').innerText;
            return recipeText;
        })
            browser.close();
            return result;
        }
        scrape().then((value) => {
            message.reply(value);
        });
    }