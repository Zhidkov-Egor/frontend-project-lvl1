import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameGreeting = 'Welcome to the Brain Games!';
const numberOfRounds = 3;
const congratulateUser = (userName) => console.log(`Congratulations, ${userName}!`);

export const isVerifiesUserResponse = (rulesGame, gameParameters) => {
  console.log(`${gameGreeting}`);
  const userName = getUserName();
  console.log(`${rulesGame}`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [questionGame, correctAnswer] = gameParameters();
    console.log(questionGame);
    const userAnswer = String(readlineSync.question('Your answer: '));
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  congratulateUser(userName);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
