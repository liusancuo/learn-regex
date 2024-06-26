const {
  supportedInJS: canUse,
  ESVersion: version,
  label
} = require('../common/constants');

const oneOrMore = {
  char: '+',
  desc_zh: '匹配前一个字符(子表达式)1次或多次，贪婪型(greedy)元字符',
  desc_en: 'Matches the preceding item 0 or more times.',
  supported: canUse.Yes,
  target: version.ES5
};

const zeroOrMore = {
  char: '*',
  desc_zh: '匹配前一个字符(子表达式)0次或多次，贪婪型(greedy)元字符',
  desc_en: 'Matches the preceding item 1 or more times.',
  supported: canUse.Yes,
  target: version.ES5
};

const zeroOrOne = {
  char: '?',
  desc_zh: '匹配前一个字符(子表达式)0次或一次',
  desc_en: 'Matches the preceding item 0 or 1 times.',
  supported: canUse.Yes,
  target: version.ES5
};

const fixedTimes = {
  char: '{n}',
  desc_zh: '匹配前一个字符(子表达式)n次',
  desc_en:
    'Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item.',
  supported: canUse.Yes,
  target: version.ES5
};

const atLeastTimes = {
  char: '{n,}',
  desc_zh: '匹配前一个字符(子表达式)至少n次',
  desc_en:
    'Where "n" is a positive integer, matches at least "n" occurrences of the preceding item.',
  supported: canUse.Yes,
  target: version.ES5
};

const rangeTimes = {
  char: '{n,m}',
  desc_zh: '匹配前一个字符(子表达式)至少n次并且至多m次',
  desc_en:
    'Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, matches at least "n" and at most "m" occurrences of the preceding item.',
  supported: canUse.Yes,
  target: version.ES5
};

const oneOrMoreNonGreedy = {
  char: '+?',
  desc_zh: '+ 的懒惰型(lazy)版本，匹配尽可能少的字符',
  desc_en:
    'The ? character after the quantifier + makes the quantifier "non-greedy"',
  supported: canUse.Yes,
  target: version.ES5
};

const zeroOrMoreNonGreedy = {
  char: '*?',
  desc_zh: '* 的懒惰型(lazy)版本，匹配尽可能少的字符',
  desc_en:
    'The ? character after the quantifier * makes the quantifier "non-greedy"',
  supported: canUse.Yes,
  target: version.ES5
};

const atLeastTimesNonGreedy = {
  char: '{n,}?',
  desc_zh: '{n,} 的懒惰型(lazy)版本，匹配尽可能少的字符',
  desc_en:
    'The ? character after the quantifier {n,} makes the quantifier "non-greedy".',
  supported: canUse.Yes,
  target: version.ES5
};

module.exports = {
  label: label.QUANTIFIER,
  characters: {
    oneOrMore,
    zeroOrMore,
    zeroOrOne,
    fixedTimes,
    atLeastTimes,
    rangeTimes,
    oneOrMoreNonGreedy,
    zeroOrMoreNonGreedy,
    atLeastTimesNonGreedy
  }
};
