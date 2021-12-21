import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'What is the result of the expression?';

const getGameParameters = () => {
  const numberOne = getRandom(0, 100);
  const numberTwo = getRandom(0, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[getRandom(0, operation.length)];
  const questionGame = `Question: ${numberOne} ${randomOperation} ${numberTwo}`;

  let correctAnswer = 0;
  switch (randomOperation) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    default:
      break;
  }
  correctAnswer = String(correctAnswer);

  const gameParameters = [questionGame, correctAnswer];
  return gameParameters;
};

const calculatorGame = () => {
  isVerifiesUserResponse(rulesGame, getGameParameters);
};
export default calculatorGame;
