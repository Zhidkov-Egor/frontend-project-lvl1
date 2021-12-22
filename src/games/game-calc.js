import { isVerifiesUserResponse, getRandom } from '../lib.js';

const rulesGame = 'What is the result of the expression?';

const getGameParameters = () => {
  const randomOperandOne = getRandom(0, 100);
  const randomOperandTwo = getRandom(0, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[getRandom(0, operation.length)];
  const questionGame = `Question: ${randomOperandOne} ${randomOperation} ${randomOperandTwo}`;

  let correctAnswer = 0;
  switch (randomOperation) {
    case '+':
      correctAnswer = randomOperandOne + randomOperandTwo;
      break;
    case '-':
      correctAnswer = randomOperandOne - randomOperandTwo;
      break;
    case '*':
      correctAnswer = randomOperandOne * randomOperandTwo;
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
