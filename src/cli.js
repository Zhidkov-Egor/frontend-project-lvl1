import readlineSync from 'readline-sync';

const runNameGame = () => {
  console.log('Welcome to the Brain Games!');
  let userName = String(readlineSync.question('May I have your name? '));
  if (userName.trim() === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);
};

export default runNameGame;
