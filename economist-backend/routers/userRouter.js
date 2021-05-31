import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { findUser, createUser } from '../data.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  let user = findUser(req.body.email);

  if (!user) {
    const userCreated = createUser({ id: Math.floor(100000000 + Math.random() * 800000000), name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });
    user = userCreated;
  }

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user),
      });
    }
  }
  return res.status(401).send({ message: 'Invalid user email or password' });
}));


export default userRouter;
