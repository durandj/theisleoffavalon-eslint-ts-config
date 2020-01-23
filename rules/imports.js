module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: [
        'import',
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.mjs',
                    '.js',
                    '.json',
                ],
            },
        },
        'import/extensions': [
            '.js',
            '.mjs',
            '.jsx',
        ],
        'import/core-modules': [
        ],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },

    rules: {
        // Static analysis:

        // Ensure imports point to files/modules that can be resolved.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': [
            'error',
            {
                commonjs: true,
                caseSensitive: true,
            },
        ],

        // Ensure named imports coupled with named exports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
        'import/named': 'error',

        // Ensure default import coupled with default export.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        'import/default': 'error',

        // Ensures that values that are implicitly imported exist.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': 'error',


        // Helpful warnings:

        // Disallow invalid exports, e.g. multiple defaults.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 'error',

        // Do not allow a default import name to match a named export.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 'error',

        // Warn on accessing default export property names that are
        // also named exports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 'error',

        // Disallow use of jsdoc-marked-deprecated imports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        'import/no-deprecated': 'error',

        // Forbid the use of extraneous packages.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test/**', // tape, common npm pattern
                    'tests/**', // also common npm pattern
                    'spec/**', // mocha, rspec-like pattern
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    'test.{js,jsx}', // repos with a single test file
                    'test-*.{js,jsx}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.js', // jest config
                    '**/jest.setup.js', // jest setup
                    '**/vue.config.js', // vue-cli config
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/rollup.config.js', // rollup config
                    '**/rollup.config.*.js', // rollup config
                    '**/gulpfile.js', // gulp config
                    '**/gulpfile.*.js', // gulp config
                    '**/Gruntfile{,.js}', // grunt config
                    '**/protractor.conf.js', // protractor config
                    '**/protractor.conf.*.js', // protractor config
                    '**/karma.conf.js', // karma config
                ],
                optionalDependencies: false,
            },
        ],

        // Forbid mutable exports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        'import/no-mutable-exports': 'error',


        // Module systems:

        // Disallow require().
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        'import/no-commonjs': 'off',

        // Disallow AMD require/define.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        'import/no-amd': 'error',

        // No Node.js builtin modules.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 'off',


        // Style guide:

        // Disallow non-import statements appearing before import
        // statements.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        'import/first': 'error',

        // Disallow duplicate imports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'error',

        // Disallow namespace imports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        'import/no-namespace': 'off',

        // Ensure consistent use of file extension within the import
        // path.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        // Ensure absolute imports are above relative imports and that
        // unassigned imports are ignored.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [
                    [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],

        // Require a newline after the last import/require in a group.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        'import/newline-after-import': 'error',

        // Require modules with a single export to use a default
        // export.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'error',

        // Restrict which files can be imported in a given folder.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        'import/no-restricted-paths': 'off',

        // Forbid modules to have too many dependencies.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        'import/max-dependencies': [
            'off',
            {
                max: 10,
            },
        ],

        // Forbid import of modules using absolute paths.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        'import/no-absolute-path': 'error',

        // Forbid require() calls with expressions.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': 'error',

        // Prevent importing the submodules of other modules/
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        'import/no-internal-modules': [
            'off',
            {
                allow: [],
            },
        ],

        // Warn if a module could be mistakenly parsed as a script by
        // a consumer leveraging Unambiguous JavaScript Grammar.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        'import/unambiguous': 'off',

        // Forbid Webpack loader syntax in imports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import/no-webpack-loader-syntax': 'error',

        // Allow unassigned imports. This is useful when you need to
        // import something for its side-effects.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        'import/no-unassigned-import': 'off',

        // Prevent importing the default as if it were named.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        'import/no-named-default': 'error',

        // Reports if a module's default export is unnamed.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': [
            'off',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowLiteral: false,
                allowObject: false,
            },
        ],

        // This rule enforces that all exports are declared at the
        // bottom of the file.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
        'import/exports-last': 'off',

        // Reports when named exports are not grouped together in a
        // single export declaration or when multiple assignments to
        // CommonJS module.exports or exports object are present in a
        // single file.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
        'import/group-exports': 'off',

        // Forbid default exports. This is a terrible rule, do not use
        // it.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
        'import/no-default-export': 'off',

        // Prohibit named exports. This is a terrible rule, do not use
        // it.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
        'import/no-named-export': 'off',

        // Forbid a module from importing itself.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
        'import/no-self-import': 'error',

        // Forbid cyclical dependencies between modules.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
        'import/no-cycle': [
            'error',
            {
                maxDepth: Infinity,
            },
        ],

        // Ensures that there are no useless path segments.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
        'import/no-useless-path-segments': [
            'error',
            {
                commonjs: true,
            },
        ],

        // Dynamic imports require a leading comment with a
        // webpackChunkName.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
        'import/dynamic-import-chunkname': [
            'off',
            {
                importFunctions: [],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            },
        ],

        // Use this rule to prevent imports to folders in relative
        // parent paths.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        'import/no-relative-parent-imports': 'error',

        // Reports modules without any exports, or with unused
        // exports.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
        'import/no-unused-modules': [
            'off',
            {
                ignoreExports: [],
                missingExports: true,
                unusedExports: true,
            },
        ],
    },
};
