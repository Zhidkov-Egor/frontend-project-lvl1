#!/usr/bin/env node

import { name, welcome } from '../src/index.js';
import gameCalc from '../src/games/game-calc.js';

welcome();
const enteredName = name();
const specification = 'What is the result of the expression?';
gameCalc(enteredName, specification);
