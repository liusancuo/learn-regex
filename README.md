# learn-regex

这个repo主要包含两部分内容:

- 正则表达式基础知识的学习
- 如何在JavaScript去使用

### 基础知识

### 元字符

#### 基本元字符

| 字符  | 描述                                     | 支持情况 |
| :---- | :--------------------------------------- | :------- |
| `.`   | 匹配任意单个字符，除了换行符             | `ES5`    |
| `[]`  | 匹配该字符集合中的一个字符               | `ES5`    |
| `-`   | 定义一个字符范围，出现在元字符[]中才有效 | `ES5`    |
| `[^]` | 排除该字符集合                           | `ES5`    |
| `\`   | 对下一个字符转义                         | `ES5`    |
| `|`   | 逻辑或操作符                             | `ES5`    |



### 修饰符

