import express from 'express';
import pool from './db/server.js';
import booksRouter from './routes/booksRouter.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
