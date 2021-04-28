const path = require('path');
const tsconfig = require('./tsconfig.json');

const tscpaths = Object.keys(tsconfig.compilerOptions.paths || {}).map((p) =>
  p.split('/')[0].trim()
);

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx']
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*.tsx', 'src/**/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^@?\\w'],
              ['^'],
              [`^(${tscpaths.join('|')})`],
              ['^\\.']
            ]
          }
        ]
      }
    }
  ]
};
