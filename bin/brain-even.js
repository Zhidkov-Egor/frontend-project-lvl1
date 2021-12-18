#!/usr/bin/env node

import helloName from '../src/cli.js';
import evenNumber from "../src/evenNumber.js";

console.log('Welcome to the Brain Games!');

const name = helloName();

evenNumber(name);