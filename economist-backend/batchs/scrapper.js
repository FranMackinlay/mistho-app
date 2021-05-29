import puppeteer from 'puppeteer';

const chromeOptions = {
  headless: true,
  defaultViewport: null,
  slowMo: 10,
};

const _URL = 'https://www.economist.com';

const Scrapper = {
  scrapeArticles: async () => {

    try {
      const browser = await puppeteer.launch(chromeOptions);
      const page = await browser.newPage();

      await page.goto(_URL);


      return await findArticles(page);
    } catch (error) {
      console.log(error);
    }
  },
  getArticle: async link => {
    try {
      const browser = await puppeteer.launch(chromeOptions);
      const page = await browser.newPage();

      await page.goto(link);


      return await scrapeArticle(page);
    } catch (error) {
      console.log(error);
    }
  }
}

async function findArticles(page) {

  let articles = await page.$$eval('a.headline-link', els => els.map(el => (
    {
      title: el.childNodes[0].innerHTML,
      slug: el.childNodes[0].innerHTML.replace(/[^\w\s!?]/g, '').replace(/\s/g, '-').toLowerCase(),
      link: el.href,
    })
  ));

  const images = await page.$$eval('img', els => els.map(el => el.getAttribute('src')));

  images.map((image, i) => {
    articles[i] = {
      ...articles[i],
      img: image,
    }
  });

  let filteredArticles = articles.filter(article => article.title && article.link);

  if (!filteredArticles?.length) {
    startScrapper(page);
  } else {
    return filteredArticles;
  }
};

async function scrapeArticle(page) {

  const article = {};

  const articleTitle = await page.$eval('span.article__headline', el => el.innerText);

  let articleBody1;
  try {
    articleBody1 = await page.$eval('p.article__body-text.article__body-text--dropcap', el => el.innerText.replace('\n', ''));
  } catch (error) {
    articleBody1 = await page.$eval('p.article__body-text', el => el.innerText.replace('\n', ''));
  }

  let articleBody2;

  try {
    articleBody2 = await page.$eval('#content > article > div.ds-layout-grid.ds-layout-grid--edged.layout-article-body > p:nth-child(4)', el => el.innerText.replace('\n', ''));
  } catch (error) {
    articleBody2 = '';
  }

  const articleBody = `${articleBody1} \n ${articleBody2}`;

  const articleImg = await page.$eval('img', el => el.getAttribute('src'));

  article.title = articleTitle;
  article.body = articleBody;
  article.img = articleImg;

  if (!article) {
    scrapeArticle(page);
  } else {
    return article;
  }
};


export default Scrapper;
