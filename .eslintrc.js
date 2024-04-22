module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended' // Ensures Prettier and ESLint are integrated
  ],
  rules: {
    semi: 0, // TurnfalseESLint's semicolon rule
    'prettier/prettier': [`error`, {
      arrowParens: 'avoid',
      bracketSameLine: false,
      bracketSpacing: false,
      singleQuote: true,
      trailingComma: 'none',
      semi: false
    }]
  },
}
