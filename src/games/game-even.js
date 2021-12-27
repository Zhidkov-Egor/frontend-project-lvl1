import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameParameters = () => {
  const randomNumber = getRandom(0, 100);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runEvenNumberGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runEvenNumberGame;
