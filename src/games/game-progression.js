import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';
const progressionLength = 10;

const getArithmeticProgression = (firstNumber, interval) => {
  const arithmeticProgression = [];
  let numberInArray = firstNumber;
  for (let i = 0; i <= progressionLength; i += 1) {
    arithmeticProgression.push(numberInArray);
    numberInArray += interval;
  }
  return arithmeticProgression;
};

const getGameParameters = () => {
  const firstNumber = getRandom(0, 15);
  const interval = getRandom(0, 10);
  const hiddenNumberIndex = getRandom(0, 9);
  const arithmeticProgression = getArithmeticProgression(firstNumber, interval);
  const correctAnswer = String(arithmeticProgression[hiddenNumberIndex]);
  arithmeticProgression[hiddenNumberIndex] = '..';
  const arithmeticProgressionString = arithmeticProgression.join(' ');

  return [arithmeticProgressionString, correctAnswer];
};

const runGuessNumberGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runGuessNumberGame;
