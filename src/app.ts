import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import authRoute from './modules/auth/auth.route';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Auth Server!');
});




app.get('/users', async (req: Request, res: Response) => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await users.json()
  res.json(data)
})


app.use('/api/v1/auth', authRoute)


export default app;
