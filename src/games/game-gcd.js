import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getDivisor = (first, second) => (second === 0 ? first : getDivisor(second, first % second));

const getGameParameters = () => {
  const randomNumberOne = getRandom(1, 100);
  const randomNumberTwo = getRandom(1, 100);
  const questionGame = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = String(getDivisor(randomNumberOne, randomNumberTwo));
  return [questionGame, correctAnswer];
};

const runGreatestCommonDivisorGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runGreatestCommonDivisorGame;
