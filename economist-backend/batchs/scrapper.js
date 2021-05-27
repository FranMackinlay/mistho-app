import puppeteer from 'puppeteer';

const chromeOptions = {
  headless: true,
  defaultViewport: null,
  slowMo: 10,
};

const Scrapper = {
  scrapeArticles: async () => {
    const _URL = 'https://www.economist.com';

    try {
      const browser = await puppeteer.launch(chromeOptions);
      const page = await browser.newPage();

      await page.goto(_URL);


      return await startScrapper(page);
    } catch (error) {
      console.log(error);
    }
  }
}

async function startScrapper(page) {

  const articles = await page.$$eval('a.headline-link', els => els.map(el => (
    {
      title: el.childNodes[0].innerHTML,
      link: el.href,
    })
  ));

  if (!articles?.length) {
    startScrapper(page);
  } else {
    return articles;
  }
};


export default Scrapper;
