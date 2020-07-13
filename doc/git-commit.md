# Angluar 团队commit风格

使用commitizen的工具辅助提交

## 提交流程

输入一下命令，按提示进行操作
```bash
yarn commit
```

## 说明
提交内容包含type，scope、subject、body、footer

### 提交类型
* `feat`: 新功能
* `fix`: 修复bug
* `doc`: 文档改变
* `style`: 代码格式变更
* `refactor`: 功能重构
* `perf`: 性能优化
* `test`: 增加测试
* `build`: 改变build工具，比如webpack变成grunt
* `revert`: 撤销上一次commit
* `ci`: 更改ci configuration
* `chore`: 一些不更改src或者test相关文件的提交

### scope
说明此次修改的影响范围，可以根据自己的情况来进行填写，下面为几个例子:
* `all`表示影响很大，如修改了整体依赖
* `location`表示影响小，修改了某个小的功能
* `module`表示会影响整个模块，如登录模块等
* 另外也可以写文件夹下面的文件名

### subject
用来简要描述本次变动，概述即可

### body
具体的描述此次提交的修改内容，应尽量详细

### footer
放置备注等。若为bug，可关联bug id。
