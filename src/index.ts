import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();

// this call allows app to take JSON requests as body
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response,) => {
  res.json({ message: 'Response from backend' })
})

app.listen('8800', () => {
  console.log('Server launched on port 8800 successfully!');
})