const rimraf = require('rimraf');

module.exports = function (fs, p) {
  return new Promise(async (resolve, reject) => {
    try {
      if (fs.rmrf) {
        await fs.rmrf(p, err => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
        return;
      }

      rimraf(p, fs, err => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
};
