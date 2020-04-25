## Nodejs 删除指定后缀的文件夹及文件

##### usage：

```shell
$ node index.js [targetPath] [suffix]
```

##### options：

|    key     |   desc   | required | default |
| :--------: | :------: | :------: | :-----: |
| targetPath | 目标路径 |    no    |   ./    |
|   suffix   | 指定后缀 |    no    | ' copy' |

<br/>

##### e.g.

```shell
### 删除当前目录下，所有文件名(不含拓展名)以 ' copy' 结尾的文件。 如（index copy.js）
$ node index.js

### 删除上级目录 `del-target` 下的所有文件名(不含拓展名)以 ' copy' 结尾的文件。 如（index copy.js）
$ node index.js ../del-target

### 删除上级目录 `del-target` 下的所有文件名(不含拓展名)以 '2' 为结尾的文件。 如（index copy 2.js）
$ node index.js ../del-target '2'
```
