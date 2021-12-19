#!/usr/bin/env node

import { welcome } from '../src/index.js';
import name from '../src/cli.js';
import gameGcd from '../src/games/game-gcd.js';

welcome();
const enteredName = name();
const specification = 'Find the greatest common divisor of given numbers.';
gameGcd(enteredName, specification);
