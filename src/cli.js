import readlineSync from 'readline-sync';

const helloName = () => {
  let name = String(readlineSync.question('May I have your name? '));
  if (name.trim() === '') {
    name = 'Unknown';
  }
  console.log(`Hello, ${name}!`);
  return name;
};

export default helloName;
