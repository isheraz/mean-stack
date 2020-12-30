import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Content-Type Cache-Control'
  );
  res.header('Cache-Control', 'max-age=0');
  next();
});
app.use('/api/', routes());

app.use('/api/', routes());

app.use('/api/', routes());

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
