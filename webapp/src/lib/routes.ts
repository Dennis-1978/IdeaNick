export const getAllIdeasRoute = () => '/';
export const getViewIdeaRoute = ({
  ideaNick: ideaNick,
}: {
  ideaNick: string;
}) => `/ideas/${ideaNick}`;
