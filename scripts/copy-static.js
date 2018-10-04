const { resolve } = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const componentsPath = resolve(__dirname, '../components');

function findFiles(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw new Error(err);
    }

    files.forEach((file) => {
      const filePath = resolve(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findFiles(filePath, callback);
      } else {
        callback(filePath);
      }
    });
  });
}

findFiles(componentsPath, (pathname) => {
  if (pathname.endsWith('.scss') || pathname.endsWith('.svg') || pathname.endsWith('.json')) {
    const targetPathname = pathname.replace('components', 'build');
    const targetESPathname = pathname.replace('components', 'build/es');

    fse.copy(pathname, targetPathname);
    fse.copy(pathname, targetESPathname);
  }
});
