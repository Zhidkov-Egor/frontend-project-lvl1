import readlineSync from 'readline-sync';
import { getRandom, comparison, happyEnd } from '../index.js';

const gameCalc = (name, specification, rounds = 3) => {
  console.log(`${specification}`);
  for (let i = 0; i < rounds; i += 1) {
    const numberOne = getRandom(0, 100);
    const numberTwo = getRandom(0, 100);
    const operation = ['+', '-', '*'];
    const randomOperation = operation[getRandom(0, operation.length)];
    console.log(`Question: ${numberOne} ${randomOperation} ${numberTwo}`);

    let answer = String(readlineSync.question('Your answer: '));
    answer = Number(answer);
    let result = 0;
    switch (randomOperation) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      default:
        break;
    }
    const comparisonResult = comparison(result, answer, name);
    if (!comparisonResult) {
      return;
    }
  }

  happyEnd(name);
};

export default gameCalc;
