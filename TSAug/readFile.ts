
import { readFileSync } from 'fs';

const content = readFileSync('sample.txt','utf-8');
console.log(content);