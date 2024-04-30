import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
// import dbConnect from '../config/db-connect';
import mongoose from 'mongoose';
const app = express();

// dbConnect();
mongoose.connect('mongodb://localhost:27017/newDb');
app.use(express.json());

app.use(cors());
app.use('/', routes);



app.listen(2000, () => {
  console.log(`Server is running on port ${2000}`);
});
