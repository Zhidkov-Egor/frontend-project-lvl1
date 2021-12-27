import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const moiety = num / 2;
  for (let i = 2; i <= moiety; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameParameters = () => {
  const randomNumber = getRandom(0, 500);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runPrimeNumberGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runPrimeNumberGame;
