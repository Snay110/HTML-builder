const fs = require('fs');

fs.readFile(
  'C:\\Users\\Laptopchik\\Desktop\\Builder\\HTML-builder\\01-read-file\\text.txt',
  'utf-8',
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  },
);
