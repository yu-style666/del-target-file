const fs = require("fs");
const path = require("path");
const deleteFiles = require("./deleteFiles");

const CONFIG = {
  filePath: path.resolve("./"),
  suffix: " copy",
};

function readWillDelFileList(filePath, suffix, willDelFilesPath = []) {
  const files = fs.readdirSync(filePath);
  const reg = new RegExp(`^.*${suffix}$`);

  files.forEach((item) => {
    var fullPath = path.join(filePath, item);
    const stat = fs.statSync(fullPath);

    // 如果是目录，递归读取文件
    if (stat.isDirectory()) {
      //  匹配到指定后缀
      if (reg.test(fullPath)) {
        willDelFilesPath.push(fullPath);
        return;
      }

      readWillDelFileList(path.join(filePath, item), suffix, willDelFilesPath);
    } else {
      // 如果文件 匹配到指定后缀
      let basename = path.basename(fullPath);
      let extname = path.extname(fullPath);
      let resultName = basename;

      // 如果有拓展名，获取到不带拓展名的文件名
      if (extname) {
        resultName = basename.substring(0, basename.indexOf(extname));
      }

      //  匹配到指定后缀
      if (reg.test(resultName)) {
        willDelFilesPath.push(fullPath);
      }
    }
  });

  return willDelFilesPath;
}

const readAllFileInfo = (options = {}) => {
  const opts = {
    filePath: options.filePath || CONFIG.filePath,
    suffix: options.suffix || CONFIG.suffix,
  };

  const allWillFilePath = readWillDelFileList(opts.filePath, opts.suffix);

  deleteFiles(allWillFilePath);
};

/**
 *
 * @param {*} argv
 * @param {Any} argv.filePath 指定目标文件路径
 * @param {String} argv.suffix 指定后缀
 */
const main = (argv) => {
  readAllFileInfo({ filePath: argv[0], suffix: argv[1] });
};

main(process.argv.slice(2));
