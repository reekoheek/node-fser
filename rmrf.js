const rimraf = require('rimraf');

module.exports = function (fs, p) {
  return new Promise((resolve, reject) => {
    rimraf(p, fs, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
};
