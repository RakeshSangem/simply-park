import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/mongo.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  console.log('fucked up');
  // Connect to mongoDB using mongoose
  // await connectDB();

  server.listen(PORT, () => {
    console.log(`Listening to ${PORT}...`);
  });
}

startServer();
