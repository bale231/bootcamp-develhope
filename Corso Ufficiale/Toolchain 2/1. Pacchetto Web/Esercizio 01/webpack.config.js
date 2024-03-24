const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const options = {};

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new ESLintPlugin(options)],
};