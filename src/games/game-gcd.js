import readlineSync from 'readline-sync';
import { getRandom, comparison, happyEnd } from '../index.js';

const largestDivisor = (numOne, numTwo) => {
  let num;
  if (numOne > numTwo) {
    num = numTwo;
  } else {
    num = numOne;
  }
  let result = 1;
  for (let i = 2; i <= num; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      result = i;
    }
  }

  return result;
};

const gameGcd = (name, specification, rounds = 3) => {
  console.log(`${specification}`);
  for (let i = 0; i < rounds; i += 1) {
    const numberOne = getRandom(0, 100);
    const numberTwo = getRandom(0, 100);
    console.log(`Question: ${numberOne} ${numberTwo}`);

    let answer = String(readlineSync.question('Your answer: '));
    answer = Number(answer);
    const result = largestDivisor(numberOne, numberTwo);
    const comparisonResult = comparison(result, answer, name);
    if (!comparisonResult) {
      return;
    }
  }

  happyEnd(name);
};

export default gameGcd;
