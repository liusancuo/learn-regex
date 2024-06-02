const fs = require('fs');
const path = require('path');
const { label } = require('../regex/common/constants');

const filesDir = path.join(process.cwd(), 'regex/character');
const files = fs.readdirSync(filesDir);

let flags = 0;
let characters = 0;

for (let file of files) {
  const module = require(path.join(filesDir, file));
  const keys = Object.keys(module.characters);

  if (module.label === label.FLAGS) {
    flags = keys.length;
  }

  characters += keys.length;
}

console.log('>>> output <<<');
console.log('flags:', flags);
console.log('characters:', characters);
