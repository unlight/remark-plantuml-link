module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    extends: ['eslint:recommended', 'plugin:unicorn/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['unicorn', 'only-warn'],
    rules: {
        // core
        'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
        quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        semi: [1, 'always'],
        'max-lines': [1, { max: 200 }],
        'max-params': [1, { max: 5 }],
        'no-unneeded-ternary': [1],
        // unicorn
        'unicorn/prefer-spread': 0,
        'unicorn/catch-error-name': 0,
        'unicorn/prevent-abbreviations': [
            1,
            {
                replacements: {
                    args: false,
                    err: false,
                    prod: false,
                    ref: false,
                    params: false,
                },
            },
        ],
    },
    overrides: [
        {
            files: ['*.spec.ts', '**/testing/**/*.ts'],
            rules: {
                'consistent-return': 0,
                'max-lines': 0,
            },
        },
    ],
};
