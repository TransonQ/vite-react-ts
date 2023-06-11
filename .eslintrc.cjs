/* eslint-disable no-undef */
module.exports = {
  ignorePatterns: [],
  plugins: ['react-refresh'],
  parser: '@typescript-eslint/parser',
  env: { es2020: true, browser: true },
  parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 完美主义者 (配合 source.fixAll.eslint:true 自动修复): https://github.com/azat-io/eslint-plugin-perfectionist
    'plugin:perfectionist/recommended-natural',
  ],
  rules: {
    'no-var': 'error',
    'perfectionist/sort-imports': 'warn',
    'react-refresh/only-export-components': 'warn',
    'perfectionist/sort-objects': [
      'warn',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-named-imports': [
      'warn',
      {
        order: 'asc',
        type: 'line-length',
      },
    ],
    'perfectionist/sort-array-includes': [
      'warn',
      {
        order: 'asc',
        'spread-last': true,
        type: 'line-length',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        order: 'asc',
        callback: 'last', // jsx 属性中回调的位置
        multiline: 'last', // jsx 属性中多行传参的位置
        shorthand: 'first',
        type: 'line-length', // jsx 属性排序方式
        'always-on-top': ['id', 'key', 'path', 'element'],
      },
    ],
  },
}
