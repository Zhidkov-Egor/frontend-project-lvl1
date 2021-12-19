#!/usr/bin/env node

import { welcome } from '../src/index.js';
import name from '../src/cli.js';
import gameCalc from '../src/games/game-calc.js';

welcome();
const enteredName = name();
const specification = 'What is the result of the expression?';
gameCalc(enteredName, specification);
