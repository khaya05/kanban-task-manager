import http from 'http';
import { join } from 'path';
import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';
import { MongoServerError } from 'mongodb';

dotenv.config({ path: join(`${__dirname}`, 'config.env') });

// uncaughtException
process.on('uncaughtException', (err: Error) => {
  console.log('Unhandled MongoServerError. Shutting down...');
  console.log(err.name, err.message)
  process.exit(1);
});

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

// handle MongoServerError
process.on('unhandledRejection', (error: Error) => {
  if (error instanceof MongoServerError) {
    console.log('Unhandled MongoServerError. Shutting down...');
     console.log(error.name, error.message);
    server.close(() => process.exit(1));
  } else {
    throw error;
  }
});
