import { Link } from 'react-router-dom';
import { trpc } from '../../lib/trpc';
import { getViewIdeaRoute } from '../../lib/routes';

export function AllIdeasPage() {
  const { data, error, isLoading, isError, isFetching } =
    trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>All Ideas</h1>
      <div>
        {data.ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2>
                <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                  {idea.name}
                </Link>
              </h2>
              <p>{idea.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
