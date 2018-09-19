#### music-mp3

- node
- webAudio


##### 应用核心结构介绍
1. 服务器和浏览器交互
2. 浏览器
    - webAudio
    - analyse
    - canvas


##### 技能点
1. 服务端：node+express+ejs
2. UI界面：html+css+js
3. 交互操作：webAudio
4. 音频数据可视化：canvas

##### 开发进程
- 服务端安装与配置
> npm -install -g express-generator
- 创建webAudioPlayer目录
> express -e webAudioPlayer
- 进入webAudioPlayer目录安装依赖
> cd ./webAudioPlayer/
> npm install
- 安装监听工具
> npm install -g supervisor
- 运行监听默认3000端口,如果失败退出重新操作一遍
> supervisor bin/www
> 
