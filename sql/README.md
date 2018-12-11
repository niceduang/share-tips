## 数据库
### MySQL
- 增删改查
```bash
# 增
INSERT INTO 表 (字段列表) VALUS(值);
INSERT INTO `user_table` (username, passward, lock) VALUS('zhangsan', 'zhangsan110', 0);
# 删
DELETE FROM 表 WHERE 条件
DELETE FROM `user_table` WHERE ID=2;
# 改
UPDATE 表 SET 字段=新的值,字段=新的值,... WHERE 条件
UPDATE `user_table` SET password='zhangsan120' WHERE ID=3;
# 查
SELECT 字段列表 FROM 表 WHERE 条件
SELECT username,lock FROM `user_table`;
SELECT username,lock FROM `user_table` WHERE ID=1;
```

- [安装](http://www.runoob.com/mysql/mysql-install.html)
```bash
# 输出如下
2018-12-11T07:10:38.957819Z 0 [System] [MY-013169] [Server] G:\web\mysql-8.0.13-winx64\bin\mysqld.exe (mysqld 8.0.13) initializing of server in progress as process 6272
2018-12-11T07:10:38.959819Z 0 [Warning] [MY-013242] [Server] --character-set-ser
ver: 'utf8' is currently an alias for the character set UTF8MB3, but will be an alias for UTF8MB4 in a future release. Please consider using UTF8MB4 in order to be unambiguous.
2018-12-11T07:10:59.737819Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: 8_zCo>&+,pzT
2018-12-11T07:11:14.395819Z 0 [System] [MY-013170] [Server] G:\web\mysql-8.0.13-
winx64\bin\mysqld.exe (mysqld 8.0.13) initializing of server has completed

# 报错
ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061)

# 解决（https://www.cnblogs.com/cnhkzyy/p/9030744.html）
net start mysql

# 修改密码
mysqladmin -u root -p password duang
# 再输入旧密码(8_zCo>&+,pzT)即可

# UcSuqle-j6&b
```