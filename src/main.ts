import puppeteer from "puppeteer";

async function main() {
    
    let start = 1000;
    let stop = 1005;
    let pages = [];

    const url = `https://www.manythings.org/bilingual/por/${1000}.html`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);




    await browser.close();

}

main();