import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../schemas/userModel.js';
import { generateToken, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        flags: {
          isAdmin: user.flags.isAdmin,
        },
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid user email or password' });

}));

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
  const user = new User({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) });

  const createdUser = await user.save();

  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    flags: {
      isAdmin: createdUser.flags.isAdmin,
    },
    token: generateToken(createdUser),
  });
}));

userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) return res.send(user);

  res.status(404).send({ message: 'User not found' });
}));

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }
    const updatedUser = await user.save();

    return res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      flags: {
        isAdmin: updatedUser.flags.isAdmin,
      },
      token: generateToken(updatedUser),
    });
  }
  res.status(404).send({ message: 'User not found' });
}))


export default userRouter;
