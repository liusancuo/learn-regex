const {
  supportedInJS: canUse,
  ESVersion: version,
  label
} = require('../common/constants');

const wordBoundary = {
  char: '\\b',
  desc_zh: '匹配单词边界(开头和结尾)',
  desc_en: 'Matches a word boundary.',
  supported: canUse.Yes,
  target: version.ES5
};

const nonWordBoundary = {
  char: '\\B',
  desc_zh: '匹配非单词边界',
  desc_en: 'Matches a non-word boundary.',
  supported: canUse.Yes,
  target: version.ES5
};

const beginning = {
  char: '^',
  desc_zh: '匹配字符串的开头',
  desc_en: 'Matches the beginning of input.',
  supported: canUse.Yes,
  target: version.ES5
};

const end = {
  char: '$',
  desc_zh: '匹配字符串的结尾',
  desc_en: 'Matches the end of input.',
  supported: canUse.Yes,
  target: version.ES5
};

const positiveLookahead = {
  char: '(?=)',
  desc_zh: '肯定式向前查看',
  desc_en: 'Positive lookahead assertion.',
  supported: canUse.Con,
  target: version.ES9
};

const negativeLookahead = {
  char: '(?!)',
  desc_zh: '否定式向前查看',
  desc_en: 'Negative lookahead assertion.',
  supported: canUse.Con,
  target: version.ES9
};

const positiveLookbehind = {
  char: '(?<=)',
  desc_zh: '肯定式向后查看',
  desc_en: 'Positive lookbehind assertion.',
  supported: canUse.Con,
  target: version.ES9
};

const negativeLookbehind = {
  char: '(?<!)',
  desc_zh: '否定式向后查看',
  desc_en: 'Negative lookbehind assertion.',
  supported: canUse.Con,
  target: version.ES9
};

module.exports = {
  label: label.ASSERTION,
  characters: {
    wordBoundary,
    nonWordBoundary,
    beginning,
    end,
    positiveLookahead,
    negativeLookahead,
    positiveLookbehind,
    negativeLookbehind
  }
};
