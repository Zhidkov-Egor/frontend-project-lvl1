import readlineSync from 'readline-sync';
import { getRandom, comparison, happyEnd } from '../index.js';

const checkPrime = (num) => {
  const moiety = num / 2;
  let result = 'yes';
  for (let i = 2; i <= moiety; i += 1) {
    if (num % i === 0) {
      result = 'no';
      return result;
    }
  }
  return result;
};

const gamePrime = (name, specification, rounds = 3) => {
  console.log(`${specification}`);
  for (let i = 0; i < rounds; i += 1) {
    const number = getRandom(0, 500);
    console.log(`Question: ${number}`);

    const answer = String(readlineSync.question('Your answer: '));
    const result = checkPrime(number);
    const comparisonResult = comparison(result, answer, name);
    if (!comparisonResult) {
      return;
    }
  }

  happyEnd(name);
};

export default gamePrime;
