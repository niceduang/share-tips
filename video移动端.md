### 移动端video的坑
- 关于自动播放
> - video的autoplay在移动端浏览器上基本失效
> - 移动端要有用户交互才能触发事件，如click、touch；
> - ios协议蜂窝数据下不得开启音视频的自动播放

- 如上，所以只能加一个引导点击播放

- poster
> - 可能因为内核不同，在微信浏览器/safari/chrome上默认展示的poster各有不同
> - chrome应用了默认行为截取了视频第一帧作为显示
> - 微信浏览器和safari显示空白，效果就是孤零零的播放图放在一张白纸上

- 如上，通过canvas截取视频第一帧作为默认显示的图片
```
const cut = function() {
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth * scale;
    canvas.height = video.videoHeight * scale;//设定宽高比
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);// 将视频此刻帧数画入画布
    let img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    Dom.appendChild(img);// 写入到Dom
};
video.addEventListener('loadeddata',cut);// 在视频帧数已加载时执行截取
```