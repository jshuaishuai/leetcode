/*
 * @Descripttion:
 * @Author: Jason
 * @LastEditTime: 2020-07-05 16:53:45
 */
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', "plugin:jest/recommended"],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},

    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        _: false,
    },
};
