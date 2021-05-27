import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Scrapper from '../batchs/scrapper.js';


const articlesRouter = express.Router();

articlesRouter.get('/', expressAsyncHandler(async (req, res) => {

  const articles = await Scrapper.scrapeArticles();

  res.status(200).send({ articles });
}));

export default articlesRouter;
