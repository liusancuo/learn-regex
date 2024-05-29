const capturingGroup = {
  char: '()',
  desc_zh: '定义一个子表达式，也叫捕获组，可以记住匹配结果',
  desc_en:
    'Define a capturing group. A regular expression may have multiple capturing groups.'
};

const namedCapturingGroup = {
  char: '(?<Name>x)',
  desc_zh: '定义一个子表达式，也叫捕获组，可以记住匹配结果',
  desc_en:
    'Define a named capturing group. Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>.'
};

const backReference = {
  char: '\\n',
  desc_zh: '匹配第n个子表达式',
  desc_en:
    'A back reference to the last substring matching the n parenthetical in the regular expression.'
};

const namedBackReference = {
  char: '\\k<Name>',
  desc_zh: '匹配第n个已命名的子表达式',
  desc_en:
    'A back reference to the last substring matching the Named capture group specified by <Name>.'
};

module.exports = {
  label: 'group',
  characters: {
    capturingGroup,
    namedCapturingGroup,
    backReference,
    namedBackReference
  }
};
