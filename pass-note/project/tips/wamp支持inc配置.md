- [参见](http://www.codeweblog.com/%E8%AE%A9apache%E6%94%AF%E6%8C%81shtml%E5%AE%9E%E7%8E%B0include%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95/)
> Apache支持include文件解析shtml首先要应该修改Apache配置文件httpd.conf
> 
> **wamp64\bin\apache\apache2.4.23\conf**
> Apache默认是不支持SSI的，需要我们更改httpd.conf来进行配置。我这里以windows平台的Apache 2.0.x为例，打开conf目录下的httpd.conf文件，搜索“AddType text/html .shtml”，搜索结果：
> \# AddType text/html .shtml
> \# AddOutputFilter INCLUDES .shtml
> 把这两行前面的#去掉。
> 
> 然后搜索“Options Indexes FollowSymLinks”
> 在搜索到的那一行后面添加“ Includes”
> 即将该行改变为 Options Indexes FollowSymLinks Includes
> 
> 保存httpd.conf，重起apache即可。