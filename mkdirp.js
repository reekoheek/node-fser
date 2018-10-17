const path = require('path');
const exists = require('./exists');

module.exports = async function mkdirp (fs, p, mode) {
  if (p.charAt(0) !== '/') {
    throw new Error('Relative path: ' + p);
  }

  if (p === '/') {
    return;
  }

  if (await exists(fs, p)) {
    return;
  }

  return new Promise(async (resolve, reject) => {
    let ps = path.normalize(p).split('/');
    try {
      let parentPath = ps.slice(0, -1).join('/') || '/';
      await mkdirp(fs, parentPath, mode);
      await new Promise((resolve, reject) => {
        fs.mkdir(p, mode, err => {
          if (err) {
            return reject(err);
          }

          resolve();
        });
      });
      resolve();
    } catch (err) {
      if (err.code === 'EEXIST') {
        return resolve();
      }

      return reject(err);
    }
  });
};
