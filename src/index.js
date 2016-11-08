import express from 'express';

const app = express();
app.get('/', (req, res) => {
  let result = 'Invalid fullname';
  if (req.query.fullname) {
    const fio = req.query.fullname.split(' ');
    if (fio.length < 4) {
      switch (fio.length) {
        case 1:
          result = `${fio[0]}`;
          break;
        case 2:
          result = `${fio[1]} ${fio[0].slice(0, 1)}.`;
          break;
        case 3:
          result = `${fio[2]} ${fio[1].slice(0, 1)}. ${fio[0].slice(0, 1)}.`;
          break;
        default:
      }
    }
  }
  res.json(result);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
