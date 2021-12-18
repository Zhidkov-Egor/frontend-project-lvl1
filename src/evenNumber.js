import readlineSync from 'readline-sync';

const evenNumber = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = String(readlineSync.question('Your answer: '));
    let result = '';

    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenNumber;
