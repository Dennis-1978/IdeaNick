import { applyTrpcToExpressApp } from './lib/trpc';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './router';
import { AppContext, createAppContext } from './lib/ctx';
import { applyPassportToExpressApp } from './lib/passport';

void (async () => {
  let ctx: AppContext | null = null;

  try {
    ctx = createAppContext();

    const expressApp = express();

    expressApp.use(cors());

    applyPassportToExpressApp(expressApp, ctx);
    await applyTrpcToExpressApp(expressApp, ctx, trpcRouter);

    expressApp.listen(3000, () => {
      console.info('Listening at http://localhost:3000 🚀');
    });
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();
