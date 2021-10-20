const env = {
  amd: true,
  browser: true,
  commonjs: true,
  es6: true,
  node: true,
};

const extends_ = [
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/typescript',
  'plugin:prettier/recommended',
  'plugin:react/recommended',
];

const plugins = [
  '@typescript-eslint/eslint-plugin',
  'react',
  'react-hooks',
  'import',
];

const rules = {
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-unused-vars': 2,
  '@typescript-eslint/no-use-before-define': ['error'],
  '@typescript-eslint/no-var-requires': 0,
  'import/no-unresolved': [2, { commonjs: true, amd: true }],
  'jsx-quotes': [2, 'prefer-double'],
  'max-len': [1, 120, 2],
  'no-console': 0,
  'no-shadow': 2,
  'react-hooks/exhaustive-deps': 2,
  'react-hooks/rules-of-hooks': 2,
  'react/display-name': 0,
  'react/no-this-in-sfc': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unused-prop-types': 2,
  'react/prop-types': 2,
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
      singleQuote: true,
    },
  ],
};

const settings = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['node_modules', 'src/'],
    },
    typescript: {
      alwaysTryTypes: true,
    },
  },
};

module.exports = {
  env,
  extends: extends_,
  plugins,
  parser: '@typescript-eslint/parser',
  rules,
  settings,
};
