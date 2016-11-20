import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import cors from 'cors';
import Computer from './models/Computer';

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/matt_skb3');

const app = express();
app.use(cors());
/*
app.get('/users', async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

app.get('/pets', async (req, res) => {
  const pets = await Pet.find();
  return res.json(pets);
});

const pcc = new Computer({
  board: {
    vendor: 'asdfasf',
    model: 'zxcvxzv',
    cpu: {
      model: null,
      hz: null,
    },
    image: null,
    video: null,
    ram: {
      vendor: null,
      volume: null,
      pins: null,
    },
    os: null,
    floppy: null,
    hdd: [
      {
        vendor: null,
        size: null,
        volume: null,
      },
    ],
    monitor: null,
    length: null,
    height: null,
    width: null,
  },
});
pcc.save()
.then(() => {
  console.log('success');
})
.catch((err) => {
  console.log('error', err);
});
*/
app.get('/', async (req, res) => {
  const comps = await Computer.find();
  res.status(200);
  return res.json(comps);
});

app.get('/:q', async (req, res) => {
  const q = req.params.q;
  const param = `board.${q}`;
  const comps = await Computer.find({}, {
    [param]: 1,
  });
  res.status(200);
  return res.json(comps);
});

app.get('/:q1/:q2', async (req, res) => {
  const q1 = req.params.q1;
  const q2 = req.params.q2;
  const param = `board.${q1}.${q2}`;
  const comps = await Computer.find({}, {
    [param]: 1,
  });
  res.status(200);
  return res.json(comps);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
