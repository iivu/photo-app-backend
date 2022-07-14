import express from 'express';

import { postRouter } from '../post/post.router';
import { defualtErrorHandler } from './app.middleware';

/**
 * Create app
 */
const app = express();

/**
 * Parse JSON body
 */
app.use(express.json());

/**
 * Routes
 */
app.use(postRouter);

/**
 * Default error handler
 */
app.use(defualtErrorHandler);

export { app };
