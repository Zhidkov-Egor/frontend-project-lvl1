#!/usr/bin/env node

import { welcome } from '../src/lib.js';
import name from '../src/cli.js';
import gameEven from '../src/games/game-even.js';

welcome();
const enteredName = name();
const specification = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEven(enteredName, specification);
