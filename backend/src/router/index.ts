import { trpc } from '../lib/trpc';

import { getIdeaTrpcRoute } from './getIdea';
import { getIdeasTrpcRoute } from './getIdeas';
import { createIdeaTrpcRoute } from './createIdea';

export const trpcRouter = trpc.router({
  createIdea: createIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  getIdea: getIdeaTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
