import readlineSync from 'readline-sync';
import { getRandom, comparison, happyEnd } from '../index.js';

const gameEven = (name, specification, rounds = 3) => {
  console.log(`${specification}`);
  for (let i = 0; i < rounds; i += 1) {
    const number = getRandom(0, 100);
    console.log(`Question: ${number}`);

    const answer = String(readlineSync.question('Your answer: '));

    let result = '';
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    const comparisonResult = comparison(result, answer, name);
    if (!comparisonResult) {
      return;
    }
  }

  happyEnd(name);
};

export default gameEven;
