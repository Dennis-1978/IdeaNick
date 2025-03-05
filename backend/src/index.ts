import express from 'express';

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea 1',
    description: 'Description of idea 1...',
  },
  {
    nick: 'cool-idea-nick-2',
    name: 'Idea 2',
    description: 'Description of idea 2...',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea 3',
    description: 'Description of idea 3..',
  },
];

const expressApp = express();

expressApp.get('/ideas', (req, res) => {
  res.send(ideas);
});

expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000');
});
