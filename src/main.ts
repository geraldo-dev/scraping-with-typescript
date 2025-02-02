import puppeteer from "puppeteer";

async function main() {
    
    let start = 1000;
    let stop = 1005;
    let pages = [];

    const url = `https://www.manythings.org/bilingual/por/${1000}.html`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let result = await page.evaluate(()=>{

        let items: string [] = [];

        document.querySelectorAll('dl > dt > a').forEach((item)=>{
            if(item.textContent !== 'MP3'){
                items.push(String(item.textContent));
            }
        });

        return items;

    });

    console.log(result)


    await browser.close();

}

main();