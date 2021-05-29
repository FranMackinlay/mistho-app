import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Scrapper from '../batchs/scrapper.js';
import { isAuth } from '../utils.js';


const articlesRouter = express.Router();

articlesRouter.get('/', isAuth, expressAsyncHandler(async (req, res) => {

  const articles = await Scrapper.scrapeArticles();

  res.status(200).send({ articles });
}));

articlesRouter.get('/:articleSlug', isAuth, expressAsyncHandler(async (req, res) => {

  const { link } = req.query;

  const article = await Scrapper.getArticle(link);

  res.status(200).send({ article });
}));

export default articlesRouter;
