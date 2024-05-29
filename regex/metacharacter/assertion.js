const wordBoundary = {
  char: '\\b',
  desc_zh: '匹配单词边界(开头和结尾)',
  desc_en: 'Matches a word boundary.'
};

const nonWordBoundary = {
  char: '\\B',
  desc_zh: '匹配非单词边界',
  desc_en: 'Matches a non-word boundary.'
};

const beginning = {
  char: '^',
  desc_zh: '匹配字符串的开头',
  desc_en: 'Matches the beginning of input.'
};

const end = {
  char: '^',
  desc_zh: '匹配字符串的开头',
  desc_en: 'Matches the end of input.'
};

const positiveLookahead = {
  char: '(?=)',
  desc_zh: '肯定式向前查看',
  desc_en: 'Positive lookahead assertion.'
};

const negativeLookahead = {
  char: '(?!)',
  desc_zh: '否定式向前查看',
  desc_en: 'Negative lookahead assertion.'
};

const positiveLookbehind = {
  char: '(?<=)',
  desc_zh: '肯定式向后查看',
  desc_en: 'Positive lookbehind assertion.'
};

const negativeLookbehind = {
  char: '(?<!)',
  desc_zh: '否定式向后查看',
  desc_en: 'Negative lookbehind assertion.'
};

module.exports = {
  label: 'assertion',
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
