module.exports = function (fs, p, data) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(p, data, err => {
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
