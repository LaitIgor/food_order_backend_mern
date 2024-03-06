import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGO_DB_URI as string)
  .then(() => console.log('Connected to DB'));

const app = express();

// this call allows app to take JSON requests as body
app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);

app.listen('8800', () => {
  console.log('Server launched on port 8800 successfully!');
})