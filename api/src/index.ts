import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

mongoose.Promise = Promise;
// mongoose.connect();
mongoose.connection.on('error', (error: Error) => console.log(error));
