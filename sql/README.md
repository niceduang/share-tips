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