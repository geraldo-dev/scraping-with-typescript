import puppeteer from "puppeteer";
import fs from 'node:fs';

async function main() {
    
    let start = 1000;
    let stop = 1001;
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


    //save in file
    pages.forEach((phrase)=>{

        fs.appendFile('../lista_frases_ingles.csv', `${phrase}\n`, 'utf8', (err)=>{
            if(err){
                console.log(err);
            }
        });

    });

    console.log('salva com sucesso!');
}

main();