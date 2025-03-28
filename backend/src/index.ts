import { applyTrpcToExpressApp } from './lib/trpc';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './router';

const expressApp = express();

expressApp.use(cors());

applyTrpcToExpressApp(expressApp, trpcRouter);

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});
