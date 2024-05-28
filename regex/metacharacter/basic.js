const dot = {
  char: '.',
  desc_zh: '匹配任意单个字符，除了换行符',
  desc_en: 'Matches any single character except line terminators.'
};

const set = {
  char: '[]',
  desc_zh: '匹配该字符集合中的一个字符',
  desc_en: 'Matches any one of the enclosed characters.'
};

const hyphen = {
  char: '-',
  desc_zh: '定义一个字符范围，出现在元字符[]中才有效',
  desc_en: ''
};

const negatedSet = {
  char: '[^]',
  desc_zh: '排除该字符集合',
  desc_en:
    'A negated or complemented character class. That is, it matches anything that is not enclosed in the square brackets.'
};

const escaped = {
  char: '\\',
  desc_zh: '对下一个字符转义',
  desc_en:
    'Indicates that the following character should be treated specially, or "escaped".'
};

const pipe = {
  char: '|',
  desc_zh: '逻辑或操作符',
  desc_en:
    'Logical OR operator. Each component, separated by a pipe, is called an alternative.'
};

module.exports = {
  label: 'basic',
  characters: {
    dot,
    set,
    hyphen,
    negatedSet,
    escaped,
    pipe
  }
};
