const {
  supportedInJS: canUse,
  ESVersion: version
} = require('../common/constants');

const backspace = {
  char: '[\\b]',
  desc_zh: '匹配退格字符(Backspace键)',
  desc_en: 'Matches a backspace.',
  supported: canUse.Yes,
  target: version.ES5
};

const formfeed = {
  char: '\\f',
  desc_zh: '匹配换页符',
  desc_en: 'Matches a form-feed.',
  supported: canUse.Yes,
  target: version.ES5
};

const linefeed = {
  char: '\\n',
  desc_zh: '匹配换行符',
  desc_en: 'Matches a linefeed.',
  supported: canUse.Yes,
  target: version.ES5
};

const carriageReturn = {
  char: '\\r',
  desc_zh: '匹配回车符',
  desc_en: 'Matches a carriage return.',
  supported: canUse.Yes,
  target: version.ES5
};

const horizontalTab = {
  char: '\\t',
  desc_zh: '匹配制表符',
  desc_en: 'Matches a horizontal tab.',
  supported: canUse.Yes,
  target: version.ES5
};

const verticalTab = {
  char: '\\v',
  desc_zh: '匹配垂直制表符',
  desc_en: 'Matches a vertical tab.',
  supported: canUse.Yes,
  target: version.ES5
};

const digit = {
  char: '\\d',
  desc_zh: '任何一个数字，等价于[0-9]',
  desc_en: 'Matches any digit (Arabic numeral). Equivalent to [0-9].',
  supported: canUse.Yes,
  target: version.ES5
};

const nonDigit = {
  char: '\\D',
  desc_zh: '任何一个非数字，等价于[^0-9]',
  desc_en: 'Matches any character that is not a digit. Equivalent to [^0-9].',
  supported: canUse.Yes,
  target: version.ES5
};

const alphanumeric_ = {
  char: '\\w',
  desc_zh: '任何一个字母数字或下划线，等价于[a-zA-Z0-9_]',
  desc_en:
    'Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]',
  supported: canUse.Yes,
  target: version.ES5
};

const nonAlphanumeric_ = {
  char: '\\W',
  desc_zh: '任何一个非字母数字或下划线，等价于[^a-zA-Z0-9_]',
  desc_en:
    'Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_].',
  supported: canUse.Yes,
  target: version.ES5
};

const white = {
  char: '\\s',
  desc_zh: '匹配任意空白字符',
  desc_en:
    'Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.',
  supported: canUse.Yes,
  target: version.ES5
};

const nonWhite = {
  char: '\\S',
  desc_zh: '匹配任何非空白字符',
  desc_en: 'Matches a single character other than white space.',
  supported: canUse.Yes,
  target: version.ES5
};

const hex = {
  char: '\\xhh',
  desc_zh: '以此为前缀，匹配一个十六进制数字',
  desc_en: 'Matches the character with the code hh (two hexadecimal digits).',
  supported: canUse.Yes,
  target: version.ES5
};

const octal = {
  char: '\\0',
  desc_zh: '以此为前缀，匹配一个八进制数字',
  desc_en: 'Matches an octal number.',
  supported: canUse.Yes,
  target: version.ES5
};

module.exports = {
  label: 'special',
  characters: {
    backspace,
    formfeed,
    linefeed,
    carriageReturn,
    horizontalTab,
    verticalTab,
    digit,
    nonDigit,
    alphanumeric_,
    nonAlphanumeric_,
    white,
    nonWhite,
    hex,
    octal
  }
};
