/**
 * 名称：crlf 转 unix lf工具
 * 日期：2017-06-07
 * 描述：用于在使用npm publish 发布模块时，使用
 *      当前工具可以将package.json中的bin文件
 *      转换编码字符 解决npm publish 在mac或者unix在存在node\r问题
 */
var path = require('path');
var fs  =require('fs');

function PackageBinSolution(projectRoot){
    this.projectRoot  =projectRoot;
}

PackageBinSolution.prototype.handlePackage = function(){
    var package = require(path.join(this.projectRoot,'package.json'));
    var bin  =package.bin || {};
    var keys = Object.keys(bin);
    for(var i=0,k=keys.length;i<k;i++){
        this.handleUnixLF(path.join(this.projectRoot,bin[keys[i]]));
    }
}

PackageBinSolution.prototype.handleUnixLF = function(file){
    console.log('handle file'+file);
    var content = new String(fs.readFileSync(file));
    content = content.replace(/\r/g,'');
    fs.writeFileSync(file,content);
}

module.exports = PackageBinSolution;