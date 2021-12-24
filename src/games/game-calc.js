import getRandom from '../lib.js';
import runGame from '../index.js';

const gameQuestion = 'What is the result of the expression?';

const getGameParameters = () => {
  const randomOperandOne = getRandom(0, 100);
  const randomOperandTwo = getRandom(0, 100);
  const operation = ['+', '-', '*'];
  const randomOperation = operation[getRandom(0, operation.length)];
  const questionGame = `${randomOperandOne} ${randomOperation} ${randomOperandTwo}`;

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
  return [questionGame, correctAnswer];
};

const runCalcGame = () => {
  runGame(gameQuestion, getGameParameters);
};
export default runCalcGame;
