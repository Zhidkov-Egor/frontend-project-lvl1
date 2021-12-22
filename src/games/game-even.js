import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameParameters = () => {
  const randomNumber = getRandom(0, 100);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  const questionGame = `Question: ${randomNumber}`;
  const gameParameters = [questionGame, correctAnswer];
  return gameParameters;
};

const parityCheckGame = () => {
  isVerifiesUserResponse(rulesGame, getGameParameters);
};
export default parityCheckGame;
