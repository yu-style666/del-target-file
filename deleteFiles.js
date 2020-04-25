const fs = require("fs");
const rmdir = require("./rmdir");

const deleteFiles = (allFilePath) => {
  allFilePath.forEach((filePath) => {
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      rmdir(filePath, () => {
        console.log("文件夹里面的文件删除完毕");
      });
    } else {
      fs.unlinkSync(filePath);
    }
  });
};

module.exports = deleteFiles;
