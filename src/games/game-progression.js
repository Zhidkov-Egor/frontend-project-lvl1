import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'What number is missing in the progression?';

const getArithmeticProgression = (firstNumber, interval, lengthProgression) => {
  const arithmeticProgression = [];
  let numberInArray = firstNumber;
  for (let i = 0; i <= lengthProgression; i += 1) {
    arithmeticProgression.push(numberInArray);
    numberInArray += interval;
  }
  return arithmeticProgression;
};

const getGameParameters = () => {
  const firstNumber = getRandom(0, 15);
  const interval = getRandom(0, 10);
  const lengthProgression = 10;
  const indexHiddenNumber = getRandom(0, 9);
  const arithmeticProgression = getArithmeticProgression(firstNumber, interval, lengthProgression);
  const correctAnswer = String(arithmeticProgression[indexHiddenNumber]);
  arithmeticProgression[indexHiddenNumber] = '..';
  const arithmeticProgressionString = arithmeticProgression.join(' ');
  const questionGame = `Question: ${arithmeticProgressionString}`;

  const gameParameters = [questionGame, correctAnswer];
  return gameParameters;
};

const guessTheNumberInArithmeticProgression = () => {
  isVerifiesUserResponse(rulesGame, getGameParameters);
};
export default guessTheNumberInArithmeticProgression;
