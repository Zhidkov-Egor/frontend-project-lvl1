#!/usr/bin/env node

import { welcome } from '../src/lib.js';
import name from '../src/cli.js';
import gamePrime from '../src/games/game-prime.js';

welcome();
const enteredName = name();
const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gamePrime(enteredName, specification);
