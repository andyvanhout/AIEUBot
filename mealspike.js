const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.randomlists.com/random-recipes');
    await page.waitFor(1000);
    const result = await page.evaluate( () => {
        let text = document.querySelector('span.title').innerText;
        return text
    })

    
    browser.close();
    return result;
}

scrape().then((value) => {
    console.log(value); //Success!
});