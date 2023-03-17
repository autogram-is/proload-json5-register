# `json5-register`

`json5-register` hooks into Node's `require` function to load `.json5` files.

```js
const { register } = require('json5-register');

register();
const b = require('/path/to/my-file.json5');
```
