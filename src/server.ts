import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

const port = process.env.PORT || 5000;

async function main() {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
