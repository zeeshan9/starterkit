module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended', // Ensures Prettier and ESLint are integrated
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'Prettier ESLint', // Runs Prettier as an ESLint rule
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'comma-dangle': 'off',
    semi: 1, // TurnfalseESLint's semicolon rule
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
        semi: true,
        useTabs: false,
      },
    ],
  },
};
