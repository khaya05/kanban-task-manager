import http from 'http';
import { join } from 'path';
import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';

dotenv.config({ path: join(`${__dirname}`, 'config.env') });

const port = process.env.PORT || 8000;
const server = http.createServer(app);

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('DB connected');

    server.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

connect();
