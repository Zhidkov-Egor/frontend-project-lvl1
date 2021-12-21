#!/usr/bin/env node

import { welcome } from '../src/lib.js';
import name from '../src/cli.js';
import gameProgression from '../src/games/game-progression.js';

welcome();
const enteredName = name();
const specification = 'What number is missing in the progression?';
gameProgression(enteredName, specification);
