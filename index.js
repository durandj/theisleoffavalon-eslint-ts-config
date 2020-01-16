module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
    ].concat([
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/strict',
    ].map(require.resolve)),
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    rules: {},
    overrides: [
        {
            files: [ '*.js' ],
            parser: 'babel-eslint',
            parserOptions: {},
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: [ '*.ts', '*.tsx' ],
            rules: {
                'import/default': 'off',
                'import/named': 'off',
            },
        },
    ],
};
