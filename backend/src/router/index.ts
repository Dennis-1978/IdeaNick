import { trpc } from '../lib/trpc';

import { getIdeaTrpcRoute } from './getIdea';
import { getIdeasTrpcRoute } from './getIdeas';
import { createIdeaTrpcRoute } from './createIdea';
import { signUpTrpcRoute } from './signUp';
import { signInTrpcRoute } from './signIn';

export const trpcRouter = trpc.router({
  createIdea: createIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn: signInTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
