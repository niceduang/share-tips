### 在家写移动端demo想用手机访问，如何解决？
- 不能发布服务器时
- 不用配置wamp
- 怎么简单怎么来
- browser-sync

> [英文browsersync](https://browsersync.io/)
> [中文browsersync](http://www.browsersync.cn/)

- 找官网 Get Started进入
- 安装
```javascript
    npm install -g browser-sync
```
- 进入指定文件夹>>运行
```javascript
    browser-sync start --server --files "**/*.css, **/*.html"
```
- localhost 换成本机IP即可
- 页面地址生成二维码手机平板访问即可
- [配合gulp](http://blog.csdn.net/u012038144/article/details/46641383)

> 不知道本机IP？

- 打开命令窗口输入 ipconfig
- IPv4 地址即是
