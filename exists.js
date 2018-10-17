module.exports = function exists (fs, p) {
  return new Promise((resolve, reject) => {
    if (fs.access) {
      fs.access(p, err => {
        resolve(!Boolean(err));
      });
    } else {
      fs.stat(p, (err, stats) => {
        resolve(!Boolean(err));
      });
    }
  });
};
