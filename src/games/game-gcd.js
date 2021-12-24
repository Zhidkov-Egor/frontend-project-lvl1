import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

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
  const questionGame = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = getLargestDivisor(randomNumberOne, randomNumberTwo);
  return [questionGame, correctAnswer];
};

const runGreatestCommonDivisorGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runGreatestCommonDivisorGame;
