# `json5-register`

`json5-register` hooks into Node's `require` function to load `.json` or `.json5` files that support comments.

```js
const { register } = require('json5-register');

register();
const a = require('/path/to/my-file.json');
const b = require('/path/to/my-file.jsonc');
```
