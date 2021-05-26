import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const articlesRouter = express.Router();

articlesRouter.get('/', expressAsyncHandler(async (req, res) => {
  res.send();
}));

export default articlesRouter;
