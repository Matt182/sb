import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log('............................................');
  const a = +req.query.a;
  const b = +req.query.b;
  const result = a + b;
  res.json(result);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
