# fser

Wrapper to work with multiple adapter of Node.js filesystem.

`fser` functions will return `Promise`.

Sometimes you need `memory-fs` to substitute native Node.js `fs` in test
environment.

## How to use

```js
const { mkdirp, exists, writeFile, readdir, rmrf } = require('fser');

const fs = require('fs');
// or
// let MemoryFs = require('memory-fs');
// let data = {};
// const fs = new MemoryFs(data);

await mkdirp(fs, '/to/directory');
let isDirExists = await exists(fs, '/to/directory');

await writeFile(fs, '/to/directory/some-file.txt', 'blablabla');
let isFileExists = await exists(fs, '/to/directory/some-file.txt');

let files = await readdir(fs, '/to/directory');

await rmrf(fs, '/to/directory');
```
