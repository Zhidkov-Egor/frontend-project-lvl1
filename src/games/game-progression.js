import readlineSync from 'readline-sync';
import { getRandom, comparison, happyEnd } from '../lib.js';

const arrayOfNumbers = (first, interval, lengthArr) => {
  const arrNumber = [];
  let number = first;
  for (let i = 0; i <= lengthArr; i += 1) {
    arrNumber.push(number);
    number += interval;
  }
  return arrNumber;
};

const gameProgression = (name, specification, rounds = 3) => {
  console.log(`${specification}`);
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandom(0, 15);
    const interval = getRandom(0, 10);
    const lengthArr = 10;
    const secretNum = getRandom(0, 9);
    const numberArr = arrayOfNumbers(firstNumber, interval, lengthArr);
    const result = numberArr[secretNum];
    numberArr[secretNum] = '..';
    const numberArrString = numberArr.join(' ');
    console.log(`Question: ${numberArrString}`);

    let answer = String(readlineSync.question('Your answer: '));
    answer = Number(answer);

    const comparisonResult = comparison(result, answer, name);
    if (!comparisonResult) {
      return;
    }
  }

  happyEnd(name);
};

export default gameProgression;
