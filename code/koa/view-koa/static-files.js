const path = require('path');
const mine = require('mime');  // 三种类型 text/javascript、 application/javascript、 application/x-javascript
const fs = require('mz/fs');  // mz提供的API和Node.js的fs模块完全相同，但fs模块使用回调，而mz封装了fs对应的函数，并改为Promise。这样，我们就可以非常简单的用await调用mz的函数，而不需要任何回调。


function staticFiles(url, dir) {
    // 判断当前的URL是否以指定前缀开头，如果是，就把URL的路径视为文件，并发送文件内容。
    return async (ctx, next) => {
        let rpath = ctx.request.path;  // 请求
        if(rpath.startsWith(url)){
            let fp = path.join(dir, rpath.substring(url.length));
            if (await fs.exists(fp)){
                ctx.response.type = mine.getType(rpath);
                ctx.response.body = await fs.readFile(fp);
            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
}

module.exports = staticFiles;