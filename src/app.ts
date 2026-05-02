import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Auth Server!');
});

export default app;
