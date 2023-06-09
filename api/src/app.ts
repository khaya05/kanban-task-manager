import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './error/error-handler';
import { createCustomError } from './error/appError';
import { globalErrorHandler } from './error';

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

// error handling
// app.all('*', notFound);
// app.use(notFound);
// app.use(errorHandlerMiddleware)

app.all('*', notFound);

app.use(globalErrorHandler);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   err.statusCode = err.statusCode || 500;
//   :
// })

export default app;
