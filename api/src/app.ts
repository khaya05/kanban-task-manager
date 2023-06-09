import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './error/error-handler';

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

class CustomError extends Error {
  statusCode: number;
  status: string;

  constructor(statusCode: number, message: string, status: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

const createCustomError = (
  statusCode: number,
  msg: string,
  status: string
): CustomError => {
  return new CustomError(statusCode, msg, status);
};

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const msg: string = `Can't find ${req.originalUrl} on this server`;
  const err = createCustomError(404, msg, 'fail');
  next(err);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // console.log({ err });
  err.statusCode = err.statusCode || 400;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({ status: err.status, message: err.message });
});

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   err.statusCode = err.statusCode || 500;
//   :
// })

export default app;
