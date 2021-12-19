export const comparison = (result, answer, enteredName) => {
  if (result !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
    console.log(`Let's try again, ${enteredName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const happyEnd = (enteredName) => console.log(`Congratulations, ${enteredName}!`);

export const welcome = (text = 'Welcome to the Brain Games!') => console.log(`${text}`);
