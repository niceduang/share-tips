# 个人常用 [sublime](http://www.sublimetext.com/) 插件配置


## [emmet](https://github.com/emmetio/emmet)




## [AutoFileName](https://github.com/BoundInCode/AutoFileName)

## [AllAutocomplete](https://github.com/BoundInCode/AutoFileName)

## [autoprefixer](https://github.com/sindresorhus/sublime-autoprefixer)

* 配置版本

    ``` javascript
        {
            "browsers": ["last 5 versions", "android 2.2"]
            // "browsers": ["last 5 versions"]
        }
    ```

* 配置快捷键

    ``` javascript
        { "keys": ["ctrl+alt+shift+p"], "command": "autoprefixer" }
    ```


## [Sidebar Enhancements]()

* 配置快捷键

    ``` javascript
        //chorme
        {
            "keys": ["f5"],
            "command": "side_bar_files_open_with",
            "args": {
                "paths": [],
                "application": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
                "extensions": ".*"
            }
        }
    ```


## [DocBlockr](https://github.com/spadgos/sublime-jsdocs)

- 官网示例图片
![示例图片](https://camo.githubusercontent.com/4fda835261d5bafc0757557e91ba03b4fcf4ad72/687474703a2f2f73706164676f732e6769746875622e696f2f7375626c696d652d6a73646f63732f696d616765732f62617369632e676966)
![示例图片](https://camo.githubusercontent.com/415148aecc6dac2e5ebb12b7f7584f4a8744eca4/687474703a2f2f73706164676f732e6769746875622e696f2f7375626c696d652d6a73646f63732f696d616765732f66756e6374696f6e2d74656d706c6174652e676966)
![示例图片](https://camo.githubusercontent.com/d7739bc68472fecea438e0c6d4083f1ee3334de0/687474703a2f2f73706164676f732e6769746875622e696f2f7375626c696d652d6a73646f63732f696d616765732f6175746f2d696e64656e742d322e676966)


## [Browser Refresh](https://github.com/gcollazo/BrowserRefresh-Sublime)

* 配置快捷键

    ``` javascript
        {
            "keys": ["ctrl+f5"], "command": "browser_refresh", "args": {
                "auto_save": true,
                "delay": 0.0,
                "activate": true,
                "browsers" : ["chrome"]
            }
        }
    ```


## [MarkdownEditing](https://github.com/SublimeText-Markdown/MarkdownEditing)*    和    *[MarkdownPreview](https://github.com/revolunet/sublimetext-markdown-preview)

* 配置MarkdownEditing主题颜色和可视区域


    ``` javascript
        // Preferences>Package Settings>Markdown Editing>Markdown GFM Settings-User
        {
            "color_scheme": "Packages/MarkdownEditing/MarkdownEditor-Dark.tmTheme",
            "wrap_width": 800
        }
    ```

    ![](http://wx4.sinaimg.cn/mw690/005AQo1Ygy1fdoom203q8j30l50j2my0.jpg)

* 配置preview预览

    ``` javascript
        // Preferences>Package Settings>Markdown Preview>Settings-User
        {
            "browser" : "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        }
    ```
    ``` javascript
        // Preferences>Key Bindings-User
        { "keys": ["f2"], "command": "markdown_preview", "args":   {"target": "browser", "parser":"markdown"} }
    ```

* snippet
    [转义](https://segmentfault.com/q/1010000008692636)
    ``` javascript
        \$('.load_box p').text(Math.floor(percent * 100)+'%');
        \$('.load_box .in').css('width',Math.floor(percent * 100)+'%');
    ```
