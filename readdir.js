module.exports = function readdir (fs, p) {
  return new Promise((resolve, reject) => {
    try {
      fs.readdir(p, (err, files) => {
        if (err) {
          return reject(err);
        }

        resolve(files);
      });
    } catch (err) {
      reject(err);
    }
  });
};
