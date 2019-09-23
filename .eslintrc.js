module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'plugin:jest/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'jest',
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
        'no-unused-vars': ["off"],
    },
};
