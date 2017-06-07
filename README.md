## npm-publish-bin

### 一、简介

    移除Windows下 使用npm publish 后，

    bin目录下文件的CRLF ---> Unix LF


### 二、安装

    npm install npm-publish-bin --save-dev
    
     
### 三、使用

   Package.json:


    scripts:{
      "prepublish": "npm-publish-bin && others...",
      "prepare": "npm-publish-bin && others..."
    }


### 四、开源许可
基于 [MIT License](http://zh.wikipedia.org/wiki/MIT_License) 开源，使用代码只需说明来源，或者引用 [license.txt](https://github.com/sofish/typo.css/blob/master/license.txt) 即可。