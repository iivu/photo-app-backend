import express from 'express';

import { postRouter } from '../post/post.router';
import { userRouter } from '../user/user.router';
import { defualtErrorHandler, requestUrl } from './app.middleware';

/**
 * Create app
 */
const app = express();

/**
 * Parse JSON body
 */
app.use(express.json());

/**
 * Log request url
 */
app.use(requestUrl);

/**
 * Routes
 */
app.use(postRouter);
app.use(userRouter);

/**
 * Default error handler
 */
app.use(defualtErrorHandler);

export { app };
