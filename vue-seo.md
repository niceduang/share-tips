# SPA-SEO问题

- SEO 问题
> 以 vue + webpack 的 SPA 为例，没有了后端模板返回的 HTML，前端渲染并不被搜索引擎的爬虫接纳。在日后实战 SEO 之前先通俗渲染呗爬虫识别的区别
> seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不回去执行请求到的 js 的。
> 也就是说，如果一个单页应用，html 在服务器端还没有渲染部分数据数据，在浏览器才渲染出数据，而搜索引擎请求到的 html 是没有渲染数据的。 
> 这样就很不利于内容被搜索引擎搜索到。 所以服务端渲染就是尽量在服务器发送到浏览器前 页面上就是有数据的。
- 如何解决？
> 只要做 SEO 的产品就要做服务端渲染,如果你对 SEO 需求有，但要求并不高，仅部分页面、可以曲线救国
> nodejs 出现之前有两种解决方式，一是做一动一静两套页面，服务器判断请求来自蜘蛛就呈现静态页，否则呈现动态页；
> 二是服务器架设虚拟浏览器软件，请求过来了先让虚拟浏览器跑一遍，再将得到的静态页面返回给客户端。这两种方式在大型项目上都有性能问题。
> 有了 nodejs 后主流做法是前后端同构方案，即一套代码在浏览器端和 node 端都可以运行，从而可以先在 node 端请求数据渲染模板，然后将渲染结果返回给浏览器最终呈现。感兴趣可以看看
- [vue SSR](https://ssr.vuejs.org/zh/)