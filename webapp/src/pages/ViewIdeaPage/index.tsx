import { useParams } from 'react-router-dom';
import { ViewIdeaRouteParams } from '../../lib/routes';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams;

  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description of idea 1 ...</p>
      <div>
        <p>Text paragraph 1 of idea 1...</p>
        <p>Text paragraph 1 of idea 1...</p>
        <p>Text paragraph 1 of idea 1...</p>
      </div>
    </div>
  );
};
