const { addHook } = require('pirates');
const JSON5 = require('json5');

const DEFAULT_EXTENSIONS = ['.json5']

function compile(sourcecode) {
    if (sourcecode.startsWith('module.exports')) return sourcecode;
    const value = JSON5.parse(sourcecode);
    return `module.exports = ${JSON.stringify(value)}`;
}

function register() {
    addHook((code) => compile(code), {
        exts: DEFAULT_EXTENSIONS,
    })
}

module.exports.register = register;
