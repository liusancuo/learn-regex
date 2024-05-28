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

module.exports = {
  label: 'assertion',
  characters: {
    wordBoundary,
    nonWordBoundary,
    beginning,
    end
  }
};
