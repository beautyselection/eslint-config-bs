module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['./rules/import.js']
    .map(require.resolve)
    .concat([
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ]),
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'always',
        children: 'ignore',
      },
    ],
    'react/require-default-props': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
  },
  ignorePatterns: ['*.js'],
};
