##### git push


- git add . && git commit -m "XXX"
    - 简写省略掉add .
    - git commit -a -m "XXX"
    - git diff 工作区和暂存区之间的差异对比
    - git diff --cached 暂存区和版本库之间的差异对比
    - git diff master 工作区和版本库之间的差异对比
    - git reset 撤销
    - git checkout -- tips/git-操作.md (工作区和暂存区之间)

- 按照git提示操作即可解决<br>
![](http://i1.piimg.com/519918/391abc935e0cc692.png)<br>
- origin 就是 <name\> 别的分支也是 <name\> <br>
![](http://p1.bpimg.com/519918/2fa26eece359a65e.png)<br>



##### 查看远程仓库地址
- $ git remote -v

##### git pull
- 本地与远程建立关联
    - [git remote add origin git@github.com:stormzhang/test.git](http://blog.csdn.net/debug_zhang/article/details/52215577)