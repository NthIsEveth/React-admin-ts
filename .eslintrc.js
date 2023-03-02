module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  exclude: [
    './postcss.config.js',
    './eslintrc.js'
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    eqeqeq: ['error', 'always'],
    'prefer-destructuring': 2,
    'no-duplicate-imports': 2,
    'no-useless-rename': 2,
    'no-array-constructor': 2,
    'prefer-object-spread': 'error',
    'max-len': ['error', { code: 150 }],
    'quote-props': ['error', 'as-needed'],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true }],
    'space-infix-ops': 'error',
    'eol-last': ["error", "always"],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-whitespace-before-property': 'error',
  }
};
