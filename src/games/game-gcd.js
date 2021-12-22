import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const getLargestDivisor = (first, second) => {
  const number = (first > second) ? second : first;
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    if (first % i === 0 && second % i === 0) {
      result = i;
    }
  }
  return String(result);
};

const getGameParameters = () => {
  const randomNumberOne = getRandom(1, 100);
  const randomNumberTwo = getRandom(1, 100);
  const questionGame = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = getLargestDivisor(randomNumberOne, randomNumberTwo);
  const gameParameters = [questionGame, correctAnswer];
  return gameParameters;
};

const isLargestCommonDenominator = () => {
  isVerifiesUserResponse(rulesGame, getGameParameters);
};
export default isLargestCommonDenominator;
