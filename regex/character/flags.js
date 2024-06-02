const {
  supportedInJS: canUse,
  ESVersion: version,
  label
} = require('../common/constants');

const indices = {
  char: 'd',
  desc_zh: '生成匹配的字符的索引值',
  desc_en: 'Generate indices for substring matches.',
  supported: canUse.Con,
  target: version.ES13
};

const global = {
  char: 'g',
  desc_zh: '匹配该字符集合中的一个字符',
  desc_en: 'Looks for all matches rather than stopping after the first match.',
  supported: canUse.Yes,
  target: version.ES5
};

const ignoreCase = {
  char: 'i',
  desc_zh: '不区分字符的大小写',
  desc_en: 'When matching, casing differences are ignored.',
  supported: canUse.Yes,
  target: version.ES5
};

const multiline = {
  char: 'm',
  desc_zh: '对于要查找的字符串进行多行匹配',
  desc_en: 'Matches the pattern over multiple lines.',
  supported: canUse.Yes,
  target: version.ES5
};

const dotAll = {
  char: 's',
  desc_zh: '开启"dotAll"模式，让\'.\'可以匹配新行',
  desc_en: 'Allows . to match newlines.',
  supported: canUse.Con,
  target: version.ES9
};

// TODO: update the description
const unicode = {
  char: 'u',
  desc_zh: '',
  desc_en:
    'Enable full Unicode matching. Treat pattern as a sequence of Unicode code points.',
  supported: canUse.Yes,
  target: version.ES6
};

// TODO: update the description
const unicodeSet = {
  char: 'v',
  desc_zh: '',
  desc_en:
    'An upgrade to the u flag that enables set notation in character classes as well as properties of strings.',
  supported: canUse.Con,
  target: version.ES15
};

// TODO: update the description
const sticky = {
  char: 'y',
  desc_zh: '',
  desc_en:
    'Matches only from the index indicated by the lastIndex property of this regular expression in the target string.',
  supported: canUse.Yes,
  target: version.ES5
};

module.exports = {
  label: label.FLAGS,
  characters: {
    indices,
    global,
    ignoreCase,
    multiline,
    dotAll,
    unicode,
    unicodeSet,
    sticky
  }
};
