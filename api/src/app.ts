import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

// Routes
import userRouter from './routes/userRouter';
import boardRouter from './routes/boardRouter';

const app = express();

app.use(morgan('dev'));
app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/boards', boardRouter);

export default app;
