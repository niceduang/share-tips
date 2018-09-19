## hexo+github搭建博客
### 安装
1. 默认安装过node、git
2. 安装[hexo](https://hexo.io/zh-tw/)
    - `npm install -g hexo-cli`
3. 初始化项目`git init blog` `blog`为你的项目文件夹名称
4. 进入init的blog文件夹里,执行`hexo install`
5. 启动服务器预览，依次执行
    - hexo clean
    - hexo generate
    - hexo server
6. 打开浏览器输入：`http://localhost:4000`即可预览
### 安装上传仓库的工具与github(或者码云、码市)关联
1. 执行`npm install hexo-deployer-git --save`
2. 配置`_config.yml` *冒号后必须有空格*
3. 依次执行命令（建议每次都这样做，先清除、再编译上传）
    - hexo clean
    - hexo generate
    - hexo deploy
### tips
1. 如若`hexo deploy`不成功根据报错信息进行查阅
2. 如`_config.yml`配置问题
3. 如权限没有



### 主题安装
1. 找到心仪主题
2. cd 到 themes
3. 执行clone `git clone https://github.com/xxx/hexo-theme-xxx.git`
4. 
