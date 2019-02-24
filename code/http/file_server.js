'use strict';

// a simple http server

var 
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir：' + root);

var server = http.createServer(function (request, response){
    var 
        pathname = url.parse(request.url).pathname,   // '/static/bootstrap.css'
        filepath = path.join(root, pathname);   // '/srv/www/static/bootstrap.css'

    
        var defaultPages = ['index.html', 'default.html'];
    
        var pageCount = 0;
        function getDefaultPage() {
            if(pageCount === defaultPages.length) {
                get404Page();
                return;
            }
            var page = path.join(filepath, defaultPages[pageCount]);
            fs.stat(page, function(err, stats) {
                if(err || !stats.isFile()) {
                    pageCount++;
                    getDefaultPage();
                } else {
                    get200Page(page);
                }
            });
        }
    
        function get404Page() {
            console.log('404 ' + require.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    
        function get200Page(filepath) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }
    
        fs.stat(filepath, function (err, stats) {
            if(err){
                get404Page();
            }else if(stats.isFile()) {
                get200Page(filepath);
            } else if (stats.isDirectory()) {
                getDefaultPage();
            }
        });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');