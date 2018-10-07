module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': 2,
    'no-console': 0
  }
}
