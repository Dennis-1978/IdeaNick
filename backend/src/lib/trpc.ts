import { initTRPC } from '@trpc/server';
import { type Express } from 'express';
import { TrpcRouter } from '../router';
import * as trpcExpress from '@trpc/server/adapters/express';
import { AppContext } from './ctx';
import { SuperJSON } from 'superjson';

export const trpc = initTRPC.context<AppContext>().create({
  transformer: SuperJSON,
});

export const applyTrpcToExpressApp = (
  expressApp: Express,
  appContext: AppContext,
  trpcRouter: TrpcRouter,
) => {
  expressApp.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext: () => appContext,
    }),
  );
};
