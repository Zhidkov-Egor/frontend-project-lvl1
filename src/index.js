import readlineSync from 'readline-sync';

const runGame = (rulesGame, gameParameters) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  let userName = String(readlineSync.question('May I have your name? '));
  if (userName.trim() === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);
  console.log(`${rulesGame}`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [questionGame, correctAnswer] = gameParameters();
    console.log(`Question: ${questionGame}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
