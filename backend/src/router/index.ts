import { trpc } from '../lib/trpc';

import { getIdeaTrpcRoute } from './getIdea';
import { getIdeasTrpcRoute } from './getIdeas';
import { createIdeaTrpcRoute } from './createIdea';
import { signUpTrpcRoute } from './signUp';
import { signInTrpcRoute } from './signIn';
import { getMeTrpcRoute } from './getMe';

export const trpcRouter = trpc.router({
  createIdea: createIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn: signInTrpcRoute,
  getMe: getMeTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
