import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import notFound from './middleware/not-found';
import globalErrorHandler from './error/globalErrorHandler';

// Routes
import userRouter from './routes/userRouter';
import boardRouter from './routes/boardRouter';
import taskRouter from './routes/taskRouter';
import subtaskRouter from './routes/subtaskRouter';
import columnRouter from './routes/columnRouter';

const app = express();

app.use(morgan('dev'));
app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/boards', boardRouter);
app.use('/api/v1/columns', columnRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/subtasks', subtaskRouter);

// error handling
app.all('*', notFound);
app.use(globalErrorHandler);
export default app;
