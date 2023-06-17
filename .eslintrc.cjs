module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
};
