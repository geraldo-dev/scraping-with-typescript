import puppeteer from "puppeteer";

async function main() {
    
    let start = 1000;
    let stop = 1005;
    let pages = [];

    for(start; start <= stop; start++){

        const url = `https://www.manythings.org/bilingual/por/${start}.html`;
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

        pages.push(...result);
        
        await browser.close();
    }
    
    console.log(pages);
}

main();