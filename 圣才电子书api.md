## 接口

### [100eshu](http://www.100xuexi.com)

- 获取模板分类

```
http://app.100xuexi.com/App/EBookToolHandler.ashx?method=GetCategory
```

- 获取指定分类下的所有模版

```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=CoverTemp
```

| 名称       | 类型   | 必填 | 说明                                   |
| :--------- | :----- | :--- | :------------------------------------- |
| action     | string | 是   | 获取封面模板及内容（根据分类 Id 获取） |
| categoryId | int    | 否   | 封面模板分类下的素材 Id                |
| pageIndex  | Int    | 否   | 分页的页码，不传默认为第一页,从 0 开始 |
| pageSize   | Int    | 否   | 分页显示数，不传默认为 10              |

- 获取指定分类下的所有动画素材

```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=Animation&categoryId=11
```

| 名称       | 类型   | 必填 | 说明                             |
| :--------- | :----- | :--- | :------------------------------- |
| action     | string | 是   | 获取指定动画素材分类所有动画素材 |
| categoryId | int    | 是   | 动画素材分类 Id                  |

- 获取图文模版素材列表

```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=FormatModule
```

| 名称   | 类型   | 必填 | 说明                  |
| :----- | :----- | :--- | :-------------------- |
| action | string | 是   | 获取所有 版式模块信息 |

- 获取背景音乐

```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=Music
```

| 名称   | 类型   | 必填 | 说明                  |
| :----- | :----- | :--- | :-------------------- |
| action | string | 是   | 获取所有 背景音乐信息 |

- 在线音乐搜索接口

```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=GetOnlineMusicSearch&keywords=薛之谦&page=1
```

| 名称     | 类型   | 必填 | 说明                                                                           |
| :------- | :----- | :--- | :----------------------------------------------------------------------------- |
| action   | string | 是   | 在线音乐搜索接口 action                                                        |
| keywords | string | 是   | keywords 不能为空                                                              |
| page     | int    | 否   | 分页页码，规定每页为 10 个展示出来，page 如果不填，则默认是 page=1，即为第一页 |
