import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log('............................................');
  let a = 0;
  let b = 0;
  if (req.query.a) {
    a += +req.query.a;
  }
  if (req.query.b) {
    b += +req.query.b;
  }
  const result = a + b;
  res.json(result);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
