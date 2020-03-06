const ghPages = require('gh-pages');

function publish(path, branch) {
  return new Promise((resolve, reject) => {
    ghPages.publish(path, { branch, history: false }, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

module.exports = publish;