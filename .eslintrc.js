/*
 * This file configures eslint, which defines javascript code style.
 */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'jest'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-restricted-imports': [
      'error',
      {
        'name': '@material-ui/core',
        'message': 'Please import only the necessary components to improve tree-shaking.'
      },
      {
        'name': '@material-ui/icons',
        'message': 'Please import only the necessary icons to improve tree-shaking.'
      },
    ]
  }
};
