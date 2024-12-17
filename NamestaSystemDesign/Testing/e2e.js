const puppeteer = require('puppeteer');

// Immediately invoke function expression
// (()=>{

// })();

// (function(){

// }())

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ["--window-size=1680,1050"],
    });

    const page = await browser.newPage();

    await page.goto("https://www.google.com/");

    await page.setViewport({ width: 1480, height: 1050 });

    const googleClickButton = "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc";

    await page.waitForSelector(googleClickButton);

    await page.click(googleClickButton);

    const luckyPageCard = "#glue-carousel-1 > div > a:nth-child(7) > img";

    await page.waitForSelector(luckyPageCard);

    await page.click(luckyPageCard);

    await browser.close();
})();