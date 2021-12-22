import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answersEvenOrNot = (num) => {
  const moiety = num / 2;
  let result = 'yes';
  for (let i = 2; i <= moiety; i += 1) {
    if (num % i === 0) {
      result = 'no';
      return result;
    }
  }
  return result;
};

const getGameParameters = () => {
  const randomNumber = getRandom(0, 500);
  const questionGame = `Question: ${randomNumber}`;
  const correctAnswer = answersEvenOrNot(randomNumber);
  const gameParameters = [questionGame, correctAnswer];
  return gameParameters;
};

const isItNumberEven = () => {
  isVerifiesUserResponse(rulesGame, getGameParameters);
};
export default isItNumberEven;
