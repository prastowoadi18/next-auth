/* eslint-disable quotes */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
