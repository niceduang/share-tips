# git
> 版本管理&多人协作
> gitlab
> github
> 必须系统的学下来，不然遇到的问题日后伴随很久
> 只会基本的处理是不够的

- [常用命令整理](https://gitee.com/wsqcode/codes/lzd5b1veqc09i7snpm83k49)
- 本地初始化
1. `git init`
- 信息
1. `git config user.name`
2. `git config user.email`
3. `git config --global user.name "yourname"`
4. `git config --global user.email "xx@qq.com"`
5. `git config --list`

- 追踪->上传
1. `git add .`
2. `git commit -m "this is log~"`||`git commit -a -m 'xxx'`
3. `git push -u origin master`||`git push`

- 操作远程库
1. `git remote`
2. `git remote -v`
3. `git remote add origin https://gitee.com/yourname/XXX.git`(删除分支：`git remote rm origin`)
4. `git pull origin master`


## 分支操作&多人协作
> 分支
> 干件事情就拉个分支，干完之后再去和主干合并，进而发布上线
> 这样的话不管多少人合作都不会产生冲突

- `git pull`//更新本地代码
- `git branch`// 查看本地分支，以*开头
- `git branch -a`// 查看所有分支
- `git branch dev`// 新建本地分支dev
- `git branch -a`// 查看所有分支
- `git checkout dev`// 切换分支
- `git push -u origin dev`
- 代码合并
- `git merge master`// 合并主干
- `git checkout master`
- `git merge dev`
- `git status`
- `git push -u origin master`

## 删除分支
- `git branch -d dev` // 删除本地分支
- `git push origin --delete dev` //删除远程分支 

## 代码回滚

## 多个Git库帐号


### 本地至远程流程
1. 初始化本地Git仓库,新建文件夹，进入后 `git init`
2. 在此文件夹下开发
3. `git add .` 追踪本地文件
4. `git commit -m "commit msg"` 提交并写提交信息
5. `git remote add origin https://gitee.com/yourname/XXX.git` 将本地仓库与远程仓库建立联系
6. `git push -u origin master` 将本地仓库推入远程
    - 初次push需要加`-u`参数指定一个默认主机，此后就可以不加任何参数使用`git push`
    - 如果远程仓库不为空，push 时会提示要先pull下来`git pull origin master`,再进行push

##### tips
- 操作 `git clone https://xxx.git new-folder --depth 1`
    - `new-folder` clone到新建的文件夹下
    - `--depth 1` clone到最近的一次版本,不要所有的git提交信息
- 退出commit信息录入窗口
    - 按ESC键，以确保您不在编辑模式然后键入
    - `:wq`退出
    - `:x`保存并退出
    - `:q!`强制无条件不保存退出

## 回滚自己的分支&公共分支
- [reset](https://juejin.im/entry/5ad4b8a86fb9a028e46f1edd?utm_source=gold_browser_extension)


- [Git打标签与版本控制规范](http://www.wangxiaokai.vip/posts/2018-05-23-git-tag-semver/)




### [commit规范](http://jartto.wang/2018/07/08/git-commit/)
> - [commit message 应该清晰明了，说明本次提交的目的](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

- type
> 用于说明 commit 的类别，只允许使用下面7个标识。 
    + feat：新功能（feature）
    + fix：修补bug
    + docs：文档（documentation）
    + style： 格式（不影响代码运行的变动）
    + refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    + test：增加测试
    + chore：构建过程或辅助工具的变动

- scope
> 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject
> 是 commit 目的的简短描述，不超过50个字符。
    - 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
    - 第一个字母小写
    - 结尾不加句号（.）
