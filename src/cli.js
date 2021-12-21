import readlineSync from 'readline-sync';

const getUserName = () => {
  let userName = String(readlineSync.question('May I have your name? '));
  if (userName.trim() === '') {
    userName = 'Unknown';
  }
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default getUserName;
