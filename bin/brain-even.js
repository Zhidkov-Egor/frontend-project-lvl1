#!/usr/bin/env node

import { name, welcome } from '../src/index.js';
import gameEven from '../src/games/game-even.js';

welcome();
const enteredName = name();
const specification = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEven(enteredName, specification);
