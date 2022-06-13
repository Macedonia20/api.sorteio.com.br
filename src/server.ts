import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppError';

import './database';
// import middleware from './middleware';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
// app.use(middleware);
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Erro na sua requisição 🤯',
  });
});

app.listen(3333, () => {
  console.log('🤖 Iniciando api.sorteio.com.br na porta 3333! 🤖');
});

export { app };