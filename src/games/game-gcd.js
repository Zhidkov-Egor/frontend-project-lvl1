import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getLargestDivisor = (first, second, divisor = first) => {
  if (first % divisor === 0 && second % divisor === 0) {
    return divisor;
  }
  return getLargestDivisor(first, second, divisor - 1);
};

const getGameParameters = () => {
  const randomNumberOne = getRandom(1, 100);
  const randomNumberTwo = getRandom(1, 100);
  const questionGame = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(getLargestDivisor(randomNumberOne, randomNumberTwo));
  return [questionGame, correctAnswer];
};

const runGreatestCommonDivisorGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runGreatestCommonDivisorGame;
