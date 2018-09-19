## simple-project-API

- 排行
- 图像
- 数据渲染-图表展示

## 接口文档

### 游戏相关
+ KPL荣誉选手展示
```
所有选手 获取 mvp 次数排行榜
http://api.tgatv.qq.com/app/match/getPlayerGloryRank?appid=10005&seasonid=KPL2018S1
weekid   周
mtype    类型     1 周最佳选手   2 周最佳阵容
region    地区      1=东部   2=西部
http://api.tgatv.qq.com/app/match/getPlayerWeekMvp?appid=10005&seasonid=KPL2018S1&weekid=5&mtype=2&region=1
```
+ QQ飞车赛事
```
个人：http://111.200.243.186:4080/qqspeed/personal.php
团队：http://111.200.243.186:4080/qqspeed/team.php
地图：http://111.200.243.186:4080/qqspeed/map.php
```


### [100eshu](http://www.100xuexi.com)
+ 获取模板分类
```
http://app.100xuexi.com/App/EBookToolHandler.ashx?method=GetCategory
```
+ 获取指定分类下的所有模版
```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=CoverTemp
```

    | 名称 | 类型 | 必填 | 说明 |
    | :------ | :------ | :------ | :------ |
    | action | string | 是 | 获取封面模板及内容（根据分类Id获取） |
    | categoryId | int | 否 | 封面模板分类下的素材Id |
    | pageIndex | Int | 否 | 分页的页码，不传默认为第一页,从0开始 |
    | pageSize | Int | 否 | 分页显示数，不传默认为10 |

+ 获取指定分类下的所有动画素材
```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=Animation&categoryId=11
```

    | 名称 | 类型 | 必填 | 说明 |
    | :------ | :------ | :------ | :------ |
    | action | string | 是 | 获取指定动画素材分类所有动画素材 |
    | categoryId | int | 是 | 动画素材分类Id |

+ 获取图文模版素材列表
```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=FormatModule
```

    | 名称 | 类型 | 必填 | 说明 |
    | :------ | :------ | :------ | :------ |
    | action | string | 是 | 获取所有 版式模块信息 |

+ 获取背景音乐
```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=Music
```

    | 名称 | 类型 | 必填 | 说明 |
    | :------ | :------ | :------ | :------ |
    | action | string | 是 | 获取所有 背景音乐信息 |

+ 在线音乐搜索接口
```
http://www.100xuexi.com/Topper/Ajax/AppMaterialManagement.ashx?action=GetOnlineMusicSearch&keywords=薛之谦&page=1
```

    | 名称 | 类型 | 必填 | 说明 |
    | :------ | :------ | :------ | :------ |
    | action | string | 是 | 在线音乐搜索接口action |
    | keywords | string | 是 | keywords不能为空 |
    | page | int | 否 | 分页页码，规定每页为10个展示出来，page如果不填，则默认是page=1，即为第一页 |


### 网易云课堂VUE案例接口


### 豆瓣跨域


### Mock模拟