export function App() {
  return (
    <div>
      <h1>Ideanick</h1>
      <div>
        {ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2>{idea.name}</h2>
              <p>{idea.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
