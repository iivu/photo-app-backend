import express from 'express';

/**
 * create app
 */
const app = express();

/**
 * parse JSON body
 */
app.use(express.json());

export { app };
